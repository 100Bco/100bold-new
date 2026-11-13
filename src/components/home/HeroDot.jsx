'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hero, services } from '@/data/home'
import Arrow from './Arrow'

const headline = ['The', 'growth', 'agency', 'for', '$5M+', 'service', 'businesses']

export default function HeroDot() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const root = ref.current
      const pin = root.querySelector('.rd-pin')
      const copy = root.querySelector('.rd-copy')
      const inside = root.querySelector('.rd-inside')
      const slot = root.querySelector('.rd-dot-slot')
      const dot = root.querySelector('.rd-dot')

      // the slot never moves with animations, so it is a stable anchor for the dot's resting place
      let g = null
      const geo = () => {
        const prev = copy.style.transform
        copy.style.transform = 'none'
        const pr = pin.getBoundingClientRect()
        const dr = slot.getBoundingClientRect()
        copy.style.transform = prev
        const x = dr.left + dr.width / 2 - pr.left
        const y = dr.top + dr.height / 2 - pr.top
        const far = Math.hypot(Math.max(x, pr.width - x), Math.max(y, pr.height - y)) + 20
        return { x, y, r: dr.width / 2, far }
      }

      gsap.set(inside, { position: 'absolute', inset: 0, zIndex: 4, clipPath: 'circle(0px at 50% 50%)' })

      // 1. intro: words rise, then the dot drops in and bounces into place
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 })
      intro
        .from('.rd-h1 .rd-w > span', { yPercent: 110, duration: 1.3, stagger: 0.06 })
        .from('.rd-sub, .rd-ctas, .rd-services, .rd-proof li', { y: 24, opacity: 0, duration: 1, stagger: 0.07 }, '-=0.9')
        .fromTo(dot, { y: () => -(slot.getBoundingClientRect().top + 160), scaleY: 1.35, scaleX: 0.75 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: 'bounce.out' }, '-=0.9')
        .add(() => { dot.classList.add('is-landed'); g = null; render() })

      // 2. scroll: camera dives into the dot, red floods out of it, the brand film opens inside
      const ease = gsap.parseEase('power2.in')
      const proxy = { p: 0 }
      function render() {
        // at rest, keep re-measuring (fonts and layout may still be settling) and keep the red layer hidden
        const rest = proxy.p < 0.02
        if (!g || rest) g = geo()
        const e = rest ? 0 : ease((proxy.p - 0.02) / 0.98)
        copy.style.transformOrigin = g.x + 'px ' + g.y + 'px'
        copy.style.transform = 'scale(' + (1 + 1.6 * e) + ')'
        copy.style.opacity = String(1 - e)
        inside.style.clipPath = 'circle(' + (e <= 0 ? 0 : g.r + (g.far - g.r) * e).toFixed(1) + 'px at ' + g.x.toFixed(1) + 'px ' + g.y.toFixed(1) + 'px)'
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin, start: 'top top', end: '+=180%', pin: true, scrub: 0.6, anticipatePin: 1,
          invalidateOnRefresh: true, onRefresh: () => { g = null; render() },
        },
      })
      tl.to(proxy, { p: 1, duration: 1, ease: 'none', onUpdate: render }, 0)
        .to('.rd-proof', { opacity: 0, duration: 0.25 }, 0)
        .from('.rd-film', { scale: 0.2, opacity: 0, duration: 0.8, ease: 'expo.out' }, 0.75)
        .from('.rd-tag-a', { xPercent: -40, opacity: 0, duration: 0.8, ease: 'expo.out' }, 0.85)
        .from('.rd-tag-b', { xPercent: 40, opacity: 0, duration: 0.8, ease: 'expo.out' }, 0.9)
        .to({}, { duration: 0.6 })

      const onResize = () => { g = null }
      window.addEventListener('resize', onResize)
      const ro = new ResizeObserver(() => { g = null; render() })
      ro.observe(root.querySelector('.rd-h1'))
      document.fonts?.ready.then(() => { g = null; render() })
      return () => {
        window.removeEventListener('resize', onResize)
        ro.disconnect()
        dot.classList.remove('is-landed')
        copy.removeAttribute('style')
        inside.style.clipPath = ''
      }
    })
  })

  return (
    <section className="rd-hero" ref={ref}>
      <div className="rd-pin">
        <div className="rd-copy">
          <div className="mx">
            <h1 className="rd-h1" aria-label={headline.join(' ')}>
              {headline.map((w, i) => (
                <span key={i} className={`rd-w${w === '$5M+' ? ' rd-em' : ''}`} aria-hidden="true">
                  <span>{w}{i === headline.length - 1 && <span className="rd-dot-slot"><i className="rd-dot" /></span>}</span>
                </span>
              ))}
            </h1>
            <div className="rd-row">
              <p className="rd-sub">{hero.sub}</p>
              <div className="rd-ctas">
                <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
                <Link href="/work" className="nk-btn nk-btn-ghost" data-magnetic="0.3">See our work</Link>
              </div>
            </div>
            <ul className="rd-services">
              {services.items.map((s) => <li key={s.to}><Link href={s.to}>{s.title}</Link></li>)}
              <li><Link href="/the-mark">The Mark</Link></li>
            </ul>
          </div>
        </div>

        <div className="mx rd-proof-wrap">
          <ul className="rd-proof">
            {hero.proof.map((p, i) => (
              <li key={i}>
                <strong>{p.pre}<span>{p.num}</span>{p.post}</strong>
                <em>{p.who}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="rd-inside">
          <p className="rd-tag rd-tag-a">{hero.tagline[0]}</p>
          <div className="rd-film">
            <wistia-player media-id="futnh0kwqu" aspect="1.0" style={{ width: '100%', height: '100%', display: 'block' }}></wistia-player>
          </div>
          <p className="rd-tag rd-tag-b">{hero.tagline[1]}</p>
        </div>
      </div>
    </section>
  )
}
