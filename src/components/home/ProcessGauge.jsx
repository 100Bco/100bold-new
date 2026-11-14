'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/motion'
import { process as howWeWork } from '@/data/home'

/* "How we work" — a speedometer: scrolling turns the needle from Audit to Report, then to full speed */
const CX = 400, CY = 330, R = 270
const A0 = -180, A1 = 0
const STOPS = [-157, -112, -68, -23]
const icons = [
  <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  <><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /><rect x="8" y="3" width="8" height="8" rx="1.5" /></>,
  <><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
]
const pt = (a, r = R) => [CX + r * Math.cos((a * Math.PI) / 180), CY + r * Math.sin((a * Math.PI) / 180)]
const arc = (a, b, r = R) => {
  const [x1, y1] = pt(a, r), [x2, y2] = pt(b, r)
  return 'M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (b - a > 180 ? 1 : 0) + ' 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1)
}
const ticks = []
for (let a = A0; a <= A1; a += 4) {
  const big = a % 20 === 0
  const [x1, y1] = pt(a, R + 30), [x2, y2] = pt(a, R + (big ? 46 : 38))
  ticks.push({ x1, y1, x2, y2, big })
}

export default function ProcessGauge() {
  const ref = useRef(null)
  const fill = useRef(null)
  const needle = useRef(null)
  const [step, setStep] = useState(0)
  const [angle, setAngle] = useState(A0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const draw = (a) => {
      if (fill.current) fill.current.setAttribute('d', arc(A0, Math.max(A0 + 0.5, a)))
      if (needle.current) needle.current.setAttribute('transform', 'translate(' + CX + ' ' + CY + ') rotate(' + (a + 90) + ')')
    }
    if (reduce) { draw(A1 - 2); setAngle(A1); return }
    draw(A0)
    // scroll progress 0..1 maps to: 0 → Audit, then Build, Run, Report, and the last stretch to full speed
    const keys = [0, 0.2, 0.42, 0.64, 0.86, 1]
    const vals = [A0 + 8, STOPS[0], STOPS[1], STOPS[2], STOPS[3], A1 - 2]
    let last = -1
    const st = ScrollTrigger.create({
      trigger: ref.current.querySelector('.pg-pin'),
      start: 'top top',
      end: () => '+=' + window.innerHeight * 2.2,
      pin: true, scrub: 0.6, anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress
        let i = 0
        while (i < keys.length - 2 && p > keys[i + 1]) i++
        const t = (p - keys[i]) / (keys[i + 1] - keys[i])
        const e = gsap.parseEase('power2.inOut')(Math.min(1, Math.max(0, t)))
        const a = vals[i] + (vals[i + 1] - vals[i]) * e
        draw(a)
        setAngle(a)
        const s = p < keys[1] ? 0 : Math.min(3, i - 1 + (t > 0.5 ? 1 : 0))
        if (s !== last) { last = s; setStep(Math.max(0, s)) }
      },
    })
    return () => st.kill()
  }, [])

  const it = howWeWork.steps[step]

  return (
    <section className="pg" ref={ref}>
      <div className="pg-pin">
        <div className="pg-head">
          <span className="nk-index">05</span>
          <h2 className="pg-h2">{howWeWork.h2}</h2>
        </div>

        <div className="pg-stage">
          <svg className="pg-svg" viewBox="-40 -100 880 470" aria-hidden="true">
            <defs>
              <linearGradient id="pg-arc" gradientUnits="userSpaceOnUse" x1={CX - R} y1="0" x2={CX + R} y2="0"><stop offset="0" stopColor="#8a0c22" /><stop offset="1" stopColor="#ff2b4f" /></linearGradient>
              <filter id="pg-glow" filterUnits="userSpaceOnUse" x="-40" y="-100" width="880" height="470"><feGaussianBlur stdDeviation="7" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={'rgba(255,255,255,' + (t.big ? 0.35 : 0.14) + ')'} strokeWidth={t.big ? 2 : 1} />
            ))}
            <path d={arc(A0, A1)} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="28" strokeLinecap="round" />
            <path ref={fill} fill="none" stroke="url(#pg-arc)" strokeWidth="28" strokeLinecap="round" filter="url(#pg-glow)" />
            {STOPS.map((a, i) => {
              const [x, y] = pt(a, R + 84), lx = x, ly = y - 50
              const on = i === step, done = a <= angle + 1
              return (
                <g key={i} className={'pg-node' + (on ? ' on' : done ? ' done' : '')}>
                  <circle cx={x} cy={y} r="32" />
                  <g transform={'translate(' + (x - 13) + ' ' + (y - 13) + ') scale(1.08)'} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[i]}</g>
                  <text x={lx} y={ly + 6} textAnchor="middle">{'0' + (i + 1) + ' ' + howWeWork.steps[i].title}</text>
                </g>
              )
            })}
            {/* desktop: the step text sits inside the dial, above a short needle */}
            <foreignObject className="pg-fo" x={CX - 215} y={CY - 236} width="430" height="140">
              <div className="pg-in pg-in-dial" key={step}>
                <div className="pg-num">{'0' + (step + 1)}<small> / 04</small></div>
                <div className="pg-ttl">{it.title}</div>
                <p className="pg-dsc">{it.text}</p>
              </div>
            </foreignObject>
            <g ref={needle}>
              <line className="pg-needle" x1="0" y1="0" x2="0" y2="-222" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
              <circle r="22" fill="#C8102E" />
              <circle r="8" fill="#fff" />
            </g>
          </svg>

          <div className="pg-center" aria-live="polite">
            <div className="pg-in" key={step}>
              <div className="pg-num">{'0' + (step + 1)}<small> / 04</small></div>
              <h3 className="pg-ttl">{it.title}</h3>
              <p className="pg-dsc">{it.text}</p>
            </div>
          </div>
        </div>

        {/* full list for search engines and screen readers */}
        <ol className="pg-sr">
          {howWeWork.steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ol>
      </div>
    </section>
  )
}
