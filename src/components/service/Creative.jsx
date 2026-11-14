'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* Creative made by Portal: the film on the left, the reason on the right */
export default function Creative({ d }) {
  const ref = useRef(null)
  const vid = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdc-copy > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      gsap.from(ref.current.querySelector('.sdc-phone'), { y: 80, rotate: -4, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    })
  })
  useEffect(() => {
    const v = vid.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } if (!reduce) v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '200px 0px', threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <section className="sdc" ref={ref}>
      <div className="mx sdc-grid">
        <div className="sdc-stage"><div className="sdc-phone"><video ref={vid} data-src={d.video} poster={d.poster} muted loop playsInline preload="none" aria-label={d.alt} /></div></div>
        <div className="sdc-copy">
          <p className="sd-eyebrow">{d.eyebrow}</p>
          <h2 className="sd-h2">{d.h2}</h2>
          <p className="sdc-text">{d.text}</p>
          <Link href={d.to} className="nk-btn nk-btn-red" data-magnetic="0.3">{d.cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
