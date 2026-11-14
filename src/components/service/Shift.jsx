'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'

const rows = 10

/* The shift: pinned while ten search results fall away, leaving one AI answer with your name */
export default function Shift({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    const root = ref.current
    const steps = root.querySelectorAll('.sds-step')
    const setStep = (n) => steps.forEach((el, i) => el.classList.toggle('on', i === n))
    mm.add(MQ.desktop, () => {
      setStep(0)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, start: 'top top', end: '+=180%', pin: true, scrub: 0.6, anticipatePin: 1,
          onUpdate: (s) => setStep(s.progress < 0.3 ? 0 : s.progress < 0.72 ? 1 : 2),
        },
      })
      tl.to({}, { duration: 0.6 })
        .to(root.querySelectorAll('.sds-row'), { height: 0, opacity: 0, marginTop: 0, x: -30, duration: 0.5, stagger: 0.12, ease: 'power2.in' })
        .to(root.querySelector('.sds-count'), { opacity: 0, duration: 0.3 }, '<')
        .fromTo(root.querySelector('.sds-ans'), { height: 0, opacity: 0, y: 30 }, { height: 'auto', opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.9')
        .fromTo(root.querySelector('.sds-ans mark'), { backgroundColor: 'rgba(200,16,46,0)', color: '#1A1816' }, { backgroundColor: 'rgba(200,16,46,1)', color: '#ffffff', duration: 0.4 })
        .to({}, { duration: 0.8 })
    })
    mm.add('(max-width: 960px), (prefers-reduced-motion: reduce)', () => {
      steps.forEach((el) => el.classList.add('on'))
      gsap.set(root.querySelectorAll('.sds-row'), { height: 0, opacity: 0, marginTop: 0 })
      gsap.set(root.querySelector('.sds-count'), { opacity: 0 })
      gsap.set(root.querySelector('.sds-ans'), { height: 'auto', opacity: 1 })
      gsap.set(root.querySelector('.sds-ans mark'), { backgroundColor: '#C8102E', color: '#fff' })
    })
  })
  return (
    <section className="sds" ref={ref}>
      <div className="mx sds-grid">
        <div className="sds-copy">
          <p className="sd-eyebrow">{d.eyebrow}</p>
          <h2 className="sd-h2">{d.h2}</h2>
          <ol className="sds-steps">
            {d.steps.map((s) => <li className="sds-step" key={s.k}><em>{s.k}</em><p>{s.t}</p></li>)}
          </ol>
        </div>
        <div className="sds-card" aria-hidden="true">
          <div className="sds-q"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>{d.query}</div>
          <p className="sds-count">About 10 results on page one</p>
          <ul className="sds-list">
            {Array.from({ length: rows }).map((_, i) => (
              <li className="sds-row" key={i}><span className="n">{i + 1}</span><span className="t" style={{ width: 52 + ((i * 37) % 38) + '%' }} /><span className="u" style={{ width: 28 + ((i * 23) % 24) + '%' }} /></li>
            ))}
          </ul>
          <div className="sds-ans">
            <div className="sds-ans-in">
              <span className="sds-ai">✦ AI answer</span>
              <p><mark>Your business</mark> {d.answer}</p>
              <div className="sdv-src"><span>Google Maps</span><span>Reviews</span><span>yourbusiness.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
