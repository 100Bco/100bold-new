'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'

/* The shift: a statement that lights up word by word as you scroll */
export default function Shift({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.fromTo(ref.current.querySelectorAll('.sds-w'), { opacity: 0.14 }, { opacity: 1, stagger: 0.08, ease: 'none', scrollTrigger: { trigger: ref.current.querySelector('.sds-text'), start: 'top 80%', end: 'bottom 45%', scrub: true } })
    })
  })
  return (
    <section className="sds" ref={ref}>
      <div className="mx">
        <p className="sd-eyebrow">{d.eyebrow}</p>
        <h2 className="sds-h2">{d.h2}</h2>
        <p className="sds-text">{d.text.split(' ').map((w, i) => <span className="sds-w" key={i}>{w} </span>)}</p>
      </div>
    </section>
  )
}
