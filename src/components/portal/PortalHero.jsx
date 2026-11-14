'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { portalPage, pieces } from '@/data/portal'
import Arrow from '@/components/home/Arrow'

/* Portal hero: the promise centred, then a tilted strip of stills that drifts with the scroll (nothing plays) */
export default function PortalHero() {
  const ref = useRef(null)
  const { hero } = portalPage
  const stills = pieces.filter((p) => p.ratio === '9/16')
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
        .from(ref.current.querySelectorAll('.pts-card'), { y: 120, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: 0.05 }, '-=.8')
      gsap.to(ref.current.querySelector('.pts-row'), { xPercent: -14, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
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
      <div className="pts" aria-hidden="true">
        <div className="pts-row">
          {stills.concat(stills).map((p, i) => <a href={'#' + p.id} className="pts-card" key={i} tabIndex={-1}><img src={p.poster} alt="" loading={i < 6 ? 'eager' : 'lazy'} /></a>)}
        </div>
      </div>
    </section>
  )
}
