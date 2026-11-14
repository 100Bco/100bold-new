'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useMedia from './useMedia'

/**
 * The Mark home: "We do two things" cards.
 * Card 1: a network that lights up ring by ring (.net-ring/.net-node .is-lit) while
 * the impressions chip counts up to 1M+. Card 2: an inbox; outer nodes pulse
 * (.is-pulse), a gold "lead" dot flies from the node into the inbox (desktop only),
 * a typing indicator shows, then the message lands (.inbox-msg.is-new) and the
 * badge bumps (.inbox-badge.is-on). The whole sequence fades and loops.
 */

// network nodes: three elliptical rings, each node linked to its nearest node on the ring inside
const NODES = (() => {
  const out = []
  const rings = [
    { rx: 72, ry: 46, count: 6, offset: 0.3 },
    { rx: 124, ry: 80, count: 10, offset: 0.1 },
    { rx: 178, ry: 112, count: 16, offset: 0.2 },
  ]
  rings.forEach((ring, r) => {
    for (let t = 0; t < ring.count; t++) {
      const a = (t / ring.count) * Math.PI * 2 + ring.offset
      const x = 200 + Math.cos(a) * ring.rx
      const y = 130 + Math.sin(a) * ring.ry
      let parent = -1
      if (r > 0) {
        let best = Infinity
        out.forEach((n, i) => {
          if (n.ring !== r - 1) return
          const d = (n.x - x) ** 2 + (n.y - y) ** 2
          if (d < best) { best = d; parent = i }
        })
      }
      out.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, ring: r, parent })
    }
  })
  return out
})()
const OUTER = NODES.map((n, i) => (n.ring === 2 ? i : -1)).filter((i) => i >= 0)
const LEAD_NODES = [OUTER[1], OUTER[15], OUTER[2], OUTER[14]]
const MESSAGES = ['Speaker invitation received', 'New partnership request', 'Investor wants to connect', 'Podcast guest request']
const RING_AT = [300, 1000, 1700]
const FLY_MS = 900

function trackGlow(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function WhatWeDo() {
  const wrapRef = useRef(null)
  const inboxRef = useRef(null)
  const nodeRefs = useRef([])
  const timers = useRef([])
  const isDesktop = useMedia('(min-width: 901px)', true)
  const [started, setStarted] = useState(false)
  const [cardsIn, setCardsIn] = useState(false)
  const [ringLevel, setRingLevel] = useState(-1)
  const [fading, setFading] = useState(false)
  const [impressions, setImpressions] = useState(0) // 0..1 (1 = 1M+)
  const [pulse, setPulse] = useState(-1)
  const [count, setCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [lead, setLead] = useState(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); setCardsIn(true); obs.disconnect() }
    }, { threshold: 0.35 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const later = useCallback((fn, ms) => { timers.current.push(setTimeout(fn, ms)) }, [])

  const flyLead = useCallback((i) => {
    const wrap = wrapRef.current
    const node = nodeRefs.current[i]
    const inbox = inboxRef.current
    if (!wrap || !node || !inbox) return
    const w = wrap.getBoundingClientRect()
    const n = node.getBoundingClientRect()
    const b = inbox.getBoundingClientRect()
    const from = { x: n.left + n.width / 2 - w.left, y: n.top + n.height / 2 - w.top }
    const to = { tx: b.left + 28 - w.left, ty: b.top + 70 - w.top }
    setLead({ ...from, ...to, go: false })
    requestAnimationFrame(() => requestAnimationFrame(() => setLead({ ...from, ...to, go: true })))
  }, [])

  useEffect(() => {
    if (!started) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRingLevel(2); setImpressions(1); setCount(4)
      return
    }
    let cancelled = false
    const run = () => {
      if (cancelled) return
      timers.current.forEach(clearTimeout)
      timers.current = []
      setFading(false); setRingLevel(-1); setCount(0); setTyping(false); setPulse(-1); setImpressions(0); setLead(null)

      RING_AT.forEach((t, r) => later(() => setRingLevel(r), t))
      for (let s = 1; s <= 24; s++) {
        later(() => setImpressions(Math.round(1000 * (1 - Math.pow(1 - s / 24, 3))) / 1000), RING_AT[0] + (1900 * s) / 24)
      }
      MESSAGES.forEach((_, m) => {
        const at = 2600 + 1700 * m
        const node = LEAD_NODES[m]
        later(() => { setPulse(node); if (isDesktop) flyLead(node) }, at)
        const arrive = at + (isDesktop ? FLY_MS : 250)
        later(() => { setLead(null); setTyping(true) }, arrive)
        later(() => { setTyping(false); setCount(m + 1); setPulse(-1) }, arrive + 550)
      })
      const end = 2600 + 1700 * MESSAGES.length + 2200
      later(() => setFading(true), end)
      later(run, end + 700)
    }
    run()
    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [started, isDesktop, later, flyLead])

  const chip = impressions >= 1 ? '1M+' : impressions === 0 ? '0' : `${Math.round(impressions * 1000)}K`

  return (
    <div ref={wrapRef} className="wwd-wrap">
      <div className="wwd-glow" aria-hidden />

      <div className={`wwd-card${cardsIn ? ' is-in' : ''}`} onMouseMove={trackGlow}>
        <h3 className="wwd-title">Build your <span className="tm-accent">authority and reach</span></h3>
        <div className={`wwd-visual net-visual${fading ? ' is-fading' : ''}`}>
          <svg viewBox="0 0 400 260" className="net-svg" aria-hidden>
            <defs>
              <radialGradient id="netCore" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#E6C994" />
                <stop offset="100%" stopColor="#A88449" />
              </radialGradient>
            </defs>
            {[[72, 46], [124, 80], [178, 112]].map(([rx, ry], r) => (
              <ellipse key={r} cx={200} cy={130} rx={rx} ry={ry} className={`net-ring${ringLevel >= r ? ' is-lit' : ''}`} />
            ))}
            {NODES.map((n, i) => {
              const p = n.parent === -1 ? { x: 200, y: 130 } : NODES[n.parent]
              const len = Math.hypot(n.x - p.x, n.y - p.y)
              return (
                <line
                  key={`l${i}`}
                  x1={p.x} y1={p.y} x2={n.x} y2={n.y}
                  className={`net-link ring-${n.ring}`}
                  style={{ strokeDasharray: len, strokeDashoffset: ringLevel >= n.ring ? 0 : len, transitionDelay: `${(i % 6) * 40}ms` }}
                />
              )
            })}
            {NODES.map((n, i) => (
              <circle
                key={`n${i}`}
                ref={(el) => { nodeRefs.current[i] = el }}
                cx={n.x} cy={n.y} r={n.ring === 2 ? 5 : 4}
                className={`net-node ring-${n.ring}${ringLevel >= n.ring ? ' is-lit' : ''}${pulse === i ? ' is-pulse' : ''}`}
                style={{ transitionDelay: `${(i % 6) * 40 + 250}ms` }}
              />
            ))}
            <circle cx={200} cy={130} r={30} className="net-core-halo" />
            <circle cx={200} cy={130} r={22} fill="url(#netCore)" />
            <circle cx={200} cy={125} r={7} fill="#0E1726" opacity={0.85} />
            <path d="M188 144 q12 -14 24 0" fill="#0E1726" opacity={0.85} />
          </svg>
          <div className="net-foot">
            <div className={`net-legend${ringLevel >= 2 ? ' is-on' : ''}`}><span className="net-legend-dot" /> Out-of-network</div>
            <div className={`net-chip${ringLevel >= 0 ? ' is-on' : ''}`}>
              <span className="net-chip-num">{chip}</span>
              <span className="net-chip-label">Impressions</span>
            </div>
          </div>
        </div>
        <p className="wwd-copy">We capture your voice, create the content, and manage your entire LinkedIn so the right people find you before you ever walk into the room.</p>
      </div>

      <div className={`wwd-card${cardsIn ? ' is-in' : ''}`} onMouseMove={trackGlow} style={{ animationDelay: '1.2s' }}>
        <h3 className="wwd-title">Turn that reach into <span className="tm-accent">revenue</span></h3>
        <div className={`wwd-visual${fading ? ' is-fading' : ''}`}>
          <div ref={inboxRef} className="inbox">
            <div className="inbox-head">
              <span className="inbox-title">Messages</span>
              <span key={count} className={`inbox-badge${count > 0 ? ' is-on' : ''}`}>{count}</span>
            </div>
            <div className="inbox-list">
              {typing && (
                <div className="inbox-row inbox-typing">
                  <span className="inbox-avatar" />
                  <span className="typing-dots"><i /><i /><i /></span>
                </div>
              )}
              {MESSAGES.slice(0, count).map((text, i) => ({ text, i })).reverse().map(({ text, i }) => (
                <div key={text} className={`inbox-row inbox-msg${i === count - 1 ? ' is-new' : ''}`}>
                  <span className={`inbox-avatar av-${i}`} />
                  <span className="inbox-body">
                    <span className="inbox-text">{text}</span>
                    <span className="inbox-skel" />
                  </span>
                  {i === count - 1 && <span className="inbox-unread" />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="wwd-copy">Speaker invitations. Partnership proposals. Inbound from decision-makers who found you through your content. We build the system that delivers results consistently.</p>
      </div>

      {lead && (
        <span
          className="lead-dot"
          style={{
            left: lead.go ? lead.tx : lead.x,
            top: lead.go ? lead.ty : lead.y,
            transition: lead.go ? `left ${FLY_MS}ms cubic-bezier(.45,0,.25,1), top ${FLY_MS}ms cubic-bezier(.2,-0.6,.4,1)` : 'none',
          }}
        />
      )}
    </div>
  )
}
