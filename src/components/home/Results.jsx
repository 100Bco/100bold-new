'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { isLive } from '@/lib/cases'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { work } from '@/data/home'
import Arrow from './Arrow'

const headline = [
  { k: 'Top 3', u: "in Google's AI results for a target search" },
  { k: '12 hrs', u: 'from launch to first lead closed' },
  { k: '3 leads', u: 'for leasing within 24 hours of launch' },
]

const industry = ['Personal injury law', 'PI medical provider', 'Real estate']

/* Results, with names — three cards, each with its 16:10 case image and one big number */
export default function Results() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xr-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true } })
      gsap.from(ref.current.querySelectorAll('.xr-card'), { y: 90, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12, scrollTrigger: { trigger: ref.current.querySelector('.xr-grid'), start: 'top 85%', once: true } })
    })
  })
  return (
    <section className="xr" ref={ref}>
      <div className="mx">
        <div className="xr-head">
          <div className="xw-head"><h2 className="x-h2">{work.h2}</h2></div>
          <Link href="/work" className="nk-link-arrow"><span>See all work</span><Arrow /></Link>
        </div>
        <div className="xr-grid">
          {work.items.map((c, i) => {
            const live = isLive(c.to)
            const Card = live ? Link : 'article'
            return (
            <Card {...(live ? { href: c.to, 'data-cursor': 'View', 'aria-label': 'Read the ' + c.client + ' case study' } : {})} className="xr-card" key={c.to}>
              <span className="xr-im"><img src={c.img} alt={c.alt} loading="lazy" /></span>
              <span className="xr-bd">
                <span className="xr-name">{c.client}</span>
                <span className="xr-ind">{industry[i]}</span>
                <span className="xr-desc">{c.desc}</span>
                <span className="xr-stat">
                  <strong className="xr-k">{headline[i].k}</strong>
                  <span className="xr-u">{headline[i].u}</span>
                </span>
                {live && <span className="xr-btn" aria-hidden="true">Read the case study<i><Arrow /></i></span>}
              </span>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
