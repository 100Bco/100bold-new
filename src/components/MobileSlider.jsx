'use client'

import { useEffect, useRef, useState } from 'react'

/* Wraps a row of cards. On mobile (CSS .msl) it becomes a one-card slider with side arrows and dots; on desktop it is just the row. */
export default function MobileSlider({ className = '', trackClass = '', labels = [], children }) {
  const track = useRef(null)
  const [at, setAt] = useState(0)
  const n = Array.isArray(children) ? children.length : 1
  useEffect(() => {
    const g = track.current
    if (!g) return
    const onScroll = () => {
      const mid = g.scrollLeft + g.clientWidth / 2
      let best = 0, d = Infinity
      ;[...g.children].forEach((c, i) => { const cm = c.offsetLeft + c.offsetWidth / 2; if (Math.abs(cm - mid) < d) { d = Math.abs(cm - mid); best = i } })
      setAt(best)
    }
    g.addEventListener('scroll', onScroll, { passive: true })
    return () => g.removeEventListener('scroll', onScroll)
  }, [])
  const go = (i) => {
    const g = track.current
    const k = (i + n) % n
    const c = g.children[k]
    g.scrollTo({ left: c.offsetLeft - (g.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' })
    setAt(k)
  }
  return (
    <div className={'msl ' + className}>
      <div className="msl-wrap">
        <button type="button" className="msl-arw prev" onClick={() => go(at - 1)} aria-label="Previous">←</button>
        <div className={'msl-track ' + trackClass} ref={track}>{children}</div>
        <button type="button" className="msl-arw next" onClick={() => go(at + 1)} aria-label="Next">→</button>
      </div>
      <div className="msl-dots" role="tablist">
        {Array.from({ length: n }).map((_, i) => <button key={i} type="button" role="tab" aria-selected={at === i} aria-label={labels[i] || 'Item ' + (i + 1)} className={at === i ? 'on' : ''} onClick={() => go(i)} />)}
      </div>
    </div>
  )
}
