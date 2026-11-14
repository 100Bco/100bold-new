'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'

/* SEO, GEO, AEO: three giant letters, each with its plain-English meaning */
export default function Terms({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdt-head > *, .sdt-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="sdt" ref={ref}>
      <div className="mx">
        <div className="sdt-head"><h2 className="sd-h2">{d.h2}</h2></div>
        <div className="sdt-grid">
          {d.items.map((t) => (
            <article className="sdt-card" key={t.k}>
              <b className="sdt-k">{t.k}</b>
              <h3>{t.full}</h3>
              <p>{t.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
