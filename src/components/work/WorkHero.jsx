'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hero } from '@/data/work'

/* Work hero: centred, type only */
export default function WorkHero() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
    })
  })
  return (
    <section className="idx wk-hero" ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow"><Link href="/">Home</Link><span>·</span>Work</p>
        <h1 className="idx-h1 wk-h1">{hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <p className="idx-p">{hero.body}</p>
      </div>
    </section>
  )
}
