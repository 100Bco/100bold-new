'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import WhoIcon from './WhoIcon'

/* Who we work with: one card per business type, each with its own icon and what it needs; the first one leads in red */
export default function IndWho({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.idw-head > *, .iwc-grid, .idw-note'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="idw" ref={ref}>
      <div className="mx">
        <div className="idw-head"><p className="sd-eyebrow">Who we work with</p><h2 className="sd-h2">Built for your kind of business</h2><p>{d.lead}</p></div>
        <ul className={'iwc-grid n' + d.items.length}>
          {d.items.map((t, i) => (
            <li className="iwc" key={t.k}>
              {t.img && <img className="iwc-img" src={t.img} alt="" loading="lazy" aria-hidden="true" />}
              <span className="iwc-fade" aria-hidden="true" />
              <span className="iwc-ic"><WhoIcon name={t.i} /></span>
              <h3>{t.k}</h3>
              <i className="iwc-bar" aria-hidden="true" />
              <p>{t.d}</p>
            </li>
          ))}
        </ul>
        {d.note && <div className="idw-note"><h3>{d.note.h}</h3><p>{d.note.t}</p></div>}
      </div>
    </section>
  )
}
