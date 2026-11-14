'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { faq } from '@/data/home'
import Arrow from './Arrow'

/* Questions — numbered list; the open one turns red */
export default function Faq() {
  const ref = useRef(null)
  const [open, setOpen] = useState(0)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xq-side > *, .xq-item'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="xq" ref={ref}>
      <div className="mx xq-grid">
        <div className="xq-side">
          <span className="nk-index">06</span>
          <h2 className="x-h2">{faq.h2}</h2>
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
        </div>
        <div className="xq-list">
          {faq.items.map((f, i) => (
            <div className={'xq-item' + (open === i ? ' open' : '')} key={f.q}>
              <h3>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={'xq-' + i}>
                  <span className="xq-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="xq-t">{f.q}</span>
                  <i aria-hidden="true" />
                </button>
              </h3>
              <div className="xq-a" id={'xq-' + i} role="region"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
