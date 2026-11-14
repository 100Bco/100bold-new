'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hub } from '@/data/industries'
import Arrow from '@/components/home/Arrow'

/* Industries hub hero: the line, then straight into the panels */
export default function IndHubHero() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.svh-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.svh-eyebrow, .idhh-side > *'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.8')
    })
  })
  return (
    <section className="idhh" ref={ref}>
      <div className="mx idhh-grid">
        <div>
          <p className="svh-eyebrow">{hub.eyebrow}</p>
          <h1 className="svh-h1">{hub.h1.map((l) => <span className="svh-line" key={l}><span>{l}</span></span>)}</h1>
        </div>
        <div className="idhh-side">
          <p className="idhh-body">{hub.body}</p>
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
