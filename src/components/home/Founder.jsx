'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, revealIn, Lines } from '@/lib/motion'
import { founder } from '@/data/home'
import Arrow from './Arrow'

export default function Founder() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.fromTo('.nk-quote .qw', { opacity: 0.15 }, {
        opacity: 1, stagger: 0.05, ease: 'none',
        scrollTrigger: { trigger: '.nk-quote', start: 'top 80%', end: 'bottom 45%', scrub: true },
      })
      gsap.fromTo('.nk-founder-photo .nk-ph', { yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: '.nk-founder-photo', start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })
  })

  const words = []
  founder.quote.forEach((part, pi) => {
    const hl = typeof part !== 'string'
    const text = hl ? part.hl : part
    text.split(/(\s+)/).forEach((w, wi) => {
      if (!w) return
      if (/^\s+$/.test(w)) { words.push(w); return }
      words.push(<span key={`${pi}-${wi}`} className={`qw${hl ? ' hl' : ''}`}>{w}</span>)
    })
  })

  return (
    <section className="nk-founder" ref={ref}>
      <div className="mx nk-founder-grid">
        <div className="nk-founder-photo" data-reveal>
          <div className="nk-ph" role="img" aria-label={founder.imgAlt}>
            <span className="nk-ph-tag">Minh Mac · photo coming soon</span>
          </div>
        </div>
        <div className="nk-founder-copy">
          <div className="nk-sec-head">
            <span className="nk-index" data-reveal>04</span>
            <Lines lines={[founder.h2]} className="nk-h2" />
          </div>
          <blockquote className="nk-quote">
            <span className="nk-qmark" aria-hidden="true">“</span>
            <p>{words}</p>
          </blockquote>
          <div className="nk-founder-foot" data-reveal>
            <cite>{founder.who}</cite>
            <Link href="/about" className="nk-link-arrow"><span>{founder.cta}</span><Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
