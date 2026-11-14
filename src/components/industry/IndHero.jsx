'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* Industry hero, simple and centred: eyebrow, headline, line, two actions, a row of facts */
export default function IndHero({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas, .idx-stats li'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
    })
  })
  const stats = []
  if (d.proof && d.proof.big) stats.push({ k: d.proof.big, v: d.proof.label })
  stats.push({ k: '$5M+', v: 'Yearly revenue and up' })
  stats.push({ k: String(d.who.items.length), v: 'Business types we serve' })
  return (
    <section className="idx" ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow"><Link href="/industries">Industries</Link><span>·</span>{d.name}</p>
        <h1 className="idx-h1">{d.hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === d.hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        {d.mode && <p className="idx-mode">{d.mode}</p>}
        <p className="idx-p">{d.hero.line}</p>
        <div className="idx-ctas">
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
          <Link href="/work" className="nk-btn nk-btn-ghost">See our work</Link>
        </div>
        <ul className="idx-stats">
          {stats.map((s) => <li key={s.k}><b>{s.k}</b><span>{s.v}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
