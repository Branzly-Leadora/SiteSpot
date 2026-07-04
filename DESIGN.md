# SiteSpot — Design System

The rules the **main marketing site** must obey, so new sections look designed, not generated.

## Scope — READ FIRST
✅ **Applies to:** the marketing pages only — `index.html`, `leads.html`, `automation.html`, `marketing.html`, `brand.html`, `content.html`.
❌ **Does NOT apply to:** `websites/templates/**`. Each template (beauty, gastro, maloobchod, řemesla, wellness) is its **own brand** with its own palette, var names (`--ink`, `--acc`, `--muted`…) and fonts (Space Grotesk / Space Mono). Never impose these tokens on a template — you will break it. Edit a template only against its own `css/style.css`.

**Source of truth for tokens:** the inline `<style> :root {…}` block at the top of each marketing page (they're identical). `websites/css/style.css` is the *legacy* site copy and is NOT loaded by the live pages — do not treat it as authoritative. When in doubt, reuse a CSS var — never hardcode a hex.

## Feel

Dark, restrained, editorial-tech. Near-black canvas, a single teal accent, generous space, sharp type.
Effects stay quiet — subtle glows and a faint noise grain, never anything that fights the text.
Reference feel: Linear / Vercel / Stripe dark marketing pages.

## Color

| Token | Value | Use |
|---|---|---|
| `--bg` | `#070a0f` | page canvas |
| `--bg-2` | `#0c1018` | alt section band |
| `--surface` | `#111620` | cards, panels |
| `--surface-2` | `#181e2c` | raised / hover surface |
| `--accent` | `#27b7a5` | teal — primary CTAs, links, highlights |
| `--accent-2` | `#5dd9cb` | brighter teal — eyebrows, hover, gradients |
| `--accent-dim` | `rgba(39,183,165,.10)` | tinted fills |
| `--accent-glow` | `rgba(39,183,165,.22)` | shadow/glow on hover |
| `--white` | `#eef2f7` | primary text |
| `--gray` | `#7da8c4` | secondary text |
| `--gray-2` | `#3a5570` | muted / disabled |
| `--border` | `rgba(255,255,255,.07)` | hairlines |
| `--border-2` | `rgba(255,255,255,.14)` | emphasized borders |

**One accent only.** Teal is the sole color. No second brand hue. On teal fills, text is `#070a0f` (the bg), not white.

## Type

- **Body / UI:** DM Sans (`--font-sans`), weight 400, `line-height: 1.65`.
- **Headings / editorial italic:** Playfair Display (`--font-serif`).
- Headings are weight **700**, tight tracking **`-0.03em`**. Body copy ~`1.05rem`, color `--gray`.

Scale (all fluid — keep `clamp()`):
| Level | Size |
|---|---|
| Hero H1 | `clamp(3.5rem, 8vw, 8rem)` |
| Section H2 | `clamp(2rem, 4vw, 3.25rem)` |
| Card title | `1.25–1.5rem` / 700 |
| Body | `0.95–1.05rem` |
| **Eyebrow** | `0.68rem`, weight 600, `text-transform:uppercase`, `letter-spacing:0.22em`, color `--accent-2` |

Every section leads with an eyebrow label before its H2. That's the signature.

## Shape & motion

- **Radius:** `3px` buttons/inputs · `6px` cards · `100px` pills. Keep it sharp — no big rounded corners.
- **Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease`) for everything.
- **Hover:** lift `translateY(-2px)` + glow `box-shadow: 0 8px 32px var(--accent-glow)`. Transitions ~`0.2s`.
- **Layout:** `.container` = `max-width:1200px; padding:0 3rem`. Section rhythm is roomy vertical padding — don't crowd.
- **Ambient:** teal radial glows + `0.022` noise grain live in `.bg-layer`. Don't add competing backgrounds.

## Components (reuse, don't reinvent)

- `.eyebrow`, `.btn-primary`, `.btn-outline`, `.container` already exist — use them.
- New buttons match `.btn-primary`: `padding:.85rem 1.75rem`, weight 700, `0.875rem`, radius 3px.

## Do / Don't

- ✅ Reuse `:root` vars · one teal accent · eyebrow → H2 → body per section · sharp corners · quiet motion.
- ❌ New hex colors · a second accent · white text on teal · heavy shadows/borders · big border-radius · animations that distract from copy · refactoring unrelated CSS to "tidy up".
