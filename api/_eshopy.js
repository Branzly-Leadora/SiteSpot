// E-shopy v CRM: samostatna oblast mimo B2B segmenty. Soubor zacina podtrzitkem, Vercel z nej nedela funkci.
//
// Zdroj je Worker e-shop dashboardu (mhruby.eu/eshopy):
//   GET  /eshopy/api/crm/overview   Bearer ESHOPY_READ_TOKEN  (= CRM_READ_TOKEN ve Workeru)
//   POST /eshopy/api/crm/commands   Bearer ESHOPY_WRITE_TOKEN (= CRM_WRITE_TOKEN ve Workeru)
// Tokeny zustavaji na serveru. E-shopy se vedou podle UUID (klic `eshopy:<uuid>`), ICO je jen volitelne pole.
// CRM smi jen tri veci: Schvalit a odeslat (approve_send), trvale vyradit (suppress), pozastavit (pause).
// Odesila autopilot nebo notebook e-shopu podle svych pravidel; ta se tady nemeni.
//
// Ochrana proti dvojimu osloveni (na obou stranach):
//   B2B -> e-shop: firma, kterou uz oslovil nebo schvalil B2B segment, nebo ktera se v B2B odhlasila,
//                  nejde v CRM schvalit (overuje server, ne jen tlacitko).
//   e-shop -> B2B: domeny a ICO vsech e-shop leadu se zapisuji do shared/excluded-eshopy.csv v soukromem repu;
//                  B2B engine je uz dnes vyrazuje pri priprave i pri planu odeslani. Seznam se jen rozsiruje.

export const ESHOPY_READ_PATH = '/eshopy/api/crm/overview';
export const ESHOPY_WRITE_PATH = '/eshopy/api/crm/commands';
export const STALE_MINUTES = 30;
const OTHER_LIMIT = 300;
const UUID_RE = /^[a-f0-9-]{36}$/;
const HEX64 = /^[a-f0-9]{64}$/;
export const ESHOPY_ACTIONS = ['approve_send', 'suppress', 'pause'];
export const ESHOPY_MAX_BATCH = 20; // fronta Workeru drzi nejvys 20 cekajicich pozadavku

// stejny seznam jako engine/lib/util.mjs (FREEMAIL): podle techto domen se firmy nikdy neparuji
const FREEMAIL = new Set(['gmail.com', 'googlemail.com', 'seznam.cz', 'email.cz', 'centrum.cz', 'volny.cz', 'post.cz', 'atlas.cz',
  'outlook.com', 'outlook.cz', 'hotmail.com', 'live.com', 'icloud.com', 'yahoo.com', 'tiscali.cz', 'quick.cz']);

export function eshopyConfig(env = process.env) {
  if (!env.ESHOPY_URL || !env.ESHOPY_READ_TOKEN) return null;
  let u;
  try { u = new URL(env.ESHOPY_URL); } catch { return null; }
  if (u.protocol !== 'https:') return null;
  const write = env.ESHOPY_WRITE_TOKEN && env.ESHOPY_WRITE_TOKEN !== env.ESHOPY_READ_TOKEN ? env.ESHOPY_WRITE_TOKEN : null;
  return { base: u.origin, token: env.ESHOPY_READ_TOKEN, writeToken: write };
}

const hostOf = (url) => {
  try { return new URL(String(url)).hostname.toLowerCase().replace(/^www\./, '').replace(/\.$/, '') || null; } catch { return null; }
};
const mailDomain = (email) => {
  const m = String(email ?? '').toLowerCase().match(/@([a-z0-9.-]+\.[a-z]{2,})$/);
  return m && !FREEMAIL.has(m[1]) ? m[1] : null;
};
const normEmail = (email) => {
  const m = String(email ?? '').toLowerCase().match(/[^\s<>"',;]+@[^\s<>"',;]+/);
  return m ? m[0] : null;
};

/** Klice firmy pro porovnani mezi kanaly: ICO a domeny (webu a firemniho mailu, ne bezplatne schranky). */
export function companyKeys({ ico, url, email }) {
  const keys = new Set();
  if (/^\d{8}$/.test(String(ico ?? ''))) keys.add(`ico:${ico}`);
  const h = hostOf(url);
  if (h && !FREEMAIL.has(h)) keys.add(`dom:${h}`);
  const d = mailDomain(email);
  if (d) keys.add(`dom:${d}`);
  return keys;
}

const CONTACTED = ['sent', 'replied', 'stopped', 'bounced', 'closed', 'failed'];

/**
 * Co uz udelaly B2B segmenty: firmy oslovene nebo schvalene k odeslani a odhlasene adresy.
 * Testovaci segmenty se nepocitaji (testovaci segment jsou e-shopy a blokoval by vsechno).
 */
export function b2bIndex(segments, suppressionRows = []) {
  const contacted = new Map();
  const companies = [];
  for (const s of segments ?? []) {
    const sn = s?.snapshot;
    if (!sn || sn.segment?.test) continue;
    for (const p of sn.packages ?? []) {
      const keys = companyKeys({ ico: p.ico, url: p.web, email: p.kontakt });
      companies.push({ segment: s.id, label: sn.segment?.label ?? s.id, ico: p.ico, firma: p.firma, keys });
      const sentStep = Object.values(p.sends ?? {}).find((x) => ['sent', 'reserved'].includes(x?.state));
      const state = CONTACTED.includes(p.status) || sentStep ? 'osloveno' : p.review === 'approved' ? 'schváleno k odeslání' : null;
      if (!state) continue;
      const at = sentStep?.sentAt ?? sentStep?.reservedAt ?? p.approval?.at ?? p.updatedAt ?? null;
      for (const k of keys) if (!contacted.has(k)) contacted.set(k, { segment: s.id, label: sn.segment?.label ?? s.id, firma: p.firma, state, at });
    }
  }
  const suppressed = new Set();
  for (const r of suppressionRows) {
    const typ = String(r.typ ?? '').trim();
    const v = String(r.hodnota ?? '').trim().toLowerCase();
    if (!v) continue;
    if (typ === 'email') { const e = normEmail(v); if (e) suppressed.add(`email:${e}`); }
    else if (typ === 'domena') { const h = hostOf(v.includes('://') ? v : `https://${v}`); if (h) suppressed.add(`dom:${h}`); }
    else if (typ === 'ico' && /^\d{8}$/.test(v)) suppressed.add(`ico:${v}`);
  }
  return { contacted, suppressed, companies };
}

/** Proc e-shop nejde schvalit, nebo null. */
export function conflictFor(lead, b2b) {
  if (!b2b) return null;
  const keys = companyKeys({ ico: lead.detail?.company?.ico, url: lead.url, email: lead.email });
  for (const k of keys) {
    const hit = b2b.contacted.get(k);
    if (hit) return { reason: 'b2b', text: `Firma už je v B2B segmentu ${hit.label} (${hit.state}${hit.firma ? `: ${hit.firma}` : ''}).`, segment: hit.segment, at: hit.at };
  }
  const e = normEmail(lead.email);
  if ((e && b2b.suppressed.has(`email:${e}`)) || [...keys].some((k) => b2b.suppressed.has(k)))
    return { reason: 'stop', text: 'Adresa nebo firma se odhlásila v B2B. Neoslovovat.', segment: null, at: null };
  return null;
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
    followupText: d.followupText ?? null, revision: d.revision ?? null, packageHash: d.packageHash ?? null,
    company: d.company ? { name: d.company.name ?? null, ico: d.company.ico ?? null } : null,
  };
};

/** Prevede feed z Workeru na model, ktery UI jen vykresli. Scitani dela znovu a porovna je s cisly, ktera ukazuje /eshopy. */
export function buildEshopyView(feed, { base, now = Date.now(), b2b = null, canAct = false } = {}) {
  const leads = Array.isArray(feed?.leads) ? feed.leads : [];
  const receipts = new Map((feed?.sentReceipts ?? []).map((r) => [r.leadId, r.at]));
  // posledni pozadavek majitele u kazdeho e-shopu (feed je od nejnovejsiho)
  const requests = new Map();
  for (const c of feed?.commands ?? []) if (c?.leadId && !requests.has(c.leadId)) requests.set(c.leadId, { action: c.action, state: c.state, message: c.message ?? '', at: c.createdAt ?? null });
  const buckets = { review: [], approved: [], sent: [], replied: [], stopped: [], check: [], other: [] };
  let sentTotal = 0;
  let readyTotal = 0;
  let repliedTotal = 0;
  let withIco = 0;
  let conflicts = 0;
  const eshopKeys = new Map();
  for (const l of leads) {
    if (!l || typeof l.id !== 'string' || !UUID_RE.test(l.id)) continue;
    for (const k of companyKeys({ ico: l.detail?.company?.ico, url: l.url, email: l.email })) if (!eshopKeys.has(k)) eshopKeys.set(k, l.shopName);
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
    const row = bucket === 'other' || bucket === 'stopped' ? lightLead(key, l, bucket, link) : fullLead(key, l, bucket, link, l.sentAt ?? receipt);
    row.request = requests.get(l.id) ?? null;
    if (bucket === 'review' || bucket === 'approved') {
      row.conflict = conflictFor(l, b2b);
      if (row.conflict) conflicts++;
    }
    buckets[bucket].push(row);
  }
  const otherTotal = buckets.other.length;
  buckets.other = buckets.other.slice(0, OTHER_LIMIT);
  const computed = { total: leads.length, ready: readyTotal, sent: sentTotal, replied: repliedTotal };
  const reported = feed?.stats ?? null;
  const selfCheck = {
    ok: Boolean(reported) && Object.keys(computed).every((k) => reported[k] === computed[k]),
    computed, reported,
  };
  // B2B balicky, ktere jsou zaroven e-shop leady (B2B engine je stejne nepusti, tady je to jen videt)
  const overlap = {};
  for (const c of b2b?.companies ?? []) {
    for (const k of c.keys) if (eshopKeys.has(k)) { overlap[`${c.segment}:${c.ico}`] = eshopKeys.get(k); break; }
  }
  const updatedAt = feed?.updatedAt ?? null;
  const ageMinutes = updatedAt ? Math.max(0, Math.round((now - Date.parse(updatedAt)) / 60000)) : null;
  const beat = feed?.autopilot?.at ? Math.max(0, Math.round((now - Date.parse(feed.autopilot.at)) / 60000)) : null;
  const names = new Map(leads.map((l) => [l.id, l.shopName]));
  return {
    configured: true, base, updatedAt, ageMinutes, stale: ageMinutes === null || ageMinutes > STALE_MINUTES, staleAfterMinutes: STALE_MINUTES,
    canAct: Boolean(canAct), b2bChecked: Boolean(b2b),
    source: feed?.source ?? null, lastRun: feed?.lastRun ?? null, gmailConnected: feed?.gmailConnected === true,
    sendingEnabled: feed?.sendingEnabled === true, dailySendLimit: feed?.dailySendLimit ?? null,
    settings: feed?.settings ?? {}, workflow: feed?.workflow ?? {},
    autopilot: feed?.autopilot ? { ...feed.autopilot, ageMinutes: beat } : null,
    pausePending: feed?.pausePending === true,
    counts: {
      total: leads.length, review: buckets.review.length, approved: buckets.approved.length, sent: sentTotal,
      replied: repliedTotal, stopped: buckets.stopped.length, check: buckets.check.length, other: otherTotal,
      withIco, withoutIco: leads.length - withIco, conflicts,
    },
    selfCheck,
    buckets,
    overlap,
    events: (feed?.events ?? []).slice(-60).reverse().map((e) => ({ at: e.at, kind: e.kind, leadId: e.leadId ?? null, shopName: e.leadId ? names.get(e.leadId) ?? null : null })),
  };
}

export async function fetchEshopyFeed(env, fetchImpl) {
  const cfg = eshopyConfig(env);
  if (!cfg) return null;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 12000);
  let res;
  try {
    res = await fetchImpl(`${cfg.base}${ESHOPY_READ_PATH}`, { headers: { Authorization: `Bearer ${cfg.token}`, Accept: 'application/json' }, signal: ctl.signal });
  } catch {
    throw new Error('E-shopy: dashboard e-shopu neodpovedel');
  } finally { clearTimeout(timer); }
  // text odpovedi se ven nikdy nepousti (mohl by obsahovat cokoli), jen stavovy kod
  if (!res.ok) throw new Error(`E-shopy: dashboard e-shopu vratil ${res.status}`);
  let feed;
  try { feed = JSON.parse(await res.text()); } catch { throw new Error('E-shopy: neplatna odpoved'); }
  if (!feed || feed.version !== 1 || !Array.isArray(feed.leads)) throw new Error('E-shopy: neocekavany format odpovedi');
  return feed;
}

export async function loadEshopy(env, fetchImpl, now = Date.now(), b2b = null) {
  const cfg = eshopyConfig(env);
  if (!cfg) return { configured: false };
  const feed = await fetchEshopyFeed(env, fetchImpl);
  return buildEshopyView(feed, { base: cfg.base, now, b2b, canAct: Boolean(cfg.writeToken) });
}

/** Posle jednu akci Workeru e-shopu. Vraci { ok, status, error? }. */
export async function sendEshopyCommand(env, fetchImpl, command) {
  const cfg = eshopyConfig(env);
  if (!cfg?.writeToken) return { ok: false, status: 503, error: 'Akce s e-shopy nejsou nastavené (ESHOPY_WRITE_TOKEN).' };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 12000);
  try {
    const r = await fetchImpl(`${cfg.base}${ESHOPY_WRITE_PATH}`, {
      method: 'POST', signal: ctl.signal,
      headers: { Authorization: `Bearer ${cfg.writeToken}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(command),
    });
    let j = null;
    try { j = JSON.parse(await r.text()); } catch { /* text odpovedi se ven nepousti */ }
    // zprava Workeru je z jeho pevneho seznamu, kratka a bez tokenu; nic jineho se nepreda
    const error = r.ok ? undefined : (typeof j?.error === 'string' ? j.error.slice(0, 200) : `Dashboard e-shopu vratil ${r.status}`);
    return { ok: r.ok, status: r.status, error, duplicate: j?.duplicate === true };
  } catch {
    return { ok: false, status: 502, error: 'Dashboard e-shopu neodpovedel.' };
  } finally { clearTimeout(timer); }
}

/* ---------- seznam e-shopu pro B2B (shared/excluded-eshopy.csv) ---------- */

export const EXCLUSION_FILE = 'shared/excluded-eshopy.csv';
const csvCell = (v) => { const s = String(v ?? ''); return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };

export function parseCsv(text) {
  const rows = [];
  let row = []; let cell = ''; let q = false;
  const s = String(text ?? '').replace(/^﻿/, '');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"' && s[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && s[i + 1] === '\n') i++; row.push(cell); cell = ''; if (row.some((x) => x !== '')) rows.push(row); row = []; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); if (row.some((x) => x !== '')) rows.push(row); }
  if (!rows.length) return [];
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

/**
 * Sloucit stavajici soubor s e-shop leady. Nic se neodebira (feed muze byt oriznuty a firma,
 * ktera jednou byla e-shop lead, se B2B oslovovat nema). Vraci { csv, added }.
 */
export function mergeExclusions(existingText, leads) {
  const rows = parseCsv(existingText);
  const byKey = new Map();
  const keyOf = (r) => (r.domena ? `dom:${r.domena.toLowerCase()}` : r.ico ? `ico:${r.ico}` : null);
  for (const r of rows) { const k = keyOf(r); if (k && !byKey.has(k)) byKey.set(k, { ico: r.ico ?? '', firma: r.firma ?? '', domena: (r.domena ?? '').toLowerCase(), poznamka: r.poznamka ?? '' }); }
  let added = 0;
  for (const l of leads ?? []) {
    const domena = hostOf(l?.url);
    const ico = l?.detail?.company?.ico && /^\d{8}$/.test(l.detail.company.ico) ? l.detail.company.ico : '';
    if (!domena && !ico) continue;
    const k = domena ? `dom:${domena}` : `ico:${ico}`;
    const prev = byKey.get(k);
    if (prev) { if (!prev.ico && ico) prev.ico = ico; continue; }
    byKey.set(k, { ico, firma: String(l.shopName ?? '').slice(0, 160), domena: domena ?? '', poznamka: 'e-shop lead (mhruby)' });
    added++;
  }
  const out = [...byKey.values()].sort((a, b) => (a.domena || a.ico).localeCompare(b.domena || b.ico));
  const csv = ['ico,firma,domena,poznamka', ...out.map((r) => [r.ico, r.firma, r.domena, r.poznamka].map(csvCell).join(','))].join('\n') + '\n';
  return { csv, added, total: out.length };
}
