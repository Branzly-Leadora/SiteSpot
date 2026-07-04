// Picks the next lead for a moneyloop burst. Priority:
//   1. first row in moneyloop/leads-input.csv not already in the queue (manual overrides)
//   2. next suitable lead from the AIBS engine DB (status sourced/new, has contact info)
// Prints ONE lead as JSON on stdout, or NO_LEADS (exit 2) when both sources are dry.
// Never triggers paid sourcing (Apify) — refilling the engine DB is the owner's call.
// Usage (from repo root): node moneyloop/scripts/next-lead.mjs
import { readFileSync, existsSync } from 'node:fs';

const ROOT = 'C:/Users/ROG/Desktop/projekt/sitespot';
const AIBS_ENV = 'C:/Users/ROG/Desktop/projekt/AI_Business_System/.env.local';

// businesses already processed (queue is the dedup record)
const queue = existsSync(`${ROOT}/moneyloop/queue/leads.jsonl`)
  ? readFileSync(`${ROOT}/moneyloop/queue/leads.jsonl`, 'utf8').trim().split('\n').filter(Boolean)
      .map(l => JSON.parse(l).business.toLowerCase())
  : [];
const done = new Set(queue);

// 1) manual CSV rows first
function parseCsvLine(line) {
  const out = []; let cur = '', q = false;
  for (const ch of line) {
    if (ch === '"') q = !q;
    else if (ch === ',' && !q) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(s => s.trim());
}
const csv = readFileSync(`${ROOT}/moneyloop/leads-input.csv`, 'utf8').trim().split('\n').slice(1);
for (const line of csv) {
  if (!line.trim()) continue;
  const [name, industry, address, phone, website, email, hook] = parseCsvLine(line);
  if (name && !done.has(name.toLowerCase())) {
    console.log(JSON.stringify({ source: 'csv', name, industry, address, phone, website, email, hook }));
    process.exit(0);
  }
}

// 2) engine DB
const env = readFileSync(AIBS_ENV, 'utf8');
const grab = (k) => (env.match(new RegExp(`^${k}=(.*)$`, 'm')) || [])[1]?.trim();
const url = grab('NEXT_PUBLIC_SUPABASE_URL') || grab('SUPABASE_URL');
const key = grab('SUPABASE_SERVICE_ROLE_KEY') || grab('SUPABASE_SERVICE_KEY');
if (!url || !key) { console.error('engine env missing'); process.exit(1); }

const res = await fetch(
  `${url}/rest/v1/leads?select=business_name,category,location,phone,email,website&status=in.(sourced,new)&order=created_at.desc&limit=50`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } }
);
if (!res.ok) { console.error('engine query failed', res.status); process.exit(1); }
const leads = await res.json();

for (const l of leads) {
  const email = l.email && l.email !== 'N/A' ? l.email : '';
  if (!email && !l.phone) continue;                         // no way to reach them
  if (done.has((l.business_name || '').toLowerCase())) continue;
  console.log(JSON.stringify({
    source: 'engine-db',
    name: l.business_name,
    industry: l.category || '',
    address: l.location || '',
    phone: l.phone || '',
    website: l.website || 'none',
    email,
    hook: l.website ? 'weak/outdated website' : 'no website found',
  }));
  process.exit(0);
}

console.log('NO_LEADS');
process.exit(2);
