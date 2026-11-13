'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { portal } from '@/data/home'

/* Portal — a cinema screen that grows toward full width as you scroll */
export default function Portal() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xp-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.fromTo(ref.current.querySelector('.xp-screen'), { scale: 0.78, borderRadius: 32 }, {
        scale: 1, borderRadius: 18, ease: 'none',
        scrollTrigger: { trigger: ref.current.querySelector('.xp-screen'), start: 'top 95%', end: 'center 55%', scrub: true },
      })
    })
  })
  return (
    <section className="xp" ref={ref}>
      <div className="mx">
        <div className="xp-head">
          <p className="x-eyebrow">{portal.eyebrow}</p>
          <h2 className="x-h2">{portal.h2}<i className="x-dot" aria-hidden="true" /></h2>
          <p className="xp-body">{portal.body}</p>
        </div>
        <Link href="/portal" className="xp-screen" aria-label={portal.cta} data-cursor="Play">
          <img src="/works/DANG LAW GROUP.png" alt={portal.imgAlt} loading="lazy" />
          <span className="xp-play"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor"/></svg></span>
          <span className="xp-cta">{portal.cta} →</span>
        </Link>
      </div>
    </section>
  )
}
