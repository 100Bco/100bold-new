'use client'

import { useRef } from 'react'
import { useGsap, gsap, ScrollTrigger, MQ } from '@/lib/motion'

/* Steps joined by a red line that runs with the scroll and lights each step as it arrives */
export default function Journey({ d, children, className = '' }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.svt-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      const steps = gsap.utils.toArray(ref.current.querySelectorAll('.svt-step'))
      const fill = ref.current.querySelector('.svt-rail i')
      const vertical = window.innerWidth <= 960
      gsap.set(fill, vertical ? { scaleY: 0 } : { scaleX: 0 })
      ScrollTrigger.create({
        trigger: ref.current.querySelector('.svt-flow'),
        start: vertical ? 'top 70%' : 'top 80%',
        end: vertical ? 'bottom 55%' : 'bottom 50%',
        scrub: 0.4,
        onUpdate: (self) => {
          const p = self.progress
          gsap.set(fill, vertical ? { scaleY: p } : { scaleX: p })
          steps.forEach((el, i) => el.classList.toggle('on', p >= (vertical ? i / steps.length : (i / (steps.length - 1)) * 0.92) - 0.001))
        },
      })
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      ref.current.querySelectorAll('.svt-step').forEach((el) => el.classList.add('on'))
    })
  })
  return (
    <section className={'svt svt-center ' + className} ref={ref}>
      <div className="mx">
        <div className="svt-head">
          <h2 className="svt-h2">{d.h2Lines ? d.h2Lines.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>) : d.h2}</h2>
          {(d.lead || d.body) && <p>{d.lead || d.body}</p>}
        </div>
        <div className="svt-flow">
          <div className="svt-rail" aria-hidden="true"><i /></div>
          <ol className="svt-steps" style={{ '--n': d.items.length }}>
            {d.items.map((s) => (
              <li className="svt-step" key={s.k}>
                <span className="svt-dot" aria-hidden="true" />
                <div className="svt-card">
                  <em>{s.by}</em>
                  <h3>{s.k}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {children}
      </div>
    </section>
  )
}
