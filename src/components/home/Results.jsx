'use client'

import { useEffect, useRef, useState } from 'react'
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
  const grid = useRef(null)
  const [at, setAt] = useState(0)
  // mobile slider: track which card is in view; arrows and dots move one card at a time
  useEffect(() => {
    const g = grid.current
    if (!g) return
    const onScroll = () => {
      const cards = [...g.children]
      const mid = g.scrollLeft + g.clientWidth / 2
      let best = 0, d = Infinity
      cards.forEach((c, i) => { const cm = c.offsetLeft + c.offsetWidth / 2; if (Math.abs(cm - mid) < d) { d = Math.abs(cm - mid); best = i } })
      setAt(best)
    }
    g.addEventListener('scroll', onScroll, { passive: true })
    return () => g.removeEventListener('scroll', onScroll)
  }, [])
  const go = (i) => {
    const g = grid.current
    const n = g.children.length
    const k = (i + n) % n
    const c = g.children[k]
    g.scrollTo({ left: c.offsetLeft - (g.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' })
    setAt(k)
  }
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xr-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true } })
      const mobile = window.innerWidth <= 960
      gsap.from(mobile ? ref.current.querySelector('.xr-slider') : ref.current.querySelectorAll('.xr-card'), { y: mobile ? 50 : 90, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current.querySelector('.xr-grid'), start: 'top 85%', once: true } })
    })
  })
  return (
    <section className="xr" ref={ref}>
      <div className="mx">
        <div className="xr-head">
          <div className="xw-head"><h2 className="x-h2">{work.h2}</h2></div>
          <Link href="/work" className="nk-link-arrow"><span>See all work</span><Arrow /></Link>
        </div>
        <div className="xr-slider">
        <button type="button" className="xr-arw prev" onClick={() => go(at - 1)} aria-label="Previous case">←</button>
        <div className="xr-grid" ref={grid}>
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
        <button type="button" className="xr-arw next" onClick={() => go(at + 1)} aria-label="Next case">→</button>
        </div>
        <div className="xr-dots" role="tablist" aria-label="Choose a case">
          {work.items.map((c, i) => <button key={c.to} type="button" role="tab" aria-selected={at === i} aria-label={c.client} className={at === i ? 'on' : ''} onClick={() => go(i)} />)}
        </div>
      </div>
    </section>
  )
}
