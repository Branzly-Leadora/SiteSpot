# Moneyloop — overnight demo engine

Turns your 34 SiteSpot templates into personalized "I already built your site" demos + queued
outreach, while you sleep. You approve in the morning. Runs on your Claude Max sub (not metered API).

## How it works
Scheduled bursts (every ~4h) run one agent cycle each: source a lead → match a template →
customize a copy → deploy a preview → draft outreach → append to `queue/leads.jsonl`. The agent
can NEVER send — see task.md hard rules. Morning: open previews, approve, a separate step sends.

## One-time setup (v1 — NO Composio)

1. **Vercel auth** — `npx vercel login` once (you likely already have it) so bursts deploy previews.
2. **Leads** — put target businesses in `moneyloop/leads-input.csv` (header already there).
   Hand-pick 5–10 Prague businesses with weak/no sites, or have AIBS (../AI_Business_System)
   generate the list. That's it — no API keys, no accounts.

Add Composio LATER (auto lead-sourcing + Gmail drafts) only once the hook is proven to convert.

## Run one burst (test it first — do this manually before scheduling)
```
claude -p "$(cat moneyloop/task.md)" \
  --allowedTools "Read,Write,Edit,Bash" \
  --permission-mode acceptEdits
```
Watch it do ONE lead end to end. Fix the prompt if needed. THEN schedule.

## Schedule overnight bursts (Windows Task Scheduler, every 4h)
```powershell
$cmd = 'cd C:\Users\ROG\Desktop\projekt\sitespot; claude -p "$(cat moneyloop/task.md)" --allowedTools "Read,Write,Edit,Bash,mcp__composio__*" --permission-mode acceptEdits'
schtasks /Create /TN "moneyloop" /SC HOURLY /MO 4 /ST 22:00 /TR "powershell -NoProfile -Command \"$cmd\"" /F
```
(Cloud alternative: the `/schedule` skill runs it as a cron routine so your PC can be off — but
verify its token accounting matches your Max plan before relying on it overnight.)

## Morning (your only input, ~5 min)
1. Open `queue/leads.jsonl`, click each `preview` URL.
2. Good ones → set `"status":"approved"`.
3. Trigger the send step for approved rows (kept manual on purpose).

## Scaling (once it converts)
- More bursts / more verticals once reply-rate is proven.
- Feed replies back: a booked call = the loop works, then widen the funnel.
- Only THEN consider metered API for higher volume — with a budget you set.
