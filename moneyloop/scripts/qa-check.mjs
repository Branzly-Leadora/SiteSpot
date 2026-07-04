#!/usr/bin/env node
// qa-check.mjs — automated QA gate for moneyloop demo previews (task.md step 3b).
// Usage:
//   node moneyloop/scripts/qa-check.mjs <slug>                 (template read from queue/leads.jsonl)
//   node moneyloop/scripts/qa-check.mjs <slug> --template beauty/glow
//   node moneyloop/scripts/qa-check.mjs --all
// Exit 0 = all checks pass (demo may be queued). Exit 1 = at least one FAIL.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PREVIEWS = join(ROOT, 'moneyloop', 'previews');
const QUEUE = join(ROOT, 'moneyloop', 'queue', 'leads.jsonl');
const TEMPLATES = join(ROOT, 'websites', 'templates');

const MIN_IMG_BYTES = 10 * 1024; // smaller = broken download / tracking pixel

const args = process.argv.slice(2);
const flagIdx = args.indexOf('--template');
const templateFlag = flagIdx > -1 ? args.splice(flagIdx, 2)[1] : null;

function queueRows() {
  if (!existsSync(QUEUE)) return [];
  return readFileSync(QUEUE, 'utf8').split('\n').filter(Boolean).map(l => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

function slugOfRow(row) {
  const d = row.draft || row.draft_id || '';
  const m = /drafts\/([\w-]+)\.txt/.exec(d);
  return m ? m[1] : null;
}

function htmlFiles(dir) {
  return readdirSync(dir).filter(f => f.endsWith('.html')).map(f => join(dir, f));
}

// ── Marker extraction from the source template ────────────
// Everything that identifies the ORIGINAL business: emails + their domains,
// phone digits, instagram handles, first segment of <title>.
function templateMarkers(tplDir) {
  const markers = new Set();
  for (const file of htmlFiles(tplDir)) {
    const html = readFileSync(file, 'utf8')
      // form placeholders (jana@email.cz) are generic, not identity
      .replace(/placeholder="[^"]*"/gi, '');
    for (const m of html.matchAll(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi)) {
      markers.add(m[0].toLowerCase());
      markers.add(m[0].toLowerCase().split('@')[1]); // domain alone is a marker
    }
    for (const m of html.matchAll(/tel:\+?([\d\s]{9,16})/gi)) {
      markers.add(m[1].replace(/\D/g, '').slice(-9)); // last 9 digits, normalized
    }
    for (const m of html.matchAll(/instagram\.com\/([\w.]+)|>@([\w.]{3,})</gi)) {
      markers.add('@' + (m[1] || m[2]).toLowerCase().replace(/\/$/, ''));
    }
    // business name only from the homepage title — subpage titles are generic words
    if (basename(file) === 'index.html') {
      const title = /<title>([^<]+)<\/title>/i.exec(html);
      if (title) {
        const seg = title[1].split(/[—|–-]/)[0].trim();
        if (seg.length >= 3) markers.add(seg.toLowerCase());
      }
    }
  }
  return [...markers].filter(Boolean);
}

// ── Checks on one preview ─────────────────────────────────
function checkPreview(slug, tplRel, rows) {
  const dir = join(PREVIEWS, slug);
  const fails = [], warns = [];
  const ok = (c, msg) => { if (!c) fails.push(msg); };

  if (!existsSync(dir)) { fails.push(`preview dir missing: ${dir}`); return { fails, warns }; }
  const tplDir = join(TEMPLATES, tplRel || '');
  if (!tplRel || !existsSync(tplDir)) { fails.push(`template not found: "${tplRel}" (row template field or --template)`); return { fails, warns }; }

  const markers = templateMarkers(tplDir);
  const pages = htmlFiles(dir);
  ok(pages.length > 0, 'no .html files in preview');

  let hasStars = false;
  let hasSampleLabel = false;

  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    const name = basename(page);
    const lower = html.toLowerCase();
    const digits = html.replace(/\D/g, '');

    // 1) zero template leftovers
    for (const mk of markers) {
      const hit = /^\d{9}$/.test(mk) ? digits.includes(mk) : lower.includes(mk);
      ok(!hit, `${name}: template leftover "${mk}"`);
    }

    // 2) no EMPTY placeholder divs — a .ph wrapper with a real <img> inside is the repaired state
    ok(!/<div class=["']ph[^"']*["']>\s*<\/div>/.test(html), `${name}: empty .ph placeholder div(s) — replace with real <img>`);

    // 3) local html links must resolve (one-pager rule)
    for (const m of html.matchAll(/href="([^"#:]+\.html)[^"]*"/gi)) {
      ok(existsSync(join(dir, m[1])), `${name}: dead link "${m[1]}" (personalize the subpage or convert to one-pager anchors)`);
    }

    // 4) images: local, existing, non-trivial size
    for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/gi)) {
      const src = m[1];
      if (/^(https?:)?\/\//i.test(src)) { fails.push(`${name}: hotlinked image ${src} (download into img/)`); continue; }
      if (src.startsWith('data:')) continue;
      const f = join(dir, src.split('?')[0]);
      if (!existsSync(f)) { fails.push(`${name}: missing image file ${src}`); continue; }
      ok(statSync(f).size >= MIN_IMG_BYTES, `${name}: suspiciously small image ${src} (<10KB, likely broken download)`);
    }

    // 5) invented numbers / unlabeled sample reviews
    if (/★/.test(html)) hasStars = true;
    // must be the actual review label, not the generic "Ukázkový web" footer badge
    if (/ukázkov[áéí]?\s+recenz|ilustra[čt]/i.test(html)) hasSampleLabel = true;
    for (const m of html.matchAll(/\+\s?\d+\s*(nov[ýé]|klient|tento týden|this week)/gi)) {
      fails.push(`${name}: invented-looking count "${m[0].trim()}"`);
    }
    if (/[45][.,]\d\s*★/.test(html)) {
      warns.push(`${name}: shows a star rating — confirm it really is theirs on Google`);
    }
  }
  if (hasStars && !hasSampleLabel) {
    fails.push(`reviews/stars present but no "ukázková recenze" label anywhere`);
  }

  // 6) outreach draft rules
  const draft = join(ROOT, 'moneyloop', 'queue', 'drafts', `${slug}.txt`);
  if (!existsSync(draft)) {
    fails.push(`outreach draft missing: queue/drafts/${slug}.txt`);
  } else {
    const txt = readFileSync(draft, 'utf8');
    ok(!txt.includes('—'), 'draft: contains em dash (—) — rewrite without it');
    ok(/https?:\/\//.test(txt), 'draft: no preview URL in the text');
    if (hasStars) ok(/ukázkov|ilustra/i.test(txt), 'draft: must mention that demo reviews are illustrative');
  }

  // 7) queue row sanity
  const row = rows.find(r => slugOfRow(r) === slug);
  if (row) ok(/^https?:\/\//.test(row.preview || '') || row.preview === 'LOCAL', 'queue row: preview URL missing/invalid');
  else warns.push('no row in queue/leads.jsonl yet (fine if you queue after QA)');

  return { fails, warns };
}

// ── Main ──────────────────────────────────────────────────
const rows = queueRows();
let slugs;
if (args[0] === '--all') {
  slugs = existsSync(PREVIEWS) ? readdirSync(PREVIEWS).filter(d => statSync(join(PREVIEWS, d)).isDirectory()) : [];
} else if (args[0]) {
  slugs = [args[0]];
} else {
  console.error('usage: qa-check.mjs <slug> [--template vertical/design] | --all');
  process.exit(2);
}

let anyFail = false;
for (const slug of slugs) {
  const row = rows.find(r => slugOfRow(r) === slug);
  const tpl = templateFlag || row?.template || null;
  const { fails: rawFails, warns } = checkPreview(slug, tpl, rows);
  const fails = [...new Set(rawFails)];
  const status = fails.length ? 'FAIL' : 'PASS';
  if (fails.length) anyFail = true;
  console.log(`\n${status}  ${slug}  (template: ${tpl || '?'})`);
  for (const f of fails) console.log(`  ✗ ${f}`);
  for (const w of warns) console.log(`  ⚠ ${w}`);
  if (!fails.length && !warns.length) console.log('  all checks clean');
}
process.exit(anyFail ? 1 : 0);
