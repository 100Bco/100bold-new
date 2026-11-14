'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'

/* Who this is for: the five industries as large rows that lead to their pages */
export default function Who({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdw-head > *, .sdw-row'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="sdw" ref={ref}>
      <div className="mx sdw-grid">
        <div className="sdw-head"><h2 className="sd-h2">{d.h2}</h2><p>Service businesses with $5M+ in yearly revenue, led by an owner, founder, or managing partner.</p></div>
        <ul className="sdw-list">
          {d.items.map((it) => (
            <li key={it.to}><Link href={it.to} className="sdw-row"><span>{it.name}</span><i aria-hidden="true">→</i></Link></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
