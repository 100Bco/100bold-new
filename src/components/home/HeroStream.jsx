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
    const visual = el.parentElement
    const pin = ref.current.querySelector('.hs-pin')
    const copy = ref.current.querySelector('.hs-copy')
    // desktop: make the spiral as large as the space right of the text allows,
    // its outer ring kept just inside the right edge of the screen
    const place = () => {
      if (window.innerWidth > 960) {
        const vw = document.documentElement.clientWidth, vh = window.innerHeight
        const pr = pin.getBoundingClientRect()
        // the spiral's widest part sits level with the headline and sub-line, so only they limit it
        const textRight = Math.max(...[...copy.querySelectorAll('.hs-h1 .nk-line > span, .hs-sub')].map((n) => {
          const r = n.getBoundingClientRect()
          return n.classList.contains('hs-sub') ? r.left + Math.min(r.width, 440) : r.right
        })) - pr.left
        const right = vw - vw * 0.014
        const W = Math.min(vw * 0.66, vh * 1.3, (right - textRight - 16) / 1.02)
        // let the hero grow taller when the spiral needs it, so nothing is cut at the bottom
        pin.style.minHeight = Math.max(vh, W * 1.1 + 60) + 'px'
        visual.style.width = W + 'px'
        visual.style.left = right - W * 1.062 + 'px'
        visual.style.top = Math.max(-40, pin.offsetHeight / 2 + 40 - W * 0.597) + 'px'
      } else {
        visual.style.width = visual.style.left = visual.style.top = ''
        pin.style.minHeight = ''
      }
      el.style.setProperty('--s', String(visual.clientWidth / 600))
    }
    place()
    const ro = new ResizeObserver(place)
    ro.observe(pin)
    window.addEventListener('resize', place)
    return () => { ro.disconnect(); window.removeEventListener('resize', place) }
  }, [])

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const root = ref.current
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

      // 1. INTRO — the dot drops in, then a radar-like sweep turns around the dot and uncovers
      //    the ribbon turn by turn along its spiral; each channel pops out as the sweep passes it
      const paths = gsap.utils.toArray('.hs-ribbon path')
      const thread = root.querySelector('.hs-thread')
      const sweepFill = root.querySelector('.hs-sweep-fill')
      const sweepHand = root.querySelector('.hs-sweep-hand')
      const L = thread.getTotalLength()
      // sample the spiral from the dot outward: cumulative angle (0 = up, clockwise) and radius
      const S = 240
      const th = [], rr = [], ss = []
      let prev = null, acc = 0
      for (let j = 0; j <= S; j++) {
        const sLen = L * (1 - j / S)
        const pt = thread.getPointAtLength(sLen)
        const dx = pt.x - DOT.x, dy = pt.y - DOT.y
        if (Math.hypot(dx, dy) < 24) continue // inside the dot: no meaningful angle yet
        let ang = (Math.atan2(dx, -dy) * 180) / Math.PI
        if (prev !== null) {
          let d = ang - prev
          if (d > 180) d -= 360
          if (d < -180) d += 360
          acc += d
        } else acc = ang
        prev = ang
        th.push(acc); rr.push(Math.hypot(dx, dy)); ss.push(sLen / L)
      }
      const t0 = th[0], t1 = th[th.length - 1]
      const at = (deg) => {
        const rad = (deg * Math.PI) / 180
        return [Math.sin(rad), -Math.cos(rad)]
      }
      const sweep = { a: t0 }
      const planted = new Array(n).fill(false)
      const iconAngle = icons.map((_, i) => {
        const q = i / n
        let best = 0
        for (let j = 0; j < ss.length; j++) if (Math.abs(ss[j] - q) < Math.abs(ss[best] - q)) best = j
        return th[best]
      })
      const onSweep = () => {
        const a = sweep.a
        let d = 'M' + DOT.x + ',' + DOT.y
        let last = null
        for (let j = 0; j < th.length && th[j] <= a; j++) {
          const [ux, uy] = at(th[j])
          const R = rr[j] + 70
          d += ' L' + (DOT.x + ux * R).toFixed(1) + ',' + (DOT.y + uy * R).toFixed(1)
          last = j
        }
        let hx = DOT.x, hy = DOT.y
        if (last !== null && last < th.length - 1) {
          const f = (a - th[last]) / (th[last + 1] - th[last] || 1)
          const R = rr[last] + (rr[last + 1] - rr[last]) * f + 70
          const [ux, uy] = at(a)
          hx = DOT.x + ux * R; hy = DOT.y + uy * R
          d += ' L' + hx.toFixed(1) + ',' + hy.toFixed(1)
        }
        sweepFill.setAttribute('d', d + ' Z')
        sweepHand.setAttribute('x2', hx.toFixed(1))
        sweepHand.setAttribute('y2', hy.toFixed(1))
        sweepHand.style.opacity = a > t0 + 2 && a < t1 - 2 ? '1' : '0'
        icons.forEach((el, i) => {
          if (!planted[i] && a >= iconAngle[i]) {
            planted[i] = true
            const q = i / n
            const k = { v: 0 }
            gsap.to(k, { v: kOf(q), duration: 0.7, ease: 'back.out(2.2)', onUpdate: () => el.style.setProperty('--k', k.v.toFixed(3)) })
          }
        })
      }
      icons.forEach((el, i) => { el.style.offsetDistance = (i / n) * 100 + '%'; el.style.setProperty('--k', '0') })
      onSweep()

      const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.2 })
      intro
        .fromTo('.hs-dot', { y: -520, scaleX: 0.8, scaleY: 1.2 }, { y: 0, scaleX: 1, scaleY: 1, duration: 1.3, ease: 'bounce.out' })
        .from('.hs-dot img', { scale: 0.3, opacity: 0, duration: 0.7 }, '-=0.35')
        .to(sweep, { a: t1, duration: 3, ease: 'power1.inOut', onUpdate: onSweep }, '-=0.2')
        .add(() => { sweepFill.setAttribute('d', 'M-200,-200 H900 V900 H-200 Z') })
        .add(() => tweens.current.forEach((t) => t.play()))
        .from('.hs-h1 .nk-line > span', { yPercent: 115, duration: 1.3, stagger: 0.09 }, 0.35)
        .from('.hs-label, .hs-sub, .hs-ctas', { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.8)
        .from('.hs-proof li', { y: 30, opacity: 0, duration: 1, stagger: 0.08 }, 1.3)

      // 2. SCROLL — gentle parallax only (the section transition is decided separately)
      gsap.to('.hs-visual', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hs-copy', { y: -40, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true } })
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
          <p className="hs-label">(01) Growth agency</p>
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
          <ul className="hs-proof">
            {hero.proof.map((p, i) => (
              <li key={i}>
                <strong>{p.pre}<span>{p.num}</span>{p.post}</strong>
                <em>{p.who}</em>
              </li>
            ))}
          </ul>
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
              <mask id="hs-sweep" maskUnits="userSpaceOnUse" x="-300" y="-300" width="1300" height="1300">
                <path className="hs-sweep-fill" style={{ fill: "#fff", stroke: "none", strokeDasharray: "none" }} d="M-200,-200 H900 V900 H-200 Z" />
              </mask>
              <g mask="url(#hs-sweep)">
                <path d={PATH} pathLength="1" className="hs-band" stroke="url(#hs-band)" />
                <path d={PATH} pathLength="1" className="hs-thread" />
              </g>
              <line className="hs-sweep-hand" x1={DOT.x} y1={DOT.y} x2={DOT.x} y2={DOT.y} />
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

      </div>
    </section>
  )
}
