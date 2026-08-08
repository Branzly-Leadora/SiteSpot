// Generátor karuselu pro SiteSpot podle filozofie Orbitální ticho.
// Renderuje se přes Chromium, aby text i diakritika seděly na pixel a aby
// se použil skutečný značkový font, ne jeho náhrada.
import fs from 'node:fs'
import path from 'node:path'
import pkg from '/home/user/SiteSpot/node_modules/playwright/index.js'
const { chromium } = pkg

const PUB = '/home/user/SiteSpot/public'
const OUT = '/tmp/claude-0/-home-user-SiteSpot/3df88b26-a97a-5da8-b391-36467c83c69e/scratchpad/slides/out'
fs.mkdirSync(OUT, { recursive: true })

const font = (w) =>
  'data:font/woff2;base64,' + fs.readFileSync(`${PUB}/fonts/clash-display-${w}.woff2`).toString('base64')

// ---------------------------------------------------------------- obsah
const SLIDES = [
  {
    n: '01', kind: 'cover',
    eyebrow: 'SITESPOT · APLIKACE NA MÍRU',
    title: ['Potřebujete', 'aplikaci?'],
    accent: 'Ve většině případů ne.',
    foot: 'A my je stavíme.',
  },
  {
    n: '02', kind: 'quote',
    label: 'Jak to obvykle začne',
    quote: 'Máme to v tabulkách a je v tom chaos. Potřebujeme aplikaci.',
    foot: 'Slyšíme to skoro v každé první schůzce.',
  },
  {
    n: '03', kind: 'statement',
    label: 'Jenže',
    lead: 'Chaos v tabulkách není chybějící aplikace.',
    strong: 'Je to rozbitý proces.',
    body: 'Když ho přelijete do aplikace beze změny, koupíte si drahý chaos, do kterého se navíc musí přihlašovat.',
  },
  {
    n: '04', kind: 'list',
    label: 'Tři otázky, které rozhodnou',
    items: [
      'Kolik lidí to otevře každý den?',
      'Co se stane, když to neotevřou?',
      'Kdo to bude mít po spuštění na starost?',
    ],
    foot: 'Odpovědi existují? Pak je aplikace správná cesta.',
  },
  {
    n: '05', kind: 'statement',
    label: 'Když odpovědi existují',
    lead: 'Aplikace na míru sedí',
    strong: 'na váš provoz.',
    bullets: [
      'Ne provoz na ni.',
      'Žádné licence za funkce, které nikdo neotevře.',
      'Data zůstávají vám.',
    ],
  },
  {
    n: '06', kind: 'statement',
    label: 'Když neexistují',
    lead: 'Řekneme to.',
    strong: 'A postavíme něco menšího.',
    bullets: ['Automatizaci.', 'AI agenta nad daty, která už máte.', 'Nebo pořádný web.'],
    body: 'Levněji a s výsledkem dřív.',
  },
  {
    n: '07', kind: 'cta',
    eyebrow: 'VOLNÁ MÍSTA',
    title: ['Máme místo', 'na dva projekty.'],
    accent: 'Aplikace. Automatizace. Weby.',
    cta: 'Napište do komentáře TABULKA',
    foot: 'sitespot.cz',
  },
]

// ------------------------------------------------------- vizuální vrstva
// Hvězdné pole i mlhovina jsou deterministické: stejný vstup dá vždy stejný
// obraz, takže se snímky dají znovu vygenerovat beze změny.
const css = (W, H, S) => `
@font-face{font-family:'Clash';src:url('${font(400)}') format('woff2');font-weight:400}
@font-face{font-family:'Clash';src:url('${font(500)}') format('woff2');font-weight:500}
@font-face{font-family:'Clash';src:url('${font(600)}') format('woff2');font-weight:600}
@font-face{font-family:'Clash';src:url('${font(700)}') format('woff2');font-weight:700}
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#000}
.slide{
  position:relative;width:${W}px;height:${H}px;overflow:hidden;
  background:#000;color:#F5F6F8;font-family:'Clash',sans-serif;
  display:flex;flex-direction:column;
  padding:${96 * S}px ${88 * S}px ${88 * S}px;
}
/* mlhovina: dvě široké, měkké záře bez viditelných hran */
.neb{position:absolute;inset:0;pointer-events:none}
.neb::before{content:'';position:absolute;width:${W * 1.5}px;height:${W * 1.5}px;
  right:${-W * 0.55}px;top:${-H * 0.22}px;border-radius:50%;
  background:radial-gradient(circle,rgba(214,198,178,.20) 0%,rgba(150,140,130,.07) 38%,transparent 68%)}
.neb::after{content:'';position:absolute;width:${W * 1.7}px;height:${W * 1.7}px;
  left:${-W * 0.7}px;bottom:${-H * 0.3}px;border-radius:50%;
  background:radial-gradient(circle,rgba(74,96,168,.20) 0%,rgba(46,60,120,.07) 40%,transparent 70%)}
.stars{position:absolute;inset:0;pointer-events:none}
.grain{position:absolute;inset:0;pointer-events:none;opacity:.05;mix-blend-mode:overlay}
.vig{position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse at 50% 45%,transparent 42%,rgba(0,0,0,.72) 100%)}

/* systematická hlavička a patička: stejná pozice na všech plochách */
.hd{position:relative;display:flex;justify-content:space-between;align-items:baseline;
  font-size:${17 * S}px;font-weight:500;letter-spacing:${.22 * S}em;
  text-transform:uppercase;color:#7F858F}
.ft{position:relative;display:flex;justify-content:space-between;align-items:flex-end;
  font-size:${17 * S}px;font-weight:500;letter-spacing:${.16 * S}em;color:#7F858F}
.rule{position:relative;height:1px;background:rgba(245,246,248,.13);margin:${26 * S}px 0 0}
.body{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center}

.eyebrow{font-size:${19 * S}px;font-weight:500;letter-spacing:${.26 * S}em;
  text-transform:uppercase;color:#B9BFC9;margin-bottom:${40 * S}px}
.label{font-size:${22 * S}px;font-weight:500;letter-spacing:${.2 * S}em;
  text-transform:uppercase;color:#8E95A0;margin-bottom:${46 * S}px}

h1{font-size:${112 * S}px;font-weight:600;line-height:.95;letter-spacing:${-.028 * S}em}
h1 .dim{color:#6E7684}
.accent{font-size:${46 * S}px;font-weight:500;line-height:1.2;color:#E9EBEF;
  margin-top:${40 * S}px;letter-spacing:${-.012 * S}em}
.lead{font-size:${74 * S}px;font-weight:500;line-height:1.06;color:#9CA1AC;
  letter-spacing:${-.022 * S}em}
.strong{font-size:${74 * S}px;font-weight:600;line-height:1.06;color:#F5F6F8;
  letter-spacing:${-.022 * S}em;margin-top:${6 * S}px}
.para{font-size:${34 * S}px;font-weight:400;line-height:1.42;color:#9CA1AC;
  margin-top:${44 * S}px;max-width:${(W - 176 * S) * .94}px;letter-spacing:${-.005 * S}em}

.quote{font-size:${64 * S}px;font-weight:500;line-height:1.16;color:#F5F6F8;
  letter-spacing:${-.02 * S}em;position:relative;padding-left:${34 * S}px}
.quote::before{content:'';position:absolute;left:0;top:${10 * S}px;bottom:${10 * S}px;
  width:2px;background:rgba(245,246,248,.28)}

ol{list-style:none;counter-reset:q}
ol li{counter-increment:q;display:flex;gap:${30 * S}px;align-items:baseline;
  padding:${34 * S}px 0;border-top:1px solid rgba(245,246,248,.11)}
ol li:last-child{border-bottom:1px solid rgba(245,246,248,.11)}
ol li::before{content:'0' counter(q);font-size:${21 * S}px;font-weight:500;
  color:#6E7684;letter-spacing:${.1 * S}em;min-width:${52 * S}px}
ol li span{font-size:${40 * S}px;font-weight:500;line-height:1.24;letter-spacing:${-.016 * S}em;
  max-width:${(W - 176 * S) - 82 * S}px}

ul{list-style:none;margin-top:${44 * S}px}
ul li{font-size:${36 * S}px;font-weight:400;line-height:1.32;color:#B9BFC9;
  padding:${19 * S}px 0 ${19 * S}px ${34 * S}px;position:relative}
/* Odrážka je tečka, ne čárka. Vodorovná čárka vedle textu čte jako pomlčka
   a ta se ve značce SiteSpot nepoužívá. */
ul li::before{content:'';position:absolute;left:${3 * S}px;top:${32 * S}px;
  width:${7 * S}px;height:${7 * S}px;border-radius:50%;background:#6E7684}

.cta{display:inline-flex;align-items:center;align-self:flex-start;
  margin-top:${52 * S}px;padding:${26 * S}px ${44 * S}px;border-radius:999px;
  background:#F5F6F8;color:#05060A;font-size:${31 * S}px;font-weight:600;
  letter-spacing:${-.008 * S}em}
.dot{width:${11 * S}px;height:${11 * S}px;border-radius:50%;background:#7BE0A5;
  display:inline-block;margin-right:${16 * S}px}
.site{font-size:${30 * S}px;font-weight:600;color:#F5F6F8;letter-spacing:${.01 * S}em}
.swipe{display:flex;align-items:center;gap:${13 * S}px}
`

const stars = (W, H, seed) => {
  // vlastní generátor, aby byl výsledek pokaždé stejný
  let s = seed
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296)
  let out = ''
  for (let i = 0; i < 460; i++) {
    const x = rnd() * W, y = rnd() * H
    const r = rnd()
    const size = r > 0.965 ? 2.6 : r > 0.83 ? 1.8 : 1.15
    const op = (0.14 + rnd() * 0.62).toFixed(3)
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size}" fill="#fff" opacity="${op}"/>`
  }
  // několik jasnějších bodů se závojem, aby pole mělo hloubku
  for (let i = 0; i < 9; i++) {
    const x = rnd() * W, y = rnd() * H
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(5 + rnd() * 4).toFixed(1)}" fill="url(#g)" opacity="0.5"/>`
  }
  return `<svg class="stars" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
   <defs><radialGradient id="g"><stop offset="0" stop-color="#fff" stop-opacity=".85"/>
   <stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>${out}</svg>`
}

const grain = `<svg class="grain"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')

function render(sl, i, W, H, S, total) {
  const head = `<div class="hd"><span>SiteSpot</span><span>${sl.n} / ${String(total).padStart(2, '0')}</span></div><div class="rule"></div>`
  const nav = i < total - 1
    ? `<div class="swipe"><span>Táhněte dál</span><span>&#8594;</span></div>`
    : `<span class="site">sitespot.cz</span>`

  let inner = '', foot = `<div class="ft"><span>${sl.kind === 'cta' ? 'PRAHA · CELÁ ČR' : 'APLIKACE · AUTOMATIZACE · WEBY'}</span>${nav}</div>`

  if (sl.kind === 'cover') {
    inner = `<div class="eyebrow">${esc(sl.eyebrow)}</div>
      <h1>${esc(sl.title[0])}<br><span class="dim">${esc(sl.title[1])}</span></h1>
      <div class="accent">${esc(sl.accent)}</div>`
    foot = `<div class="ft"><span>${esc(sl.foot)}</span>${nav}</div>`
  } else if (sl.kind === 'cta') {
    inner = `<div class="eyebrow"><span class="dot"></span>${esc(sl.eyebrow)}</div>
      <h1>${esc(sl.title[0])}<br><span class="dim">${esc(sl.title[1])}</span></h1>
      <div class="accent">${esc(sl.accent)}</div>
      <div class="cta">${esc(sl.cta)}</div>`
  } else if (sl.kind === 'quote') {
    inner = `<div class="label">${esc(sl.label)}</div>
      <div class="quote">&bdquo;${esc(sl.quote)}&ldquo;</div>
      <div class="para">${esc(sl.foot)}</div>`
  } else if (sl.kind === 'list') {
    inner = `<div class="label">${esc(sl.label)}</div>
      <ol>${sl.items.map((t) => `<li><span>${esc(t)}</span></li>`).join('')}</ol>
      <div class="para">${esc(sl.foot)}</div>`
  } else {
    inner = `<div class="label">${esc(sl.label)}</div>
      <div class="lead">${esc(sl.lead)}</div><div class="strong">${esc(sl.strong)}</div>
      ${sl.bullets ? `<ul>${sl.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      ${sl.body ? `<div class="para">${esc(sl.body)}</div>` : ''}`
  }

  return `<div class="slide"><div class="neb"></div>${stars(W, H, 7919 + i * 104729)}${grain}<div class="vig"></div>
    ${head}<div class="body">${inner}</div>${foot}</div>`
}

async function build({ W, H, S, dir, prefix }) {
  fs.mkdirSync(dir, { recursive: true })
  const html = `<html><head><meta charset="utf-8"><style>${css(W, H, S)}</style></head><body>
    ${SLIDES.map((s, i) => render(s, i, W, H, S, SLIDES.length)).join('')}</body></html>`
  const tmp = path.join(dir, '_slides.html')
  fs.writeFileSync(tmp, html)

  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--force-device-scale-factor=1'],
  })
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 })
  await p.goto('file://' + tmp, { waitUntil: 'load' })
  await p.waitForTimeout(1500)

  const files = []
  const nodes = await p.locator('.slide').all()
  for (let i = 0; i < nodes.length; i++) {
    const f = path.join(dir, `${prefix}-${String(i + 1).padStart(2, '0')}.png`)
    await nodes[i].screenshot({ path: f })
    files.push(f)
  }
  // kontrola přetečení: nic nesmí vylézt z plochy
  // Kontrola sazby: hvězdné pole se přeskakuje, to je záměrně ořezané.
  // Hlídá se, že žádný text nezasahuje do okrajů, ne jen do plochy.
  const PAD = { x: 88 * S, y: 88 * S }
  const over = await p.evaluate(({ px, py }) => {
    const bad = []
    document.querySelectorAll('.slide').forEach((s, i) => {
      const r = s.getBoundingClientRect()
      s.querySelectorAll('h1,div,span,li,ol,ul').forEach((e) => {
        if (e.closest('svg') || e.classList.contains('neb') || e.classList.contains('vig')) return
        if (!e.textContent.trim()) return
        const b = e.getBoundingClientRect()
        if (b.width === 0 || b.height === 0) return
        const m = Math.min(b.left - r.left, r.right - b.right, b.top - r.top, r.bottom - b.bottom)
        if (m < Math.min(px, py) - 1)
          bad.push(`snimek ${i + 1}: ${(e.className || e.tagName).toString().slice(0, 24)} rezerva ${Math.round(m)}px`)
      })
    })
    return [...new Set(bad)]
  }, { px: PAD.x, py: PAD.y })
  await b.close()
  return { files, over }
}

const ig = await build({ W: 1080, H: 1350, S: 1, dir: OUT + '/instagram', prefix: 'sitespot-aplikace-ig' })
const li = await build({ W: 1200, H: 1500, S: 1200 / 1080, dir: OUT + '/linkedin', prefix: 'sitespot-aplikace-li' })
console.log('Instagram:', ig.files.length, 'snimku | preteceni:', ig.over.length ? ig.over : 'zadne')
console.log('LinkedIn :', li.files.length, 'snimku | preteceni:', li.over.length ? li.over : 'zadne')
