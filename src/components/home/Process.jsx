'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ, revealIn, Lines } from '@/lib/motion'
import { process } from '@/data/home'

export default function Process() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.fromTo('.nk-steps-line span', { scaleX: 0, scaleY: 0 }, {
        scaleX: 1, scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.nk-steps', start: 'top 75%', end: 'bottom 55%', scrub: true },
      })
      gsap.utils.toArray('.nk-step').forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
        gsap.to(el, {
          '--on': 1, duration: 0.6,
          scrollTrigger: { trigger: el, start: 'top 60%', toggleActions: 'play none none reverse' },
        })
      })
    })
  })

  return (
    <section className="nk-process" ref={ref}>
      <div className="mx">
        <div className="nk-sec-head">
          <span className="nk-index" data-reveal>05</span>
          <Lines lines={[process.h2]} className="nk-h2" />
        </div>
        <div className="nk-steps-wrap">
          <div className="nk-steps-line" aria-hidden="true"><span /></div>
          <ol className="nk-steps">
            {process.steps.map((s, i) => (
              <li className="nk-step" key={s.title}>
                <span className="nk-step-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
