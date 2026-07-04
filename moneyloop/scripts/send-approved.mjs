// Sends outreach for queue rows with status "approved" — and ONLY those.
// The owner flips status to "approved" in queue/leads.jsonl; this script sends
// via Purelymail SMTP and flips each row to "sent". Never touches other rows.
//
// Usage (from repo root):
//   node moneyloop/scripts/send-approved.mjs --test [address]   # one test mail to yourself
//   node moneyloop/scripts/send-approved.mjs                    # send all approved rows
//
// SMTP creds live in moneyloop/.env (SEND_SMTP_* keys) — never in this file.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const ROOT = 'C:/Users/ROG/Desktop/projekt/sitespot';
const require = createRequire(ROOT + '/package.json');
const nodemailer = require('nodemailer');

// tiny .env parse (stdlib only)
const env = {};
for (const line of readFileSync(`${ROOT}/moneyloop/.env`, 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
for (const k of ['SEND_SMTP_HOST', 'SEND_SMTP_USER', 'SEND_SMTP_PASS']) {
  if (!env[k]) { console.error(`missing ${k} in moneyloop/.env`); process.exit(1); }
}

const transporter = nodemailer.createTransport({
  host: env.SEND_SMTP_HOST,
  port: parseInt(env.SEND_SMTP_PORT) || 465,
  secure: (parseInt(env.SEND_SMTP_PORT) || 465) === 465,
  auth: { user: env.SEND_SMTP_USER, pass: env.SEND_SMTP_PASS },
});
const FROM = `"${env.SEND_FROM_NAME || 'David | SiteSpot'}" <${env.SEND_SMTP_USER}>`;

// ── test mode: verify auth + DKIM before any real send ──
if (process.argv[2] === '--test') {
  const to = process.argv[3] || 'max.hruby.cz@gmail.com';
  await transporter.sendMail({
    from: FROM, to,
    subject: 'SiteSpot outreach test (smažte mě)',
    text: 'Testovací e-mail z moneyloop send skriptu.\n\nZkontrolujte v Gmailu "show original": SPF=pass, DKIM=pass (sitespot.cz), DMARC=pass.\n\nSiteSpot',
  });
  console.log(`test mail sent to ${to} — open Gmail > show original > SPF/DKIM/DMARC must all be PASS`);
  process.exit(0);
}

// ── real run: approved rows only ──
function parseDraft(path) {
  const raw = readFileSync(`${ROOT}/moneyloop/${path.replace(/^queue\//, 'queue/')}`, 'utf8');
  const lines = raw.split('\n');
  const toLine = lines.find(l => l.startsWith('To:')) || '';
  if (/POZOR/i.test(toLine)) return { blocked: 'draft To: line carries a POZOR warning — resolve it first' };
  const to = (toLine.match(/[\w.+-]+@[\w.-]+\.\w+/) || [])[0];
  const subject = (lines.find(l => l.startsWith('Subject:')) || '').replace(/^Subject:\s*/, '').trim();
  const bodyStart = lines.findIndex(l => l.trim() === '');
  const text = lines.slice(bodyStart + 1).join('\n').trim();
  if (!to || !subject || !text) return { blocked: 'draft is missing To/Subject/body' };
  return { to, subject, text };
}

const qPath = `${ROOT}/moneyloop/queue/leads.jsonl`;
const rows = readFileSync(qPath, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
const approved = rows.filter(r => r.status === 'approved');
if (!approved.length) { console.log('nothing approved — flip "status":"approved" in queue/leads.jsonl first'); process.exit(0); }

const CAP = 10;
let sent = 0;
for (const row of approved.slice(0, CAP)) {
  const d = parseDraft(row.draft || `queue/drafts/${row.business.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`);
  if (d.blocked) { console.log(`SKIP ${row.business}: ${d.blocked}`); continue; }
  try {
    await transporter.sendMail({ from: FROM, to: d.to, subject: d.subject, text: d.text });
    row.status = 'sent';
    row.sent_ts = new Date().toISOString();
    writeFileSync(qPath, rows.map(r => JSON.stringify(r)).join('\n') + '\n');   // persist after EACH send
    sent++;
    console.log(`SENT ${row.business} -> ${d.to}`);
    if (sent < approved.length) await new Promise(r => setTimeout(r, 45000));   // 45 s between sends
  } catch (e) {
    console.error(`FAIL ${row.business}: ${e.message} — stopping`);
    break;
  }
}
console.log(`done: ${sent} sent`);
