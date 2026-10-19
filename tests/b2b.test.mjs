// node --test tests/b2b.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler, { loadUsers, authenticate, loadData, writeActions, fireRoutine, loadEshopy, buildEshopyView, eshopyConfig, _internals } from '../api/b2b.js';

const auth = (u, p) => 'Basic ' + Buffer.from(`${u}:${p}`).toString('base64');
const FP = 'a'.repeat(64);

// maly napodobeny GitHub: soubory podle vetve, seznam slozek, zapis do vetve
function fakeGithub(init = {}) {
  const state = { files: { main: { 'segments/doprava/config.json': '{}', 'segments/vyrobci/config.json': '{}' }, ...init }, branches: new Set(['main', ...Object.keys(init)]), calls: [], failPut: 0 };
  const fetchImpl = async (url, opts = {}) => {
    const u = new URL(url);
    state.calls.push(`${opts.method ?? 'GET'} ${u.pathname}${u.search}`);
    const json = (status, body) => ({ ok: status < 300, status, json: async () => body, text: async () => (typeof body === 'string' ? body : JSON.stringify(body)) });
    let m;
    if ((m = u.pathname.match(/^\/repos\/[^/]+\/[^/]+\/git\/ref\/heads\/(.+)$/))) {
      const b = decodeURIComponent(m[1]);
      return state.branches.has(b) ? json(200, { object: { sha: 'sha-' + b } }) : json(404, {});
    }
    if (u.pathname.endsWith('/git/refs') && opts.method === 'POST') {
      const ref = JSON.parse(opts.body).ref.replace('refs/heads/', '');
      state.branches.add(ref); state.files[ref] = { ...state.files.main };
      return json(201, {});
    }
    if ((m = u.pathname.match(/^\/repos\/[^/]+\/[^/]+\/contents\/(.+)$/))) {
      const file = decodeURIComponent(m[1]);
      if (opts.method === 'PUT') {
        if (state.failPut > 0) { state.failPut--; return json(409, {}); }
        const b = JSON.parse(opts.body);
        if (!state.branches.has(b.branch)) return json(404, {});
        state.files[b.branch][file] = Buffer.from(b.content, 'base64').toString();
        return json(201, {});
      }
      const ref = u.searchParams.get('ref');
      const files = state.files[ref];
      if (!files) return json(404, {});
      if (files[file] !== undefined) return json(200, files[file]);
      const prefix = file + '/';
      const names = new Map();
      for (const f of Object.keys(files)) if (f.startsWith(prefix)) { const rest = f.slice(prefix.length); const [first, ...more] = rest.split('/'); names.set(first, more.length ? 'dir' : 'file'); }
      return names.size ? json(200, [...names].map(([name, type]) => ({ name, type }))) : json(404, {});
    }
    return json(404, {});
  };
  return { state, fetchImpl };
}

const env = { B2B_GITHUB_TOKEN: 't', B2B_REPO: 'org/priv', B2B_USERS: JSON.stringify({ max: 'tajne', petr: 'jine' }) };

function call(h, { method = 'GET', query = {}, headers = {}, body } = {}, deps = {}) {
  return new Promise((resolve) => {
    const out = { headers: {}, code: 200, body: null };
    const res = {
      setHeader: (k, v) => { out.headers[k.toLowerCase()] = v; },
      status(c) { out.code = c; return res; },
      send(b) { out.body = b; resolve(out); return res; },
      json(b) { out.body = b; resolve(out); return res; },
    };
    h({ method, query, headers, body }, res, deps);
  });
}

test('uzivatele: B2B_USERS, B2B_USER/PASS a nouzove INTERNI', () => {
  assert.equal(loadUsers({ B2B_USERS: '{"a":"b"}' })[0].name, 'a');
  assert.equal(loadUsers({ B2B_USER: 'x', B2B_PASS: 'y' })[0].pass, 'y');
  assert.equal(loadUsers({ INTERNI_USER: 'i', INTERNI_PASS: 'j' })[0].name, 'i');
  assert.deepEqual(loadUsers({}), []);
  assert.deepEqual(loadUsers({ B2B_USERS: 'rozbite' }), []);
});

test('prihlaseni: spravne jmeno a heslo vrati jmeno, spatne ani hlavicka nic', () => {
  const users = loadUsers(env);
  assert.equal(authenticate(auth('petr', 'jine'), users), 'petr');
  assert.equal(authenticate(auth('petr', 'tajne'), users), null);
  assert.equal(authenticate(auth('max', ''), users), null);
  assert.equal(authenticate('Bearer abc', users), null);
  assert.equal(authenticate(undefined, users), null);
});

test('handler: bez prihlaseni 401, bez nastavenych uzivatelu 500, nikdy neotevre stranku', async () => {
  const r1 = await call(handler, {}, { env });
  assert.equal(r1.code, 401);
  assert.match(r1.headers['www-authenticate'], /Basic/);
  const r2 = await call(handler, { headers: { authorization: auth('max', 'tajne') } }, { env: {} });
  assert.equal(r2.code, 500);
  const r3 = await call(handler, { query: { op: 'data' } }, { env });
  assert.equal(r3.code, 401);
});

test('handler: bez napojeni na repo vrati configured false, ne chybu', async () => {
  const r = await call(handler, { query: { op: 'data' }, headers: { authorization: auth('max', 'tajne') } }, { env: { B2B_USERS: env.B2B_USERS } });
  assert.equal(r.code, 200);
  assert.equal(r.body.configured, false);
});

test('data: snapshot ze stavove vetve ma prednost pred mainem, ceka-li zadost, je vide', async () => {
  const gh = fakeGithub({
    'claude/state-doprava': {
      'segments/doprava/snapshot.json': JSON.stringify({ segment: { id: 'doprava' }, from: 'state' }),
      'segments/doprava/inbox/1700000000000-approve-12345678-abc.json': '{}',
      'segments/doprava/inbox/1700000000001-pause-all-abc.json': '{}',
      'segments/doprava/inbox/poznamka.txt': 'x',
    },
  });
  gh.state.files.main['segments/doprava/snapshot.json'] = JSON.stringify({ from: 'main' });
  gh.state.files.main['segments/vyrobci/snapshot.json'] = JSON.stringify({ segment: { id: 'vyrobci' }, from: 'main' });
  const d = await loadData(env, gh.fetchImpl);
  const dop = d.segments.find((s) => s.id === 'doprava');
  const vyr = d.segments.find((s) => s.id === 'vyrobci');
  assert.equal(dop.snapshot.from, 'state');
  assert.deepEqual(dop.pending, [{ action: 'approve', ico: '12345678' }, { action: 'pause', ico: null }]);
  assert.equal(vyr.snapshot.from, 'main');
  assert.deepEqual(vyr.pending, []);
});

test('data: segment bez snapshotu je oznacen jako missing', async () => {
  const gh = fakeGithub();
  const d = await loadData(env, gh.fetchImpl);
  assert.ok(d.segments.every((s) => s.missing));
});

test('akce: schvaleni zapise zadost na stavovou vetev se jmenem uzivatele, vetev se zalozi z mainu', async () => {
  const gh = fakeGithub();
  const r = await writeActions(env, gh.fetchImpl, 'petr', { segment: 'doprava', action: 'approve', items: [{ ico: '12345678', fingerprint: FP }, { ico: '87654321', fingerprint: FP }] });
  assert.equal(r.status, 200);
  assert.deepEqual(r.results.map((x) => x.ok), [true, true]);
  assert.ok(gh.state.branches.has('claude/state-doprava'));
  const written = Object.entries(gh.state.files['claude/state-doprava']).filter(([k]) => k.includes('/inbox/'));
  assert.equal(written.length, 2);
  const req = JSON.parse(written[0][1]);
  assert.equal(req.by, 'petr');
  assert.equal(req.action, 'approve');
  assert.equal(req.fingerprint, FP);
  assert.ok(!gh.state.calls.some((c) => c.includes('PUT') && c.includes('/main')), 'na main se nezapisuje');
});

test('akce: pri konfliktu zapisu (409) se zkusi znovu', async () => {
  const gh = fakeGithub();
  gh.state.failPut = 2;
  const r = await writeActions(env, gh.fetchImpl, 'max', { segment: 'doprava', action: 'reject', ico: '12345678', note: 'spatny obor' });
  assert.equal(r.results[0].ok, true);
});

test('akce: neplatne vstupy se odmitnou drive, nez se pri GitHubu cokoli stane', async () => {
  const gh = fakeGithub();
  const bad = [
    { segment: '../main', action: 'approve', ico: '12345678', fingerprint: FP },
    { segment: 'doprava', action: 'set-mode', ico: '12345678' },
    { segment: 'doprava', action: 'approve', ico: '1234', fingerprint: FP },
    { segment: 'doprava', action: 'approve', ico: '12345678', fingerprint: 'kratky' },
    { segment: 'doprava', action: 'approve', items: [] },
    { segment: 'doprava', action: 'approve', items: Array.from({ length: 21 }, () => ({ ico: '12345678', fingerprint: FP })) },
  ];
  for (const b of bad) assert.equal((await writeActions(env, gh.fetchImpl, 'max', b)).status, 400, JSON.stringify(b).slice(0, 80));
  assert.equal((await writeActions(env, gh.fetchImpl, 'max', { segment: 'neexistuje', action: 'pause' })).status, 404);
  assert.equal(gh.state.calls.length <= 2, true, 'GitHub se nevolal kvuli neplatnemu vstupu (krome vypisu segmentu)');
});

test('handler: POST bez hlavicky x-b2b, s cizim puvodem nebo ne jako JSON se odmitne (ochrana proti CSRF)', async () => {
  const gh = fakeGithub();
  const base = { method: 'POST', query: { op: 'action' }, body: { segment: 'doprava', action: 'pause' } };
  const headers = { authorization: auth('max', 'tajne'), host: 'sitespot.cz', 'content-type': 'application/json', 'x-b2b': '1' };
  const deps = { env, fetch: gh.fetchImpl };
  assert.equal((await call(handler, { ...base, headers: { ...headers, 'x-b2b': undefined } }, deps)).code, 403);
  assert.equal((await call(handler, { ...base, headers: { ...headers, origin: 'https://evil.example' } }, deps)).code, 403);
  assert.equal((await call(handler, { ...base, headers: { ...headers, 'content-type': 'text/plain' } }, deps)).code, 403);
  assert.equal((await call(handler, { ...base, headers: { ...headers, origin: 'https://sitespot.cz' } }, deps)).code, 200);
});

test('spusteni rutiny: jen s nastavenym odkazem, jen na api.anthropic.com a nejvys jednou za dve minuty', async () => {
  _internals.resetCache();
  const calls = [];
  const f = async (url, o) => { calls.push({ url, o }); return { ok: true, status: 200 }; };
  const fire = { B2B_FIRE: JSON.stringify({ doprava: { url: 'https://api.anthropic.com/v1/claude_code/routines/trig_01ABC/fire', token: 'sk-x' } }) };
  assert.equal((await fireRoutine({}, f, 'doprava')).fired, false);
  assert.equal((await fireRoutine({ B2B_FIRE: JSON.stringify({ doprava: { url: 'https://evil.example/fire', token: 'x' } }) }, f, 'doprava')).fired, false);
  assert.equal(calls.length, 0);
  assert.equal((await fireRoutine(fire, f, 'doprava', 1_000_000)).fired, true);
  assert.equal((await fireRoutine(fire, f, 'doprava', 1_050_000)).fired, false, 'druhe spusteni do dvou minut se preskoci');
  assert.equal((await fireRoutine(fire, f, 'doprava', 1_130_000)).fired, true);
  assert.equal(calls[0].o.headers['anthropic-beta'], 'experimental-cc-routine-2026-04-01');
  assert.equal(calls[0].o.headers.Authorization, 'Bearer sk-x');
});


// ---------- E-shopy (jen cteni) ----------

const ID = (n) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const full = (n, over = {}, detail = {}) => ({
  id: ID(n), shopName: `Obchod ${n}`, url: `https://obchod${n}.example/`, email: `info@obchod${n}.example`, status: 'draft', offer: 'profit_control',
  auditUrl: `https://mhruby.eu/audit-${'a'.repeat(64)}`,
  detail: { revision: 'r'.repeat(64), greeting: 'Dobrý den', contactSource: `https://obchod${n}.example/kontakt`, day: '2026-10-16', evidenceVerified: true, screenshotHash: 's'.repeat(64),
    auditHash: 'h'.repeat(64), emailSubject: 'Předmět', emailBody: 'Tělo', packageHash: 'p'.repeat(64), observation: 'Pozorování', quote: 'Citace', ...detail },
  ...over,
});
const NOW = Date.parse('2026-10-17T12:00:00.000Z');
const feed = (leads, over = {}) => ({
  version: 1, updatedAt: '2026-10-17T11:50:00.000Z', source: 'notebook', lastRun: null, gmailConnected: true, sendingEnabled: false, dailySendLimit: 4,
  settings: { startHour: 9 }, workflow: { deliveryMode: 'manual' }, events: [{ at: '2026-10-17T11:00:00.000Z', kind: 'sent', leadId: ID(3) }], autopilot: null, sentReceipts: [], leads, ...over,
});
const sample = () => [
  full(1),                                                                                   // ke schvaleni
  full(2, { status: 'approved' }, { approvedHash: 'p'.repeat(64) }),                         // schvaleno
  full(3, { status: 'sent', sentAt: '2026-10-16T09:00:00.000Z' }),                           // odeslano
  full(4, { status: 'replied', sentAt: '2026-10-15T09:00:00.000Z', replyAt: '2026-10-16T09:00:00.000Z' }),
  full(5, { status: 'suppressed', sentAt: '2026-10-15T09:00:00.000Z', replyAt: '2026-10-16T10:00:00.000Z' }),
  full(6, { status: 'evidence_review' }, { evidenceVerified: false }),                       // k overeni
  { id: ID(7), shopName: 'Jen importovany', url: 'https://i.example/', status: 'imported' },  // ostatni
  full(8, {}, { company: { name: 'Osm s.r.o.', ico: '12345678' } }),                        // ke schvaleni s ICO
];

test('e-shopy: stranka bez konfigurace nic nenacita a nehlasi chybu, bez prihlaseni se nedostane nikdo', async () => {
  _internals.resetCache();
  const r1 = await call(handler, { query: { op: 'eshopy' } }, { env });
  assert.equal(r1.code, 401);
  const r2 = await call(handler, { query: { op: 'eshopy' }, headers: { authorization: auth('max', 'tajne') } }, { env, fetch: () => { throw new Error('nesmi se volat'); } });
  assert.equal(r2.code, 200);
  assert.deepEqual(r2.body, { configured: false });
  assert.equal(eshopyConfig({ ESHOPY_URL: 'http://mhruby.eu', ESHOPY_READ_TOKEN: 'x' }), null, 'jen https');
  assert.equal(eshopyConfig({ ESHOPY_URL: 'neco', ESHOPY_READ_TOKEN: 'x' }), null);
  assert.equal(eshopyConfig({ ESHOPY_URL: 'https://mhruby.eu/eshopy/', ESHOPY_READ_TOKEN: '' }), null);
  assert.deepEqual(eshopyConfig({ ESHOPY_URL: 'https://mhruby.eu/eshopy/', ESHOPY_READ_TOKEN: 't' }), { base: 'https://mhruby.eu', token: 't' });
});

test('e-shopy: dotaz jde na CRM cestu s Bearer tokenem, token se vrati jen jako hlavicka a nikdy v odpovedi', async () => {
  _internals.resetCache();
  const calls = [];
  const f = async (url, o) => { calls.push({ url, o }); return { ok: true, status: 200, text: async () => JSON.stringify(feed(sample(), { stats: { total: 8, ready: 3, sent: 3, replied: 2 } })) }; };
  const e = { ...env, ESHOPY_URL: 'https://mhruby.eu', ESHOPY_READ_TOKEN: 'crm-token-ABCDEFGHIJKLMNOPQRSTUVWXYZ123456' };
  const r = await call(handler, { query: { op: 'eshopy' }, headers: { authorization: auth('max', 'tajne') } }, { env: e, fetch: f });
  assert.equal(r.code, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://mhruby.eu/eshopy/api/crm/overview');
  assert.equal(calls[0].o.headers.Authorization, 'Bearer crm-token-ABCDEFGHIJKLMNOPQRSTUVWXYZ123456');
  assert.ok(!JSON.stringify(r.body).includes('crm-token'), 'token neni v odpovedi');
  assert.equal(calls[0].o.method, undefined, 'jen GET');
  // druhe volani do 20 s jde z pameti
  await call(handler, { query: { op: 'eshopy' }, headers: { authorization: auth('max', 'tajne') } }, { env: e, fetch: f });
  assert.equal(calls.length, 1);
});

test('e-shopy: rozdeleni do skupin, klic eshopy:<uuid>, ICO jen kdyz je a soucty sedi s tim, co ukazuje /eshopy', () => {
  const v = buildEshopyView(feed(sample(), { stats: { total: 8, ready: 3, sent: 3, replied: 2 } }), { base: 'https://mhruby.eu', now: NOW });
  assert.deepEqual(v.counts, { total: 8, review: 2, approved: 1, sent: 3, replied: 2, stopped: 1, check: 1, other: 1, withIco: 1, withoutIco: 7 });
  assert.deepEqual(v.buckets.review.map((l) => l.key), [`eshopy:${ID(1)}`, `eshopy:${ID(8)}`]);
  assert.equal(v.buckets.review[1].ico, '12345678');
  assert.equal(v.buckets.review[0].ico, null);
  assert.deepEqual(v.buckets.approved.map((l) => l.id), [ID(2)]);
  assert.deepEqual(v.buckets.sent.map((l) => l.id), [ID(3)]);
  assert.deepEqual(v.buckets.replied.map((l) => l.id), [ID(4)]);
  assert.deepEqual(v.buckets.stopped.map((l) => l.id), [ID(5)], 'STOP je mezi odhlasenymi, i kdyz odpovedel');
  assert.deepEqual(v.buckets.check.map((l) => l.id), [ID(6)]);
  assert.equal(v.buckets.review[0].link, `https://mhruby.eu/eshopy/lead/${ID(1)}`);
  assert.equal(v.buckets.review[0].body, 'Tělo');
  assert.equal(v.buckets.other[0].body, undefined, 'v ostatnich jsou jen lehke radky');
  assert.equal(v.selfCheck.ok, true);
  assert.equal(v.events[0].shopName, 'Obchod 3');
});

test('e-shopy: potvrzene odeslani z dashboardu e-shopu se pocita jako odeslano, kontrolni soucet to pozna', () => {
  const leads = [full(1), full(2)];
  const v = buildEshopyView(feed(leads, { sentReceipts: [{ leadId: ID(1), at: '2026-10-17T10:00:00.000Z' }], stats: { total: 2, ready: 1, sent: 1, replied: 0 } }), { base: 'https://mhruby.eu', now: NOW });
  assert.deepEqual(v.buckets.sent.map((l) => l.id), [ID(1)]);
  assert.equal(v.buckets.sent[0].sentAt, '2026-10-17T10:00:00.000Z');
  assert.deepEqual(v.buckets.review.map((l) => l.id), [ID(2)]);
  assert.equal(v.selfCheck.ok, true);
  const bad = buildEshopyView(feed(leads, { stats: { total: 2, ready: 2, sent: 0, replied: 0 } }), { base: 'https://mhruby.eu', now: NOW });
  assert.equal(bad.selfCheck.ok, true, 'bez potvrzeni jsou oba ke schvaleni');
  const off = buildEshopyView(feed(leads, { stats: { total: 3, ready: 2, sent: 0, replied: 0 } }), { base: 'https://mhruby.eu', now: NOW });
  assert.equal(off.selfCheck.ok, false);
  assert.deepEqual(off.selfCheck.computed, { total: 2, ready: 2, sent: 0, replied: 0 });
  assert.equal(buildEshopyView(feed(leads), { base: 'https://mhruby.eu', now: NOW }).selfCheck.ok, false, 'bez cisel od Workeru se nedá potvrdit');
});

test('e-shopy: po 30 minutach bez synchronizace je pohled zastaraly, autopilot nese stari posledniho hlaseni', () => {
  const fresh = buildEshopyView(feed([full(1)], { updatedAt: '2026-10-17T11:40:00.000Z' }), { base: 'https://mhruby.eu', now: NOW });
  assert.equal(fresh.ageMinutes, 20);
  assert.equal(fresh.stale, false);
  const old = buildEshopyView(feed([full(1)], { updatedAt: '2026-10-17T11:29:00.000Z', autopilot: { mode: 'dry-run', paused: false, approval: 'human', at: '2026-10-17T09:00:00.000Z' } }), { base: 'https://mhruby.eu', now: NOW });
  assert.equal(old.ageMinutes, 31);
  assert.equal(old.stale, true);
  assert.equal(old.autopilot.ageMinutes, 180);
  assert.equal(buildEshopyView({ version: 1, leads: [] }, { base: 'https://mhruby.eu', now: NOW }).stale, true, 'bez casu se nikdy nepovazuje za cerstve');
});

test('e-shopy: chyba dashboardu e-shopu se hlasi jen stavovym kodem, text odpovedi ani token ven nejdou', async () => {
  const e = { ESHOPY_URL: 'https://mhruby.eu', ESHOPY_READ_TOKEN: 'crm-token-ABCDEFGHIJKLMNOPQRSTUVWXYZ123456' };
  const bad = async () => ({ ok: false, status: 401, text: async () => 'Bearer crm-token-ABCDEFGHIJKLMNOPQRSTUVWXYZ123456 odmitnut' });
  await assert.rejects(() => loadEshopy(e, bad), (err) => /401/.test(err.message) && !/crm-token/.test(err.message));
  await assert.rejects(() => loadEshopy(e, async () => { throw new Error('ECONNRESET s tokenem crm-token'); }), (err) => !/crm-token/.test(err.message));
  await assert.rejects(() => loadEshopy(e, async () => ({ ok: true, status: 200, text: async () => '{"version":2}' })), /format/);
  await assert.rejects(() => loadEshopy(e, async () => ({ ok: true, status: 200, text: async () => 'ne json' })), /neplatna/);
  _internals.resetCache();
  const r = await call(handler, { query: { op: 'eshopy' }, headers: { authorization: auth('max', 'tajne') } }, { env: { ...env, ...e }, fetch: bad });
  assert.equal(r.code, 502);
  assert.ok(!JSON.stringify(r.body).includes('crm-token'));
});

test('B2B zustava beze zmeny: op=data, op=action a neznama op se po pridani e-shopu chovaji stejne', async () => {
  _internals.resetCache();
  const gh = fakeGithub({ 'claude/state-doprava': { 'segments/doprava/snapshot.json': JSON.stringify({ segment: { id: 'doprava' } }) } });
  gh.state.files.main['segments/vyrobci/snapshot.json'] = JSON.stringify({ segment: { id: 'vyrobci' } });
  const withEshopy = { ...env, ESHOPY_URL: 'https://mhruby.eu', ESHOPY_READ_TOKEN: 'crm-token-ABCDEFGHIJKLMNOPQRSTUVWXYZ123456' };
  const a = { authorization: auth('max', 'tajne') };
  const data1 = await call(handler, { query: { op: 'data' }, headers: a }, { env, fetch: gh.fetchImpl });
  _internals.resetCache();
  const data2 = await call(handler, { query: { op: 'data' }, headers: a }, { env: withEshopy, fetch: gh.fetchImpl });
  const strip = (b) => ({ ...b, fetchedAt: undefined });
  assert.deepEqual(strip(data2.body), strip(data1.body), 'op=data nezavisi na nastaveni e-shopu');
  assert.deepEqual(Object.keys(data1.body).sort(), ['configured', 'fetchedAt', 'fire', 'segments', 'user']);
  assert.deepEqual(data1.body.segments.map((s) => s.id), ['doprava', 'vyrobci']);
  assert.equal(data1.body.segments[0].ref, 'claude/state-doprava');
  assert.equal(data1.body.segments[1].ref, 'main');
  // akce: ICO musi mit osm cislic, UUID e-shopu se do B2B inboxu dostat nesmi
  const act = (body) => call(handler, { method: 'POST', query: { op: 'action' }, headers: { ...a, host: 'sitespot.cz', 'content-type': 'application/json', 'x-b2b': '1' }, body }, { env: withEshopy, fetch: gh.fetchImpl });
  assert.equal((await act({ segment: 'doprava', action: 'approve', ico: ID(1), fingerprint: FP })).code, 400);
  assert.equal((await act({ segment: 'eshopy', action: 'pause' })).code, 404, 'zadny segment eshopy v B2B nevznika');
  assert.equal((await call(handler, { query: { op: 'cokoliv' }, headers: a }, { env })).code, 404);
  assert.equal((await call(handler, { method: 'POST', query: { op: 'eshopy' }, headers: { ...a, 'x-b2b': '1', 'content-type': 'application/json' }, body: {} }, { env: withEshopy, fetch: gh.fetchImpl })).code, 404, 'e-shopy se nedaji zapisovat');
});
