'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { isoScenes } from '@/lib/isoScenes'
import Arrow from '@/components/home/Arrow'
import Lottie from './Lottie'

/* Industry hero: the promise on the left; the client picture with its proof on the right */
export default function IndHero({ d }) {
  const ref = useRef(null)
  const cv = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.sdh-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.sdh-crumb, .sdh-line-p, .sdh-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
        .from(ref.current.querySelector('.idh-media'), { clipPath: 'inset(12% 12% 12% 12% round 30px)', opacity: 0, duration: 1.4, ease: 'expo.out' }, '-=1.1')
        .from(ref.current.querySelectorAll('.idh-badge, .idh-proof'), { y: 30, opacity: 0, scale: 0.9, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.12 }, '-=.7')
    })
  })
  useEffect(() => {
    if (d.scene == null || !cv.current) return
    const c = cv.current
    c.width = 712; c.height = 428
    const draw = isoScenes[d.scene](c)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { draw(4.6); return }
    let raf = 0; const t0 = performance.now()
    const tick = (now) => { draw((now - t0) / 1000); raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [d.scene])
  return (
    <section className="sdh idh" ref={ref}>
      <div className="mx sdh-grid">
        <div className="sdh-copy">
          <nav className="sdh-crumb" aria-label="Breadcrumb"><Link href="/industries">Industries</Link><span>/</span><b>{d.name}</b></nav>
          <h1 className="sdh-h1">{d.hero.h1.map((l, i) => <span className="sdh-line" key={l}><span className={i === d.hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
          <p className="sdh-line-p">{d.hero.line}</p>
          <div className="sdh-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost">See our work</Link>
          </div>
        </div>
        <div className="idh-vis">
          <div className={'idh-media' + (d.scene != null ? ' scene' : '')}>
            {d.scene != null ? <canvas ref={cv} aria-hidden="true" /> : <img src={d.img} alt={d.imgAlt} width="1280" height="800" />}
          </div>
          <span className="idh-badge"><Lottie src={d.icon} play /></span>
          {d.proof && (
            <div className="idh-proof">
              {d.proof.big && <b>{d.proof.big}</b>}
              <span>{d.proof.label}</span>
              {d.result && <em>{d.result.client}</em>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
