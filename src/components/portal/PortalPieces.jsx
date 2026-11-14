'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { pieces } from '@/data/portal'

/* A grid card: still first, a short silent preview plays while it is on screen */
function Card({ p, onOpen }) {
  const vid = useRef(null)
  useEffect(() => {
    const v = vid.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '100px 0px', threshold: 0.35 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <button type="button" className="ptc" onClick={onOpen} aria-label={'Play ' + p.title + ', ' + p.format + ' for ' + p.client}>
      <video ref={vid} data-src={p.preview} poster={p.poster} muted loop playsInline preload="none" aria-hidden="true" />
      <span className="ptc-tag">{p.client}</span>
      <span className="ptc-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
      <span className="ptc-info"><b>{p.title}</b><small>{p.format}</small></span>
    </button>
  )
}

/* The player: full video at its own shape, with its words beside it */
function Player({ list, index, onClose, onMove }) {
  const p = list[index]
  const box = useRef(null)
  useEffect(() => {
    const key = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onMove(1); if (e.key === 'ArrowLeft') onMove(-1) }
    window.addEventListener('keydown', key)
    document.documentElement.classList.add('pt-lock')
    box.current && box.current.focus()
    return () => { window.removeEventListener('keydown', key); document.documentElement.classList.remove('pt-lock') }
  }, [onClose, onMove])
  return (
    <div className="ptl" role="dialog" aria-modal="true" aria-label={p.title} data-lenis-prevent onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="ptl-in" ref={box} tabIndex={-1}>
        <div className="ptl-media" style={{ '--r': p.ratio }}>
          <video key={p.id} src={p.src} poster={p.poster} controls autoPlay playsInline />
        </div>
        <div className="ptl-side">
          <span className="ptl-n">{String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}</span>
          <h3>{p.title}</h3>
          <dl className="ptp-meta">
            <div><dt>Client</dt><dd>{p.client}</dd></div>
            <div><dt>Format</dt><dd>{p.format}</dd></div>
            {p.turnaround && <div><dt>Turnaround</dt><dd>{p.turnaround}</dd></div>}
          </dl>
          <p className="ptp-desc">{p.description}</p>
          {p.transcript && <details className="ptl-tr"><summary>Transcript</summary><p>{p.transcript}</p></details>}
          <div className="ptl-nav">
            <button type="button" onClick={() => onMove(-1)} aria-label="Previous video">←</button>
            <button type="button" onClick={() => onMove(1)} aria-label="Next video">→</button>
          </div>
        </div>
        <button type="button" className="ptl-x" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  )
}

/* Selected pieces: a vertical grid like a profile feed, filter by client, open any piece to watch it with sound */
export default function PortalPieces() {
  const ref = useRef(null)
  const clients = ['All', ...Array.from(new Set(pieces.map((p) => p.client)))]
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(-1)
  const list = filter === 'All' ? pieces : pieces.filter((p) => p.client === filter)
  const move = useCallback((d) => setOpen((i) => (i + d + list.length) % list.length), [list.length])
  const close = useCallback(() => setOpen(-1), [])
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptps-head > *, .ptps-filter, .ptps-grid'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="ptps" id="pieces" ref={ref}>
      <div className="mx">
        <div className="ptps-head"><p className="sd-eyebrow">Selected pieces</p><h2 className="sd-h2">Work people choose to watch</h2></div>
        <div className="ptps-filter" role="tablist" aria-label="Filter by client">
          {clients.map((c) => <button key={c} type="button" role="tab" aria-selected={filter === c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>{c}</button>)}
        </div>
        <div className="ptps-grid">
          {list.map((p, i) => <Card p={p} key={p.id} onOpen={() => setOpen(i)} />)}
        </div>
        <ul className="ptps-text">
          {pieces.map((p) => <li key={p.id}><b>{p.title}</b> ({p.client}, {p.format}): {p.description}</li>)}
        </ul>
      </div>
      {open > -1 && <Player list={list} index={open} onClose={close} onMove={move} />}
    </section>
  )
}
