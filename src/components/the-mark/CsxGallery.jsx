'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * The Mark: case-study image strip. Three frames that scroll-snap horizontally on
 * mobile; the dot matching the frame closest to the centre is marked active, and
 * clicking a dot scrolls that frame into the centre.
 */
export default function CsxGallery({ images = [], kind }) {
  const track = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const onScroll = () => {
      const mid = el.scrollLeft + el.clientWidth / 2
      let best = 0
      let dist = Infinity
      Array.from(el.children).forEach((child, i) => {
        const d = Math.abs(child.offsetLeft + child.offsetWidth / 2 - mid)
        if (d < dist) { dist = d; best = i }
      })
      setActive(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i) => {
    const el = track.current
    const child = el?.children[i]
    if (el && child) el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: 'smooth' })
  }

  return (
    <>
      <div ref={track} className={`csx-gallery csx-gallery--${kind}`}>
        {[0, 1, 2].map((i) => {
          const img = images[i]
          if (!img) {
            return (
              <div key={i} className="csx-frame is-empty" aria-hidden>
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 17l-5-5-9 8" /></svg>
              </div>
            )
          }
          const cls = `csx-frame has-img${img.fit === 'contain' ? ' is-contain' : ''}${img.href ? ' tm-is-link' : ''}`
          const pic = <img src={img.src} alt={img.alt} />
          if (img.href) {
            return (
              <a key={i} href={img.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${img.alt} (opens in a new tab)`}>
                {pic}
                <span className="csx-frame-cta" aria-hidden>{img.cta ?? 'View on LinkedIn ↗'}</span>
              </a>
            )
          }
          return <div key={i} className={cls}>{pic}</div>
        })}
      </div>
      <div className="csx-dots" role="tablist" aria-label="Choose image">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Image ${i + 1}`}
            className={`csx-dot${active === i ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  )
}
