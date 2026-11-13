'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, revealIn } from '@/lib/motion'
import { mark } from '@/data/home'
import Arrow from './Arrow'

export default function Mark() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.fromTo('.nk-mark-h2 .w', { opacity: 0.12 }, {
        opacity: 1, stagger: 0.1, ease: 'none',
        scrollTrigger: { trigger: '.nk-mark-h2', start: 'top 80%', end: 'bottom 35%', scrub: true },
      })
      gsap.from('.nk-mark-card', {
        y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.15,
        scrollTrigger: { trigger: '.nk-mark-cards', start: 'top 80%', once: true },
      })
    })
  })

  return (
    <section className="nk-mark nk-dark" ref={ref}>
      <div className="mx">
        <p className="nk-eyebrow" data-reveal>{mark.eyebrow}</p>
        <h2 className="nk-mark-h2">
          {mark.h2.split(' ').map((w, i) => <span className="w" key={i}>{w} </span>)}
        </h2>
        <div className="nk-mark-grid">
          <div className="nk-mark-copy">
            <p data-reveal>{mark.body}</p>
            <Link href="/the-mark" className="nk-btn nk-btn-red" data-magnetic="0.3" data-reveal="0.1">{mark.cta} <Arrow /></Link>
          </div>
          <ul className="nk-mark-cards">
            {mark.results.map((r) => (
              <li className="nk-mark-card" key={r.who}>
                <strong className="nk-mark-big">{r.big}<em>{r.bigLabel}</em></strong>
                <h3>{r.who}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
