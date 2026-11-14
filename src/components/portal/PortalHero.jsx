'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { portalPage } from '@/data/portal'
import Arrow from '@/components/home/Arrow'

/* Portal hero: the promise centred, nothing else */
export default function PortalHero() {
  const ref = useRef(null)
  const { hero } = portalPage
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
    })
  })
  return (
    <section className="pth" ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow pth-eyebrow">{hero.eyebrow}</p>
        <h1 className="idx-h1 pth-h1">{hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <p className="idx-p pth-p">{hero.line}</p>
        <div className="idx-ctas">
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{hero.cta} <Arrow /></Link>
          <a href="#pieces" className="nk-btn pth-ghost">See the work</a>
        </div>
      </div>
    </section>
  )
}
