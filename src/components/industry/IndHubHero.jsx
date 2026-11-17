'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hub } from '@/data/industries'
import Arrow from '@/components/home/Arrow'

/* Industries hub hero: centred line, short body and the call underneath */
export default function IndHubHero() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.8')
    })
  })
  return (
    <section className="idx idhh2" ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow">{hub.eyebrow}</p>
        <h1 className="idx-h1 idhh2-h1">{hub.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <p className="idx-p">{hub.body}</p>
        <div className="idx-ctas">
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
          <a href="#industries-list" className="nk-btn nk-btn-ghost">Explore industries</a>
        </div>
      </div>
    </section>
  )
}
