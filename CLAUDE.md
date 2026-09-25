# SiteSpot

Web agency site + template showcase. Node.js/Express - NOT Next.js.

## Stack
- `server.js` - Express, port 3010 (contact form → Nodemailer SMTP)
- Frontend: vanilla HTML/CSS/JS, multi-page
- `websites/templates/` - pre-built templates: beauty, gastro, maloobchod, řemesla
- Deployed on Vercel; user deploys manually (`npx vercel --prod`) - never auto-deploy

## Pages
`index.html` (main SPA), `leads.html`, `automation.html`, `marketing.html`, `brand.html`, `content.html`
Old site lives in `websites/` (root redirects there)

## Dev
`npm run dev` - nodemon on port 3010

## Design
Follow `DESIGN.md` for the **marketing site** (`index/leads/automation/marketing/brand/content.html`) - reuse the inline `:root` vars; never hardcode hex or add a second accent. `websites/templates/**` are OUT OF SCOPE - each template is its own brand; edit it against its own `css/style.css` only.

## Hard rules
- Never push to remote or deploy without explicit OK
- Git user: "SiteSpot"
- SMTP env vars live in Vercel project settings (not in repo)

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## Agent skills

### Issue tracker

Issues live as GitHub issues in this repo; use the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical roles, each label string equal to its role name. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context - `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
