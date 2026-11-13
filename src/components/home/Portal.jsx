'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, revealIn, Lines } from '@/lib/motion'
import { portal } from '@/data/home'
import Arrow from './Arrow'

export default function Portal() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.nk-portal-stage', start: 'top 85%', end: 'center center', scrub: 1 },
      })
      tl.fromTo('.nk-portal-frame', { clipPath: 'inset(18% 22% 18% 22% round 40px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' })
        .fromTo('.nk-portal-frame .nk-ph', { scale: 1.3 }, { scale: 1, ease: 'none' }, 0)
    })
  })

  return (
    <section className="nk-portal nk-dark" ref={ref}>
      <div className="nk-portal-stage">
        <div className="nk-portal-frame">
          <div className="nk-ph nk-ph-dark" role="img" aria-label={portal.imgAlt}>
            <span className="nk-ph-tag">Dang-Man · image coming soon</span>
          </div>
        </div>
        <div className="nk-portal-copy mx">
          <p className="nk-eyebrow" data-reveal>{portal.eyebrow}</p>
          <Lines lines={['We built a law firm', 'its own superhero']} className="nk-h2 nk-h2-xl" />
          <p className="nk-portal-body" data-reveal>{portal.body}</p>
          <Link href="/portal" className="nk-btn nk-btn-white" data-magnetic="0.3" data-reveal="0.1">
            <span className="nk-play" aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor"/></svg></span>
            {portal.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
