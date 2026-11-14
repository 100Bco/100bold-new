'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { hub, offers } from '@/data/services'
import Arrow from '@/components/home/Arrow'

/* Services hero — the promise on the left, an index of the five services on the right that leads into the cards */
export default function ServicesHero() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(ref.current.querySelectorAll('.svh-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .from(ref.current.querySelectorAll('.svh-eyebrow, .svh-body, .svh-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.8')
        .from(ref.current.querySelector('.svh-index'), { x: 60, opacity: 0, duration: 1.2, ease: 'expo.out' }, '-=1')
        .from(ref.current.querySelectorAll('.svh-row'), { x: 30, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07 }, '-=.9')
    })
  })
  return (
    <section className="svh" ref={ref}>
      <div className="mx svh-grid">
        <div className="svh-copy">
          <p className="svh-eyebrow">{hub.eyebrow}</p>
          <h1 className="svh-h1">{hub.h1.map((l) => <span className="svh-line" key={l}><span>{l}</span></span>)}</h1>
          <p className="svh-body">{hub.body}</p>
          <div className="svh-ctas">
            <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{hub.cta} <Arrow /></Link>
            <Link href="/work" className="nk-btn nk-btn-ghost">{hub.cta2}</Link>
          </div>
        </div>
        <nav className="svh-index" aria-label="Jump to a service">
          <p className="svh-index-t">{hub.index}</p>
          <ul>
            {offers.map((o) => (
              <li key={o.id}>
                <a href={'#' + o.id} className="svh-row">
                  <span className="svh-row-t"><b>{o.name}</b><small>{o.short}</small></span>
                  <i aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" /></svg></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
