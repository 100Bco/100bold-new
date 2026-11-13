'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { founder } from '@/data/home'
import Arrow from './Arrow'

/* the three figures from Minh's own quote */
const stats = [
  { to: 4, suf: ' yrs', label: 'in private equity' },
  { to: 1.6, suf: 'M', dec: 1, label: 'users on a marketing platform' },
  { to: 36, suf: '', label: 'cafe franchise locations' },
]

/* Run by an operator — portrait, three numbers from the quote, and the closing line */
export default function Founder() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xf-port, .xf-copy > *'), { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
      ref.current.querySelectorAll('.xf-num').forEach((el) => {
        const o = { v: 0 }, to = +el.dataset.to, dec = +el.dataset.dec || 0
        gsap.to(o, { v: to, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true }, onUpdate: () => { el.textContent = o.v.toFixed(dec) } })
      })
    })
  })
  return (
    <section className="xf" ref={ref}>
      <div className="mx xf-grid">
        <div className="xf-port">
          <span className="xf-badge">Founder</span>
          <div className="xf-ph" role="img" aria-label={founder.imgAlt}><span>Minh Mac · photo</span></div>
          <div className="xf-nm"><div><b>Minh Mac</b><span>Founder, 100Bold</span></div><Link href="/about" className="nk-link-arrow light"><span>{founder.cta}</span><Arrow /></Link></div>
        </div>
        <div className="xf-copy">
          <p className="x-eyebrow">{founder.h2}</p>
          <h2 className="x-h2">{founder.h2}<i className="x-dot" aria-hidden="true" /></h2>
          <ul className="xf-stats">
            {stats.map((s) => (
              <li key={s.label}><b><span className="xf-num" data-to={s.to} data-dec={s.dec || 0}>{s.dec ? s.to.toFixed(s.dec) : s.to}</span>{s.suf}</b><span>{s.label}</span></li>
            ))}
          </ul>
          <blockquote className="xf-q">
            <p>“{founder.quote.map((p) => (typeof p === 'string' ? p : p.hl)).join('')}”</p>
            <cite>{founder.who}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
