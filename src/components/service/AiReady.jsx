'use client'

import { useRef } from 'react'
import { useGsap, gsap, ScrollTrigger, MQ } from '@/lib/motion'
import Icon from './Icon'

/* Built for search and AI: the checklist ticks as you read; the page's code shows what machines see */
export default function AiReady({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sda-copy > *:not(ul), .sda-code'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
      const items = gsap.utils.toArray(ref.current.querySelectorAll('.sda-list li'))
      ScrollTrigger.create({
        trigger: ref.current.querySelector('.sda-list'), start: 'top 75%', end: 'bottom 45%', scrub: true,
        onUpdate: (s) => items.forEach((el, i) => el.classList.toggle('on', s.progress >= i / items.length)),
      })
    })
    mm.add('(prefers-reduced-motion: reduce)', () => ref.current.querySelectorAll('.sda-list li').forEach((el) => el.classList.add('on')))
  })
  return (
    <section className="sda" ref={ref}>
      <div className="mx sda-grid">
        <div className="sda-copy">
          <p className="sd-eyebrow">{d.eyebrow}</p>
          <h2 className="sd-h2">{d.h2}</h2>
          <ul className="sda-list">{d.points.map((p) => <li key={p}><i><Icon name="check" /></i>{p}</li>)}</ul>
        </div>
        <div className="sda-code" aria-hidden="true">
          <div className="sda-code-top"><i /><i /><i /><span>What Google and AI read</span></div>
          <pre>{`{
  "@type": "LegalService",
  "name": "Your Firm",
  "areaServed": ["Austin", "Round Rock"],
  "serviceType": "Personal injury",
  "aggregateRating": {
    "ratingValue": "4.9"
  },
  "telephone": "(512) 000-0000"
}`}</pre>
        </div>
      </div>
    </section>
  )
}
