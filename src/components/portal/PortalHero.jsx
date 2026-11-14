'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { portalPage } from '@/data/portal'
import Arrow from '@/components/home/Arrow'

/* Portal hero: the promise centred over a dark stage, then the reel in a cinema frame (still first, video when near) */
export default function PortalHero() {
  const ref = useRef(null)
  const vid = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const { hero, reel } = portalPage
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from(ref.current.querySelectorAll('.idx-line > span'), { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.09 })
        .from(ref.current.querySelectorAll('.idx-eyebrow, .idx-p, .idx-ctas'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=.85')
        .from(ref.current.querySelector('.pth-screen'), { y: 80, scale: 0.94, opacity: 0, duration: 1.4, ease: 'expo.out' }, '-=.7')
      gsap.to(ref.current.querySelector('.pth-screen'), { scale: 1.04, ease: 'none', scrollTrigger: { trigger: ref.current.querySelector('.pth-screen'), start: 'top 80%', end: 'bottom top', scrub: true } })
    })
  })
  useEffect(() => {
    const v = vid.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } if (!reduce) v.play().then(() => setPlaying(true)).catch(() => {}) } else { v.pause(); setPlaying(false) }
    }, { rootMargin: '100px 0px', threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const toggleSound = () => { const v = vid.current; if (!v) return; v.muted = !v.muted; setMuted(v.muted); if (!v.muted) v.play().catch(() => {}) }
  const togglePlay = () => { const v = vid.current; if (!v) return; if (!v.src) { v.src = v.dataset.src; v.load() } if (v.paused) { v.play().then(() => setPlaying(true)).catch(() => {}) } else { v.pause(); setPlaying(false) } }
  return (
    <section className="pth" ref={ref}>
      <div className="mx idx-in">
        <p className="idx-eyebrow pth-eyebrow">{hero.eyebrow}</p>
        <h1 className="idx-h1 pth-h1">{hero.h1.map((l, i) => <span className="idx-line" key={l}><span className={i === hero.h1.length - 1 ? 'r' : ''}>{l}</span></span>)}</h1>
        <p className="idx-p pth-p">{hero.line}</p>
        <div className="idx-ctas">
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{hero.cta} <Arrow /></Link>
          <a href="#pieces" className="nk-btn pth-ghost">See the work</a>
        </div>
      </div>
      <div className="pth-stage">
        <div className="pth-screen">
          <img className="pth-bg" src={reel.poster} alt="" aria-hidden="true" />
          <div className="pth-frame">
            <video ref={vid} data-src={reel.src} poster={reel.poster} muted loop playsInline preload="none" aria-label={reel.alt} />
          </div>
          <div className="pth-ctrl">
            <button type="button" onClick={togglePlay} aria-label={playing ? 'Pause the reel' : 'Play the reel'}>{playing ? <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg> : <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>}</button>
            <button type="button" onClick={toggleSound} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}>{muted ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M23 9l-6 6M17 9l6 6" /></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>}</button>
            <span>Reel</span>
          </div>
        </div>
      </div>
    </section>
  )
}
