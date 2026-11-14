'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { closing as homeClosing } from '@/data/home'
import Arrow from './Arrow'

const queries = ['best personal injury lawyer near me', 'injury chiropractor near me', 'commercial real estate austin', 'general contractor near me', 'hvac repair near me']

/* Closing — a red poster: the line, one big search that always answers with you, and the call */
export default function Closing({ data }) {
  const closing = { href: '/contact', ...homeClosing, ...(data || {}) }
  const ref = useRef(null)
  const [q, setQ] = useState('')
  const [k, setK] = useState(0)
  const done = q.length === queries[k].length

  useEffect(() => {
    const full = queries[k]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setQ(full); return }
    let i = 0
    setQ('')
    const id = setInterval(() => { i++; setQ(full.slice(0, i)); if (i >= full.length) clearInterval(id) }, 45)
    const next = setTimeout(() => setK((x) => (x + 1) % queries.length), 4400)
    return () => { clearInterval(id); clearTimeout(next) }
  }, [k])

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      tl.from(ref.current.querySelectorAll('.xc-line > span'), { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelector('.xc-box'), { y: 60, scale: 0.94, opacity: 0, duration: 1.1, ease: 'expo.out' }, '-=.7')
        .from(ref.current.querySelectorAll('.xc-foot > *'), { y: 30, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 }, '-=.7')
    })
  })

  const words = closing.h2.split(' ')
  const cut = Math.ceil(words.length / 2)

  return (
    <section className="xc" ref={ref}>
      <div className="mx xc-in">
        <h2 className="xc-h2">
          <span className="xc-line"><span>{words.slice(0, cut).join(' ')}</span></span>
          <span className="xc-line"><span>{words.slice(cut).join(' ')}</span></span>
        </h2>

        <div className="xc-box" aria-hidden="true">
          <div className="xc-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <span className="xc-q">{q}</span><i />
          </div>
          <div className={'xc-hit' + (done ? ' on' : '')}>
            <span className="xc-logo">Y</span>
            <span className="xc-hit-t"><b>Your business</b><small>★★★★★<span className="xc-open"> · Open now</span> · Recommended by AI</small></span>
            <span className="xc-rk">#1</span>
          </div>
        </div>

        <div className="xc-foot">
          <p className="xc-body">{closing.body}</p>
          <Link href={closing.href} className="nk-btn nk-btn-white xc-btn" data-magnetic="0.3">{closing.cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
