import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Real websites we built, shown in a 3D depth carousel (same transform math as
// the case-study / testimonial carousels, so it ties into the existing design).
// `img` is a real screenshot in /public/media/templates that overlays the CSS
// mockup and gracefully falls back to it via onError (like the team photos).
// `url` is the live site; `host` is the domain shown in the browser-frame bar.
const TEMPLATES = [
  { type: 'studio', cls: 't-food', tag: 'Designové studio', name: 'Lynx Studio', url: 'https://lynx-studio-delta.vercel.app', host: 'lynx-studio-delta.vercel.app', img: '/media/templates/lynxstudio.jpg', desc: 'Kreativní studio pro startupy i značky.' },
  { type: 'ai', cls: 't-b2b', tag: 'AI agentura', name: 'Synthetix', url: 'https://synthetix-seven.vercel.app', host: 'synthetix-seven.vercel.app', img: '/media/templates/synthetix.jpg', desc: 'Landing pro AI automatizaci a integrace.' },
  { type: 'ai', cls: 't-book', tag: 'SaaS / AI produkt', name: 'Nexora', url: 'https://nexora-red-nu.vercel.app', host: 'nexora-red-nu.vercel.app', img: '/media/templates/nexora.jpg', desc: 'Produktový web pro AI agenta, od hero po ceník.' },
  { type: 'ai', cls: 't-saas', tag: 'AI / Tech', name: 'Branzly', url: 'https://branzly-asci.vercel.app', host: 'branzly-asci.vercel.app', img: '/media/templates/branzlyasci.jpg', desc: 'Světlý minimalistický web s ASCII vizuálem.' },
  { type: 'studio', cls: 't-studio', tag: 'Kreativní studio', name: 'Vrstva', url: 'https://vrstva.vercel.app', host: 'vrstva.vercel.app', img: '/media/templates/vrstva.jpg', desc: 'Studio pro tech značky — strategie, design, vývoj.' },
]

// Per-template CSS mockup — a generic mini-website that shows behind a screenshot
// and stays visible for entries without one (or if a screenshot fails to load).
// Name-agnostic on purpose: the real site name is always shown in the meta bar.
function Preview({ type }) {
  if (type === 'ai') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">AI<em>▲</em></span><span className="tm-nav"><i /><i /><i /></span></div>
      <div className="tm-hero center"><span className="tm-title w86" /><span className="tm-title w54" /><span className="tm-sub" /><span className="tm-btn" /></div>
      <div className="tm-row">{[0, 1, 2].map((i) => <div className="tm-card" key={i}><span className="tm-thumb" /><span className="tm-bar" /></div>)}</div>
    </div>
  )
  if (type === 'studio') return (
    <div className="tmini">
      <div className="tm-head"><span className="tm-logo">Studio<em>°</em></span><span className="tm-nav"><i /><i /></span></div>
      <span className="tm-title h20 w70" />
      <div className="tm-gal">{[0, 1, 2, 3, 4, 5].map((i) => <span key={i} />)}</div>
    </div>
  )
  return null
}

export default function Templates() {
  const [idx, setIdx] = useState(0)
  const stageRef = useRef(null)
  const slideRefs = useRef([])
  const drag = useRef({ active: false, startX: 0, dx: 0 })
  const hover = useRef(false)
  const N = TEMPLATES.length

  // imperative transforms — matches the case3d depth math, plus a live drag offset
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
  useEffect(() => { apply() }) // re-settle after every render / idx change

  const go = (i) => setIdx(((i % N) + N) % N)

  // keyboard
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'ArrowRight') go(idx + 1); if (e.key === 'ArrowLeft') go(idx - 1) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx])

  // autoplay — always on (pauses only on hover / while dragging)
  useEffect(() => {
    const id = setInterval(() => { if (!hover.current && !drag.current.active) setIdx((i) => (i + 1) % N) }, 4600)
    return () => clearInterval(id)
  }, [N])

  // drag / swipe
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
    <section id="sablony" className="section">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow" data-reveal="0"><span className="dot" />Naše práce</div>
          <h2 data-split="1">Prohlédněte si weby, které umíme postavit</h2>
          <p className="sub" data-reveal="120">Vybrané weby z naší dílny — každý postavený na míru značce. Projeďte si je a otevřete živý náhled.</p>
        </div>

        <div className="tcar" data-reveal="0" onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}>
          <div className="tcar-stage" ref={stageRef} aria-roledescription="carousel">
            {TEMPLATES.map((t, i) => {
              const live = t.url && t.url !== '#'
              return (
                <div className="tcar-slide" key={t.name} ref={(el) => (slideRefs.current[i] = el)} onClick={() => { if (i !== idx) go(i) }}>
                  <div className="tframe">
                    <div className="tbar"><span className="tlights"><i /><i /><i /></span><span className="turl">{t.host || `${t.name.toLowerCase()}.sitespot.cz`}</span></div>
                    <div className={`tprev ${t.cls}`}>
                      <Preview type={t.type} />
                      {t.img && <img className="tshot" src={t.img} alt={`Šablona ${t.name}`} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />}
                    </div>
                    <div className="tmeta">
                      <div className="tmeta-l">
                        <span className="ttag">{t.tag}</span>
                        <span className="tname">{t.name}</span>
                        <span className="tdesc">{t.desc}</span>
                      </div>
                      <a
                        className={`tlive${live ? '' : ' is-disabled'}`}
                        href={live ? t.url : undefined}
                        {...(live ? { target: '_blank', rel: 'noopener noreferrer' } : { 'aria-disabled': true, tabIndex: -1, onClick: (e) => e.preventDefault() })}
                      >
                        Živý náhled <ArrowUpRight size={14} strokeWidth={2.4} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="tcar-edge left" aria-hidden />
          <div className="tcar-edge right" aria-hidden />

          <div className="tcar-nav">
            <button className="t-arrow" aria-label="Předchozí šablona" onClick={() => go(idx - 1)}><ChevronLeft size={18} strokeWidth={2.2} /></button>
            <div className="t-dots" role="tablist">
              {TEMPLATES.map((t, i) => (
                <button key={t.name} role="tab" aria-label={`${t.name} — ${t.tag}`} className={`t-dot${i === idx ? ' on' : ''}`} onClick={() => go(i)} />
              ))}
            </div>
            <span className="tcar-count">{String(idx + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
            <button className="t-arrow" aria-label="Další šablona" onClick={() => go(idx + 1)}><ChevronRight size={18} strokeWidth={2.2} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
