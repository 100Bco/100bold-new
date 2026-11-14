'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { portal } from '@/data/home'
import Arrow from './Arrow'

/* Portal — copy on the left, the Dang-Man film in a phone frame on the right; fits one screen */
export default function Portal() {
  const ref = useRef(null)
  const vid = useRef(null)
  const phone = useRef(null)
  const [muted, setMuted] = useState(true)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xp-copy > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      gsap.from(phone.current, { y: 80, rotate: 4, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    })
    mm.add('(pointer: fine) and (min-width: 961px) and (prefers-reduced-motion: no-preference)', () => {
      const el = phone.current
      const rx = gsap.quickTo(el, 'rotateX', { duration: 0.8, ease: 'power3' })
      const ry = gsap.quickTo(el, 'rotateY', { duration: 0.8, ease: 'power3' })
      const move = (e) => {
        const r = ref.current.getBoundingClientRect()
        rx(((e.clientY - r.top) / r.height - 0.5) * -8)
        ry(((e.clientX - r.left) / r.width - 0.5) * 10)
      }
      ref.current.addEventListener('mousemove', move)
      return () => ref.current && ref.current.removeEventListener('mousemove', move)
    })
  })

  // load and play only when the section is near; pause when it leaves
  useEffect(() => {
    const v = vid.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!v.src) { v.src = v.dataset.src; v.load() }
        if (!reduce) v.play().catch(() => {})
      } else v.pause()
    }, { rootMargin: '200px 0px', threshold: 0.15 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const toggleSound = () => {
    const v = vid.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <section className="xp" ref={ref}>
      <div className="mx xp-grid">
        <div className="xp-copy">
          <p className="x-eyebrow">{portal.eyebrow}</p>
          <h2 className="x-h2">{portal.h2}<i className="x-dot" aria-hidden="true" /></h2>
          <p className="xp-body">{portal.body}</p>
          <Link href="/portal" className="nk-btn nk-btn-red" data-magnetic="0.3">{portal.cta} <Arrow /></Link>
        </div>

        <div className="xp-stage">
          <div className="xp-phone" ref={phone}>
            <video
              ref={vid}
              data-src="/portal/dang-man.mp4"
              poster="/portal/dang-man-poster.jpg"
              muted
              loop
              playsInline
              preload="none"
              aria-label={portal.imgAlt}
            />
            <button type="button" className="xp-sound" onClick={toggleSound} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}>
              {muted
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M23 9l-6 6M17 9l6 6"/></svg>
                : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
