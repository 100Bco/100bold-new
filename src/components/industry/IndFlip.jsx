'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, ScrollTrigger, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* What is not working: each problem, in the owner's words, flips over to what we do about it */
export default function IndFlip({ items }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.idf-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
      ref.current.querySelectorAll('.idf-card').forEach((c) => {
        ScrollTrigger.create({ trigger: c, start: 'top 58%', onEnter: () => c.classList.add('flip'), onLeaveBack: () => c.classList.remove('flip') })
      })
    })
    mm.add('(prefers-reduced-motion: reduce)', () => ref.current.querySelectorAll('.idf-card').forEach((c) => c.classList.add('flip')))
  })
  const toggle = (e) => e.currentTarget.closest('.idf-card').classList.toggle('flip')
  return (
    <section className="idf" ref={ref}>
      <div className="mx">
        <div className="idf-head">
          <p className="sd-eyebrow">What is not working</p>
          <h2 className="sd-h2">What we hear, and what we do about it</h2>
          <p>Scroll, or tap a card, to see the fix.</p>
        </div>
        <div className="idf-grid">
          {items.map((p, i) => {
            const ext = p.svc.to.startsWith('http')
            return (
              <article className="idf-card" key={p.q}>
                <div className="idf-in">
                  <div className="idf-face idf-front" onClick={toggle}>
                    <span className="idf-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="idf-quote" aria-hidden="true">“</span>
                    <h3>{p.q}</h3>
                    <span className="idf-hint">What we do <i>↻</i></span>
                  </div>
                  <div className="idf-face idf-back">
                    <span className="idf-tag">What we do</span>
                    <p>{p.fix}</p>
                    <Link href={p.svc.to} className="idf-link" {...(ext ? { target: '_blank', rel: 'noopener' } : {})}>{p.svc.name === 'MinAI' ? 'Automation by MinAI' : p.svc.name} <i><Arrow /></i></Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
