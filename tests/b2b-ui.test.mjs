// Regresní test: B2B část dashboardu se při přidání dalších sekcí nesmí změnit.
// Potřebuje Playwright (hledá se v NODE_PATH nebo vedle projektu); bez něj se test přeskočí.
// Zlatý soubor vznikl ze stránky před přidáním sekce E-shopy. Přegenerování: UPDATE_GOLDEN=1 node --test tests/b2b-ui.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import { createRequire } from 'node:module';

import { buildEshopyView } from '../api/b2b.js';

const html = fs.readFileSync(new URL('../private/b2b.html', import.meta.url));
const fixture = JSON.parse(fs.readFileSync(new URL('./fixtures/b2b-synthetic.json', import.meta.url), 'utf8'));
const goldenUrl = new URL('./golden/b2b-ui.json', import.meta.url);

function loadPlaywright() {
  const bases = [process.env.NODE_PATH, '/opt/node22/lib/node_modules', new URL('../', import.meta.url).pathname].filter(Boolean);
  for (const base of bases) {
    try { return createRequire(base.endsWith('/') ? base : base + '/')('playwright'); } catch { /* další */ }
  }
  return null;
}
const pw = loadPlaywright();

// vymyšlené e-shopy; stejná struktura jako feed z Workeru e-shopu
const UID = (n) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const eshop = (n, over = {}, detail = {}) => ({
  id: UID(n), shopName: `Vymyšlený obchod ${n}`, url: `https://obchod${n}.example/`, email: `info@obchod${n}.example`, status: 'draft', offer: 'profit_control', auditUrl: `https://mhruby.eu/audit-${'a'.repeat(64)}`,
  detail: { revision: 'r'.repeat(64), greeting: 'Dobrý den', contactSource: `https://obchod${n}.example/kontakt`, day: '2026-10-06', evidenceVerified: true, screenshotHash: 's'.repeat(64), auditHash: 'h'.repeat(64),
    emailSubject: `Předmět ${n}`, emailBody: `Tělo zprávy ${n}`, packageHash: 'p'.repeat(64), observation: 'Pozorování', quote: 'Citace z webu', sourceUrl: `https://obchod${n}.example/doprava`, ...detail }, ...over,
});
const eshopFeed = (over = {}) => ({
  version: 1, updatedAt: '2026-10-07T08:50:00.000Z', source: 'notebook', lastRun: '2026-10-07T08:45:00.000Z', gmailConnected: true, sendingEnabled: false, dailySendLimit: 4,
  settings: { startHour: 9, endHour: 17, weekdaysOnly: true, minSendMinutes: 15, followupDays: 5 }, workflow: { deliveryMode: 'manual' }, events: [{ at: '2026-10-07T08:00:00.000Z', kind: 'sent', leadId: UID(3) }],
  autopilot: { mode: 'dry-run', paused: false, approval: 'human', at: '2026-10-07T08:30:00.000Z' }, sentReceipts: [], stats: { total: 6, ready: 3, sent: 2, replied: 1 },
  leads: [eshop(1), eshop(2, { status: 'approved' }, { approvedHash: 'p'.repeat(64) }), eshop(3, { status: 'sent', sentAt: '2026-10-06T09:00:00.000Z' }), eshop(4, { status: 'replied', sentAt: '2026-10-05T09:00:00.000Z', replyAt: '2026-10-06T09:00:00.000Z' }),
    { id: UID(5), shopName: 'Jen importovaný', url: 'https://i.example/', status: 'imported' }, eshop(6, {}, { company: { name: 'Šestka s.r.o.', ico: '12345678' } })], ...over,
});
const viewOf = (feed) => buildEshopyView(feed, { base: 'https://mhruby.eu', now: FROZEN_NOW });

const TABS = ['schvaleni', 'fronta', 'odeslano', 'odpovedi', 'overit', 'ukoly', 'bezwebu', 'aktivita', 'prehled'];
const FROZEN = Date.parse('2026-10-07T09:00:00.000Z');
const FROZEN_NOW = FROZEN;

test('B2B sekce vypadá po rozšíření stejně jako před ním', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    if (u.pathname === '/b2b' && u.searchParams.get('op') === 'data') { res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify(fixture)); }
    if (u.pathname === '/b2b' && u.searchParams.get('op') === 'eshopy') { res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify({ configured: false })); }
    if (u.pathname === '/b2b') { res.setHeader('content-type', 'text/html; charset=utf-8'); return res.end(html); }
    res.statusCode = 404; res.end();
  }).listen(0);
  const base = `http://localhost:${server.address().port}/b2b`;
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 }, colorScheme: 'dark' });
    await ctx.addInitScript(`(() => { const F = ${FROZEN}; const R = Date; globalThis.Date = class extends R { constructor(...a) { super(...(a.length ? a : [F])); } static now() { return F; } }; })();`);
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    const read = async (hash) => {
      await page.goto(base + hash);
      await page.reload();
      await page.waitForSelector('#app *');
      await page.waitForTimeout(120);
      // prvky přidané pro jiné oblasti se do porovnání nepočítají
      await page.evaluate(() => document.querySelectorAll('[data-new]').forEach((n) => n.remove()));
      return (await page.locator('#app').innerText()).replace(/\s+\n/g, '\n').trim();
    };
    const got = { home: await read('') };
    for (const seg of ['segment-a', 'segment-b']) for (const t of TABS) got[`${seg}/${t}`] = await read(`#/s/${seg}/${t}`);
    got['bez-webu'] = await read('#/bez-webu');
    assert.deepEqual(errors, []);
    if (process.env.UPDATE_GOLDEN === '1') { fs.writeFileSync(goldenUrl, JSON.stringify(got, null, 1) + '\n'); return; }
    const golden = JSON.parse(fs.readFileSync(goldenUrl, 'utf8'));
    assert.deepEqual(Object.keys(got), Object.keys(golden));
    for (const key of Object.keys(golden)) assert.equal(got[key], golden[key], `B2B stránka ${key} se změnila`);
  } finally {
    await browser.close();
    server.close();
  }
});


async function withPage(eshopyBody, fn) {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    if (u.pathname === '/b2b' && u.searchParams.get('op') === 'data') { res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify(fixture)); }
    if (u.pathname === '/b2b' && u.searchParams.get('op') === 'eshopy') { res.statusCode = eshopyBody.status ?? 200; res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify(eshopyBody.body)); }
    if (u.pathname === '/b2b') { res.setHeader('content-type', 'text/html; charset=utf-8'); return res.end(html); }
    res.statusCode = 404; res.end();
  }).listen(0);
  const base = `http://localhost:${server.address().port}/b2b`;
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 }, colorScheme: 'dark' });
    await ctx.addInitScript(`(() => { const F = ${FROZEN}; const R = Date; globalThis.Date = class extends R { constructor(...a) { super(...(a.length ? a : [F])); } static now() { return F; } }; })();`);
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    await fn(page, base, errors);
  } finally { await browser.close(); server.close(); }
}
const settle = async (page, base, hash) => { await page.goto(base + hash); await page.reload(); await page.waitForSelector('#app *'); await page.waitForTimeout(150); };

test('E-shopy: B2B stránky jsou i při napojených e-shopech slovo od slova stejné', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  await withPage({ body: viewOf(eshopFeed()) }, async (page, base, errors) => {
    const golden = JSON.parse(fs.readFileSync(goldenUrl, 'utf8'));
    const read = async (hash) => { await settle(page, base, hash); await page.evaluate(() => document.querySelectorAll('[data-new]').forEach((n) => n.remove())); return (await page.locator('#app').innerText()).replace(/\s+\n/g, '\n').trim(); };
    assert.equal(await read(''), golden.home, 'přehled B2B se změnil');
    for (const seg of ['segment-a', 'segment-b']) for (const t of TABS) assert.equal(await read(`#/s/${seg}/${t}`), golden[`${seg}/${t}`], `${seg}/${t}`);
    assert.deepEqual(errors, []);
  });
});

test('E-shopy: dvě skupiny na přehledu, KPI se nesčítají, sekce je jen ke čtení', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  await withPage({ body: viewOf(eshopFeed()) }, async (page, base, errors) => {
    await settle(page, base, '');
    const groups = await page.locator('.group-title').allInnerTexts();
    assert.deepEqual(groups.map((g) => g.trim().toLowerCase()), ['b2b segmenty', 'e-shopy, moje oblast']);
    const area = page.locator('section.area');
    const kpis = (await area.locator('.kpi').allInnerTexts()).map((t) => t.replace(/\s+/g, ' '));
    assert.deepEqual(kpis, ['2 Ke schválení', '1 Schváleno, čeká na odeslání', '2 Odesláno celkem', '1 Odpovědi', '0 STOP a nedoručené', '6 Leadů celkem']);
    const b2b = (await page.locator('section.kpis').first().innerText()).replace(/\s+/g, ' ');
    assert.match(b2b, /^2 Ke schválení 1 Schváleno/, 'B2B KPI vychází jen z B2B segmentů');
    assert.ok(!(await area.innerText()).includes('Vymyšlený segment'), 'oblasti se nemíchají');
    await settle(page, base, '#/eshopy/schvaleni');
    assert.equal(await page.locator('.pkg .btn.primary').count(), 0, 'žádné tlačítko Schválit');
    const text = await page.locator('#app').innerText();
    assert.match(text, /eshopy:00000000-0000-4000-8000-000000000001/);
    assert.match(text, /Jen přehled/);
    assert.ok((await page.locator('a[href^="https://mhruby.eu/eshopy/lead/"]').count()) >= 1);
    assert.deepEqual(errors, []);
  });
});

test('E-shopy: všechny záložky se vykreslí a po 30 minutách bez synchronizace svítí varování', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  const stale = viewOf(eshopFeed({ updatedAt: '2026-10-07T08:20:00.000Z' }));
  assert.equal(stale.stale, true);
  await withPage({ body: stale }, async (page, base, errors) => {
    await settle(page, base, '');
    assert.match(await page.locator('section.area').innerText(), /Data nejsou čerstvá/);
    for (const tab of ['schvaleni', 'schvaleno', 'odeslano', 'odpovedi', 'stop', 'overit', 'ostatni', 'aktivita', 'prehled']) {
      await settle(page, base, `#/eshopy/${tab}`);
      const txt = await page.locator('#app').innerText();
      assert.ok(txt.length > 60 && !/undefined|NaN|\[object/.test(txt), `záložka ${tab}`);
      assert.match(txt, /Data nejsou čerstvá/);
    }
    await settle(page, base, '#/eshopy/prehled');
    assert.match(await page.locator('#app').innerText(), /Součty sedí/);
    assert.deepEqual(errors, []);
  });
  await withPage({ body: viewOf(eshopFeed({ stats: { total: 9, ready: 3, sent: 2, replied: 1 } })) }, async (page, base) => {
    await settle(page, base, '#/eshopy/prehled');
    assert.match(await page.locator('#app').innerText(), /Součty nesedí/);
  });
});

test('E-shopy: nenastaveno a chyba ukážou návod či chybu v oblasti e-shopů a B2B zůstane v pořádku', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  await withPage({ body: { configured: false } }, async (page, base, errors) => {
    await settle(page, base, '');
    assert.match(await page.locator('section.area').innerText(), /zatím nejsou napojené/);
    assert.ok((await page.locator('.card').count()) >= 3, 'B2B karty jsou na místě');
    assert.deepEqual(errors, []);
  });
  await withPage({ status: 502, body: { configured: true, error: 'E-shopy: dashboard e-shopu vratil 401' } }, async (page, base) => {
    await settle(page, base, '');
    assert.match(await page.locator('section.area').innerText(), /nepodařilo načíst/);
    assert.ok((await page.locator('.card').count()) >= 3);
  });
});

test('E-shopy: text z cizího e-shopu se nikdy nevykoná', { skip: pw ? false : 'Playwright není k dispozici' }, async () => {
  const evil = eshopFeed({ leads: [eshop(1, { shopName: '<img src=x onerror="window.__xss=1">Zlý obchod' }, { observation: '<script>window.__xss=2</script>', emailBody: '<b onclick="window.__xss=3">tělo</b>' })], stats: { total: 1, ready: 1, sent: 0, replied: 0 } });
  await withPage({ body: viewOf(evil) }, async (page, base) => {
    await settle(page, base, '#/eshopy/schvaleni');
    assert.equal(await page.evaluate(() => window.__xss ?? 'ne'), 'ne');
    assert.match(await page.locator('#app').innerText(), /<img src=x/);
  });
});
