'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { offers } from '@/data/services'

/* What we do for you: the services that fit this industry, each one linked */
export default function IndServices({ items, name }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ids-head > *, .ids-list'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  const find = (to) => offers.find((o) => o.to === to)
  return (
    <section className="ids" ref={ref}>
      <div className="mx">
        <div className="ids-head"><h2 className="sd-h2">What we do for you</h2><p>The services that move the needle for {name.toLowerCase()}.</p></div>
        <ul className="ids-list">
          {items.filter((s) => find(s.to)).map((s) => {
            const o = find(s.to)
            return (
              <li key={s.to}>
                <Link href={s.to} className={'ids-row t-' + o.tone}>
                  <span className="ids-name">{o.name}</span>
                  <span className="ids-h">{o.h3}</span>
                  <span className="ids-short">{o.short}</span>
                  <i aria-hidden="true">→</i>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
