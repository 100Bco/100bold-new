'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Icon from '@/components/service/Icon'

/* Who we work with: the business types by name */
export default function IndWho({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.idw-head > *, .idw-grid, .idw-note'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="idw" ref={ref}>
      <div className="mx">
        <div className="idw-head"><h2 className="sd-h2">{d.h2}</h2><p>{d.lead}</p></div>
        <ul className={'idw-grid n' + d.items.length}>
          {d.items.map((t) => <li key={t}><i><Icon name="check" /></i>{t}</li>)}
        </ul>
        {d.note && <div className="idw-note"><h3>{d.note.h}</h3><p>{d.note.t}</p></div>}
      </div>
    </section>
  )
}
