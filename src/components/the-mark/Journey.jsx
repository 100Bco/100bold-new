'use client'

import { useEffect, useRef, useState } from 'react'
import useMedia from './useMedia'

/**
 * The Mark home: "Your journey with us" staircase.
 * Desktop: four rising bars; when scrolled into view they build up (.is-built),
 * a gold curve is drawn through their tops with a travelling head, then the arrow
 * appears (.stair-arrow.is-on) and a glow loops across the four steps.
 * Mobile (<=900px): horizontal progress bars that grow in sequence, same glow loop.
 */

const STEPS = [
  { label: 'Strategy\n& Voice', week: 'Week 1-2', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
  { label: 'Launch\n& Manage', week: 'Week 3-4', icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.840a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
  { label: 'Grow\n& Engage', week: 'Month 2-4', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.750a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { label: 'Convert\n& Scale', week: 'Month 5+', icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.940 2.28l-2.28 5.941' },
]
const BAR_H = [84, 144, 204, 264] // desktop bar heights (px)
const BAR_W = [46, 64, 82, 100] // mobile bar widths (%)
const CHART_H = 280 // svg viewBox height
// curve anchor points on a 1000 x 280 viewBox (top-centre of each bar)
const PTS = BAR_H.map((h, i) => [125 + 250 * i, CHART_H - h])
const PATH =
  `M${PTS[0][0]} ${PTS[0][1]} ` +
  PTS.slice(1).map(([x, y], i) => {
    const [px, py] = PTS[i]
    const mx = (px + x) / 2
    return `C${mx} ${py} ${mx} ${y} ${x} ${y}`
  }).join(' ') +
  ` L985 ${PTS[3][1] - 22}`

const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const smoothstep = (t) => t * t * (3 - 2 * t)
const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2

function Icon({ d, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  )
}

export default function Journey() {
  const wrapRef = useRef(null)
  const pathRef = useRef(null)
  const headRef = useRef(null)
  const barGlows = useRef([])
  const iconGlows = useRef([])
  const icons = useRef([])
  const dots = useRef([])
  const [built, setBuilt] = useState(false)
  const [arrowOn, setArrowOn] = useState(false)
  const isMobile = useMedia('(max-width: 900px)', false)

  // build once the chart is 30% visible
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setBuilt(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [isMobile])

  useEffect(() => {
    if (!built) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path = pathRef.current
    const total = path ? path.getTotalLength() : 0

    // path length at which the curve reaches each bar
    const stops = []
    if (path) {
      let k = 0
      for (let s = 0; s <= total && k < PTS.length; s += 2) {
        if (path.getPointAtLength(s).x >= PTS[k][0] - 0.5) { stops.push(s); k++ }
      }
      while (stops.length < PTS.length) stops.push(total)
    }
    const lastStop = stops[3] ?? total

    const setLit = (levels) => {
      levels.forEach((v, i) => {
        if (barGlows.current[i]) barGlows.current[i].style.opacity = String(v)
        if (iconGlows.current[i]) iconGlows.current[i].style.opacity = String(v)
        if (icons.current[i]) icons.current[i].style.transform = `scale(${1 + 0.08 * v})`
        if (dots.current[i]) dots.current[i].style.setProperty('--lit', String(v))
      })
    }

    if (reduced) {
      if (path) { path.style.strokeDasharray = `${total}`; path.style.strokeDashoffset = '0' }
      dots.current.forEach((d) => d && (d.style.opacity = '1'))
      setArrowOn(true)
      return
    }

    if (path) { path.style.strokeDasharray = `${total}`; path.style.strokeDashoffset = `${total}` }
    const head = headRef.current
    const start = performance.now()
    const buildMs = isMobile ? 2850 : 4200
    let raf = 0
    let arrowShown = false

    const placeHead = (len, opacity) => {
      if (!head || !path) return
      const p = path.getPointAtLength(len)
      head.style.left = `${p.x / 10}%`
      head.style.top = `calc(100% - ${CHART_H}px + ${p.y}px)`
      head.style.opacity = String(opacity)
    }

    const tick = (now) => {
      const t = now - start
      if (!isMobile && path && t < buildMs) {
        const k = easeInOutSine(clamp((t - 500) / 2800))
        const drawn = k * total
        path.style.strokeDashoffset = `${total - drawn}`
        stops.forEach((s, i) => { const d = dots.current[i]; if (d) d.style.opacity = drawn >= s - 1 ? '1' : '0' })
        const fade = clamp((t - 3300) / 600)
        placeHead(drawn, k > 0 ? 1 - fade : 0)
        if (!arrowShown && k >= 0.98) { arrowShown = true; setArrowOn(true) }
      }
      if (t >= buildMs) {
        // glow travels step 0 -> 3 over 6s, then rests; loop every 7.5s
        const c = (t - buildMs) % 7500
        const pos = 3 * easeInOutSine(clamp(c / 6000))
        const amp = c < 6000 ? smoothstep(clamp(c / 500)) * (1 - smoothstep(clamp((c - 5300) / 700))) : 0
        setLit([0, 1, 2, 3].map((i) => smoothstep(clamp(1 - Math.abs(pos - i) / 0.9)) * amp))
        if (!isMobile && path) placeHead(stops[0] + (lastStop - stops[0]) * (pos / 3), amp)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [built, isMobile])

  if (isMobile) {
    return (
      <div ref={wrapRef} className={`stair-m${built ? ' is-built' : ''}`}>
        {STEPS.map((s, i) => (
          <div key={s.week} className="stair-m-row" style={{ transitionDelay: `${350 * i}ms` }}>
            <div className="stair-m-head">
              <span className="stair-icon stair-icon--m" ref={(el) => { icons.current[i] = el }}>
                <span className="stair-icon-glow" ref={(el) => { iconGlows.current[i] = el }} />
                <Icon d={s.icon} size={24} />
              </span>
              <span className="stair-m-text">
                <span className="stair-label">{s.label.replace('\n', ' ')}</span>
                <span className="stair-week">{s.week}</span>
              </span>
            </div>
            <div className="stair-m-track">
              <div className="stair-m-bar" style={{ width: built ? `${BAR_W[i]}%` : '0%', transitionDelay: `${150 + 350 * i}ms` }}>
                <div className="stair-m-bar-glow" ref={(el) => { barGlows.current[i] = el }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div ref={wrapRef} className={`stair${built ? ' is-built' : ''}`}>
      <div className="stair-cols">
        {STEPS.map((s, i) => (
          <div key={s.week} className="stair-col">
            <div
              className="stair-content"
              style={{ bottom: BAR_H[i] + 22, transform: built ? 'translateY(0)' : `translateY(${BAR_H[i]}px)`, transitionDelay: `${350 * i}ms` }}
            >
              <span className="stair-icon" ref={(el) => { icons.current[i] = el }}>
                <span className="stair-icon-glow" ref={(el) => { iconGlows.current[i] = el }} />
                <Icon d={s.icon} size={30} />
              </span>
              <span className="stair-label">{s.label}</span>
              <span className="stair-week">{s.week}</span>
            </div>
            <div className="stair-bar" style={{ height: BAR_H[i], transitionDelay: `${350 * i}ms` }}>
              <div className="stair-bar-glow" ref={(el) => { barGlows.current[i] = el }} />
            </div>
          </div>
        ))}
      </div>
      <svg className="stair-line" viewBox={`0 0 1000 ${CHART_H}`} preserveAspectRatio="none" aria-hidden>
        <path ref={pathRef} d={PATH} className="stair-line-path" />
      </svg>
      {PTS.map(([x, y], i) => (
        <span
          key={i}
          ref={(el) => { dots.current[i] = el }}
          className="stair-dot"
          style={{ left: `${x / 10}%`, top: `calc(100% - ${CHART_H}px + ${y}px)` }}
        />
      ))}
      <span ref={headRef} className="stair-head" />
      <span className={`stair-arrow${arrowOn ? ' is-on' : ''}`} style={{ top: `calc(100% - ${CHART_H}px + ${PTS[3][1] - 22}px)` }}>
        <svg viewBox="0 0 24 24" aria-hidden><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
      </span>
      <div className="stair-base" />
    </div>
  )
}
