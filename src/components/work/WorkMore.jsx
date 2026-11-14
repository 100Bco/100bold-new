'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { more } from '@/data/work'

/* More work: the wider roster, smaller cards */
export default function WorkMore() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.wkm-head > *, .wkm-grid'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="wkm" ref={ref}>
      <div className="mx">
        <div className="wkm-head"><h2 className="sd-h2">{more.h2}</h2><p>{more.body}</p></div>
        <div className="wkm-grid">
          {more.items.map((m) => (
            <a href={m.link} target="_blank" rel="noopener noreferrer" className="wkm-card" key={m.title}>
              <div className="wkm-img"><img src={m.img.split(' ').join('%20')} alt={m.title} loading="lazy" width="1280" height="800" /></div>
              <div className="wkm-body">
                <h3>{m.title}</h3>
                <small>{m.industry}</small>
                <p>{m.desc}</p>
                <ul>{m.services.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
