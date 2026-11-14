'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { isLive } from '@/lib/cases'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { cases } from '@/data/work'
import Arrow from '@/components/home/Arrow'
import MobileSlider from '@/components/MobileSlider'

/* The four case studies: picture, then the number, then the story; two by two */
export default function WorkCases() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      ref.current.querySelectorAll('.wkc').forEach((c, i) => {
        gsap.from(c, { y: window.innerWidth <= 960 ? 0 : 70, opacity: 0, duration: 1.2, ease: 'expo.out', delay: (i % 2) * 0.12, clearProps: 'transform,opacity', scrollTrigger: { trigger: c, start: 'top 88%', once: true } })
      })
    })
  })
  return (
    <section className="wkcs" ref={ref} aria-label="Case studies">
      <div className="mx">
      <MobileSlider trackClass="wkcs-grid" labels={cases.map((c) => c.client)}>
        {cases.map((c) => {
          const live = isLive(c.to)
          const Card = live ? Link : 'article'
          return (
          <Card {...(live ? { href: c.to, 'aria-label': 'Read the ' + c.client + ' case study' } : {})} className="wkc" key={c.client}>
            <div className="wkc-img">
              <img src={c.img} alt={c.alt} loading="lazy" width="1280" height="800" />
              <span className="wkc-ind">{c.industry}</span>
            </div>
            <div className="wkc-body">
              <div className="wkc-num"><b>{c.big}</b><span>{c.label}</span></div>
              <div className="wkc-txt">
                <h2>{c.client}</h2>
                <p>{c.desc}</p>
                <ul>{c.services.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              {live && <span className="wkc-more" aria-hidden="true">Read the case study <i><Arrow /></i></span>}
            </div>
          </Card>
          )
        })}
      </MobileSlider>
      </div>
    </section>
  )
}
