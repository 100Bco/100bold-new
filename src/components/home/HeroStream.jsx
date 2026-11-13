'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hero } from '@/data/home'
import Arrow from './Arrow'

/* The ribbon: drawn in a 600×600 box, enters from the top-right and spirals into the dot */
const PATH = 'M 700 -40 C 560 60, 170 -10, 95 190 C 30 360, 210 560, 420 500 C 590 450, 600 250, 470 200 C 360 160, 250 230, 270 320 C 285 385, 340 375, 330 330'
const DOT = { x: 330, y: 330 }

const ic = {
  google: <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>,
  maps: <svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 1C7.6 1 4 4.5 4 8.9 4 15 12 23 12 23s8-8 8-14.1C20 4.5 16.4 1 12 1z"/><circle cx="12" cy="9" r="3.2" fill="#fff"/></svg>,
  chatgpt: <svg viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.8"><ellipse cx="12" cy="12" rx="9" ry="4.2"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)"/></svg>,
  gemini: <svg viewBox="0 0 24 24"><defs><linearGradient id="hs-gem" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4F8DF7"/><stop offset="1" stopColor="#B06EF2"/></linearGradient></defs><path fill="url(#hs-gem)" d="M12 1c.6 5.6 5.4 10.4 11 11-5.6.6-10.4 5.4-11 11-.6-5.6-5.4-10.4-11-11 5.6-.6 10.4-5.4 11-11z"/></svg>,
  facebook: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.4 23v-8.2h2.8l.4-3.2h-3.2V9.5c0-.9.3-1.6 1.6-1.6h1.7V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2H10V23z"/></svg>,
  instagram: <svg viewBox="0 0 24 24"><defs><linearGradient id="hs-ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FEDA75"/><stop offset=".35" stopColor="#FA7E1E"/><stop offset=".65" stopColor="#D62976"/><stop offset="1" stopColor="#4F5BD5"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="6" fill="url(#hs-ig)"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="17.4" cy="6.6" r="1.3" fill="#fff"/></svg>,
  youtube: <svg viewBox="0 0 24 24"><rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#FF0000"/><path fill="#fff" d="M10 8.8v6.4l5.4-3.2z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2"/><path fill="#fff" d="M6.9 9.5h-3v9.6h3zM5.4 4.6a1.7 1.7 0 1 0 0 3.5 1.7 1.7 0 0 0 0-3.5zM19.6 13.6c0-2.6-.6-4.4-3.6-4.4-1.5 0-2.4.8-2.8 1.5V9.5h-2.9v9.6h3v-4.8c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6v4.7h3z"/></svg>,
  web: <svg viewBox="0 0 24 24" fill="none"><rect x="1.5" y="3.5" width="21" height="17" rx="3" fill="#1A1816"/><rect x="3.5" y="8" width="17" height="10.5" rx="1.5" fill="#fff"/><circle cx="4.6" cy="5.8" r=".9" fill="#C8102E"/><circle cx="7.2" cy="5.8" r=".9" fill="#fff" opacity=".6"/><rect x="5.5" y="10" width="8" height="1.6" rx=".8" fill="#C8102E"/><rect x="5.5" y="13" width="12" height="1.2" rx=".6" fill="#ddd"/><rect x="5.5" y="15.2" width="9" height="1.2" rx=".6" fill="#ddd"/></svg>,
}

const channels = [
  { k: 'google', name: 'Google', service: 'SEO and AI Search', to: '/services/seo-ai-search' },
  { k: 'linkedin', name: 'LinkedIn', service: 'The Mark', to: '/the-mark' },
  { k: 'chatgpt', name: 'ChatGPT', service: 'SEO and AI Search', to: '/services/seo-ai-search' },
  { k: 'instagram', name: 'Instagram', service: 'Meta ads', to: '/services/meta-ads' },
  { k: 'maps', name: 'Google Maps', service: 'SEO and AI Search', to: '/services/seo-ai-search' },
  { k: 'youtube', name: 'YouTube', service: 'Portal', to: '/portal' },
  { k: 'web', name: 'Your website', service: 'Web design', to: '/services/web-design' },
  { k: 'facebook', name: 'Facebook', service: 'Meta ads', to: '/services/meta-ads' },
  { k: 'gemini', name: 'Gemini', service: 'SEO and AI Search', to: '/services/seo-ai-search' },
]

const LOOP = 16 // seconds for one icon to travel the whole ribbon

export default function HeroStream() {
  const ref = useRef(null)
  const box = useRef(null)
  const tweens = useRef([])
  const [hover, setHover] = useState(null)

  // scale the fixed 600×600 drawing to whatever width the column has
  useEffect(() => {
    const el = box.current
    if (!el) return
    const fit = () => el.style.setProperty('--s', String(el.parentElement.clientWidth / 600))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el.parentElement)
    return () => ro.disconnect()
  }, [])

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const root = ref.current
      const pin = root.querySelector('.hs-pin')
      const dotEl = root.querySelector('.hs-dot')
      const flood = root.querySelector('.hs-flood')
      const icons = gsap.utils.toArray('.hs-icon')
      const n = icons.length
      const kOf = (p) => (p > 0.8 ? 1 - (p - 0.8) / 0.2 : p < 0.06 ? p / 0.06 : 1)

      // the endless inward flow (created paused; it starts once the stream has burst out of the dot)
      tweens.current = icons.map((el, i) => {
        const t = gsap.fromTo(el, { offsetDistance: '0%' }, {
          offsetDistance: '100%', duration: LOOP, ease: 'none', repeat: -1, paused: true,
          onUpdate() { el.style.setProperty('--k', kOf(this.progress()).toFixed(3)) },
        })
        t.progress(i / n)
        return t
      })

      // 1. INTRO — the red dot appears, then the stream pours OUT of it and unfurls to full
      gsap.set('.hs-ribbon path', { strokeDashoffset: -1 })
      icons.forEach((el) => { el.style.offsetDistance = '100%'; el.style.setProperty('--k', '0') })
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 })
      intro
        .from('.hs-dot', { scale: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' })
        .from('.hs-dot img', { scale: 0.4, opacity: 0, duration: 0.8 }, '-=0.8')
        .to('.hs-ribbon path', { strokeDashoffset: 0, duration: 2.2, ease: 'power3.inOut', stagger: 0.12 }, '-=0.5')
      icons.forEach((el, i) => {
        const phase = i / n
        const k = { v: 0 }
        intro.to(el, { offsetDistance: phase * 100 + '%', duration: 1.9, ease: 'power3.out' }, 1.15 + (n - i) * 0.07)
        intro.to(k, { v: kOf(phase), duration: 1.2, onUpdate: () => el.style.setProperty('--k', k.v.toFixed(3)) }, 1.25 + (n - i) * 0.07)
      })
      intro
        .add(() => tweens.current.forEach((t) => t.play()))
        .from('.hs-h1 .nk-line > span', { yPercent: 115, duration: 1.3, stagger: 0.09 }, 0.45)
        .from('.hs-sub, .hs-ctas', { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.9)
        .from('.hs-proof li', { y: 30, opacity: 0, duration: 1, stagger: 0.08 }, 1.4)

      // 2. SCROLL — the stream is sucked back into the dot, then the dot floods the screen
      let g = null
      const geo = () => {
        const pr = pin.getBoundingClientRect()
        const dr = dotEl.getBoundingClientRect()
        const x = dr.left + dr.width / 2 - pr.left
        const y = dr.top + dr.height / 2 - pr.top
        return { x, y, r: dr.width / 2, far: Math.hypot(Math.max(x, pr.width - x), Math.max(y, pr.height - y)) + 20 }
      }
      const vortex = { p: 0 }
      const floodE = gsap.parseEase('power2.in')
      function render() {
        const rest = vortex.p < 0.01
        if (!g || rest) g = geo()
        const f = Math.max(0, (vortex.p - 0.45) / 0.55)
        flood.style.clipPath = 'circle(' + (f <= 0 ? 0 : g.r + (g.far - g.r) * floodE(f)).toFixed(1) + 'px at ' + g.x.toFixed(1) + 'px ' + g.y.toFixed(1) + 'px)'
      }
      const tall = () => pin.offsetHeight > window.innerHeight + 4
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin, start: () => (tall() ? 'bottom bottom' : 'top top'), end: '+=200%',
          pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
          onRefresh: () => { g = null; render() },
          onUpdate: (self) => {
            // the flow itself speeds up as it is pulled in
            const v = 1 + self.progress * 6
            tweens.current.forEach((t) => t.timeScale(v))
          },
        },
      })
      tl.to(vortex, { p: 1, duration: 1, ease: 'none', onUpdate: render }, 0)
        .to(['.hs-icons', '.hs-ribbon'], { rotate: 220, scale: 0, ease: 'power2.in', duration: 0.5 }, 0)
        .to('.hs-copy', { x: -60, opacity: 0, ease: 'power2.in', duration: 0.4 }, 0)
        .to('.hs-proof', { y: 40, opacity: 0, ease: 'power2.in', duration: 0.3 }, 0)
        .to('.hs-dot', { scale: 1.25, duration: 0.45, ease: 'power2.inOut' }, 0)
        .from('.hs-flood-a', { xPercent: -30, opacity: 0, duration: 0.3, ease: 'expo.out' }, 0.72)
        .from('.hs-flood-b', { xPercent: 30, opacity: 0, duration: 0.3, ease: 'expo.out' }, 0.78)
        .from('.hs-flood-dot', { scale: 0, duration: 0.3, ease: 'back.out(3)' }, 0.85)
        .to({}, { duration: 0.25 })

      gsap.set(flood, { display: 'grid' })
      const ro = new ResizeObserver(() => { g = null; render() })
      ro.observe(pin)
      return () => { ro.disconnect(); flood.style.clipPath = '' }
    })
  })

  const pause = (i) => {
    setHover(i)
    tweens.current.forEach((t) => gsap.to(t, { timeScale: i === null ? 1 : 0, duration: 0.5, overwrite: true }))
  }

  const active = hover !== null ? channels[hover] : null

  return (
    <section className="hs-hero" ref={ref}>
      <div className="hs-pin">
      <div className="mx hs-grid">
        <div className="hs-copy">
          <h1 className="hs-h1">
            <span className="nk-line"><span>The growth agency</span></span>
            <span className="nk-line"><span>for <em>$5M+</em> service</span></span>
            <span className="nk-line"><span>businesses<i className="hs-period" aria-hidden="true" /></span></span>
          </h1>
          <p className="hs-sub">{hero.sub}</p>
          <div className="hs-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost" data-magnetic="0.3">See our work</Link>
          </div>
        </div>

        <div className="hs-visual">
          <div className="hs-box" ref={box}>
            <svg className="hs-ribbon" viewBox="0 0 600 600" aria-hidden="true">
              <defs>
                <linearGradient id="hs-band" x1="1" y1="0" x2="0.4" y2="0.7">
                  <stop offset="0" stopColor="#C8102E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#C8102E" stopOpacity="0.10" />
                  <stop offset="1" stopColor="#C8102E" stopOpacity="0.28" />
                </linearGradient>
              </defs>
              <path d={PATH} pathLength="1" className="hs-band" stroke="url(#hs-band)" />
              <path d={PATH} pathLength="1" className="hs-thread" />
            </svg>

            <div className="hs-dot" style={{ left: DOT.x, top: DOT.y }}>
              <img src="/100BOLD - OP3-09 (1).png" alt="" />
            </div>

            <ul className="hs-icons" onMouseLeave={() => pause(null)}>
              {channels.map((c, i) => (
                <li
                  key={c.k}
                  className={`hs-icon${hover === i ? ' on' : ''}`}
                  style={{ offsetPath: `path('${PATH}')`, offsetDistance: `${(i * 100) / channels.length}%` }}
                  onMouseEnter={() => pause(i)}
                >
                  <Link href={c.to} aria-label={`${c.name}: ${c.service}`}>{ic[c.k]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <p className={`hs-hint${active ? ' show' : ''}`} aria-live="polite">
            {active && <><b>{active.name}</b><span>→</span><Link href={active.to}>{active.service}</Link></>}
          </p>
        </div>
      </div>

      <div className="mx">
        <ul className="hs-proof">
          {hero.proof.map((p, i) => (
            <li key={i}>
              <strong>{p.pre}<span>{p.num}</span>{p.post}</strong>
              <em>{p.who}</em>
            </li>
          ))}
        </ul>
      </div>

      <div className="hs-flood" aria-hidden="true">
        <p className="hs-flood-a">{hero.tagline[0]}</p>
        <i className="hs-flood-dot" />
        <p className="hs-flood-b">{hero.tagline[1]}</p>
      </div>
      </div>
    </section>
  )
}
