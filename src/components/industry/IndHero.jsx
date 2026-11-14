'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'
import Lottie from './Lottie'

/* Industry hero, type only: a full-width headline, then the line and the action beside the proof, then who we serve */
export default function IndHero({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelector('.idx-rule'), { scaleX: 0, duration: 1.2, ease: 'expo.inOut' }, '-=.9')
        .from(ref.current.querySelectorAll('.sdh-crumb, .idx-copy > *, .idx-proof'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.8')
        .from(ref.current.querySelector('.idx-band'), { opacity: 0, duration: 1 }, '-=.6')
    })
  })
  const who = d.who.items
  return (
    <section className="idx" ref={ref}>
      <div className="mx">
        <nav className="sdh-crumb" aria-label="Breadcrumb"><Link href="/industries">Industries</Link><span>/</span><b>{d.name}</b></nav>
        <h1 className="idx-h1">{d.hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === d.hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <div className="idx-rule" aria-hidden="true" />
        <div className="idx-row">
          <div className="idx-copy">
            <p>{d.hero.line}</p>
            <div className="sdh-ctas">
              <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
              <Link href="/work" className="nk-btn nk-btn-ghost">See our work</Link>
            </div>
          </div>
          <div className="idx-proof">
            <span className="idx-ic"><Lottie src={d.icon} play /></span>
            <div className="idx-num">
              {d.proof && d.proof.big ? <b>{d.proof.big}</b> : null}
              <span>{d.proof && d.proof.big ? d.proof.label : 'Built for ' + d.name.toLowerCase()}</span>
              <em>{d.result ? d.result.client : d.proof.label}</em>
            </div>
          </div>
        </div>
      </div>
      <div className="idx-band" aria-label={'Who we work with: ' + who.join(', ')}>
        <div className="idx-track" aria-hidden="true">
          {[0, 1].map((k) => <span className="idx-set" key={k}>{who.concat(who).map((t, i) => <span key={k + '-' + i}>{t}<i>✦</i></span>)}</span>)}
        </div>
      </div>
    </section>
  )
}
