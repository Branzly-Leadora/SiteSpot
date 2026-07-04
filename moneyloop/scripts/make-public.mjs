// Sets Vercel Authentication to preview-only on a demo project so the production
// demo URL is publicly viewable (team default `all_except_custom_domains` walls
// every *.vercel.app URL behind SSO — prospects would hit a login page).
// Usage (from repo root): node moneyloop/scripts/make-public.mjs <project-slug>
import { readFileSync } from 'node:fs';

const slug = process.argv[2];
if (!slug) { console.error('usage: make-public.mjs <project-slug>'); process.exit(1); }

const token = JSON.parse(readFileSync(
  process.env.APPDATA + '/com.vercel.cli/Data/auth.json', 'utf8')).token;

const res = await fetch(`https://api.vercel.com/v9/projects/${slug}?slug=ozaigla-9965s-projects`, {
  method: 'PATCH',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ ssoProtection: { deploymentType: 'preview' } }),
});
console.log(slug, res.status);
if (!res.ok) { console.error(await res.text()); process.exit(1); }
