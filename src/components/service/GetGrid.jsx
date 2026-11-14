'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Icon from './Icon'

/* What you get: four cards in reading order, each with one clear promise */
export default function GetGrid({ d, tone = 'light' }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdg-head > *, .sdg-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className={'sdg t-' + tone} ref={ref}>
      <div className="mx">
        <div className="sdg-head"><h2 className="sd-h2">{d.h2}</h2>{d.lead && <p>{d.lead}</p>}</div>
        <div className="sdg-grid">
          {d.items.map((it) => (
            <article className="sdg-card" key={it.t}>
              <span className="sdg-ic"><Icon name={it.icon} /></span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
