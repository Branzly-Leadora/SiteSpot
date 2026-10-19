// B2B dashboard (sitespot.cz/b2b). Stranka nema zadna data, ty ctou funkce ze soukromeho repa pres GitHub API.
// Pristup chrani Basic auth. Zapisovat dashboard smi jen zadosti do segments/<id>/inbox/ na stavove vetvi;
// pravidla odesilani (rezim, pravni rozhodnuti, limity) zustavaji v enginu a dashboard je zmenit neumi.
//
// Promenne prostredi (Vercel):
//   B2B_GITHUB_TOKEN  fine-grained token jen pro soukrome repo s enginem, prava Contents: read and write
//   B2B_REPO          vlastnik/nazev soukromeho repa (nikde v kodu neni zapsane)
//   B2B_USERS         JSON {"max":"heslo","petr":"heslo"}; jinak B2B_USER a B2B_PASS; jinak INTERNI_USER a INTERNI_PASS
//   B2B_FIRE          volitelne, JSON {"doprava":{"url":"https://api.anthropic.com/v1/claude_code/routines/trig_.../fire","token":"..."}}
//                     po schvaleni se tim hned spusti rutina odesilani daneho segmentu (jinak ceka na dalsi hodinovy beh)
//   ESHOPY_URL          volitelne, https adresa e-shop dashboardu, napr. https://mhruby.eu (sekce E-shopy, jen cteni)
//   ESHOPY_READ_TOKEN   volitelne, CRM_READ_TOKEN z Workeru e-shopu. Nikdy SYNC_TOKEN. Zustava jen na serveru.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SEGMENT_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
const ICO_RE = /^\d{8}$/;
const FP_RE = /^[0-9a-f]{64}$/;
const ACTIONS = ['approve', 'unapprove', 'reject', 'pause'];
const MAX_BATCH = 20; // zapisuje se po jedne polozce, funkce ma na to 30 s (vercel.json)

const safeEqual = (a, b) => {
  const x = crypto.createHash('sha256').update(String(a)).digest();
  const y = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
};

export function loadUsers(env = process.env) {
  if (env.B2B_USERS) {
    try {
      const obj = JSON.parse(env.B2B_USERS);
      return Object.entries(obj).filter(([k, v]) => k && v).map(([name, pass]) => ({ name: String(name), pass: String(pass) }));
    } catch { return []; }
  }
  const name = env.B2B_USER || env.INTERNI_USER;
  const pass = env.B2B_PASS || env.INTERNI_PASS;
  return name && pass ? [{ name, pass }] : [];
}

// vraci jmeno prihlaseneho, nebo null; porovnavaji se vsichni uzivatele, aby cas neprozradil, ktery existuje
export function authenticate(header, users) {
  const [scheme, encoded] = String(header || '').split(' ');
  if (scheme !== 'Basic' || !encoded) return null;
  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const sep = decoded.indexOf(':');
  if (sep === -1) return null;
  const u = decoded.slice(0, sep);
  const p = decoded.slice(sep + 1);
  let found = null;
  for (const user of users) {
    const ok = safeEqual(u, user.name) & safeEqual(p, user.pass);
    if (ok) found = user.name;
  }
  return found;
}

function gh(env, fetchImpl) {
  const base = 'https://api.github.com';
  const repo = env.B2B_REPO;
  const headers = (extra = {}) => ({
    Authorization: `Bearer ${env.B2B_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'sitespot-b2b',
    ...extra,
  });
  const enc = (p) => p.split('/').map(encodeURIComponent).join('/');
  return {
    async raw(file, ref) {
      const r = await fetchImpl(`${base}/repos/${repo}/contents/${enc(file)}?ref=${encodeURIComponent(ref)}`, { headers: headers({ Accept: 'application/vnd.github.raw+json' }) });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(`GitHub ${r.status} pri cteni ${file}`);
      return r.text();
    },
    async list(dir, ref) {
      const r = await fetchImpl(`${base}/repos/${repo}/contents/${enc(dir)}?ref=${encodeURIComponent(ref)}`, { headers: headers({ Accept: 'application/vnd.github+json' }) });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(`GitHub ${r.status} pri vypisu ${dir}`);
      const j = await r.json();
      return Array.isArray(j) ? j.map((x) => ({ name: x.name, type: x.type })) : null;
    },
    async refSha(branch) {
      const r = await fetchImpl(`${base}/repos/${repo}/git/ref/heads/${enc(branch)}`, { headers: headers({ Accept: 'application/vnd.github+json' }) });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(`GitHub ${r.status} pri cteni vetve ${branch}`);
      return (await r.json()).object.sha;
    },
    async createBranch(branch, sha) {
      const r = await fetchImpl(`${base}/repos/${repo}/git/refs`, { method: 'POST', headers: headers({ 'Content-Type': 'application/json' }), body: JSON.stringify({ ref: `refs/heads/${branch}`, sha }) });
      if (!r.ok && r.status !== 422) throw new Error(`GitHub ${r.status} pri zalozeni vetve ${branch}`);
    },
    async put(file, branch, message, content) {
      const r = await fetchImpl(`${base}/repos/${repo}/contents/${enc(file)}`, {
        method: 'PUT', headers: headers({ 'Content-Type': 'application/json', Accept: 'application/vnd.github+json' }),
        body: JSON.stringify({ message, branch, content: Buffer.from(content).toString('base64') }),
      });
      return { ok: r.ok, status: r.status };
    },
  };
}

const parsePending = (names) => (names ?? []).filter((n) => n.type === 'file' && n.name.endsWith('.json')).map((n) => {
  const m = n.name.match(/^\d+-(approve|unapprove|reject|pause)-(\d{8}|all)-/);
  return m ? { action: m[1], ico: m[2] === 'all' ? null : m[2] } : null;
}).filter(Boolean);

export async function loadData(env, fetchImpl) {
  const g = gh(env, fetchImpl);
  const dirs = await g.list('segments', 'main');
  if (!dirs) throw new Error('Slozka segments v repu nenalezena');
  const ids = dirs.filter((d) => d.type === 'dir' && SEGMENT_RE.test(d.name)).map((d) => d.name);
  const segments = await Promise.all(ids.map(async (id) => {
    const state = `claude/state-${id}`;
    let ref = state;
    let text = await g.raw(`segments/${id}/snapshot.json`, state);
    if (text === null) { ref = 'main'; text = await g.raw(`segments/${id}/snapshot.json`, 'main'); }
    const pending = ref === state ? parsePending(await g.list(`segments/${id}/inbox`, state)) : [];
    if (text === null) return { id, missing: true, pending };
    let snap;
    try { snap = JSON.parse(text); } catch { return { id, missing: true, pending }; }
    return { id, ref, snapshot: snap, pending };
  }));
  return { segments, fetchedAt: new Date().toISOString() };
}

const rand = () => crypto.randomBytes(3).toString('hex');

// Validuje a zapise zadosti. Vraci pole vysledku pro kazdou polozku.
export async function writeActions(env, fetchImpl, user, body) {
  const g = gh(env, fetchImpl);
  const { segment, action } = body ?? {};
  if (!SEGMENT_RE.test(String(segment))) return { status: 400, error: 'neplatny segment' };
  if (!ACTIONS.includes(action)) return { status: 400, error: 'neplatna akce' };
  const note = String(body.note ?? '').slice(0, 300);
  let items;
  if (action === 'pause') items = [{ ico: null }];
  else {
    items = Array.isArray(body.items) ? body.items : [{ ico: body.ico, fingerprint: body.fingerprint }];
    if (items.length < 1 || items.length > MAX_BATCH) return { status: 400, error: `pocet polozek musi byt 1 az ${MAX_BATCH}` };
    for (const it of items) {
      if (!ICO_RE.test(String(it?.ico))) return { status: 400, error: 'neplatne ICO' };
      if (action === 'approve' && !FP_RE.test(String(it?.fingerprint))) return { status: 400, error: 'chybi otisk balicku' };
    }
  }
  const dirs = await g.list('segments', 'main');
  if (!dirs?.some((d) => d.type === 'dir' && d.name === segment)) return { status: 404, error: 'segment neexistuje' };

  const branch = `claude/state-${segment}`;
  if (!(await g.refSha(branch))) {
    const sha = await g.refSha('main');
    if (!sha) return { status: 502, error: 'vetev main nenalezena' };
    await g.createBranch(branch, sha);
  }
  const results = [];
  for (const it of items) {
    const name = `${Date.now()}-${action}-${it.ico ?? 'all'}-${rand()}.json`;
    const payload = { action, ico: it.ico ?? null, fingerprint: it.fingerprint ?? null, note, by: user, at: new Date().toISOString() };
    let r = { ok: false, status: 0 };
    for (let attempt = 0; attempt < 4 && !r.ok; attempt++) {
      r = await g.put(`segments/${segment}/inbox/${name}`, branch, `dashboard: ${action} ${it.ico ?? segment} (${user})`, JSON.stringify(payload));
      if (!r.ok && ![409, 422, 502, 503].includes(r.status)) break;
      if (!r.ok) await new Promise((res) => setTimeout(res, 250 * (attempt + 1)));
    }
    results.push({ ico: it.ico ?? null, ok: r.ok, status: r.status });
  }
  return { status: 200, results };
}

const lastFire = new Map();

export async function fireRoutine(env, fetchImpl, segment, now = Date.now()) {
  let cfg;
  try { cfg = JSON.parse(env.B2B_FIRE || '{}')[segment]; } catch { cfg = null; }
  if (!cfg?.url || !cfg?.token) return { fired: false, reason: 'neni nastaveno' };
  if (!/^https:\/\/api\.anthropic\.com\/v1\/claude_code\/routines\/[\w-]+\/fire$/.test(cfg.url)) return { fired: false, reason: 'neplatna adresa spousteni' };
  if (now - (lastFire.get(segment) ?? 0) < 120000) return { fired: false, reason: 'nedavno spusteno' };
  lastFire.set(segment, now);
  try {
    const r = await fetchImpl(cfg.url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${cfg.token}`, 'anthropic-beta': 'experimental-cc-routine-2026-04-01', 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'Schvaleni z dashboardu, zpracuj zadosti a odesli, co je v planu.' }),
    });
    return { fired: r.ok, status: r.status };
  } catch (e) {
    return { fired: false, reason: 'volani selhalo' };
  }
}

const sameOrigin = (req) => {
  const origin = req.headers.origin;
  if (!origin) return true;
  try { return new URL(origin).host === req.headers.host; } catch { return false; }
};

let cache = { at: 0, value: null };

// ---------- E-shopy (jen cteni, samostatna oblast mimo B2B segmenty) ----------
// Zdroj je Worker e-shop dashboardu (GET /eshopy/api/crm/overview, Bearer ESHOPY_READ_TOKEN).
// Nic se tu nezapisuje, B2B inbox ani B2B snapshoty se tohoto kodu netykaji. E-shopy se vedou podle UUID
// (klic `eshopy:<uuid>`), ICO je jen volitelne pole ze vzkumu.
const ESHOPY_PATH = '/eshopy/api/crm/overview';
const STALE_MINUTES = 30;
const OTHER_LIMIT = 300;
const UUID_RE = /^[a-f0-9-]{36}$/;

export function eshopyConfig(env = process.env) {
  if (!env.ESHOPY_URL || !env.ESHOPY_READ_TOKEN) return null;
  let u;
  try { u = new URL(env.ESHOPY_URL); } catch { return null; }
  if (u.protocol !== 'https:') return null;
  return { base: u.origin, token: env.ESHOPY_READ_TOKEN };
}

// stejny test jako reviewReady ve Workeru e-shopu (balicek je kompletni a dukazy overene)
function reviewReady(l) {
  const d = l.detail ?? {};
  return Boolean(
    ['draft', 'approved'].includes(l.status) && !l.sentAt && !l.replyAt && l.email && l.auditUrl &&
    d.emailSubject && d.emailBody && d.packageHash && d.auditHash && d.screenshotHash && d.evidenceVerified === true &&
    (d.greeting || d.surname) && d.contactSource && d.day,
  );
}

const lightLead = (key, l, bucket, link) => ({ key, id: l.id, shopName: l.shopName, email: l.email ?? null, status: l.status, offer: l.offer ?? null, bucket, link, ico: l.detail?.company?.ico ?? null });
const fullLead = (key, l, bucket, link, sentAt) => {
  const d = l.detail ?? {};
  return {
    ...lightLead(key, l, bucket, link), url: l.url, auditUrl: l.auditUrl ?? null, sentAt: sentAt ?? l.sentAt ?? null, replyAt: l.replyAt ?? null,
    observation: d.observation ?? null, quote: d.quote ?? null, sourceUrl: d.sourceUrl ?? null, why: d.why ?? null, risk: d.risk ?? null,
    confidence: d.confidence ?? null, evidenceVerified: d.evidenceVerified === true, evidenceAt: d.evidenceAt ?? null,
    contactSource: d.contactSource ?? null, greeting: d.greeting ?? d.surname ?? null, subject: d.emailSubject ?? null, body: d.emailBody ?? null,
    followupText: d.followupText ?? null, packageHash: d.packageHash ?? null, company: d.company ? { name: d.company.name ?? null, ico: d.company.ico ?? null } : null,
  };
};

// Prevede feed z Workeru na model, ktery UI jen vykresli. Scitani dela znovu a porovna je s cisly, ktera ukazuje /eshopy.
export function buildEshopyView(feed, { base, now = Date.now() } = {}) {
  const leads = Array.isArray(feed?.leads) ? feed.leads : [];
  const receipts = new Map((feed?.sentReceipts ?? []).map((r) => [r.leadId, r.at]));
  const buckets = { review: [], approved: [], sent: [], replied: [], stopped: [], check: [], other: [] };
  let sentTotal = 0;
  let readyTotal = 0;
  let repliedTotal = 0;
  let withIco = 0;
  for (const l of leads) {
    if (!l || typeof l.id !== 'string' || !UUID_RE.test(l.id)) continue;
    const key = `eshopy:${l.id}`;
    const link = `${base}/eshopy/lead/${l.id}`;
    const receipt = receipts.get(l.id) ?? null;
    const isSent = Boolean(l.sentAt) || Boolean(receipt);
    const isReady = reviewReady(l) && !receipt;
    if (isSent) sentTotal++;
    if (isReady) readyTotal++;
    if (l.replyAt) repliedTotal++;
    if (l.detail?.company?.ico) withIco++;
    let bucket;
    if (['suppressed', 'bounced'].includes(l.status)) bucket = 'stopped';
    else if (l.replyAt || l.status === 'replied') bucket = 'replied';
    else if (isSent) bucket = 'sent';
    else if (isReady) bucket = l.status === 'approved' && l.detail.approvedHash === l.detail.packageHash ? 'approved' : 'review';
    else if (['evidence_review', 'uncertain'].includes(l.status)) bucket = 'check';
    else bucket = 'other';
    buckets[bucket].push(bucket === 'other' || bucket === 'stopped' ? lightLead(key, l, bucket, link) : fullLead(key, l, bucket, link, l.sentAt ?? receipt));
  }
  const otherTotal = buckets.other.length;
  buckets.other = buckets.other.slice(0, OTHER_LIMIT);
  const computed = { total: leads.length, ready: readyTotal, sent: sentTotal, replied: repliedTotal };
  const reported = feed?.stats ?? null;
  const selfCheck = {
    ok: Boolean(reported) && Object.keys(computed).every((k) => reported[k] === computed[k]),
    computed, reported,
  };
  const updatedAt = feed?.updatedAt ?? null;
  const ageMinutes = updatedAt ? Math.max(0, Math.round((now - Date.parse(updatedAt)) / 60000)) : null;
  const beat = feed?.autopilot?.at ? Math.max(0, Math.round((now - Date.parse(feed.autopilot.at)) / 60000)) : null;
  const names = new Map(leads.map((l) => [l.id, l.shopName]));
  return {
    configured: true, base, updatedAt, ageMinutes, stale: ageMinutes === null || ageMinutes > STALE_MINUTES, staleAfterMinutes: STALE_MINUTES,
    source: feed?.source ?? null, lastRun: feed?.lastRun ?? null, gmailConnected: feed?.gmailConnected === true,
    sendingEnabled: feed?.sendingEnabled === true, dailySendLimit: feed?.dailySendLimit ?? null,
    settings: feed?.settings ?? {}, workflow: feed?.workflow ?? {},
    autopilot: feed?.autopilot ? { ...feed.autopilot, ageMinutes: beat } : null,
    counts: {
      total: leads.length, review: buckets.review.length, approved: buckets.approved.length, sent: sentTotal,
      replied: repliedTotal, stopped: buckets.stopped.length, check: buckets.check.length, other: otherTotal,
      withIco, withoutIco: leads.length - withIco,
    },
    selfCheck,
    buckets,
    events: (feed?.events ?? []).slice(-60).reverse().map((e) => ({ at: e.at, kind: e.kind, leadId: e.leadId ?? null, shopName: e.leadId ? names.get(e.leadId) ?? null : null })),
  };
}

export async function loadEshopy(env, fetchImpl, now = Date.now()) {
  const cfg = eshopyConfig(env);
  if (!cfg) return { configured: false };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 12000);
  let res;
  try {
    res = await fetchImpl(`${cfg.base}${ESHOPY_PATH}`, { headers: { Authorization: `Bearer ${cfg.token}`, Accept: 'application/json' }, signal: ctl.signal });
  } catch {
    throw new Error('E-shopy: dashboard e-shopu neodpovedel');
  } finally { clearTimeout(timer); }
  // text odpovedi se ven nikdy nepousti (mohl by obsahovat cokoli), jen stavovy kod
  if (!res.ok) throw new Error(`E-shopy: dashboard e-shopu vratil ${res.status}`);
  let feed;
  try { feed = JSON.parse(await res.text()); } catch { throw new Error('E-shopy: neplatna odpoved'); }
  if (!feed || feed.version !== 1 || !Array.isArray(feed.leads)) throw new Error('E-shopy: neocekavany format odpovedi');
  return buildEshopyView(feed, { base: cfg.base, now });
}

let eshopyCache = { at: 0, value: null };

export default async function handler(req, res, deps = {}) {
  const env = deps.env ?? process.env;
  const fetchImpl = deps.fetch ?? fetch;
  const users = loadUsers(env);
  if (!users.length) {
    res.status(500).send('B2B_USERS (nebo B2B_USER a B2B_PASS, nebo INTERNI_USER a INTERNI_PASS) nejsou nastavene ve Vercelu.');
    return;
  }
  const user = authenticate(req.headers.authorization, users);
  if (!user) {
    res.setHeader('WWW-Authenticate', 'Basic realm="SiteSpot B2B", charset="UTF-8"');
    res.status(401).send('Neautorizovano.');
    return;
  }
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store, private');
  res.setHeader('Referrer-Policy', 'no-referrer');

  const op = String(req.query?.op ?? '');
  const configured = Boolean(env.B2B_GITHUB_TOKEN && env.B2B_REPO);
  const fireIds = (() => { try { return Object.keys(JSON.parse(env.B2B_FIRE || '{}')); } catch { return []; } })();

  if (req.method === 'GET' && !op) {
    const file = path.join(process.cwd(), 'private', 'b2b.html');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
    res.status(200).send(fs.readFileSync(file));
    return;
  }

  if (req.method === 'GET' && op === 'eshopy') {
    try {
      if (!eshopyCache.value || Date.now() - eshopyCache.at > 20000) eshopyCache = { at: Date.now(), value: await loadEshopy(env, fetchImpl) };
      res.status(200).json(eshopyCache.value);
    } catch (e) {
      res.status(502).json({ configured: true, error: String(e.message ?? e) });
    }
    return;
  }

  if (req.method === 'GET' && op === 'data') {
    if (!configured) { res.status(200).json({ configured: false, user, segments: [] }); return; }
    try {
      if (!cache.value || Date.now() - cache.at > 10000) cache = { at: Date.now(), value: await loadData(env, fetchImpl) };
      res.status(200).json({ configured: true, user, fire: fireIds, ...cache.value });
    } catch (e) {
      res.status(502).json({ configured: true, user, error: String(e.message ?? e) });
    }
    return;
  }

  if (req.method === 'POST' && op === 'action') {
    if (!configured) { res.status(503).json({ error: 'dashboard neni napojeny na repo' }); return; }
    if (!sameOrigin(req) || req.headers['x-b2b'] !== '1' || !String(req.headers['content-type'] ?? '').startsWith('application/json')) {
      res.status(403).json({ error: 'pozadavek odmitnut' });
      return;
    }
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const r = await writeActions(env, fetchImpl, user, body);
      if (r.status !== 200) { res.status(r.status).json({ error: r.error }); return; }
      cache = { at: 0, value: null };
      const okAny = r.results.some((x) => x.ok);
      const fire = okAny && body.action === 'approve' ? await fireRoutine(env, fetchImpl, body.segment) : { fired: false, reason: 'bez spusteni' };
      res.status(200).json({ results: r.results, fire });
    } catch (e) {
      res.status(502).json({ error: String(e.message ?? e) });
    }
    return;
  }

  res.status(404).send('Nenalezeno.');
}

export const _internals = { parsePending, resetCache: () => { cache = { at: 0, value: null }; eshopyCache = { at: 0, value: null }; lastFire.clear(); } };
