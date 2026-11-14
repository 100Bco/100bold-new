'use client'

import { useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { groups } from '@/data/portal'

/* Pop-up player: just the video, at its own shape, as large as the screen allows */
function Player({ p, onClose }) {
  useEffect(() => {
    const key = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', key)
    document.documentElement.classList.add('pt-lock')
    return () => { window.removeEventListener('keydown', key); document.documentElement.classList.remove('pt-lock') }
  }, [onClose])
  return (
    <div className="ptl" role="dialog" aria-modal="true" aria-label={p.title} data-lenis-prevent onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="ptl-media" style={{ '--r': p.ratio }}>
        <video src={p.src} poster={p.poster} controls autoPlay playsInline />
      </div>
      <button type="button" className="ptl-x" onClick={onClose} aria-label="Close">✕</button>
    </div>
  )
}

/* Selected pieces, grouped by client: stills only; tap one to watch it full size */
export default function PortalPieces() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptps-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      ref.current.querySelectorAll('.ptg').forEach((g) => gsap.from(g.querySelectorAll('.ptg-side > *, .ptv'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.06, clearProps: 'transform,opacity', scrollTrigger: { trigger: g, start: 'top 80%', once: true } }))
    })
  })
  return (
    <section className="ptps" id="pieces" ref={ref}>
      <div className="mx">
        <div className="ptps-head"><p className="sd-eyebrow">Selected pieces</p><h2 className="sd-h2">Work people choose to watch</h2></div>
        {groups.map((g) => (
          <div className="ptg" key={g.client}>
            <div className="ptg-side">
              <h3>{g.client}</h3>
              <p>{g.intro}</p>
              <span>{g.pieces.length} {g.pieces.length === 1 ? 'piece' : 'pieces'}</span>
            </div>
            <div className="ptg-row">
              {g.pieces.map((p) => (
                <article className="ptv" key={p.id} id={p.id} style={{ '--r': p.ratio }}>
                  <button type="button" className="ptv-thumb" onClick={() => setOpen({ ...p, client: g.client })} aria-label={'Play ' + p.title}>
                    <img src={p.poster} alt={p.title + ', ' + p.format + ' for ' + g.client} loading="lazy" />
                    <span className="ptv-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                    <span className="ptv-dur">{p.duration}</span>
                  </button>
                  <h4>{p.title}</h4>
                  <small>{p.format}{p.turnaround ? ' · ' + p.turnaround : ''}</small>
                  <p>{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      {open && <Player p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
