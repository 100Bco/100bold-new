'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { make } from '@/data/portal'

/* What we make: four formats as a numbered index */
export default function PortalMake() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptm-head > *, .ptm-list, .ptm-note'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="ptm" ref={ref}>
      <div className="mx">
        <div className="ptm-head"><h2 className="sd-h2">{make.h2}</h2><p>{make.lead}</p></div>
        <ol className="ptm-list">
          {make.items.map((m, i) => (
            <li key={m.k}><span className="ptm-n">{String(i + 1).padStart(2, '0')}</span><h3>{m.k}</h3><p>{m.d}</p></li>
          ))}
        </ol>
        <p className="ptm-note">{make.note}</p>
      </div>
    </section>
  )
}
