'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'
import ChatVisual from './ChatVisual'
import BuildVisual from './BuildVisual'
import FunnelVisual from './FunnelVisual'

const visuals = { chat: ChatVisual, build: BuildVisual, funnel: FunnelVisual }

/* Service page hero: breadcrumb, the promise, the answer line, the action; the live demo on the right */
export default function DetailHero({ d }) {
  const ref = useRef(null)
  const V = visuals[d.hero.visual]
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.sdh-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.sdh-crumb, .sdh-line-p, .sdh-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
        .from(ref.current.querySelector('.sdh-vis'), { y: 60, opacity: 0, scale: 0.96, duration: 1.3, ease: 'expo.out' }, '-=1.1')
    })
  })
  return (
    <section className="sdh" ref={ref}>
      <div className="mx sdh-grid">
        <div className="sdh-copy">
          <nav className="sdh-crumb" aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><b>{d.name}</b></nav>
          <h1 className="sdh-h1">{d.hero.h1.map((l, i) => <span className="sdh-line" key={l}><span className={i === d.hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
          <p className="sdh-line-p">{d.hero.line}</p>
          <div className="sdh-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{d.hero.cta} <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost">See our work</Link>
          </div>
        </div>
        <div className="sdh-vis">{V && <V />}</div>
      </div>
    </section>
  )
}
