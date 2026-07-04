# Approval queue

`leads.jsonl` — one JSON object per line, appended by the overnight agent. Nothing here is sent
until you approve it. Morning routine: open each preview URL, then approve or drop.

## Schema (one line per lead)

```json
{"ts":"2026-07-01","business":"Kadeřnictví Lucie","industry":"beauty","template":"beauty/glow","preview":"https://xxx.vercel.app","email":"info@...","draft_id":"gmail-draft-abc","hook":"no mobile site","status":"ready"}
```

`status`: `ready` (awaiting your approval) | `partial` (agent stopped mid-cycle) | `approved` | `sent` | `dropped`

## Approve (you do this in the morning)
- Open `preview`. Good? Change `status` to `approved`.
- A separate send step (manual or a second agent you trigger) sends only `approved` rows, then flips them to `sent`.
- Never wire sending into the overnight loop.
