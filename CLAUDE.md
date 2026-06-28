# SiteSpot

Web agency site + template showcase. Node.js/Express — NOT Next.js.

## Stack
- `server.js` — Express, port 3010 (contact form → Nodemailer SMTP)
- Frontend: vanilla HTML/CSS/JS, multi-page
- `websites/templates/` — pre-built templates: beauty, gastro, maloobchod, řemesla
- Deployed on Vercel; user deploys manually (`npx vercel --prod`) — never auto-deploy

## Pages
`index.html` (main SPA), `leads.html`, `automation.html`, `marketing.html`, `brand.html`, `content.html`
Old site lives in `websites/` (root redirects there)

## Dev
`npm run dev` — nodemon on port 3010

## Hard rules
- Never push to remote or deploy without explicit OK
- Git user: "SiteSpot"
- SMTP env vars live in Vercel project settings (not in repo)
