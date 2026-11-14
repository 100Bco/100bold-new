'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* Simple centred hero shared by About, Insights and Contact */
export default function Hero({ d, cta = true, dark = false }) {
  const ref = useRef(null)
  const [line, setLine] = useState(d.line)
  useEffect(() => {
    if (!d.bySource) return
    const from = new URLSearchParams(window.location.search).get('from')
    if (from && d.bySource[from]) setLine(d.bySource[from])
  }, [d])
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
    })
  })
  return (
    <section className={'idx ab-hero' + (dark ? ' dark' : '')} ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow">{d.eyebrow}</p>
        <h1 className="idx-h1 ab-h1">{d.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === d.h1.length - 1 && d.h1.length > 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <p className="idx-p">{line}</p>
        {cta && (
          <div className="idx-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost">See our work</Link>
          </div>
        )}
      </div>
    </section>
  )
}
