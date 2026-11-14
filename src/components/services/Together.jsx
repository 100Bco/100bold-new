'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { together, minai } from '@/data/services'

/* How the services work together — one line from first search to signed client */
export default function Together() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true } })
      tl.from(ref.current.querySelectorAll('.svt-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 })
        .from(ref.current.querySelector('.svt-rail i'), window.innerWidth > 960 ? { scaleX: 0, duration: 1.6, ease: 'power3.inOut' } : { scaleY: 0, duration: 1.6, ease: 'power3.inOut' }, '-=.6')
        .from(ref.current.querySelectorAll('.svt-step'), { y: 40, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.18 }, '<.1')
    })
  })
  return (
    <section className="svt" ref={ref}>
      <div className="mx">
        <div className="svt-head">
          <h2 className="x-h2">{together.h2}</h2>
          <p>{together.body}</p>
        </div>
        <div className="svt-flow">
          <div className="svt-rail" aria-hidden="true"><i /></div>
          <ol className="svt-steps">
            {together.steps.map((s) => (
              <li className="svt-step" key={s.k}>
                <span className="svt-dot" aria-hidden="true" />
                <h3>{s.k}</h3>
                <em>{s.by}</em>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="svt-minai">{minai.text} <a href={minai.href} target="_blank" rel="noopener">{minai.name}</a></p>
      </div>
    </section>
  )
}
