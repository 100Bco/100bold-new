'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { closing } from '@/data/home'
import Arrow from './Arrow'

const queries = ['best personal injury lawyer near me', 'injury chiropractor near me', 'commercial real estate austin', 'general contractor near me', 'hvac repair near me']

/* Closing — the line, and a search that always ends with you at #1 */
export default function Closing() {
  const ref = useRef(null)
  const [q, setQ] = useState('')
  const [k, setK] = useState(0)

  useEffect(() => {
    const full = queries[k]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setQ(full); return }
    let i = 0
    setQ('')
    const id = setInterval(() => { i++; setQ(full.slice(0, i)); if (i >= full.length) clearInterval(id) }, 45)
    const next = setTimeout(() => setK((x) => (x + 1) % queries.length), 4200)
    return () => { clearInterval(id); clearTimeout(next) }
  }, [k])

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xc-copy > *, .xc-search > *'), { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })

  return (
    <section className="xc" ref={ref}>
      <div className="mx xc-grid">
        <div className="xc-copy">
          <h2 className="x-h2 xc-h2">{closing.h2}</h2>
          <p className="xc-body">{closing.body}</p>
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{closing.cta} <Arrow /></Link>
        </div>
        <div className="xc-search" aria-hidden="true">
          <div className="xc-bar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><span>{q}</span><i /></div>
          <div className={'xc-res one' + (q.length === queries[k].length ? ' pop' : '')}><span className="xc-rk">#1</span><b>Your business</b><span>★★★★★ · Open now · Recommended by AI</span></div>
          <div className="xc-res two"><b>Competitor A</b><span>★★★★ · 2.1 mi</span></div>
          <div className="xc-res three"><b>Competitor B</b><span>★★★ · 3.4 mi</span></div>
        </div>
      </div>
    </section>
  )
}
