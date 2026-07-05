import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

// Automation demos in the same 3D depth carousel as Templates. Each demo is a
// self-contained static page in /public/demos — the active slide shows it live
// in an iframe (?embed=1 = attract mode, auto-runs itself), "Živý náhled"
// opens the fully interactive page in an on-site modal so visitors never
// leave sitespot.cz. CSS mockups (reused tm-* primitives) cover the moment
// before the iframe loads.
const DEMOS = [
  { type: 'radar', cls: 't-shop', tag: 'Lead & sales', name: 'Lead Radar', url: '/demos/lead-radar.html', desc: 'Sběr firem z veřejných zdrojů a AI scoring leadů rovnou do CRM.' },
  { type: 'inbox', cls: 't-saas', tag: 'E-mail & AI', name: 'Inbox Autopilot', url: '/demos/inbox-autopilot.html', desc: 'Odpovědi na kampaň se třídí samy, follow-upy se píšou samy.' },
  { type: 'faktura', cls: 't-b2b', tag: 'Procesy & finance', name: 'Fakturační linka', url: '/demos/fakturacni-linka.html', desc: 'Objednávka → faktura → e-mail → CRM. Za pár vteřin, bez kliknutí.' },
  { type: 'recenze', cls: 't-studio', tag: 'Reputace', name: 'Recenze na autopilota', url: '/demos/recenze-autopilot.html', desc: 'Odpověď na každou Google recenzi do hodiny, ve vašem tónu.' },
  { type: 'report', cls: 't-food', tag: 'Analytika', name: 'Reporting Bot', url: '/demos/reporting-bot.html', desc: 'Každé pondělí v 8:00 srozumitelný report v e-mailu.' },
]

// lightweight placeholder shown until the live iframe loads — built from the
// existing tm-* mockup primitives so it needs no extra CSS
function Preview({ type, name }) {
  if (type === 'inbox') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">{name}<em>_</em></span><span className="tm-nav"><i /><i /></span></div>
      <span className="tm-title h18 w60" />
      <div className="tm-slist">
        {['Zájem', 'Otázka', 'Odmítnutí'].map((s) => <div key={s}><b /><i>{s}</i></div>)}
      </div>
    </div>
  )
  if (type === 'faktura') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">{name}<em>→</em></span><span className="tm-nav"><i /><i /><i /></span></div>
      <div className="tm-hero"><span className="tm-title" /><span className="tm-sub" /></div>
      <div className="tm-stats">
        {[['1 klik'], ['6 s'], ['0 chyb']].map(([v], i) => <div className="tm-stat" key={i}><b>{v}</b><i /></div>)}
      </div>
    </div>
  )
  if (type === 'recenze') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">{name}<em>★</em></span><span className="tm-nav"><i /><i /></span></div>
      <div className="tm-hero center"><span className="tm-title w54" /><span className="tm-sub" /><span className="tm-btn" /></div>
      <div className="tm-row">{[0, 1].map((i) => <div className="tm-card" key={i}><span className="tm-bar" /><span className="tm-bar" /></div>)}</div>
    </div>
  )
  if (type === 'report') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">{name}<em>▁▃▆</em></span><span className="tm-nav"><i /><i /><i /></span></div>
      <div className="tm-stats">
        {[['+12 %'], ['148k'], ['36']].map(([v], i) => <div className="tm-stat" key={i}><b>{v}</b><i /></div>)}
      </div>
      <span className="tm-sub" />
    </div>
  )
  return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">{name}<em>●</em></span><span className="tm-nav"><i /><i /><i /></span></div>
      <div className="tm-hero"><span className="tm-title" /><span className="tm-sub" /><span className="tm-btn" /></div>
      <div className="tm-row">{[0, 1, 2].map((i) => <div className="tm-card" key={i}><span className="tm-thumb" /><span className="tm-bar" /></div>)}</div>
    </div>
  )
}

// on-site preview modal — browser-framed iframe with the fully interactive demo
function DemoModal({ demo, onClose }) {
  useEffect(() => {
    if (!demo) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [demo, onClose])

  return (
    <AnimatePresence>
      {demo && (
        <motion.div className="dmodal-backdrop" data-lenis-prevent="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="dmodal" role="dialog" aria-modal="true" aria-label={`Živý náhled — ${demo.name}`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dmodal-bar">
              <span className="dmodal-lights"><i /><i /><i /></span>
              <span className="dmodal-url">sitespot.cz{demo.url.replace('.html', '')}</span>
              <a className="tlive" href={demo.url} target="_blank" rel="noopener noreferrer">Celá stránka <ArrowUpRight size={14} strokeWidth={2.4} /></a>
              <button className="dmodal-x" aria-label="Zavřít náhled" onClick={onClose}><X size={17} strokeWidth={2.2} /></button>
            </div>
            <iframe
              className="dmodal-frame" src={demo.url} title={`Živý náhled — ${demo.name}`}
              onLoad={(e) => {
                try {
                  const doc = e.currentTarget.contentWindow.document
                  // Escape must close the modal even when the demo inside has focus (same-origin)
                  doc.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') onClose() })
                  // internal links (/#kontakt, /#dema, …) must navigate the page, not nest the site inside the modal iframe
                  doc.addEventListener('click', (ev) => {
                    const a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null
                    if (!a) return
                    const href = a.getAttribute('href')
                    if (href && href.startsWith('/')) { ev.preventDefault(); onClose(); window.location.assign(href) }
                  })
                } catch { /* cross-origin — close via X/backdrop */ }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Demos() {
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(null)      // demo in the modal
  const [mounted, setMounted] = useState([0]) // slides whose live iframe already mounted (kept alive)
  const [loaded, setLoaded] = useState([])    // slides whose iframe finished loading
  const stageRef = useRef(null)
  const slideRefs = useRef([])
  const iframeRefs = useRef([])
  const drag = useRef({ active: false, startX: 0, dx: 0 })
  const hover = useRef(false)
  const openRef = useRef(null)
  openRef.current = open
  const N = DEMOS.length

  // same depth math as Templates / case3d
  const apply = (liveOffset = 0) => {
    slideRefs.current.forEach((s, i) => {
      if (!s) return
      let off = i - idx
      if (off > N / 2) off -= N
      if (off < -N / 2) off += N
      const o = off + liveOffset
      const a = Math.abs(o)
      s.style.transform = `translateX(${o * 54}%) translateZ(${-a * 260}px) rotateY(${o * -32}deg) scale(${1 - a * 0.12})`
      s.style.opacity = a > 2.2 ? '0' : '1'
      s.style.filter = a > 0.05 ? `brightness(${1 - Math.min(a * 0.16, 0.4)})` : 'none'
      s.style.zIndex = String(100 - Math.round(a * 10))
      s.style.pointerEvents = a > 1.5 ? 'none' : 'auto'
      s.classList.toggle('active', i === idx)
    })
  }
  useEffect(() => { if (!drag.current.active) apply() }) // re-settle, but never snap a live drag (iframe onLoad can re-render mid-drag)

  const go = (i) => {
    const n = ((i % N) + N) % N
    setIdx(n)
    setMounted((m) => (m.includes(n) ? m : [...m, n]))
  }

  // only the active slide's demo runs its attract loop — the rest pause (embed.js listens for these messages)
  useEffect(() => {
    iframeRefs.current.forEach((fr, i) => {
      if (!fr || !fr.contentWindow) return
      fr.contentWindow.postMessage(i === idx ? 'attract:resume' : 'attract:pause', window.location.origin)
    })
  }, [idx, loaded])

  // autoplay — pauses on hover, drag and while the modal is open
  useEffect(() => {
    const id = setInterval(() => {
      if (!hover.current && !drag.current.active && !openRef.current) go(idx + 1)
    }, 4600)
    return () => clearInterval(id)
  }, [idx])

  // drag / swipe (identical to Templates)
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const width = () => stage.offsetWidth * 0.55
    const down = (x) => { drag.current = { active: true, startX: x, dx: 0 }; stage.classList.add('dragging') }
    const move = (x) => { const d = drag.current; if (!d.active) return; d.dx = x - d.startX; apply(-d.dx / width()) }
    const up = () => {
      const d = drag.current
      if (!d.active) return
      d.active = false
      stage.classList.remove('dragging')
      const th = stage.offsetWidth * 0.12
      if (d.dx > th) go(idx - 1)
      else if (d.dx < -th) go(idx + 1)
      else apply()
    }
    const md = (e) => { e.preventDefault(); down(e.clientX) }
    const mm = (e) => move(e.clientX)
    const ts = (e) => down(e.touches[0].clientX)
    const tm = (e) => move(e.touches[0].clientX)
    stage.addEventListener('mousedown', md)
    window.addEventListener('mousemove', mm)
    window.addEventListener('mouseup', up)
    stage.addEventListener('touchstart', ts, { passive: true })
    stage.addEventListener('touchmove', tm, { passive: true })
    stage.addEventListener('touchend', up)
    return () => {
      stage.removeEventListener('mousedown', md)
      window.removeEventListener('mousemove', mm)
      window.removeEventListener('mouseup', up)
      stage.removeEventListener('touchstart', ts)
      stage.removeEventListener('touchmove', tm)
      stage.removeEventListener('touchend', up)
    }
  }, [idx])

  return (
    <section id="dema" className="section">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow" data-reveal="0"><span className="dot" />Automatizace v akci</div>
          <h2 data-split="1">Vyzkoušejte si automatizace, které dodáváme</h2>
          <p className="sub" data-reveal="120">Pět živých ukázek — žádná videa, každá běží přímo tady na stránce. Projeďte si je a v náhledu si je proklikejte.</p>
        </div>

        <div className="tcar" data-reveal="0" onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}>
          <div className="tcar-stage" ref={stageRef} aria-roledescription="carousel">
            {DEMOS.map((d, i) => (
              <div className="tcar-slide" key={d.name} ref={(el) => (slideRefs.current[i] = el)} onClick={() => { if (i !== idx) go(i) }}>
                <div className="tframe">
                  <div className="tbar"><span className="tlights"><i /><i /><i /></span><span className="turl">sitespot.cz{d.url.replace('.html', '')}</span></div>
                  <div className={`tprev ${d.cls}`}>
                    <Preview type={d.type} name={d.name} />
                    {mounted.includes(i) && (
                      <iframe
                        className={`dlive${loaded.includes(i) ? ' on' : ''}`}
                        src={`${d.url}?embed=1`}
                        title={`Živý náhled dema ${d.name}`}
                        loading="lazy" tabIndex={-1} aria-hidden="true"
                        ref={(el) => (iframeRefs.current[i] = el)}
                        onLoad={() => setLoaded((l) => (l.includes(i) ? l : [...l, i]))}
                      />
                    )}
                  </div>
                  <div className="tmeta">
                    <div className="tmeta-l">
                      <span className="ttag">{d.tag}</span>
                      <span className="tname">{d.name}</span>
                      <span className="tdesc">{d.desc}</span>
                    </div>
                    <a
                      className="tlive"
                      href={d.url}
                      onClick={(e) => { if (!e.metaKey && !e.ctrlKey && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); setOpen(d) } }}
                    >
                      Živý náhled <ArrowUpRight size={14} strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tcar-edge left" aria-hidden />
          <div className="tcar-edge right" aria-hidden />

          <div className="tcar-nav">
            <button className="t-arrow" aria-label="Předchozí demo" onClick={() => go(idx - 1)}><ChevronLeft size={18} strokeWidth={2.2} /></button>
            <div className="t-dots" role="tablist">
              {DEMOS.map((d, i) => (
                <button key={d.name} role="tab" aria-label={`${d.name} — ${d.tag}`} className={`t-dot${i === idx ? ' on' : ''}`} onClick={() => go(i)} />
              ))}
            </div>
            <span className="tcar-count">{String(idx + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
            <button className="t-arrow" aria-label="Další demo" onClick={() => go(idx + 1)}><ChevronRight size={18} strokeWidth={2.2} /></button>
          </div>
        </div>
      </div>

      <DemoModal demo={open} onClose={() => setOpen(null)} />
    </section>
  )
}
