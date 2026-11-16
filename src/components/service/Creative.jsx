'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* Creative made by our AI Production Studio: the film on the left, the reason on the right */
export default function Creative({ d }) {
  const ref = useRef(null)
  const vid = useRef(null)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(true)
  const userPaused = useRef(false)
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
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } if (!reduce && !userPaused.current) v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '200px 0px', threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const togglePlay = () => {
    const v = vid.current
    if (!v) return
    if (!v.src) { v.src = v.dataset.src; v.load() }
    if (v.paused) { userPaused.current = false; v.play().catch(() => {}); setPaused(false) } else { userPaused.current = true; v.pause(); setPaused(true) }
  }
  const toggleSound = () => { const v = vid.current; if (!v) return; v.muted = !v.muted; setMuted(v.muted); if (!v.muted) v.play().catch(() => {}) }
  return (
    <section className="sdc" ref={ref}>
      <div className="mx sdc-grid">
        <div className="sdc-stage"><div className="sdc-phone"><video ref={vid} data-src={d.video} poster={d.poster} muted loop playsInline preload="none" aria-label={d.alt} />
          <button type="button" className="xp-sound xp-play-btn" onClick={togglePlay} aria-label={paused ? 'Play video' : 'Pause video'}>{paused ? <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg> : <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>}</button>
          <button type="button" className="xp-sound" onClick={toggleSound} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}>{muted ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M23 9l-6 6M17 9l6 6" /></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>}</button>
        </div></div>
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
