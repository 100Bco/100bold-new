'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* Industry hero: a full-screen cinematic picture, the promise on the left, three facts on a glass strip */
export default function IndHero({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelector('.ihx-bg img'), { scale: 1.18, duration: 2.4, ease: 'expo.out' })
        .from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 }, 0.2)
        .from(ref.current.querySelectorAll('.ihx-eyebrow, .ihx-p, .ihx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.6)
        .from(ref.current.querySelectorAll('.ihx-stats li'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.9)
      gsap.to(ref.current.querySelector('.ihx-bg img'), { yPercent: 12, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    })
  })
  const stats = []
  if (d.proof && d.proof.big) stats.push({ k: d.proof.big, v: d.proof.label })
  stats.push({ k: '$5M+', v: 'Yearly revenue and up' })
  stats.push({ k: String(d.who.items.length), v: 'Business types we serve' })
  return (
    <section className="ihx" ref={ref}>
      <div className="ihx-bg" aria-hidden="true"><img src={d.heroImg} alt="" fetchPriority="high" /></div>
      <div className="ihx-shade" aria-hidden="true" />
      <div className="mx ihx-in">
        <p className="ihx-eyebrow"><Link href="/industries">Industries</Link><span>/</span>{d.name}</p>
        <h1 className="ihx-h1">{d.hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === d.hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        {d.mode && <p className="ihx-mode">{d.mode}</p>}
        <p className="ihx-p">{d.hero.line}</p>
        <div className="ihx-ctas">
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
          <Link href="/work" className="nk-btn ihx-ghost">See our work</Link>
        </div>
        <ul className="ihx-stats">
          {stats.map((s) => <li key={s.k}><b>{s.k}</b><span>{s.v}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
