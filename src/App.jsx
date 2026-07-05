import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import SpaceHero from './SpaceHero'
import { LogoMark } from './Logo'
import Templates from './Templates'
import { FramerLogo, ClaudeLogo, OpenAILogo, N8nLogo, GeminiLogo, BRANDS } from './BrandLogos'
import { SplineScene } from './SplineScene'
import {
  Mail, Phone, MapPin, ArrowRight, Star,
  Globe, Bot, Target, Megaphone, Search, Rocket, LineChart,
  PiggyBank, Zap, Lightbulb, Crosshair, TrendingUp,
  Rows3, Layers, Gauge, PhoneCall, Send, MessageSquare,
  CheckCircle2, Clock3, Receipt, Check, X, Unlock,
} from 'lucide-react'

// own icon set (lucide) mapped to sections — no third-party artwork
const SERVICE_ICONS = [Globe, PhoneCall, LineChart, Bot, Megaphone, MessageSquare]
const PROCESS_ICONS = [Search, Rocket, LineChart]
const BENEFIT_ICONS = [LineChart, Zap, Layers, Unlock, Bot, PhoneCall]
const TIER_ICONS = [Rows3, Layers, Gauge]
const CASE_ICONS = [TrendingUp, Target, PiggyBank]
const STAT_ICONS = [CheckCircle2, Clock3, Target, Star]

function KIcon({ C, size = 22, color = '#F2F4F8', strokeWidth = 1.7 }) {
  return <span style={{ color, lineHeight: 0, display: 'inline-flex' }}><C size={size} strokeWidth={strokeWidth} /></span>
}

// Framer-style button with a vertical label swap on hover
function Btn({ className = '', children, ...rest }) {
  return (
    <a className={`hbtn ${className}`} {...rest}>
      <span className="hbtn-label">{children}</span>
      <span className="hbtn-arrow" aria-hidden><ArrowRight size={15} strokeWidth={2.3} /></span>
    </a>
  )
}

// Brand glyphs — inline so we don't depend on the icon set shipping them
function LinkedinIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon({ size = 15 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// fluid dynamic-island spring — critically damped (no overshoot), fast settle (~0.2s)
const ISLAND_SPRING = { type: 'spring', stiffness: 300, damping: 32, mass: 0.85 }
// the island resize (open + close) runs on a fixed-duration tween, not a spring —
// a spring's asymptotic tail made the close drag on; a tween finishes crisply
const ISLAND_LAYOUT = { duration: 0.18, ease: [0.22, 1, 0.36, 1] }

// gradient-ring avatar with initials — original, no third-party artwork
const AVATAR_HUES = {
  'Martin Dvořák': ['#8B8F98', '#D7DAE0'],
  'Lucie Králová': ['#8B8F98', '#D7DAE0'],
  'Petr Novotný': ['#8B8F98', '#D7DAE0'],
}
const AVATAR_PHOTOS = {
  'Martin Dvořák': 'https://i.pravatar.cc/150?img=13',
  'Lucie Králová': 'https://i.pravatar.cc/150?img=45',
  'Petr Novotný': 'https://i.pravatar.cc/150?img=68',
}
function Avatar({ name, size = 48 }) {
  const init = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  const [a, b] = AVATAR_HUES[name] || ['#3E6FF4', '#7AA0FF']
  const photo = AVATAR_PHOTOS[name]
  const [err, setErr] = useState(false)
  return (
    <span className="avatar" style={{ width: size, height: size, background: `conic-gradient(from 140deg, ${a}, ${b}, ${a})` }}>
      {photo && !err
        ? <img className="avatar-in" src={photo} alt={name} loading="lazy" onError={() => setErr(true)} />
        : <span className="avatar-in avatar-init" style={{ fontSize: size * 0.36 }}>{init}</span>}
    </span>
  )
}

const NAV = [
  { label: 'Služby', href: '#sluzby', id: 'sluzby' },
  { label: 'Jak pracujeme', href: '#proces', id: 'proces' },
  { label: 'Šablony', href: '#sablony', id: 'sablony' },
  { label: 'Ceník', href: '#cenik', id: 'cenik' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

const STATS = [
  { count: 120, suffix: '+', cap: 'dokončených projektů' },
  { count: 14000, suffix: '+', cap: 'hodin ušetřených automatizacemi' },
  { count: 3800, suffix: '+', cap: 'získaných leadů pro klienty' },
  { count: 98, suffix: ' %', cap: 'klientů nás doporučuje dál' },
]

const PROCESS = [
  { no: '01', h: 'Analýza', p: 'Projdeme váš byznys, čísla a konkurenci. Do týdne víte, kde vám utíkají zákazníci a co s tím uděláme.' },
  { no: '02', h: 'Realizace', p: 'Navrhneme, postavíme a spustíme. Web, automatizace i kampaně — bez průtahů a bez výmluv.' },
  { no: '03', h: 'Optimalizace a péče', p: 'Spuštěním nekončíme. Měříme, testujeme a každý měsíc posouváme výsledky o kus dál.' },
]

const SERVICES = [
  { h: 'Tvorba webů', p: 'Rychlé, moderní weby postavené na datech, ne na pocitech. Od landing page po e-shop.', type: 'tasklist', textFirst: true },
  { h: 'Hlasoví AI agenti', p: 'AI vyřizuje hovory, dotazy a rezervace za vás — spolehlivě a nonstop.', type: 'voice', textFirst: false },
  { h: 'Datové přehledy', p: 'Proměníme čísla z kampaní a provozu v přehledné, akční insighty.', type: 'budget', textFirst: true },
  { h: 'Vlastní AI agenti', p: 'Postavíme AI systémy na míru vašemu byznysu, které myslí a jednají samy.', type: 'team', textFirst: false },
  { h: 'Marketingové kampaně', p: 'Výkonnostní kampaně napříč kanály, řízené daty, ne pocitem.', type: 'marketing', textFirst: false },
  { h: 'Chatboti na míru', p: 'Okamžité, přesné odpovědi zákazníkům kdykoliv, s AI, co zná váš byznys.', type: 'chatbot', textFirst: false },
]

const CASES = [
  { k: 'E-shop · doplňky stravy', num: 212, prefix: '+', suffix: ' %', trend: 'up', lead: 'tržeb za 6 měsíců', from: '1,1 %', to: '3,4 %', metric: 'konverzní poměr', p: 'Nový web, přestavěný funnel a výkonnostní kampaně. Konverzní poměr vzrostl z 1,1 % na 3,4 %.' },
  { k: 'B2B · strojírenská výroba', num: 9, prefix: '', suffix: '×', trend: 'step', lead: 'více poptávek měsíčně', from: '5', to: '47', metric: 'poptávky / měsíc', p: 'Z 5 na 47 poptávek měsíčně. Automatizace zpracování poptávek navíc šetří 30 hodin práce obchodu.' },
  { k: 'Služby · advokátní kancelář', num: 58, prefix: '−', suffix: ' %', trend: 'down', lead: 'nižší cena za lead', from: '100 %', to: '42 %', metric: 'náklady na lead', p: 'Přesnější cílení a nové landing pages. Kancelář naplnila kapacitu do tří měsíců od spuštění.' },
]

// mini trend sparkline for case-study cards
function CaseSpark({ dir }) {
  const sets = { up: [6, 11, 8, 17, 22, 31, 42], step: [8, 8, 17, 17, 27, 27, 40], down: [42, 35, 31, 20, 15, 9, 5] }
  const vals = sets[dir] || sets.up
  const w = 120, h = 42, max = 46
  const xy = vals.map((v, i) => [(i / (vals.length - 1)) * w, h - (v / max) * h])
  const line = xy.map((p) => p.join(',')).join(' ')
  const area = `0,${h} ${line} ${w},${h}`
  return (
    <svg className="case-spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
      <polygon className="case-spark-area" points={area} />
      <polyline className="case-spark-line" points={line} />
    </svg>
  )
}

const BENEFITS = [
  { h: 'Výsledky v číslech', p: 'Měřitelné, každý měsíc.', stat: '+212 %', mini: 'finance' },
  { h: 'Rychlost', p: 'První výstupy do 14 dnů.', stat: '14 dní', mini: 'timeline' },
  { h: 'Jeden partner', p: 'Vše pod jednou střechou.', stat: '1 tým', mini: 'team' },
  { h: 'Bez závazků', p: 'Zůstanete, protože to funguje.', stat: '0 smluv' },
  { h: 'Technologie 2026', p: 'AI, co konkurence nemá.', stat: '24/7' },
  { h: 'Lidský přístup', p: 'Mluvíme česky, ne buzzwordy.', stat: '100 %' },
]

// mini dashboard visuals inside the benefits bento — Notch-style card fillings
function BenMini({ type }) {
  if (type === 'finance') {
    const rows = [['Poptávky', 74], ['Ušetřené hodiny', 62], ['Konverze', 45]]
    return (
      <div className="bmini bmini-fin">
        <div className="bfin-head"><span>Získané leady</span><b data-count="3800" data-suffix="+">0</b></div>
        {rows.map(([l, v], i) => (
          <div className="bfin-row" key={i}><span>{l}</span><span className="bfin-bar"><span style={{ width: v + '%' }} /></span></div>
        ))}
      </div>
    )
  }
  if (type === 'timeline') {
    const steps = ['Analýza hotová', 'Návrh schválen', 'Web spuštěn']
    return (
      <div className="bmini bmini-tl">
        {steps.map((s, i) => (
          <div className="btl-row" key={i}><span className="btl-ic"><CheckCircle2 size={14} strokeWidth={2} /></span>{s}</div>
        ))}
      </div>
    )
  }
  if (type === 'team') {
    const team = [['OŽ', 'Oliver', 'Strategie', '#3FCF8E'], ['DS', 'David', 'Design', '#5B9BFF'], ['MH', 'Max', 'Vývoj', '#E0A93E']]
    return (
      <div className="bmini bmini-team">
        {team.map(([ini, n, r, c], i) => (
          <div className="btm-row" key={i}>
            <span className="btm-av">{ini}</span>
            <span className="btm-meta"><b>{n}</b><i>{r}</i></span>
            <span className="btm-dot" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
          </div>
        ))}
      </div>
    )
  }
  return null
}

// marquee band — outline slogans drifting between sections, split by a spinning star
const MARQ = ['Weby, které prodávají', 'AI, která pracuje za vás', 'Automatizace bez chyb', 'Výsledky v číslech']
function Marquee({ reverse = false }) {
  const seq = (k) => (
    <div className="marq-seq" key={k}>
      {MARQ.map((t, i) => (
        <span className="marq-item" key={i}>{t}<i className="marq-star">✦</i></span>
      ))}
    </div>
  )
  return (
    <div className={`marq${reverse ? ' rev' : ''}`} aria-hidden>
      <div className="marq-track">{[0, 1].map(seq)}</div>
    </div>
  )
}

// intro preloader — logo + 0→100 % count, then the curtain lifts
function Preloader() {
  const [n, setN] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t0 = performance.now(), dur = 1300
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round((1 - Math.pow(1 - p, 2)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 220)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="preloader" exit={{ y: '-100%' }} transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}>
          <span className="pre-mark"><LogoMark size={46} /></span>
          <span className="pre-num">{n} %</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const TESTIMONIALS = [
  { quote: 'Do tří měsíců se nám poptávky zdvojnásobily. Poprvé máme agenturu, která mluví v číslech, ne ve slibech.', name: 'Martin Dvořák', role: 'jednatel, TZB Systémy' },
  { quote: 'Automatizace od SiteSpotu nám šetří přes 40 hodin měsíčně. Fakturace a CRM běží samy, my se věnujeme klientům.', name: 'Lucie Králová', role: 'majitelka, Studio Květ' },
  { quote: 'Nový web se zaplatil za šest týdnů. Konečně přesně vím, kam jde každá koruna z marketingu a co mi vrací.', name: 'Petr Novotný', role: 'CEO, Fitbox.cz' },
]

// Published prices are the small-firm "od" (starting-at) floor only.
// The full price matrix (larger client bands) stays internal — final fixed
// price is always given by a human after a short brief, never auto-generated.
const PLANS = [
  { tier: 'Starter', price: 'od 16 000 Kč', per: 'jednorázově', brief: 'finální cena po krátkém briefu', desc: 'Pro živnostníky a malé firmy, co potřebují web, který konečně přivádí zákazníky.', feats: ['Landing page nebo malý firemní web', 'Texty a copywriting v ceně', 'SEO základ a analytika', 'Spuštění do 3 týdnů', '30 dní podpory zdarma'], cta: 'Chci web' },
  { tier: 'Business', price: 'od 29 000 Kč', per: 'jednorázově', brief: 'finální cena po krátkém briefu', desc: 'Web na míru s prvními automatizacemi a marketingovým základem.', feats: ['Vícestránkový web na míru', 'Napojení na rezervace nebo CRM', '1 AI automatizace nebo chatbot', 'SEO a měření konverzí', 'Onboarding a zaškolení'], cta: 'Chci víc', featured: true },
  { tier: 'Full Stack', price: 'od 19 000 Kč', per: 'měsíčně, bez závazku', brief: 'finální cena po krátkém briefu', desc: 'Web, kampaně i automatizace pod jednou střechou — pro firmy, kde je online hlavní růstový kanál.', feats: ['Vše z tarifu Business', 'Správa kampaní (Google + Meta)', 'AI automatizace na míru', 'Průběžná optimalizace a A/B testy', 'Měsíční report + konzultace'], cta: 'Chci růst' },
]

const CMP_BAD = ['Pomalé, ruční procesy', 'Náchylné k lidským chybám', 'Vyžaduje více lidí', 'Těžko škáluje bez náboru', 'Omezené na pracovní dobu', 'Rozhodování od oka a s prodlevami', 'Rutina zpomaluje tým', 'Vícekrokové ruční předávky', 'Pomalejší reakční doby', 'Ruční follow-upy a evidence']
const CMP_GOOD = ['Úkoly hotové okamžitě', 'Vysoká přesnost, konzistentní výsledky', 'Nižší provozní náklady', 'Škáluje bez námahy', 'Běží 24/7 nonstop', 'Data a přehledy v reálném čase', 'Automatizuje rutinu pro vyšší výstup', 'Plynulý, automatický tok', 'Okamžité odpovědi přes chat i hlas', 'Automatický nurturing a připomínky']

const FAQ = [
  { q: 'Za jak dlouho bude web hotový?', a: 'Web v tarifu Starter spouštíme do 3 týdnů, rozsáhlejší weby na míru do 4–8 týdnů. Přesný harmonogram dostanete po úvodní analýze — a platí to, co si domluvíme.' },
  { q: 'Kolik spolupráce stojí?', a: 'Menší web (Starter) pořídíte od 16 000 Kč, web na míru s automatizacemi (Business) od 29 000 Kč — obojí jednorázově. Průběžná spolupráce Full Stack začíná na 19 000 Kč měsíčně, bez závazku.' },
  { q: 'Proč jsou ceny uvedené „od“?', a: 'Uvedené částky jsou startovní ceny pro malé firmy — každý projekt má jiný rozsah. Finální pevnou cenu dostanete po krátkém briefu, písemně a bez skrytých položek. A ta pak platí, žádné vícepráce navíc.' },
  { q: 'Co je v ceně a co se děje po spuštění?', a: 'U Starteru texty, SEO základ, analytika a 30 dní podpory zdarma. Business přidává napojení na CRM či rezervace, jednu AI automatizaci a zaškolení. Kdo chce průběžnou péči, kampaně a optimalizaci, přechází na Full Stack.' },
  { q: 'Už web mám. Má smysl se ozvat?', a: 'Určitě. Uděláme vám audit zdarma — často stačí stávající web optimalizovat a napojit na automatizace, místo stavění od nuly.' },
  { q: 'Jak vypadají AI automatizace v praxi?', a: 'Propojíme nástroje, které už používáte — e-mail, CRM, fakturaci, tabulky. Poptávky se samy třídí, faktury odesílají, reporty generují. Klientům běžně šetříme 30 a více hodin měsíčně.' },
  { q: 'Musím podepsat dlouhodobý závazek?', a: 'Ne. Starter a Business zaplatíte jednorázově a web je váš. Full Stack běží po měsících s měsíční výpovědní lhůtou — klienty si držíme výsledky, ne smlouvami.' },
  { q: 'Jak poznám, že to funguje?', a: 'V tarifu Full Stack dostanete každý měsíc srozumitelný report a konzultaci: kolik přišlo poptávek, co stály a kolik hodin ušetřily automatizace. Žádná hausnumera.' },
  { q: 'Pracujete i s menšími firmami?', a: 'Ano — většina našich klientů má 2 až 50 zaměstnanců. Řešení stavíme tak, aby dávalo smysl vašemu rozpočtu, ne našemu portfoliu.' },
]

// process cards — browser-window mini-scenes: page audit · live coding · growing chart
function ProcScene({ i }) {
  if (i === 0) {
    const rows = [88, 64, 76, 52]
    const chips = [['SEO', 92], ['UX', 88], ['Rychlost', 96]]
    return (
      <div className="proc-scene">
        <div className="pwin">
          <div className="pwin-bar"><span className="d r" /><span className="d y" /><span className="d g" /><i>vas-web.cz/audit</i></div>
          <div className="pwin-body">
            <div className="pw-rows">{rows.map((w, j) => <span key={j} style={{ width: w + '%' }} />)}</div>
            <span className="pw-beam" aria-hidden />
            <div className="pw-chips">{chips.map(([l, v], j) => <b key={j} style={{ animationDelay: j * 0.7 + 's' }}>{l} <em>{v}</em></b>)}</div>
          </div>
        </div>
        <div className="proc-cap"><span className="proc-cap-dot" />Analyzujeme web a konkurenci…</div>
      </div>
    )
  }
  if (i === 1) {
    const lines = [[26, 44, 18], [12, 30, 52, 14], [20, 16, 38], [34, 22, 28, 12], [16, 46, 20]]
    const cols = ['#7AA0FF', '#C77DF3', '#3FCF8E', '#9CA1AC', '#E0A93E']
    return (
      <div className="proc-scene">
        <div className="pwin">
          <div className="pwin-bar"><span className="d r" /><span className="d y" /><span className="d g" /><i>novy-web.jsx</i></div>
          <div className="pwin-body">
            <div className="pw-code">
              {lines.map((toks, li) => (
                <div className="pw-line" key={li} style={{ paddingLeft: (li % 3) * 14 }}>
                  {toks.map((tw, ti) => (
                    <span className="pw-tok" key={ti} style={{ width: tw, background: cols[(li + ti * 2) % cols.length], animationDelay: (li * 0.55 + ti * 0.18) + 's' }} />
                  ))}
                </div>
              ))}
            </div>
            <span className="pw-toast"><Check size={11} strokeWidth={3} /> Nasazeno</span>
          </div>
        </div>
        <div className="proc-cap"><span className="proc-cap-dot" />Programujeme a nasazujeme…</div>
      </div>
    )
  }
  const pts = [6, 14, 10, 22, 18, 30, 26, 40, 36, 52]
  const w = 150, h = 56, max = 56
  const xy = pts.map((v, j) => [(j / (pts.length - 1)) * w, h - (v / max) * h])
  const line = xy.map((p) => p.join(',')).join(' ')
  const area = `0,${h} ${line} ${w},${h}`
  return (
    <div className="proc-scene">
      <div className="pwin">
        <div className="pwin-bar"><span className="d r" /><span className="d y" /><span className="d g" /><i>vysledky.sitespot.cz</i></div>
        <div className="pwin-body chart">
          <svg className="pg-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
            <defs><linearGradient id="pgg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity="0.3" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient></defs>
            <polygon className="pg-area" points={area} fill="url(#pgg)" />
            <polyline className="pg-line" points={line} pathLength="1" />
          </svg>
          <span className="pg-badge"><TrendingUp size={11} strokeWidth={2.4} /> +34 %</span>
        </div>
      </div>
      <div className="proc-cap"><span className="proc-cap-dot" />Výsledky rostou každý měsíc</div>
    </div>
  )
}

// original mini-UI mockups for the Solutions bento — own design, generic dashboard widgets
function SolutionMockup({ type }) {
  if (type === 'tasklist') {
    const rows = [
      { l: 'Nový poptávkový formulář', ic: CheckCircle2, c: '#2BB6A6' },
      { l: 'Zápis do CRM', ic: Clock3, c: '#E0A93E' },
      { l: 'Odeslání faktury', ic: Receipt, c: '#8A8E99' },
    ]
    return (
      <div className="mock mock-list">
        {rows.map((r, i) => (
          <div className="mock-row" key={i}>
            <span className="mock-row-ic" style={{ color: r.c }}><r.ic size={15} strokeWidth={2} /></span>
            <span className="mock-row-l">{r.l}</span>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'voice') {
    const bars = [6, 14, 22, 12, 28, 16, 24, 10, 18, 8, 20, 14, 26, 12, 16]
    return (
      <div className="mock mock-voice">
        <div className="mock-wave">
          {bars.map((h, i) => <span key={i} style={{ height: h }} />)}
          <span className="mock-phone"><PhoneCall size={16} strokeWidth={2} /></span>
          {bars.map((h, i) => <span key={'b' + i} style={{ height: bars[bars.length - 1 - i] }} />)}
        </div>
      </div>
    )
  }
  if (type === 'budget') {
    const rows = [['Kampaně', 62], ['Nástroje', 41], ['Automatizace', 74], ['Tvorba obsahu', 33]]
    return (
      <div className="mock mock-budget">
        <div className="mock-budget-head"><span>Rozpočet</span><b>320 000 Kč</b></div>
        {rows.map(([l, v], i) => (
          <div className="mock-brow" key={i}>
            <span>{l}</span>
            <span className="mock-bbar"><span style={{ width: v + '%' }} /></span>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'team') {
    const stack = [
      { name: 'OpenAI', el: <OpenAILogo h={15} /> },
      { name: 'Claude', el: <ClaudeLogo h={16} /> },
      { name: 'n8n', el: <N8nLogo h={12} /> },
      { name: 'Gemini', el: <GeminiLogo h={15} /> },
      { name: 'Make', el: <span className="mock-word">Make</span> },
    ]
    return (
      <div className="mock mock-team">
        {stack.map((s) => (
          <span className="mock-logo-chip" key={s.name} title={s.name}>{s.el}</span>
        ))}
      </div>
    )
  }
  if (type === 'marketing') {
    const channels = [['LinkedIn', true], ['E-mail', true], ['Meta Ads', false], ['Google Ads', true]]
    return (
      <div className="mock mock-mkt">
        <div className="mock-mkt-head"><Send size={13} strokeWidth={2} /> Hledám nové leady…</div>
        {channels.map(([c, on], i) => (
          <div className="mock-mrow" key={i}><span>{c}</span><span className={`mock-toggle${on ? ' on' : ''}`} /></div>
        ))}
      </div>
    )
  }
  if (type === 'chatbot') {
    return (
      <div className="mock mock-chat">
        <div className="mock-bubble bot"><MessageSquare size={13} strokeWidth={2} /> Jak vám mohu pomoct?</div>
        <div className="mock-bubble user">Chci nabídku na web</div>
      </div>
    )
  }
  return null
}

// benefits chart card — area chart draws itself in when scrolled into view
function BenChart() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('draw'); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const pts = [5, 11, 8, 15, 13, 21, 18, 27, 25, 34]
  const w = 150, h = 54, max = 38
  const xy = pts.map((v, i) => [(i / (pts.length - 1)) * w, h - (v / max) * h])
  const line = xy.map((p) => p.join(',')).join(' ')
  const area = `0,${h} ${line} ${w},${h}`
  const [ex, ey] = xy[xy.length - 1]
  return (
    <div className="benefit ben-chart spot-card" data-reveal="60" ref={ref}>
      <div className="ben-top">
        <span className="chart-badge"><TrendingUp size={13} strokeWidth={2.2} /> +47 % za kvartál</span>
      </div>
      <h3>Růst poptávek</h3>
      <svg className="ben-chart-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
        <defs><linearGradient id="bcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" stopOpacity="0.32" /><stop offset="1" stopColor="#FFFFFF" stopOpacity="0.02" /></linearGradient></defs>
        <polygon className="bc-area" points={area} fill="url(#bcg)" />
        <polyline className="bc-line" points={line} pathLength="1" />
        <circle className="bc-dot" cx={ex} cy={ey} r="3" />
      </svg>
    </div>
  )
}

// benefits live-activity card — automations "running" with a cycling task log
const LIVE_LOGS = ['Faktura odeslána', 'Lead zapsán do CRM', 'Report vygenerován', 'Schůzka naplánována', 'Dotaz zodpovězen AI']
function BenLive() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % LIVE_LOGS.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="benefit ben-live spot-card" data-reveal="120">
      <div className="ben-top">
        <span className="live-pill"><span className="live-dot" />Živě</span>
      </div>
      <h3>Automatizace běží</h3>
      <div className="live-chain" aria-hidden>
        <span className="lc-node n1"><Bot size={13} strokeWidth={2} /></span><span className="lc-line l1" />
        <span className="lc-node n2"><Zap size={13} strokeWidth={2} /></span><span className="lc-line l2" />
        <span className="lc-node n3"><Check size={13} strokeWidth={2.4} /></span>
      </div>
      <div className="live-rows">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            className="live-row" key={i}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <CheckCircle2 size={14} strokeWidth={2} /> {LIVE_LOGS[i]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// benefits center feature card — interactive: 3D tilt toward the cursor,
// two counter-rotating orbit rings with service icons circling the brand mark
const ORBIT_IN = [Bot, Zap, LineChart]
const ORBIT_OUT = [Globe, Megaphone, MessageSquare, Target]
function BenefitCenter() {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--tx', py * -10 + 'deg')
    el.style.setProperty('--ty', px * 12 + 'deg')
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tx', '0deg'); el.style.setProperty('--ty', '0deg')
  }
  return (
    <div className="ben-center" data-reveal="0" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="ben-center-tilt">
        <span className="ben-center-field" aria-hidden />
        <span className="ben-center-glow" aria-hidden />
        <span className="orbit-ring r1" aria-hidden>
          {ORBIT_IN.map((C, i) => (
            <span className="orbit-hold" key={i} style={{ transform: `rotate(${(360 / ORBIT_IN.length) * i}deg)` }}>
              <span className="orbit-ic" style={{ '--r': `${(360 / ORBIT_IN.length) * i}deg` }}><C size={14} strokeWidth={1.9} /></span>
            </span>
          ))}
        </span>
        <span className="orbit-ring r2" aria-hidden>
          {ORBIT_OUT.map((C, i) => (
            <span className="orbit-hold" key={i} style={{ transform: `rotate(${(360 / ORBIT_OUT.length) * i}deg)` }}>
              <span className="orbit-ic out" style={{ '--r': `${(360 / ORBIT_OUT.length) * i}deg` }}><C size={14} strokeWidth={1.9} /></span>
            </span>
          ))}
        </span>
        <span className="ben-center-mark"><LogoMark size={54} /></span>
        <span className="ben-center-cap">Jedno AI jádro,<br />všechny kanály</span>
      </div>
    </div>
  )
}

// where contact-form submissions land (FormSubmit.co relays to this inbox —
// first submission sends an activation e-mail there that must be confirmed once)
const CONTACT_EMAIL = 'business@sitespot.cz'

// trust bar — real technology logo marks only (no text wordmarks) drifting under the hero
function TrustBar() {
  const logos = BRANDS.filter((b) => b.logo)
  const half = (k) => (
    <div className="tbar-half" key={k}>
      {logos.map((b) => (
        <span className="tbar-item" key={b.name} title={b.name}>{b.logo}</span>
      ))}
    </div>
  )
  return (
    <section className="tbar" aria-label="Technologie, na kterých stavíme">
      <div className="tbar-cap">Stavíme na špičkových technologiích</div>
      <div className="tbar-mask">
        <div className="tbar-track">{[0, 1].map(half)}</div>
      </div>
    </section>
  )
}

// privacy modal — GDPR basics for the contact form
function LegalModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="cmodal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="cmodal legal" role="dialog" aria-modal="true" aria-label="Ochrana osobních údajů"
            initial={{ opacity: 0, y: 34, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cmodal-x" aria-label="Zavřít" onClick={onClose}><X size={17} strokeWidth={2.2} /></button>
            <div className="cmodal-head">
              <h3>Ochrana osobních údajů</h3>
            </div>
            <div className="legal-body">
              <p><b>Správce údajů:</b> SiteSpot s.r.o., Praha. Kontakt: {CONTACT_EMAIL}.</p>
              <p><b>Jaké údaje zpracováváme:</b> jméno, e-mail a obsah zprávy, které nám pošlete přes kontaktní formulář nebo e-mailem.</p>
              <p><b>Účel a právní základ:</b> odpověď na vaši poptávku a jednání o spolupráci (plnění smlouvy, oprávněný zájem). Údaje nevyužíváme k marketingu bez vašeho souhlasu a nepředáváme je třetím stranám mimo zpracovatele nezbytné pro provoz (e-mailová služba, hosting).</p>
              <p><b>Doba uchování:</b> po dobu jednání o zakázce, nejdéle 3 roky od poslední komunikace.</p>
              <p><b>Vaše práva:</b> přístup, oprava, výmaz, omezení zpracování a přenositelnost údajů — stačí napsat na {CONTACT_EMAIL}. Stížnost lze podat u Úřadu pro ochranu osobních údajů (uoou.cz).</p>
              <p>Web neukládá sledovací cookies.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// contact modal — glassy dialog with a 3-field form, sent via FormSubmit AJAX (no backend needed)
function ContactModal({ open, onClose }) {
  const [state, setState] = useState('idle') // idle | sending | ok | err
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])
  useEffect(() => { if (open) setState('idle') }, [open])
  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    setState('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: 'Nová poptávka ze sitespot.cz', _captcha: 'false', _template: 'table' }),
      })
      if (!res.ok) throw new Error()
      setState('ok')
    } catch {
      setState('err')
    }
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="cmodal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="cmodal" role="dialog" aria-modal="true" aria-label="Domluvit schůzku"
            initial={{ opacity: 0, y: 34, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cmodal-x" aria-label="Zavřít" onClick={onClose}><X size={17} strokeWidth={2.2} /></button>
            {state === 'ok' ? (
              <div className="cmodal-ok">
                <span className="cmodal-ok-ic"><CheckCircle2 size={44} strokeWidth={1.6} /></span>
                <h3>Díky, zpráva je u nás!</h3>
                <p>Ozveme se vám do 24 hodin a domluvíme termín konzultace.</p>
                <button className="cmodal-send" onClick={onClose}>Zavřít</button>
              </div>
            ) : (
              <>
                <div className="cmodal-head">
                  <span className="mark"><LogoMark size={26} /></span>
                  <h3>Domluvit schůzku</h3>
                  <p>30 minut zdarma. Napište nám, co řešíte, a ozveme se do 24 hodin.</p>
                </div>
                <form className="cmodal-form" onSubmit={submit}>
                  <label>Jméno<input name="name" required placeholder="Jan Novák" autoComplete="name" /></label>
                  <label>E-mail<input name="email" type="email" required placeholder="jan@firma.cz" autoComplete="email" /></label>
                  <label>Co potřebujete?<textarea name="message" required rows={4} placeholder="Např. potřebujeme nový web a automatizovat zpracování poptávek…" /></label>
                  <button className="cmodal-send" type="submit" disabled={state === 'sending'}>
                    {state === 'sending' ? 'Odesílám…' : 'Odeslat poptávku'} {state !== 'sending' && <ArrowRight size={16} strokeWidth={2.2} />}
                  </button>
                  {state === 'err' && <p className="cmodal-err">Odeslání se nepovedlo. Napište nám přímo na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function useNumberFormat() {
  return useRef(new Intl.NumberFormat('cs-CZ')).current
}

// Mounts the heavy Spline WebGL scene. To make the robot appear fast and never
// re-load: (1) warm the runtime chunk + the .splinecode asset during idle time,
// (2) mount a full viewport early so it has time to initialise before it's in
// view, (3) latch it mounted once shown — scrolling away never tears down the
// WebGL, so returning is instant with no stutter.
function LazySpline({ scene }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  // phones get a lightweight static poster instead of the ~2MB WebGL runtime
  const [isMob] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches)

  // prefetch during idle so both the JS runtime and the scene file are cached
  // before the user ever reaches the section
  useEffect(() => {
    if (isMob) return
    let done = false
    const warm = () => {
      if (done) return
      done = true
      import('@splinetool/react-spline').catch(() => {})
      fetch(scene, { mode: 'cors', cache: 'force-cache' }).catch(() => {})
    }
    const ric = window.requestIdleCallback
    const id = ric ? ric(warm, { timeout: 2500 }) : setTimeout(warm, 1200)
    return () => { (window.cancelIdleCallback || clearTimeout)(id) }
  }, [isMob, scene])

  const appRef = useRef(null)
  useEffect(() => {
    if (isMob) return
    const el = ref.current
    if (!el) return
    // start mounting a viewport early, then latch — once shown it stays mounted
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { rootMargin: '700px 0px 700px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [isMob])

  // pause the robot's render loop while it's scrolled off screen — the scene stays
  // mounted (instant on return) but stops taxing the GPU everywhere else on the page
  useEffect(() => {
    if (isMob || !on) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      const app = appRef.current
      if (!app) return
      try { e.isIntersecting ? app.play?.() : app.stop?.() } catch { /* older runtime */ }
    }, { rootMargin: '150px 0px 150px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [isMob, on])
  if (isMob) {
    return (
      <div className="spline-stage">
        <div className="spline-poster" aria-hidden>
          <span className="sp-glow" />
          <span className="sp-ring r1" /><span className="sp-ring r2" />
          <span className="sp-core"><Bot size={34} strokeWidth={1.6} /></span>
        </div>
      </div>
    )
  }
  return (
    <div className="spline-stage" ref={ref}>
      {on ? <SplineScene scene={scene} className="spline-canvas" onLoad={(app) => { appRef.current = app }} /> : <div className="spline-fallback"><span className="loader" /></div>}
    </div>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)
  const [fab, setFab] = useState(false)
  const openContact = (e) => { e.preventDefault(); e.stopPropagation(); setContactOpen(true) }

  // --- scroll chrome: progress bar, auto-hiding nav, floating CTA, wall-light fade ---
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress')
    const wrap = document.querySelector('.nav-wrap')
    const spot = document.querySelector('.cursor-spot')
    let last = 0, tick = false
    const apply = () => {
      tick = false
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
      if (wrap) wrap.classList.toggle('hide', y > 320 && y > last)
      if (spot) spot.style.opacity = y > window.innerHeight * 0.72 ? '1' : '0'
      setFab(y > window.innerHeight * 0.9)
      last = y
    }
    const onScroll = () => { if (tick) return; tick = true; requestAnimationFrame(apply) }
    window.addEventListener('scroll', onScroll, { passive: true })
    apply()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState('')
  const [tIndex, setTIndex] = useState(0)
  const [caseIdx, setCaseIdx] = useState(0)
  const [faqOpen, setFaqOpen] = useState(0)
  const tHover = useRef(false)
  const cHover = useRef(false)
  const navRef = useRef(null)
  const heroRef = useRef(null)
  const fmt = useNumberFormat()

  // hero scroll-linked scale/fade (knotch-style scroll-away)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const heroRadius = useTransform(scrollYProgress, [0, 1], [28, 46])
  const heroMediaY = useTransform(scrollYProgress, [0, 1], [0, 80])

  // --- starfield canvas ---
  useEffect(() => {
    const reduce = false // animations always on (OS reduced-motion used to blank the whole site)
    const panel = document.getElementById('ss-hero-panel')
    const cv = document.getElementById('ss-stars')
    if (!panel || !cv) return
    const ctx = cv.getContext('2d')
    const dpr = Math.min(1.5, window.devicePixelRatio || 1)
    let stars = [], W = 0, H = 0, raf = 0
    const resize = () => {
      W = panel.clientWidth; H = panel.clientHeight
      cv.width = W * dpr; cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(320, Math.round((W * H) / 8500))
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() < 0.85 ? Math.random() * 0.9 + 0.35 : Math.random() * 1.5 + 0.9,
        p: Math.random() * Math.PI * 2, s: 0.3 + Math.random() * 1.1, v: 0.01 + Math.random() * 0.025,
      }))
    }
    const paint = (t) => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#DDE4FF'
      for (const st of stars) {
        ctx.globalAlpha = 0.16 + 0.72 * Math.abs(Math.sin(st.p + t * 0.00045 * st.s))
        ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.283); ctx.fill()
        st.x += st.v; if (st.x > W + 2) st.x = -2
      }
      ctx.globalAlpha = 1
    }
    let running = false
    const loop = (t) => { paint(t); raf = requestAnimationFrame(loop) }
    const play = () => { if (running || reduce) return; running = true; raf = requestAnimationFrame(loop) }
    const stop = () => { running = false; cancelAnimationFrame(raf) }
    resize()
    if (reduce) paint(0)
    // pause the starfield loop whenever the hero is off screen
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? play() : stop() }, { threshold: 0 })
    io.observe(panel)
    window.addEventListener('resize', resize)
    return () => { io.disconnect(); stop(); window.removeEventListener('resize', resize) }
  }, [])

  // --- hero video: play only while the hero is on screen ---
  // the muted loop otherwise keeps decoding across the whole page and steals frames
  // from every other section (the "video running in the background" lag).
  useEffect(() => {
    const v = document.querySelector('.hero-video')
    if (!v) return
    const sync = (visible) => { visible ? v.play().catch(() => {}) : v.pause() }
    const io = new IntersectionObserver(([e]) => sync(e.isIntersecting), { threshold: 0 })
    io.observe(v)
    // cached media can fire (or skip) 'loadeddata' before this runs — start it explicitly if in view
    const kick = () => { const r = v.getBoundingClientRect(); if (r.bottom > 0 && r.top < window.innerHeight) v.play().catch(() => {}) }
    v.readyState >= 2 ? kick() : v.addEventListener('canplay', kick, { once: true })
    return () => { io.disconnect(); v.removeEventListener('canplay', kick) }
  }, [])

  // --- scroll-scrubbed word reveal on the big headline (Awwwards-style) ---
  useEffect(() => {
    const el = document.querySelector('[data-scrub]')
    if (!el) return
    // wrap each word in a span (keeps <br /> intact)
    ;[...el.childNodes].forEach((n) => {
      if (n.nodeType !== 3 || !n.textContent.trim()) return
      const frag = document.createDocumentFragment()
      n.textContent.split(/(\s+)/).forEach((w) => {
        if (!w) return
        if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return }
        const sp = document.createElement('span')
        sp.textContent = w; sp.className = 'scrub-w'
        frag.appendChild(sp)
      })
      el.replaceChild(frag, n)
    })
    const words = el.querySelectorAll('.scrub-w')
    let ticking = false
    const apply = () => {
      ticking = false
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // progress 0→1 as the headline travels from 88% to 38% of the viewport
      const p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (vh * 0.5)))
      words.forEach((w, i) => {
        const o = Math.min(1, Math.max(0.12, p * (words.length + 2) - i))
        w.style.opacity = o
      })
    }
    const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(apply) }
    window.addEventListener('scroll', onScroll, { passive: true })
    apply()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // --- reveal + word-split + counters ---
  useEffect(() => {
    const reduce = false // animations always on (OS reduced-motion used to blank the whole site)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        en.target.style.opacity = '1'
        en.target.style.transform = 'translateY(0px) scale(1)'
        en.target.style.filter = 'blur(0px)'
        io.unobserve(en.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })

    const wio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        wio.unobserve(en.target)
        en.target.querySelectorAll('.ss-w').forEach((w) => {
          w.style.transform = 'translateY(0)'
        })
      })
    }, { threshold: 0.35 })

    // wrap each word in an overflow-hidden mask so headings rise from behind a clip line
    const splitWords = (el) => {
      [...el.childNodes].forEach((n) => {
        if (n.nodeType === 3 && n.textContent.trim()) {
          const frag = document.createDocumentFragment()
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return }
            const m = document.createElement('span')
            m.className = 'ss-m'
            const s = document.createElement('span')
            s.textContent = w; s.className = 'ss-w'
            m.appendChild(s)
            frag.appendChild(m)
          })
          el.replaceChild(frag, n)
        } else if (n.nodeType === 1 && n.tagName !== 'BR' && !n.classList.contains('ss-w') && !n.classList.contains('ss-m')) {
          const m = document.createElement('span')
          m.className = 'ss-m'
          el.replaceChild(m, n)
          n.classList.add('ss-w')
          if (getComputedStyle(n).display === 'inline') n.style.display = 'inline-block'
          m.appendChild(n)
        }
      })
    }

    const seen = new WeakSet(), splitSeen = new WeakSet()
    const scan = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        if (reduce) return
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.88) return
        const d = parseInt(el.getAttribute('data-reveal') || '0', 10)
        el.style.opacity = '0'; el.style.transform = 'translateY(28px) scale(0.94)'; el.style.filter = 'blur(8px)'
        el.style.transition = `opacity 0.7s ease ${d}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${d}ms, filter 0.7s ease ${d}ms`
        io.observe(el)
      })
      document.querySelectorAll('[data-split]').forEach((el) => {
        if (splitSeen.has(el)) return
        splitSeen.add(el)
        if (reduce) return
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.85) return
        splitWords(el)
        el.querySelectorAll('.ss-w').forEach((w, i) => {
          w.style.transform = 'translateY(112%)'
          w.style.transition = `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`
        })
        wio.observe(el)
      })
    }
    scan()
    const t1 = setTimeout(scan, 400), t2 = setTimeout(scan, 1200)

    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        cio.unobserve(en.target)
        const el = en.target
        const target = parseFloat(el.getAttribute('data-count'))
        const suffix = el.getAttribute('data-suffix') || ''
        const prefix = el.getAttribute('data-prefix') || ''
        if (reduce) { el.textContent = prefix + fmt.format(target) + suffix; return }
        const t0 = performance.now(), dur = 1500
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          const e = 1 - Math.pow(1 - p, 3)
          el.textContent = prefix + fmt.format(Math.round(target * e)) + suffix
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el))

    return () => { io.disconnect(); wio.disconnect(); cio.disconnect(); clearTimeout(t1); clearTimeout(t2) }
  }, [fmt])

  // --- scroll: shrink, active section, hero + glow parallax ---
  useEffect(() => {
    const reduce = false // animations always on (OS reduced-motion used to blank the whole site)
    const ids = ['sluzby', 'proces', 'sablony', 'cenik', 'faq']
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) sio.observe(el) })

    const heroC = document.getElementById('ss-hero-content')
    // cache nodes once (no per-scroll querySelectorAll) and coalesce writes into one rAF/frame
    const parEls = [...document.querySelectorAll('[data-parallax]')].map((el) => [el, parseFloat(el.getAttribute('data-parallax'))])
    let ticking = false
    const apply = () => {
      ticking = false
      const y = window.scrollY
      if (heroC && y < window.innerHeight * 1.1) {
        heroC.style.transform = `translateY(${y * 0.28}px)`
        heroC.style.opacity = String(Math.max(0, 1 - y / 640))
      }
      for (const [el, f] of parEls) el.style.transform = `translateY(${y * f}px)`
    }
    const onScroll = () => { if (reduce || ticking) return; ticking = true; requestAnimationFrame(apply) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { sio.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  // --- track mobile breakpoint ---
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const on = () => setIsMobile(mq.matches)
    on(); mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  // --- Lenis smooth scrolling (the ScrollEase effect) applied to the whole page ---
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true, syncTouch: false })
    let raf = requestAnimationFrame(function loop(t) { lenis.raf(t); raf = requestAnimationFrame(loop) })
    // smooth in-page anchor navigation (nav links, hero buttons, footer)
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href.length < 2) return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -90 })
      setNavOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); lenis.destroy() }
  }, [])

  // --- close island on outside click ---
  useEffect(() => {
    const onDoc = (e) => { if (navOpen && navRef.current && !navRef.current.contains(e.target)) setNavOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [navOpen])

  // --- testimonial autoplay ---
  useEffect(() => {
    const id = setInterval(() => { if (!tHover.current) setTIndex((i) => (i + 1) % TESTIMONIALS.length) }, 7000)
    return () => clearInterval(id)
  }, [])

  // --- case-study carousel autoplay ---
  useEffect(() => {
    const id = setInterval(() => { if (!cHover.current) setCaseIdx((i) => (i + 1) % CASES.length) }, 5000)
    return () => clearInterval(id)
  }, [])

  const closeNav = () => setNavOpen(false)

  // One pointer loop drives every cursor effect (wall-light, custom cursor, per-card
  // spotlight). Previously these were three separate mousemove listeners, one with a
  // permanent rAF and one calling document.elementFromPoint() every frame (a forced
  // layout). Now: a single mousemove + an rAF that runs only while the ring is still
  // catching up to the cursor, and e.target.closest instead of elementFromPoint.
  const spotRef = useRef(null)
  const curDot = useRef(null)
  const curRing = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const spot = spotRef.current, dot = curDot.current, ring = curRing.current
    document.documentElement.classList.add('has-cursor')
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my
    let target = null, curCard = null, raf = 0
    const frame = () => {
      if (spot) { spot.style.setProperty('--sx', mx + 'px'); spot.style.setProperty('--sy', my + 'px') }
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px)`
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16
      if (ring) {
        ring.style.transform = `translate(${rx}px, ${ry}px)`
        ring.classList.toggle('big', !!target?.closest?.('a, button, .spot-card'))
      }
      const card = target?.closest?.('.spot-card') || null
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((mx - r.left) / r.width) * 100 + '%')
        card.style.setProperty('--my', ((my - r.top) / r.height) * 100 + '%')
      }
      if (curCard && curCard !== card) curCard.style.removeProperty('--mx')
      curCard = card
      // keep ticking only while the trailing ring is still settling toward the cursor
      raf = (Math.abs(mx - rx) > 0.4 || Math.abs(my - ry) > 0.4) ? requestAnimationFrame(frame) : 0
    }
    const onMove = (e) => { mx = e.clientX; my = e.clientY; target = e.target; if (!raf) raf = requestAnimationFrame(frame) }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); document.documentElement.classList.remove('has-cursor') }
  }, [])

  // magnetic CTA buttons — main CTAs gently pull toward the cursor while hovered,
  // spring back via the .magnetic CSS transition on leave (pointer devices only)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const els = [...document.querySelectorAll('.btn-light, .notch-cta, .plan-cta.primary, .cta .go')]
    const cleanups = els.map((el) => {
      el.classList.add('magnetic')
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        el.style.setProperty('--magx', dx * 0.22 + 'px')
        el.style.setProperty('--magy', dy * 0.3 + 'px')
      }
      const leave = () => { el.style.setProperty('--magx', '0px'); el.style.setProperty('--magy', '0px') }
      el.addEventListener('mousemove', move, { passive: true })
      el.addEventListener('mouseleave', leave)
      return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])


  return (
    <div className="page">
      <Preloader />
      <div className="scroll-progress" aria-hidden />
      <div className="grain" aria-hidden />
      <div className="cursor-spot" ref={spotRef} aria-hidden />
      <div className="cur-dot" ref={curDot} aria-hidden />
      <div className="cur-ring" ref={curRing} aria-hidden />

      {/* ===== NAV — dynamic island: attached to the top edge, expands into a nav bar on hover ===== */}
      <div className="nav-wrap">
        <div
          ref={navRef}
          className="nav-island"
          onMouseEnter={() => { if (!isMobile) setNavOpen(true) }}
          onMouseLeave={() => { if (!isMobile) setNavOpen(false) }}
        >
          <div className="nav-corner left" aria-hidden />
          <div className="nav-corner right" aria-hidden />
          <motion.nav className="nav" layout transition={ISLAND_LAYOUT}>
            {/* left half of the sections — slides out to the left of the centered logo */}
            <AnimatePresence initial={false}>
              {navOpen && !isMobile && (
                <motion.div
                  className="nav-links left"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={ISLAND_SPRING}
                >
                  {NAV.slice(0, 3).map((l, i) => (
                    <motion.a
                      key={l.id} href={l.href} onClick={closeNav}
                      className={`nav-link${active === l.id ? ' active' : ''}`}
                      initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ ...ISLAND_SPRING, delay: 0.03 * (NAV.slice(0, 3).length - 1 - i) }}
                    >{l.label}</motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* logo — stays centred at all times, it's the anchor the sections open around */}
            <a
              href="#hero"
              className="nav-logo"
              onClick={(e) => {
                // on mobile the logo IS the menu toggle — stop the global
                // anchor-scroll handler from hijacking the click and closing it
                if (isMobile) { e.preventDefault(); e.stopPropagation(); setNavOpen((o) => !o) }
                else closeNav()
              }}
            >
              <span className="mark"><LogoMark size={19} /></span>
            </a>

            {/* right half of the sections + CTA — slides out to the right of the logo */}
            <AnimatePresence initial={false}>
              {navOpen && !isMobile && (
                <motion.div
                  className="nav-links right"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={ISLAND_SPRING}
                >
                  {NAV.slice(3).map((l, i) => (
                    <motion.a
                      key={l.id} href={l.href} onClick={closeNav}
                      className={`nav-link${active === l.id ? ' active' : ''}`}
                      initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ ...ISLAND_SPRING, delay: 0.03 * i }}
                    >{l.label}</motion.a>
                  ))}
                  <a href="#kontakt" className="nav-cta" onClick={openContact}>Domluvit schůzku</a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
          <AnimatePresence initial={false}>
            {isMobile && navOpen && (
              <motion.div
                className="nav-links mobile"
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={ISLAND_SPRING}
              >
                {NAV.map((l) => (
                  <a
                    key={l.id} href={l.href} onClick={closeNav}
                    className={`nav-link${active === l.id ? ' active' : ''}`}
                  >{l.label}</a>
                ))}
                <a href="#kontakt" className="nav-cta" onClick={openContact}>Domluvit schůzku</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section id="hero" className="hero" ref={heroRef}>
        <motion.div id="ss-hero-panel" className="hero-panel" style={{ scale: heroScale, borderRadius: heroRadius }}>
          <motion.div className="hero-media" style={{ y: heroMediaY }} aria-hidden>
            <SpaceHero />
            {/* drop any loop into public/media/hero.mp4 and it overlays the shader automatically.
                autoPlay + muted + playsInline makes every browser start it natively (not only via JS);
                the .ready class (added on the first of loadeddata/canplay/playing to fire) fades it in. */}
            <video className="hero-video" autoPlay muted loop playsInline preload="auto"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              onLoadedData={(e) => { e.currentTarget.classList.add('ready') }}
              onCanPlay={(e) => { e.currentTarget.classList.add('ready'); e.currentTarget.play().catch(() => {}) }}
              onPlaying={(e) => { e.currentTarget.classList.add('ready') }}>
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <canvas id="ss-stars" className="hero-stars" />
          <div className="hero-glow a" data-parallax="0.06" aria-hidden />
          <div className="hero-glow b" data-parallax="0.04" aria-hidden />
          <div id="ss-hero-content" className="hero-content">
            <div className="hero-badge"><span className="tag">Nové</span><span className="label">AI agenti na míru</span></div>
            <h1>Proměníme váš web<br />ve stroj na zákazníky.</h1>
            <p>Stavíme weby, které prodávají, a AI automatizace, které šetří čas a peníze — bez zbytečné složitosti.</p>
            <div className="hero-actions">
              <Btn href="#kontakt" className="btn-light" onClick={openContact}>Nezávazná konzultace</Btn>
              <Btn href="#sluzby" className="btn-ghost">Naše služby</Btn>
            </div>
          </div>
          <div className="hero-notch">
            <div className="corner left" aria-hidden /><div className="corner right" aria-hidden />
            <div className="notch-inner">
              {/* current quarter computed from the visitor's date — never goes stale */}
              <span className="notch-live"><span className="live-dot" />Volné kapacity — přijímáme projekty na Q{Math.floor(new Date().getMonth() / 3) + 1}</span>
              <span className="notch-sep" aria-hidden />
              <a className="notch-scroll" href="#sluzby" aria-label="Scrollovat na služby">
                Prozkoumat <span className="notch-chev" aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <TrustBar />

      {/* ===== BIG NUMBER HEADLINE ===== */}
      <section className="bignum">
        <div className="bignum-ghost" aria-hidden>14K</div>
        <h2 className="bignum-head" data-scrub="1">Šetříme firmám přes 14 000 hodin<br />práce každý rok.</h2>
      </section>

      <Marquee />

      {/* ===== PROCESS ===== */}
      <section id="proces" className="section dark">
        <div className="blob" data-parallax="-0.05" aria-hidden style={{ top: -200, left: -160, width: 520, height: 520, background: 'radial-gradient(closest-side, color-mix(in oklab, var(--acc) 18%, transparent), transparent 70%)', filter: 'blur(60px)' }} />
        <div className="wrap proc-pin">
          <div className="proc-sticky">
            <div className="head">
              <div className="eyebrow" data-reveal="0"><span className="dot" />Jak pracujeme</div>
              <h2 data-split="1">Tři kroky od poptávky k růstu</h2>
              <p className="sub" data-reveal="120">Žádné nekonečné schůzky. Jasný proces, jasné termíny, měřitelné výsledky.</p>
            </div>
          </div>
          <div className="proc-steps">
            {PROCESS.map((s, i) => (
              <div className="card hoverable pad spot-card" data-reveal={i * 100} key={i}>
                <div className="step-head">
                  <div className="step-ic"><KIcon C={PROCESS_ICONS[i]} size={22} /></div>
                  <div className="step-no">{s.no}</div>
                </div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <ProcScene i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="sluzby" className="section clip">
        <div className="blob" data-parallax="0.05" aria-hidden style={{ top: 120, right: -200, width: 560, height: 560, background: 'radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)', filter: 'blur(70px)' }} />
        <div className="wrap">
          <div className="head">
            <div className="eyebrow" data-reveal="0"><span className="dot" />Služby</div>
            <h2 data-split="1">Vše, co váš růst potřebuje. Pod jednou střechou.</h2>
          </div>
          <div className="grid g-serv-bento">
            {SERVICES.map((s, i) => (
              <div className="card hoverable serv-b spot-card" data-reveal={(i % 3) * 90} key={i}>
                {s.textFirst && (
                  <div className="serv-b-text">
                    <div className="icon sm"><KIcon C={SERVICE_ICONS[i]} size={18} color="#fff" /></div>
                    <h3>{s.h}</h3><p>{s.p}</p>
                  </div>
                )}
                <SolutionMockup type={s.type} />
                {!s.textFirst && (
                  <div className="serv-b-text">
                    <div className="icon sm"><KIcon C={SERVICE_ICONS[i]} size={18} color="#fff" /></div>
                    <h3>{s.h}</h3><p>{s.p}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI SHOWCASE (Spline 3D) ===== */}
      <section id="ai-agent" className="section clip">
        <div className="wrap">
          <div className="spline-card" data-reveal="0">
            <div className="spline-spot" aria-hidden />
            <div className="spline-copy">
              <h2>Živý AI agent,<br />který pracuje za vás.</h2>
              <p>Postavíme vám vlastní AI systém napojený na vaše nástroje — vyřizuje dotazy, třídí poptávky a jedná sám. Nonstop, bez přestávek, bez chyb z únavy.</p>
              <Btn href="#kontakt" className="btn-light" onClick={openContact}>Chci svého AI agenta</Btn>
            </div>
            <LazySpline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="reference" className="section dark">
        <div className="blob" data-parallax="-0.04" aria-hidden style={{ bottom: -220, left: '35%', width: 560, height: 520, background: 'radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 70%)', filter: 'blur(70px)' }} />
        <div className="wrap">
          <div className="head">
            <h2 data-split="1">Výsledky, které se dají změřit</h2>
          </div>
          <div className="case3d" data-reveal="0" onMouseEnter={() => (cHover.current = true)} onMouseLeave={() => (cHover.current = false)}>
            <div className="case3d-stage">
              {CASES.map((c, i) => {
                let off = i - caseIdx
                if (off > 1) off -= CASES.length
                if (off < -1) off += CASES.length
                const abs = Math.abs(off)
                const style = {
                  transform: `translateX(${off * 58}%) translateZ(${-abs * 170}px) rotateY(${off * -34}deg) scale(${1 - abs * 0.1})`,
                  opacity: abs > 1 ? 0 : 1,
                  zIndex: 10 - abs,
                  pointerEvents: abs > 1 ? 'none' : 'auto',
                  filter: abs > 0 ? 'brightness(0.9)' : 'none',
                }
                return (
                  <div className={`case3d-card card case spot-card trend-${c.trend}${off === 0 ? ' is-active' : ''}`} style={style} key={i} onClick={() => setCaseIdx(i)}>
                    <div className="case-glow" aria-hidden />
                    <div className="case-top">
                      <span className="case-ic"><KIcon C={CASE_ICONS[i]} size={18} color="#fff" /></span>
                      <span className="kicker">{c.k}</span>
                    </div>
                    <div className="big grad" data-count={c.num} data-prefix={c.prefix} data-suffix={c.suffix}>{c.prefix}{fmt.format(c.num)}{c.suffix}</div>
                    <div className="lead">{c.lead}</div>
                    <CaseSpark dir={c.trend} />
                    <div className="case-ba">
                      <span className="ba-val from">{c.from}</span>
                      <ArrowRight size={14} strokeWidth={2.2} className="ba-arrow" />
                      <span className="ba-val to">{c.to}</span>
                      <span className="ba-metric">{c.metric}</span>
                    </div>
                    <p>{c.p}</p>
                  </div>
                )
              })}
            </div>
            <div className="case3d-nav">
              <button className="t-arrow" aria-label="Předchozí" onClick={() => setCaseIdx((i) => (i + CASES.length - 1) % CASES.length)}>←</button>
              <div className="t-dots">
                {CASES.map((_, i) => (
                  <button key={i} className={`t-dot${i === caseIdx ? ' on' : ''}`} aria-label="Přejít na studii" onClick={() => setCaseIdx(i)} />
                ))}
              </div>
              <button className="t-arrow" aria-label="Další" onClick={() => setCaseIdx((i) => (i + 1) % CASES.length)}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEMPLATES ===== */}
      <Templates />

      {/* ===== BENEFITS ===== */}
      <section id="benefity" className="section">
        <div className="wrap">
          <div className="head">
            <h2 data-split="1">Partner, ne dodavatel</h2>
          </div>
          <div className="grid g-ben-bento">
            {BENEFITS.map((b, i) => (
              <div className={`benefit bento-pos-${i} spot-card`} data-reveal={(i % 3) * 60} key={i}>
                <div className="ben-top">
                  <div className="ben-ic"><KIcon C={BENEFIT_ICONS[i]} size={20} color="#fff" /></div>
                  <span className="ben-stat">{b.stat}</span>
                </div>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
                {b.mini && <BenMini type={b.mini} />}
              </div>
            ))}
            <BenChart />
            <BenLive />
            <BenefitCenter />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — dočasně skryto =====
      <section id="ohlasy" className="section">
        <div className="wrap">
          <div className="head" style={{ marginBottom: 44 }}>
            <h2 data-split="1">Co říkají naši klienti</h2>
          </div>
          <div className="dbc" data-reveal="0" onMouseEnter={() => (tHover.current = true)} onMouseLeave={() => (tHover.current = false)}>
            <div className="dbc-stage">
              {TESTIMONIALS.map((t, i) => {
                const n = TESTIMONIALS.length
                let off = i - tIndex
                if (off > n / 2) off -= n
                if (off < -n / 2) off += n
                const abs = Math.abs(off)
                const style = {
                  transform: `translateX(${off * 300}px) translateZ(${-abs * 220}px) rotateY(${Math.sign(off) * Math.min(abs * 35, 60)}deg) scale(${1 - abs * 0.14})`,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.06,
                  filter: `blur(${abs * 1.1}px)`,
                  zIndex: 10 - abs,
                  pointerEvents: abs > 1 ? 'none' : 'auto',
                }
                return (
                  <figure className={`dbc-card spot-card${off === 0 ? ' is-active' : ''}`} style={style} key={i} onClick={() => setTIndex(i)}>
                    <div className="t-stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={15} fill="currentColor" strokeWidth={0} />)}</div>
                    <blockquote>„{t.quote}“</blockquote>
                    <figcaption>
                      <Avatar name={t.name} size={46} />
                      <span className="dbc-meta">
                        <span className="t-name">{t.name}<span className="t-verified" title="Ověřená reference"><CheckCircle2 size={13} strokeWidth={2.5} /></span></span>
                        <span className="t-role">{t.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
            <div className="dbc-edge left" aria-hidden />
            <div className="dbc-edge right" aria-hidden />
            <div className="dbc-nav">
              <button className="t-arrow" aria-label="Předchozí" onClick={() => setTIndex((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}>←</button>
              <div className="t-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} className={`t-dot${i === tIndex ? ' on' : ''}`} aria-label="Přejít na referenci" onClick={() => setTIndex(i)} />
                ))}
              </div>
              <button className="t-arrow" aria-label="Další" onClick={() => setTIndex((i) => (i + 1) % TESTIMONIALS.length)}>→</button>
            </div>
          </div>
        </div>
      </section>
      ===== /TESTIMONIALS ===== */}

      {/* ===== TEAM / FOUNDER ===== */}
      <section id="tym" className="section">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow" data-reveal="0"><span className="dot" />Kdo za tím stojí</div>
            <h2 data-split="1">Mladý tým, měřitelné výsledky</h2>
            <p className="sub" data-reveal="120">SiteSpot jsme založili ve třech s jednoduchou myšlenkou: malé a střední firmy si zaslouží stejně chytré weby a automatizace jako korporace — bez korporátních cen a nekonečných procesů. Píšeme si napřímo, mluvíme česky a výsledky měříme v číslech.</p>
          </div>
          <div className="grid g3 team-grid">
            {/* real photos live in public/media/*.jpg; they replace the initials automatically.
                socials: profile URLs — '#' renders a disabled placeholder until a real link is set. */}
            {[
              { n: 'Oliver Žaigla', img: '/media/oliver.jpg', role: 'Strategie', bio: 'Vede strategii, akvizici a vztahy s klienty.', chips: ['Strategie', 'Leady', 'Growth'], li: '#', ig: '#', x: '#' },
              { n: 'David Sak', img: '/media/david.jpg', role: 'Design', bio: 'Navrhuje weby a značky, které prodávají.', chips: ['Web design', 'UX/UI', 'Brand'], li: '#', ig: '#', x: '#' },
              { n: 'Max Hrubý', img: '/media/max.jpg', role: 'Vývoj & AI', bio: 'Staví weby, AI agenty a automatizace.', chips: ['Vývoj', 'AI agenti', 'Automatizace'], li: '#', ig: '#', x: '#' },
            ].map((t, i) => {
              const socials = [
                { key: 'li', label: 'LinkedIn', url: t.li, Icon: LinkedinIcon },
                { key: 'ig', label: 'Instagram', url: t.ig, Icon: InstagramIcon },
                { key: 'x', label: 'X', url: t.x, Icon: XIcon },
              ]
              return (
                <div className="team-card spot-card" data-reveal={i * 100} key={t.n}>
                  <div className="team-photo">
                    <img src={t.img} alt={t.n} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <span className="team-init">{t.n.split(' ').map((w) => w[0]).join('')}</span>
                  </div>
                  <div className="team-meta">
                    <b>{t.n}</b>
                    <span className="team-role">Spoluzakladatel · {t.role}</span>
                    <span className="team-sub">{t.bio}</span>
                  </div>
                  <div className="team-chips">
                    {t.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                  <div className="team-social">
                    {socials.map(({ key, label, url, Icon }) => {
                      const active = url && url !== '#'
                      return (
                        <a
                          key={key}
                          className={`tsoc${active ? '' : ' is-disabled'}`}
                          href={url}
                          {...(active ? { target: '_blank', rel: 'noopener noreferrer' } : { 'aria-disabled': true, tabIndex: -1, onClick: (e) => e.preventDefault() })}
                          aria-label={`${t.n} — ${label}`}
                        >
                          <Icon />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="team-cta" data-reveal="200">
            <Btn href="#kontakt" className="btn-light" onClick={openContact}>Napište nám</Btn>
          </div>
        </div>
      </section>

      <Marquee reverse />

      {/* ===== PRICING ===== */}
      <section id="cenik" className="section dark">
        <div className="blob" data-parallax="0.04" aria-hidden style={{ top: 80, left: '50%', marginLeft: -300, width: 600, height: 420, background: 'radial-gradient(closest-side, color-mix(in oklab, var(--acc) 16%, transparent), transparent 72%)', filter: 'blur(70px)' }} />
        <div className="wrap">
          <div className="head">
            <div className="eyebrow" data-reveal="0"><span className="dot" />Ceník</div>
            <h2 data-split="1">Férové ceny, žádná překvapení</h2>
            <p className="sub" data-reveal="120">Ceny startují na férové úrovni pro malé firmy. Finální pevnou cenu dostanete po krátkém briefu — písemně a bez skrytých položek.</p>
          </div>
          <div className="grid g-price">
            {PLANS.map((pl, i) => (
              <div className={`plan spot-card${pl.featured ? ' featured' : ''}`} data-reveal={i * 100} key={i}>
                {pl.featured && <div className="badge">Nejoblíbenější</div>}
                <div className="tier"><KIcon C={TIER_ICONS[i]} size={20} color={pl.featured ? '#E8EAED' : '#C9C9CE'} /> {pl.tier}</div>
                <div className="price">{pl.price}</div>
                <div className="per">{pl.per}</div>
                {pl.brief && <div className="brief">{pl.brief}</div>}
                <p className="desc">{pl.desc}</p>
                <hr />
                <div className="feat-list">
                  {pl.feats.map((f, j) => <div className="row" key={j}><span className="ok"><Check size={13} strokeWidth={3} /></span>{f}</div>)}
                </div>
                <Btn href="#kontakt" className={`plan-cta mt-auto${pl.featured ? ' primary' : ''}`} onClick={openContact}>{pl.cta}</Btn>
              </div>
            ))}
          </div>
          <p className="price-note" data-reveal="120">Uvedené ceny jsou orientační od-ceny pro malé firmy. Podle rozsahu a velikosti projektu vám po krátkém briefu pošleme pevnou nabídku — písemně, bez skrytých položek a bez závazku.</p>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section id="srovnani" className="section">
        <div className="wrap">
          <div className="head">
            <h2 data-split="1">Tradiční způsob vs<br />AI automatizace</h2>
          </div>
          <div className="cmp-bar" data-reveal="0">
            <div className="cmp-bar-side left"><Clock3 size={15} strokeWidth={2} /> Tradiční způsob</div>
            <span className="cmp-bar-vs">VS</span>
            <div className="cmp-bar-side right"><Zap size={15} strokeWidth={2} fill="currentColor" /> SiteSpot automatizace</div>
          </div>
          <div className="grid g-cmp">
            <div className="cmp bad">
              <div className="list">{CMP_BAD.map((r, i) => <div className="row" data-reveal={i * 55} key={i}><span className="cdot bad" />{r}</div>)}</div>
            </div>
            <div className="cmp good">
              <div className="list">{CMP_GOOD.map((r, i) => <div className="row" data-reveal={i * 55} key={i}><span className="cdot good" />{r}</div>)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section dark">
        <div className="faq-wrap">
          <div className="head" style={{ marginBottom: 48 }}>
            <h2 data-split="1">Na co se ptáte nejčastěji</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div className={`faq-item spot-card${faqOpen === i ? ' open' : ''}`} key={i} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                <div className="faq-q"><span className="q">{f.q}</span><span className="plus">+</span></div>
                <div className="faq-a"><div className="inner"><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="kontakt" className="cta">
        <div className="pulse" aria-hidden />
        <div className="inner">
          <h2 data-split="1">Přestaňte web jen mít.<br />Nechte ho <span className="grad">vydělávat</span>.</h2>
          <p data-reveal="150">30 minut, konkrétní doporučení pro váš byznys, žádné závazky. Nejhorší, co se může stát? Odnesete si nápady zdarma.</p>
          <a className="go hbtn" href="#kontakt" onClick={openContact} data-reveal="250"><span className="hbtn-label">Domluvit konzultaci zdarma</span><span className="hbtn-arrow" aria-hidden><ArrowRight size={18} strokeWidth={2} /></span></a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col brand">
              <div className="footer-brand"><span className="mark"><LogoMark size={18} /></span><span className="name">SiteSpot</span></div>
              <p>Digitální agentura pro firmy, které chtějí růst. Weby, AI automatizace, leady a marketing.</p>
            </div>
            <div className="footer-col">
              <div className="footer-head">Navigace</div>
              <a href="#sluzby">Služby</a><a href="#proces">Jak pracujeme</a><a href="#sablony">Šablony</a><a href="#cenik">Ceník</a><a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <div className="footer-head">Kontakt</div>
              <a href="mailto:business@sitespot.cz"><Mail size={15} strokeWidth={1.7} /> business@sitespot.cz</a>
              <a href="tel:+420777123456"><Phone size={15} strokeWidth={1.7} /> +420 777 123 456</a>
              <span style={{ color: 'var(--muted)', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', gap: 8 }}><MapPin size={15} strokeWidth={1.7} /> Praha · pracujeme po celé ČR</span>
              <button className="footer-legal" onClick={() => setLegalOpen(true)}>Ochrana osobních údajů</button>
            </div>
            <div className="footer-col">
              <div className="footer-head">Newsletter</div>
              <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: '#8A8E99' }}>Jednou měsíčně tipy na růst. Žádný spam.</p>
              <div className="news-row">
                <input placeholder="vas@email.cz" />
                <button className="hbtn"><span className="hbtn-label">Odebírat</span><span className="hbtn-arrow" aria-hidden><ArrowRight size={14} strokeWidth={2.3} /></span></button>
              </div>
            </div>
          </div>
          <div className="footer-note"><span>© 2026 SiteSpot s.r.o. Všechna práva vyhrazena.</span><span>Vyrobeno v Praze ⚡</span></div>
        </div>
      </footer>

      <AnimatePresence>
        {fab && !contactOpen && (
          <motion.button
            className="fab" onClick={() => setContactOpen(true)}
            initial={{ opacity: 0, y: 24, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <Zap size={15} strokeWidth={2.2} fill="currentColor" /> Konzultace zdarma
          </motion.button>
        )}
      </AnimatePresence>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
    </div>
  )
}
