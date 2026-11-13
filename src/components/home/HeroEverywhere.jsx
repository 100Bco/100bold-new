'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hero } from '@/data/home'
import Arrow from './Arrow'

/* ── Mini screens: each one is a place a buyer looks, showing real 100Bold work ── */

function ScreenMaps() {
  return (
    <div className="ev-ui ev-maps">
      <div className="ev-map-bg"><span className="ev-road r1" /><span className="ev-road r2" /><span className="ev-road r3" /></div>
      <svg className="ev-pin" viewBox="0 0 24 32" aria-hidden="true"><path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.5 12 32 12 32s12-11.5 12-20.3C24 5.2 18.6 0 12 0z" fill="#C8102E"/><circle cx="12" cy="11.5" r="4.5" fill="#fff"/></svg>
      <div className="ev-map-card">
        <strong>T98 Rehab</strong>
        <span>Injury chiropractic · Austin</span>
        <i>Directions</i>
      </div>
    </div>
  )
}

function ScreenAI() {
  return (
    <div className="ev-ui ev-ai">
      <div className="ev-ai-head">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="currentColor"/></svg>
        AI answer
      </div>
      <div className="ev-ai-q"><span>personal injury lawyer austin</span></div>
      <div className="ev-ai-lines"><i /><i /><i /></div>
      <div className="ev-ai-pick"><b>1</b> Dang Law Group</div>
    </div>
  )
}

function ScreenWeb() {
  return (
    <div className="ev-ui ev-web">
      <div className="ev-chrome"><i /><i /><i /><span /></div>
      <div className="ev-web-view"><img src="/works/LT COMMERCIAL GROUP.png" alt="" loading="eager" /></div>
    </div>
  )
}

function ScreenAd() {
  return (
    <div className="ev-ui ev-ad">
      <div className="ev-ad-head">
        <span className="ev-ad-av">B</span>
        <div><strong>Bee Construction</strong><em>Sponsored</em></div>
      </div>
      <div className="ev-ad-img"><img src="/works/BEE CONSTRUCTION.png" alt="" loading="eager" /></div>
      <div className="ev-ad-cta"><span>Learn more</span><Arrow /></div>
    </div>
  )
}

function ScreenFilm() {
  return (
    <div className="ev-ui ev-film">
      <img src="/works/DANG LAW GROUP.png" alt="" loading="eager" />
      <span className="ev-film-play"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor"/></svg></span>
      <div className="ev-film-bar"><i /></div>
      <span className="ev-film-title">Dang-Man</span>
    </div>
  )
}

function ScreenLinkedIn() {
  return (
    <div className="ev-ui ev-li">
      <div className="ev-li-head">
        <span className="ev-li-av">LD</span>
        <div><strong>Loc Dang</strong><em>Founder, Dang Law Group</em></div>
      </div>
      <div className="ev-li-lines"><i /><i /><i /></div>
      <div className="ev-li-foot">
        <span className="ev-li-react"><b>👍</b><b>❤️</b><b>👏</b></span>
        <span>3,596 followers</span>
      </div>
    </div>
  )
}

const screens = [
  { key: 'seo', label: 'SEO', side: 'l', pos: 'p1', depth: 0.6, Comp: ScreenMaps },
  { key: 'ai', label: 'AI Search', side: 'l', pos: 'p2', depth: 1, Comp: ScreenAI },
  { key: 'web', label: 'Web design', side: 'l', pos: 'p3', depth: 0.8, Comp: ScreenWeb },
  { key: 'ads', label: 'Meta ads', side: 'r', pos: 'p4', depth: 0.7, Comp: ScreenAd },
  { key: 'portal', label: 'Portal', side: 'r', pos: 'p5', depth: 1, Comp: ScreenFilm },
  { key: 'mark', label: 'The Mark', side: 'r', pos: 'p6', depth: 0.6, Comp: ScreenLinkedIn },
]

function Screen({ s, wall }) {
  const { Comp } = s
  return (
    <div className={`ev-screen ev-${s.key}${wall ? ` ${s.pos}` : ''}`} data-side={s.side} data-depth={s.depth}>
      <span className="ev-tag">{s.label}</span>
      <div className="ev-screen-in">
        <Comp />
      </div>
    </div>
  )
}

export default function HeroEverywhere() {
  const ref = useRef(null)
  const svg = useRef(null)

  // Draw a curved line from every wall screen to the red dot at the end of the headline
  useEffect(() => {
    const stage = ref.current?.querySelector('.ev-stage')
    const dot = ref.current?.querySelector('.ev-dot')
    if (!stage || !dot || !svg.current) return
    const draw = () => {
      const sr = stage.getBoundingClientRect()
      const dr = dot.getBoundingClientRect()
      const tx = dr.left + dr.width / 2 - sr.left
      const ty = dr.top + dr.height / 2 - sr.top
      svg.current.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`)
      const holes = svg.current.querySelector('#ev-holes')
      if (holes) {
        const pad = 10
        const boxes = []
        stage.querySelectorAll('.ev-h1 .nk-line > span, .ev-sub, .ev-ctas, .ev-tagline').forEach((el) => {
          const r = el.getBoundingClientRect()
          let right = r.right
          if (el.contains(dot)) right = dr.left - 4
          boxes.push(`<rect x="${r.left - sr.left - pad}" y="${r.top - sr.top - pad / 2}" width="${right - r.left + pad * 2}" height="${r.height + pad}" rx="12" fill="black" />`)
        })
        holes.innerHTML = `<rect width="100%" height="100%" fill="white" />` + boxes.join('')
      }
      stage.querySelectorAll('.ev-wall .ev-screen').forEach((el, i) => {
        const r = el.getBoundingClientRect()
        const left = el.dataset.side === 'l'
        const x = (left ? r.right : r.left) - sr.left
        const y = r.top + r.height / 2 - sr.top
        const cx = x + (tx - x) * 0.55
        const d = `M${x},${y} C${cx},${y} ${cx},${ty} ${tx},${ty}`
        svg.current.querySelectorAll(`[data-line="${i}"]`).forEach((p) => p.setAttribute('d', d))
        const m = svg.current.querySelector(`[data-motion="${i}"]`)
        if (m) m.setAttribute('path', d)
      })
    }
    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(stage)
    window.addEventListener('load', draw)
    const t = setTimeout(draw, 1200)
    return () => { ro.disconnect(); window.removeEventListener('load', draw); clearTimeout(t) }
  }, [])

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 })
      tl.from('.ev-h1 .nk-line > span', { yPercent: 115, duration: 1.4, stagger: 0.1 })
        .from('.ev-dot', { scale: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }, '-=0.6')
        .from('.ev-sub, .ev-ctas', { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, '-=0.9')
        .from('.ev-wall .ev-screen', { opacity: 0, scale: 0.7, y: 40, duration: 1.2, stagger: 0.09 }, '-=1.1')
        .from('.ev-lines .ev-line-base', { strokeDashoffset: 1, duration: 1.4, ease: 'power2.inOut', stagger: 0.06 }, '-=1')
        .from('.ev-lines .ev-line-flow, .ev-lines circle', { opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.ev-mobile', { opacity: 0, y: 40, duration: 1.2 }, '-=1.6')
        .from('.ev-proof .nk-proof-item', { y: 30, opacity: 0, duration: 1, stagger: 0.08 }, '-=1.2')

      gsap.utils.toArray('.ev-proof .nk-count').forEach((el) => {
        const o = { v: 0 }
        tl.to(o, { v: +el.dataset.to, duration: 1.4, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v) } }, '-=1.2')
      })
    })

    mm.add(MQ.desktop, () => {
      // scroll: the wall breaks apart outward as the hero leaves
      gsap.utils.toArray('.ev-wall .ev-screen').forEach((el) => {
        const dir = el.dataset.side === 'l' ? -1 : 1
        gsap.to(el, {
          x: dir * 220 * +el.dataset.depth, y: -60 * +el.dataset.depth, rotate: dir * 6, opacity: 0, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: '70% top', scrub: true },
        })
      })
      gsap.to('.ev-lines', { opacity: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: '35% top', scrub: true } })
      gsap.to('.ev-copy', { y: 80, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    })

    mm.add('(pointer: fine) and (min-width: 1101px) and (prefers-reduced-motion: no-preference)', () => {
      const items = gsap.utils.toArray('.ev-wall .ev-screen-in').map((el) => ({
        d: +el.parentElement.dataset.depth,
        x: gsap.quickTo(el, 'x', { duration: 1, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 1, ease: 'power3' }),
      }))
      const move = (e) => {
        const nx = e.clientX / window.innerWidth - 0.5
        const ny = e.clientY / window.innerHeight - 0.5
        items.forEach((it) => { it.x(nx * 30 * it.d); it.y(ny * 24 * it.d) })
      }
      window.addEventListener('mousemove', move)
      return () => window.removeEventListener('mousemove', move)
    })
  })

  return (
    <section className="ev-hero" ref={ref}>
      <div className="ev-stage">
        <svg className="ev-lines" ref={svg} aria-hidden="true" preserveAspectRatio="none">
          <defs><mask id="ev-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><g id="ev-holes"><rect width="100%" height="100%" fill="white" /></g></mask></defs>
          {screens.map((s, i) => (
            <g key={s.key} mask="url(#ev-mask)">
              <path data-line={i} className="ev-line-base" pathLength="1" />
              <path data-line={i} className="ev-line-flow" style={{ animationDelay: `${i * -0.4}s` }} />
              <circle r="3.5">
                <animateMotion data-motion={i} dur={`${2.6 + (i % 3) * 0.5}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" path="M0,0" />
              </circle>
            </g>
          ))}
        </svg>

        <div className="ev-wall" aria-hidden="true">
          {screens.map((s) => <Screen key={s.key} s={s} wall />)}
        </div>

        <div className="ev-copy">
          <h1 className="ev-h1">
            <span className="nk-line"><span>The growth agency</span></span>
            <span className="nk-line"><span>for <em>$5M+</em> service</span></span>
            <span className="nk-line"><span>businesses<i className="ev-dot" aria-hidden="true" /></span></span>
          </h1>
          <p className="ev-sub">{hero.sub}</p>
          <div className="ev-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost" data-magnetic="0.3">See our work</Link>
          </div>
          <p className="ev-tagline">{hero.tagline.join(' ')}</p>
        </div>

        <div className="ev-mobile" aria-hidden="true">
          <div className="ev-col">
            <div className="ev-col-track">
              {[0, 1].map((k) => screens.filter((_, i) => i % 2 === 0).map((s) => <Screen key={s.key + k} s={s} />))}
            </div>
          </div>
          <div className="ev-col ev-col-b">
            <div className="ev-col-track">
              {[0, 1].map((k) => screens.filter((_, i) => i % 2 === 1).map((s) => <Screen key={s.key + k} s={s} />))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx">
        <ul className="nk-proof ev-proof">
          {hero.proof.map((p, i) => (
            <li className="nk-proof-item" key={i}>
              <strong>{p.pre}<span className="nk-count" data-to={p.num}>{p.num}</span>{p.post}</strong>
              <span>{p.who}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
