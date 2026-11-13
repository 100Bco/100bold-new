'use client'

import { useRef, useState } from 'react'
import { useGsap, MQ, revealIn, Lines } from '@/lib/motion'
import { faq } from '@/data/home'

export default function Faq() {
  const ref = useRef(null)
  const [open, setOpen] = useState(0)

  useGsap(ref, (mm) => { mm.add(MQ.motion, () => revealIn(ref.current)) })

  return (
    <section className="nk-faq" ref={ref}>
      <div className="mx nk-faq-grid">
        <div className="nk-faq-side">
          <div className="nk-sec-head">
            <span className="nk-index" data-reveal>06</span>
            <Lines lines={[faq.h2]} className="nk-h2" />
          </div>
        </div>
        <div className="nk-faq-list">
          {faq.items.map((f, i) => (
            <div className={`nk-qa${open === i ? ' open' : ''}`} key={f.q} data-reveal={(i % 4) * 0.05}>
              <h3>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`faq-${i}`}>
                  <span>{f.q}</span>
                  <i aria-hidden="true" />
                </button>
              </h3>
              <div className="nk-qa-body" id={`faq-${i}`} role="region">
                <div><p>{f.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
