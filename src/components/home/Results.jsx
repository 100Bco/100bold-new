'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, revealIn, Lines } from '@/lib/motion'
import { work } from '@/data/home'
import Arrow from './Arrow'

export default function Results() {
  const ref = useRef(null)
  const track = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => revealIn(ref.current))
    mm.add(MQ.desktop, () => {
      const dist = () => track.current.scrollWidth - window.innerWidth
      const tween = gsap.to(track.current, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
          trigger: '.nk-hs-pin', start: 'top top', end: () => '+=' + dist(),
          pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
        },
      })
      gsap.utils.toArray('.nk-case-img img').forEach((img) => {
        gsap.fromTo(img, { xPercent: -8, scale: 1.15 }, {
          xPercent: 8, ease: 'none',
          scrollTrigger: { trigger: img.closest('.nk-case'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        })
      })
      gsap.to('.nk-hs-progress span', {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: '.nk-hs-pin', start: 'top top', end: () => '+=' + dist(), scrub: true },
      })
    })
  })

  return (
    <section className="nk-results" ref={ref}>
      <div className="nk-hs-pin">
        <div className="mx nk-results-head">
          <div className="nk-sec-head">
            <span className="nk-index" data-reveal>03</span>
            <Lines lines={[work.h2]} className="nk-h2" />
          </div>
          <Link href="/work" className="nk-link-arrow light" data-reveal><span>See all work</span><Arrow /></Link>
        </div>
        <div className="nk-hs-track" ref={track}>
          {work.items.map((c) => (
            <Link href={c.to} className="nk-case" key={c.to} data-cursor="View">
              <div className="nk-case-img"><img src={c.img} alt={c.alt} loading="lazy" /></div>
              <div className="nk-case-body">
                <span className="nk-case-client">{c.client}, {c.industry}</span>
                <h3>{c.result}</h3>
                <p>{c.desc}</p>
                <span className="nk-link-arrow light"><span>Read the case study</span><Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mx"><div className="nk-hs-progress"><span /></div></div>
      </div>
    </section>
  )
}
