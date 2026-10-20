// node --test tests/eshopy.test.mjs
// Akce s e-shopy z CRM, ochrana proti dvojimu osloveni s B2B a seznam e-shopu pro B2B engine. Vymyslena data.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler, { eshopyActions, _internals } from '../api/b2b.js';
import { b2bIndex, conflictFor, companyKeys, mergeExclusions, parseCsv } from '../api/_eshopy.js';

const auth = (u, p) => 'Basic ' + Buffer.from(`${u}:${p}`).toString('base64');
const ID = (n) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const REV = 'c'.repeat(64);
const PKG = 'b'.repeat(64);
const lead = (n, over = {}, detail = {}) => ({
  id: ID(n), shopName: `Obchod ${n}`, url: `https://www.obchod${n}.example/`, email: `info@obchod${n}.example`, status: 'draft', offer: 'profit_control',
  auditUrl: `https://mhruby.eu/audit-${'a'.repeat(64)}`,
  detail: { revision: REV, greeting: 'Dobrý den', contactSource: `https://obchod${n}.example/kontakt`, day: '2026-10-16', evidenceVerified: true, screenshotHash: 's'.repeat(64),
    auditHash: 'h'.repeat(64), emailSubject: 'Předmět', emailBody: 'Tělo', packageHash: PKG, ...detail },
  ...over,
});
const feedOf = (leads) => ({ version: 1, updatedAt: new Date().toISOString(), leads, stats: { total: leads.length, ready: leads.length, sent: 0, replied: 0 }, sentReceipts: [], commands: [] });

// B2B snapshot: segment "doprava" uz oslovil obchod 2 (podle domeny webu) a schvalil firmu s ICO 12345678
const b2bSegments = [
  { id: 'doprava', ref: 'claude/state-doprava', pending: [], snapshot: { segment: { id: 'doprava', label: 'Doprava a spedice' }, packages: [
    { ico: '11111111', firma: 'Dopravce s.r.o.', web: 'https://obchod2.example', kontakt: 'info@obchod2.example', status: 'sent', review: 'sent', sends: { mail1: { state: 'sent', sentAt: '2026-10-10T08:00:00Z' } } },
    { ico: '12345678', firma: 'Schválená s.r.o.', web: 'https://jina.example', kontakt: 'info@jina.example', status: 'ready', review: 'approved', approval: { at: '2026-10-11T08:00:00Z' } },
    { ico: '22222222', firma: 'Jen připravená', web: 'https://obchod5.example', kontakt: 'info@obchod5.example', status: 'ready', review: 'awaiting' },
  ] } },
  // testovaci segment se nepocita
  { id: 'eshopy-test', ref: 'main', pending: [], snapshot: { segment: { id: 'eshopy-test', label: 'TEST', test: true }, packages: [
    { ico: '33333333', firma: 'Test', web: 'https://obchod1.example', kontakt: 'info@obchod1.example', status: 'sent', review: 'sent', sends: { mail1: { state: 'sent' } } },
  ] } },
];
const suppressionCsv = 'typ,hodnota,duvod,segment,datum\nemail,info@obchod3.example,STOP,doprava,2026-10-12\ndomena,obchod4.example,STOP,doprava,2026-10-12\nemail,someone@gmail.com,STOP,doprava,2026-10-12\n';

test('klice firmy: ICO a domeny, bezplatne schranky se nikdy neparuji', () => {
  assert.deepEqual([...companyKeys({ ico: '12345678', url: 'https://www.Obchod.example/x', email: 'jan@obchod-mail.example' })].sort(), ['dom:obchod-mail.example', 'dom:obchod.example', 'ico:12345678']);
  assert.deepEqual([...companyKeys({ url: 'https://firma.example', email: 'firma@gmail.com' })], ['dom:firma.example']);
  assert.deepEqual([...companyKeys({ ico: '123', url: 'neco' })], []);
});

test('duplicity: osloveno nebo schvaleno v B2B a odhlaseni v B2B blokuji, pripraveny B2B balicek a test ne', () => {
  const idx = b2bIndex(b2bSegments, parseCsv(suppressionCsv));
  assert.match(conflictFor(lead(2), idx).text, /Doprava a spedice \(osloveno/);
  assert.match(conflictFor(lead(9, {}, { company: { ico: '12345678' } }), idx).text, /schváleno k odeslání/);
  assert.equal(conflictFor(lead(3), idx).reason, 'stop', 'odhlaseny e-mail');
  assert.equal(conflictFor(lead(4), idx).reason, 'stop', 'odhlasena domena');
  assert.equal(conflictFor(lead(5), idx), null, 'jen pripraveny B2B balicek zatim neblokuje');
  assert.equal(conflictFor(lead(1), idx), null, 'testovaci segment se nepocita');
  assert.equal(conflictFor(lead(6, { email: 'someone@gmail.com', url: 'https://obchod6.example' }), idx).reason, 'stop', 'presny odhlaseny e-mail i na freemailu');
  assert.equal(conflictFor(lead(7, { email: 'jiny@gmail.com', url: 'https://obchod7.example' }), idx), null, 'jiny e-mail na stejnem freemailu ne');
});

test('seznam pro B2B: jen pribyva, nic se neodebira, ICO se doplni, CSV je platne pro engine', () => {
  const first = mergeExclusions('ico,firma,domena,poznamka\n', [lead(1), lead(2, {}, { company: { ico: '12345678' } }), { id: ID(3), shopName: 'Bez webu', url: 'neplatne' }]);
  assert.equal(first.added, 2);
  const rows = parseCsv(first.csv);
  assert.deepEqual(rows.map((r) => [r.domena, r.ico]), [['obchod1.example', ''], ['obchod2.example', '12345678']]);
  // pozdeji feed obsahuje jen obchod 1 (oriznuty), obchod 2 musi zustat; obchod 1 dostane ICO
  const second = mergeExclusions(first.csv, [lead(1, {}, { company: { ico: '87654321' } }), lead(8, { shopName: 'Obchod, "s čárkou"' })]);
  const rows2 = parseCsv(second.csv);
  assert.equal(second.added, 1);
  assert.deepEqual(rows2.map((r) => r.domena), ['obchod1.example', 'obchod2.example', 'obchod8.example']);
  assert.equal(rows2[0].ico, '87654321');
  assert.equal(rows2[2].firma, 'Obchod, "s čárkou"');
  assert.equal(mergeExclusions(second.csv, [lead(1)]).csv, second.csv, 'beze zmeny stejny text');
});

// falesny svet: Worker e-shopu a GitHub soukromeho repa
function world({ leads = [lead(1), lead(2), lead(3)], b2b = true, exclusions = 'ico,firma,domena,poznamka\n' } = {}) {
  const calls = { worker: [], github: [] };
  const files = { 'main:shared/excluded-eshopy.csv': exclusions, 'main:shared/suppression.csv': suppressionCsv, 'claude/state-doprava:segments/doprava/snapshot.json': JSON.stringify(b2bSegments[0].snapshot) };
  let sha = 1;
  const json = (status, body) => ({ ok: status < 300, status, json: async () => body, text: async () => (typeof body === 'string' ? body : JSON.stringify(body)) });
  const fetchImpl = async (url, o = {}) => {
    const u = new URL(url);
    if (u.host === 'mhruby.eu') {
      calls.worker.push({ path: u.pathname, method: o.method ?? 'GET', auth: o.headers?.Authorization, body: o.body ? JSON.parse(o.body) : null });
      if (u.pathname === '/eshopy/api/crm/overview') return json(200, feedOf(leads));
      if (u.pathname === '/eshopy/api/crm/commands') return json(200, { queued: true, duplicate: false });
      return json(404, {});
    }
    calls.github.push({ path: u.pathname, method: o.method ?? 'GET', ref: u.searchParams.get('ref'), body: o.body ? JSON.parse(o.body) : null });
    if (!b2b) return json(500, {});
    const m = u.pathname.match(/\/contents\/(.+)$/);
    if (!m) return json(404, {});
    const file = decodeURIComponent(m[1]);
    if ((o.method ?? 'GET') === 'PUT') { const b = JSON.parse(o.body); files[`${b.branch}:${file}`] = Buffer.from(b.content, 'base64').toString(); return json(201, {}); }
    const ref = u.searchParams.get('ref');
    if (file === 'segments') return json(200, [{ name: 'doprava', type: 'dir' }]);
    if (file === 'segments/doprava/inbox') return json(404, {});
    const text = files[`${ref}:${file}`];
    if (text === undefined) return json(404, {});
    if (String(o.headers?.Accept).includes('raw')) return json(200, text);
    return json(200, { sha: `sha${sha++}`, content: Buffer.from(text).toString('base64') });
  };
  return { calls, files, fetchImpl };
}
const env = {
  B2B_GITHUB_TOKEN: 'gh', B2B_REPO: 'o/r', B2B_USERS: JSON.stringify({ max: 'tajne' }),
  ESHOPY_URL: 'https://mhruby.eu', ESHOPY_READ_TOKEN: 'read-token-0123456789-0123456789-01234', ESHOPY_WRITE_TOKEN: 'write-token-0123456789-0123456789-0123',
};

test('akce: schvalit a odeslat se posle Workeru presne pro videny balicek, se jmenem a zapisovym tokenem', async () => {
  _internals.resetCache();
  const w = world();
  const r = await eshopyActions(env, w.fetchImpl, 'max', { action: 'approve_send', items: [{ id: ID(1), revision: REV, packageHash: PKG }] });
  assert.equal(r.status, 200);
  assert.deepEqual(r.results.map((x) => x.ok), [true]);
  const sent = w.calls.worker.filter((c) => c.path === '/eshopy/api/crm/commands');
  assert.equal(sent.length, 1);
  assert.equal(sent[0].auth, `Bearer ${env.ESHOPY_WRITE_TOKEN}`);
  assert.deepEqual(sent[0].body, { action: 'approve_send', leadId: ID(1), baseRevision: REV, packageHash: PKG, by: 'max' });
  assert.ok(w.calls.worker.filter((c) => c.path === '/eshopy/api/crm/overview').every((c) => c.auth === `Bearer ${env.ESHOPY_READ_TOKEN}`), 'cteni jen ctecim tokenem');
});

test('akce: firma oslovena v B2B nebo odhlasena v B2B se neschvali, zmeneny balicek taky ne, ostatni ano', async () => {
  _internals.resetCache();
  const w = world({ leads: [lead(1), lead(2), lead(3), lead(4, {}, { revision: 'd'.repeat(64) })] });
  const r = await eshopyActions(env, w.fetchImpl, 'max', { action: 'approve_send', items: [ID(1), ID(2), ID(3), ID(4)].map((id) => ({ id, revision: REV, packageHash: PKG })) });
  assert.deepEqual(r.results.map((x) => [x.ok, x.status]), [[true, 200], [false, 409], [false, 409], [false, 409]]);
  assert.match(r.results[1].error, /B2B segmentu Doprava/);
  assert.match(r.results[2].error, /odhlásila/);
  assert.match(r.results[3].error, /změnily/);
  assert.deepEqual(w.calls.worker.filter((c) => c.path === '/eshopy/api/crm/commands').map((c) => c.body.leadId), [ID(1)]);
});

test('akce: bez B2B dat se schvalovat nesmi (nejde overit duplicity), vyradit a pozastavit ano', async () => {
  _internals.resetCache();
  const w = world({ b2b: false });
  const r = await eshopyActions(env, w.fetchImpl, 'max', { action: 'approve_send', items: [{ id: ID(1), revision: REV, packageHash: PKG }] });
  assert.equal(r.status, 503);
  assert.match(r.error, /Nic se neschválilo/);
  _internals.resetCache();
  const s = await eshopyActions(env, w.fetchImpl, 'max', { action: 'suppress', reason: 'špatný obor', items: [{ id: ID(1), revision: REV }] });
  assert.deepEqual(s.results.map((x) => x.ok), [true]);
  const p = await eshopyActions(env, w.fetchImpl, 'max', { action: 'pause' });
  assert.deepEqual(p.results.map((x) => x.ok), [true]);
  assert.deepEqual(w.calls.worker.filter((c) => c.path === '/eshopy/api/crm/commands').map((c) => c.body), [
    { action: 'suppress', leadId: ID(1), baseRevision: REV, reason: 'špatný obor', by: 'max' },
    { action: 'pause', by: 'max' },
  ]);
});

test('akce: bez zapisoveho tokenu, s neznamou akci nebo spatnymi polozkami se nic neposle', async () => {
  _internals.resetCache();
  const w = world();
  const noWrite = { ...env, ESHOPY_WRITE_TOKEN: '' };
  assert.equal((await eshopyActions(noWrite, w.fetchImpl, 'max', { action: 'pause' })).status, 503);
  for (const body of [
    { action: 'send_one', items: [{ id: ID(1), revision: REV, packageHash: PKG }] },
    { action: 'edit', items: [{ id: ID(1), revision: REV }] },
    { action: 'approve_send', items: [] },
    { action: 'approve_send', items: [{ id: 'x', revision: REV, packageHash: PKG }] },
    { action: 'approve_send', items: [{ id: ID(1), revision: REV }] },
    { action: 'approve_send', items: Array.from({ length: 21 }, () => ({ id: ID(1), revision: REV, packageHash: PKG })) },
  ]) assert.equal((await eshopyActions(env, w.fetchImpl, 'max', body)).status, 400, JSON.stringify(body).slice(0, 60));
  assert.equal(w.calls.worker.filter((c) => c.path === '/eshopy/api/crm/commands').length, 0);
});

const call = (h, { method = 'GET', query = {}, headers = {}, body } = {}, deps = {}) => new Promise((resolve) => {
  const out = { headers: {}, code: 200, body: null };
  const res = { setHeader: (k, v) => { out.headers[k.toLowerCase()] = v; }, status(c) { out.code = c; return res; }, send(b) { out.body = b; resolve(out); return res; }, json(b) { out.body = b; resolve(out); return res; } };
  h({ method, query, headers, body }, res, deps);
});

test('handler: akce s e-shopy maji stejnou ochranu proti CSRF a B2B inbox se jich netyka', async () => {
  _internals.resetCache();
  const w = world();
  const base = { method: 'POST', query: { op: 'eshopy-action' }, body: { action: 'pause' } };
  const headers = { authorization: auth('max', 'tajne'), host: 'sitespot.cz', 'content-type': 'application/json', 'x-b2b': '1' };
  const deps = { env, fetch: w.fetchImpl };
  assert.equal((await call(handler, { ...base, headers: { ...headers, 'x-b2b': undefined } }, deps)).code, 403);
  assert.equal((await call(handler, { ...base, headers: { ...headers, origin: 'https://evil.example' } }, deps)).code, 403);
  assert.equal((await call(handler, { ...base, headers: { ...headers, authorization: auth('max', 'spatne') } }, deps)).code, 401);
  const ok = await call(handler, { ...base, headers }, deps);
  assert.equal(ok.code, 200);
  assert.ok(!w.calls.github.some((c) => c.method === 'PUT' && c.path.includes('/inbox/')), 'zadny zapis do B2B inboxu');
  assert.ok(!JSON.stringify(ok.body).includes('write-token'), 'token neni v odpovedi');
});

test('handler: prehled e-shopu zapise domeny e-shop leadu do seznamu pro B2B, jen pri zmene a nejvys jednou za 10 minut', async () => {
  _internals.resetCache();
  const w = world({ leads: [lead(1), lead(7)] });
  const a = { authorization: auth('max', 'tajne') };
  const r = await call(handler, { query: { op: 'eshopy' }, headers: a }, { env, fetch: w.fetchImpl });
  assert.equal(r.code, 200);
  assert.equal(r.body.exclusions.ok, true);
  assert.equal(r.body.exclusions.added, 2);
  const puts = w.calls.github.filter((c) => c.method === 'PUT');
  assert.equal(puts.length, 1);
  assert.match(puts[0].path, /shared\/excluded-eshopy\.csv$/);
  assert.equal(puts[0].body.branch, 'main');
  assert.equal(puts[0].body.sha, 'sha1', 'prepis s sha (zadna ztrata cizi zmeny)');
  assert.deepEqual(parseCsv(w.files['main:shared/excluded-eshopy.csv']).map((x) => x.domena), ['obchod1.example', 'obchod7.example']);
  // druhe nacteni do 10 minut nic nezapisuje
  _internals.resetCache(); // vynuluje i casovac, takze dalsi beh by zapisovat smel...
  const again = await call(handler, { query: { op: 'eshopy' }, headers: a }, { env, fetch: w.fetchImpl });
  assert.equal(again.body.exclusions.added, 0, '...ale obsah je stejny, takze se nic nezapise');
  assert.equal(w.calls.github.filter((c) => c.method === 'PUT').length, 1);
  // B2B vidi, ktere sve balicky jsou zaroven e-shopy
  const w2 = world({ leads: [lead(2)] });
  _internals.resetCache();
  const ov = await call(handler, { query: { op: 'eshopy' }, headers: a }, { env, fetch: w2.fetchImpl });
  assert.deepEqual(ov.body.overlap, { 'doprava:11111111': 'Obchod 2' });
  assert.equal(ov.body.buckets.review[0].conflict.reason, 'b2b');
  assert.equal(ov.body.canAct, true);
  assert.equal(ov.body.b2bChecked, true);
});
