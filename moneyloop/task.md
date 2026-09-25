# Overnight demo-loop - ONE burst

You are running headless, unattended. Do ONE full cycle for ONE new lead, then stop.
You have NO permission to send email, publish to prod, or spend paid APIs. Draft + queue only.

## Steps

1. **Pick a lead.** From the repo root run `node moneyloop/scripts/next-lead.mjs`. It prints ONE
   lead as JSON (manual rows in leads-input.csv first, then the AIBS engine database - both
   deduped against the queue). Fields: name, industry, address, phone, website ("none"), email, hook.
   If it prints `NO_LEADS`: log `no leads left - owner must run a sourcing batch in the AIBS engine`
   and STOP. Never invent leads. Never call paid sourcing APIs (Apify/engine import) yourself.

2. **Match a template.** Map industry → vertical:
   beauty | gastro | maloobchod (retail) | remesla (trades) | wellness.
   Look at the 6 designs under `websites/templates/<vertical>/` and pick the best fit.

3. **Customize a copy.** Copy the chosen design dir to `moneyloop/previews/<slug>/`.
   Edit its HTML/CSS in place: real business name, real services, hours, address, phone,
   swap the accent color to match their brand if known, swap the hero headline.
   DO NOT invent fake reviews or fake claims.

   **Photos matter most - this is the top conversion lever. Never ship grey placeholders.**
   Source real images in this priority order and replace the `.ph` placeholder divs with `<img>`
   (downloaded into `previews/<slug>/img/`, never hotlinked):
   a. The lead's OWN photos - their Instagram grid or Google Business listing (feels truly theirs).
   b. Fallback: Pexels API (key in moneyloop/.env as PEXELS_API_KEY) - search the exact service
      term, pick 4–6 high-res results. Match subject to the service (lashes, brows, interior).
      GOTCHA: Pexels 403s the default Python/curl user-agent - send a browser User-Agent header
      on both the API call AND the image download. Save into previews/<slug>/img/.
   DO NOT use keyword-scraping services (loremflickr, source.unsplash) - verified 2026-07-01 to
   return off-topic, watermarked junk (storefronts, ears, 3D renders). They will ruin the demo.
   After inserting, VISUALLY verify each image actually shows the right subject before queueing.

3b. **QA gate - every check MUST pass before deploying** (the 2026-07-01 run failed all four
   and its demos had to be repaired by hand):
   From the repo root run `node moneyloop/scripts/qa-check.mjs <slug>` - it must print PASS
   (exit 0). It automates the checks below (leftovers, placeholders, dead links, images,
   review labels, draft rules). Fix every ✗ and re-run until PASS; treat ⚠ warnings as
   judgment calls you must resolve honestly. The manual spec:
   - Zero template leftovers: grep the whole copy for the template's original business name,
     phone, e-mail and Instagram handle (e.g. "Aurea", "glowbar"). 0 matches required.
   - Subpages: either fully personalize menu/o-nas/galerie/kontakt.html too, or convert the
     demo to a ONE-PAGER - rewrite all nav/footer links to #anchors on index.html and DELETE
     the subpage files. Never ship a link that lands on another business's page.
   - No invented numbers (client counts, "+60 this week"). A rating (4,9★) only if it really
     is theirs on Google. Sample reviews must carry the label `ukázková recenze`.
   - Outreach draft: Czech, short, NO em dashes (-), and it must mention that the demo's
     reviews are illustrative.

4. **Deploy a PREVIEW.** From the copy dir, run `npx vercel --yes` (NOT `--prod`). Capture the URL.
   Then make it publicly viewable - the team default walls every new project behind Vercel SSO:
   from the repo root run `node moneyloop/scripts/make-public.mjs <slug>`.
   VERIFY: curl the URL - must return HTTP 200 (not 302) and the HTML must contain the
   business name. If it doesn't, mark `"status":"partial"` with a note and stop.
   If Vercel isn't configured at all, skip deploy and note `"preview": "LOCAL"`.

5. **Draft outreach.** Write a short, non-salesy Czech email: "I noticed <hook>, so I built you
   a live preview of a new site - here it is: <url>. If you like it I can have it live this week."
   Write the full subject + body into `moneyloop/queue/drafts/<slug>.txt`. Do NOT send anything.

   LEGAL (§7 zák. 480/2004 - required, non-negotiable): the body MUST contain a clear, free
   opt-out line (e.g. "A pokud web neřešíte, dejte mi krátce vědět a už se neozvu.") and the
   email MUST end with this exact identity footer:
   ```
   Hezký den,
   Maxmilián Hrubý
   SiteSpot, tvorba webů a AI automatizace
   Provozovatel: Leadora Technologies s.r.o., IČO 24624136, se sídlem Hostěradice 44, 252 82 Kamenný Přívoz
   www.sitespot.cz · max@sitespot.cz
   ```
   Keep it 1:1 and personalized to THIS business (never a generic mass template) - that is what
   keeps it a lawful individual proposal rather than spam (obchodní sdělení).

6. **Queue it.** Append ONE line to `moneyloop/queue/leads.jsonl` (schema in queue/README.md).

7. **Stop.** Print a 3-line summary: business, template used, preview URL. Do not start another lead.

## Hard rules
- Never send. Never `--prod`. Never fabricate reviews/testimonials.
- If you hit the token cap mid-cycle, save partial progress to the queue with `"status":"partial"` and stop.
- Cost-sensitive owner: no paid API calls beyond the Composio/Vercel free tiers without asking.
