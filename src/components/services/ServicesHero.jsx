'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hub, offers } from '@/data/services'
import Arrow from '@/components/home/Arrow'

/* Services hero — the line, and five chips that jump to each service */
export default function ServicesHero() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(ref.current.querySelectorAll('.svh-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.svh-eyebrow, .svh-body, .svh-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.8')
        .from(ref.current.querySelectorAll('.svh-chip'), { y: 24, opacity: 0, scale: 0.9, duration: 0.8, ease: 'back.out(1.6)', stagger: 0.06 }, '-=.6')
    })
  })
  return (
    <section className="svh" ref={ref}>
      <div className="mx">
        <p className="svh-eyebrow">{hub.eyebrow}</p>
        <h1 className="svh-h1">{hub.h1.map((l) => <span className="svh-line" key={l}><span>{l}</span></span>)}</h1>
        <div className="svh-row">
          <p className="svh-body">{hub.body}</p>
          <div className="svh-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{hub.cta} <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost">{hub.cta2}</Link>
          </div>
        </div>
        <nav className="svh-chips" aria-label="Jump to a service">
          {offers.map((o) => <a key={o.id} href={'#' + o.id} className={'svh-chip t-' + o.tone}>{o.name}</a>)}
        </nav>
      </div>
    </section>
  )
}
