'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { services } from '@/data/home'
import Arrow from './Arrow'

/* What we do — dark list; the row you point at opens and its animation grows */
export default function WhatWeDo() {
  const ref = useRef(null)
  const [open, setOpen] = useState(0)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xw-head > *, .xw-row'), {
        y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    })
  })
  return (
    <section className="xw" ref={ref} id="services">
      <div className="mx">
        <div className="xw-head">
          <span className="nk-index">02</span>
          <h2 className="x-h2">{services.h2}<i className="x-dot" aria-hidden="true" /></h2>
        </div>
        <ul className="xw-list">
          {services.items.map((s, i) => (
            <li key={s.to} className={'xw-row' + (open === i ? ' open' : '')} onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)}>
              <span className="xw-n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="xw-t"><Link href={s.to}>{s.title}</Link></h3>
              <div className="xw-d">
                <p>{s.desc}</p>
                <Link href={s.to} className="xw-more" aria-label={'Learn more about ' + s.title}>Learn more <Arrow /></Link>
              </div>
              <span className="xw-g"><img src={s.gif} alt="" loading="lazy" /></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
