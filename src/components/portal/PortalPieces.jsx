'use client'

import { useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { pieces } from '@/data/portal'

function Piece({ p, i }) {
  const vid = useRef(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const v = vid.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } if (!reduce) v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '150px 0px', threshold: 0.3 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <article className="ptp" id={'piece-' + p.id}>
      <div className="ptp-media">
        <video ref={vid} data-src={p.src} poster={p.poster} muted loop playsInline preload="none" controls aria-label={p.title + ', ' + p.format + ' for ' + p.client} />
      </div>
      <div className="ptp-info">
        <span className="ptp-n">{String(i + 1).padStart(2, '0')}</span>
        <h3>{p.title}</h3>
        <dl className="ptp-meta">
          <div><dt>Client</dt><dd>{p.client}</dd></div>
          <div><dt>Format</dt><dd>{p.format}</dd></div>
          {p.turnaround && <div><dt>Turnaround</dt><dd>{p.turnaround}</dd></div>}
        </dl>
        <p className="ptp-desc">{p.description}</p>
        {p.transcript && (
          <div className="ptp-tr">
            <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Hide transcript' : 'Read the transcript'}</button>
            {open && <p>{p.transcript}</p>}
          </div>
        )}
      </div>
    </article>
  )
}

/* Selected pieces: each finished work with client, format, turnaround, and its words on the page */
export default function PortalPieces() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptps-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
      ref.current.querySelectorAll('.ptp').forEach((el) => gsap.from(el, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }))
    })
  })
  return (
    <section className="ptps" id="pieces" ref={ref}>
      <div className="mx">
        <div className="ptps-head"><p className="sd-eyebrow">Selected pieces</p><h2 className="sd-h2">Work people choose to watch</h2></div>
        <div className={'ptps-list n' + pieces.length}>{pieces.map((p, i) => <Piece p={p} i={i} key={p.id} />)}</div>
      </div>
    </section>
  )
}
