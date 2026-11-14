'use client'

import { useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { pieces } from '@/data/portal'

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

/* Selected pieces: one even grid of stills with the words underneath; tap one to watch it full size */
export default function PortalPieces() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptps-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelector('.ptgrid'), { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true } })
    })
  })
  return (
    <section className="ptps" id="pieces" ref={ref}>
      <div className="mx">
        <div className="ptps-head"><p className="sd-eyebrow">Selected pieces</p><h2 className="sd-h2">Work people choose to watch</h2></div>
        <div className="ptgrid">
          {pieces.map((p) => (
            <article className="ptv" key={p.id} id={p.id}>
              <button type="button" className="ptv-thumb" onClick={() => setOpen(p)} aria-label={'Play ' + p.title}>
                <img src={p.poster} alt={p.title + ', ' + p.format + ' for ' + p.client} loading="lazy" />
                <span className="ptv-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              </button>
              <h3>{p.title}</h3>
              <small>{p.client}, {p.format}, {p.duration}</small>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
      {open && <Player p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
