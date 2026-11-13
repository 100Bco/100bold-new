'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { services } from '@/data/home'
import { isoScenes } from '@/lib/isoScenes'
import Arrow from './Arrow'

/* What we do — dark list; the row you point at opens and its isometric scene plays */
export default function WhatWeDo() {
  const ref = useRef(null)
  const canvases = useRef([])
  const draws = useRef([])
  const [open, setOpen] = useState(0)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xw-head > *, .xw-row'), {
        y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    })
  })

  // set up the four scenes once; closed rows show a still of the finished scene
  useEffect(() => {
    const ready = () => {
      canvases.current.forEach((cv, i) => {
        if (!cv) return
        cv.width = 640; cv.height = Math.round(640 * 428 / 712)
        draws.current[i] = isoScenes[i](cv)
        draws.current[i](4.6)
      })
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready)
    else ready()
  }, [])

  // play only the open scene, and only while the section is on screen
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0, visible = false, t0 = performance.now()
    const tick = (now) => {
      const d = draws.current[open]
      if (d && visible) d((now - t0) / 1000)
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.1 })
    if (ref.current) io.observe(ref.current)
    // reset the scenes that are not open to their finished still
    draws.current.forEach((d, i) => { if (d && i !== open) d(4.6) })
    if (!reduce) raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [open])

  return (
    <section className="xw" ref={ref} id="services">
      <div className="mx">
        <div className="xw-head">
          <span className="nk-index">02</span>
          <h2 className="x-h2">{services.h2}<i className="x-dot" aria-hidden="true" /></h2>
        </div>
        <ul className="xw-list">
          {services.items.map((s, i) => (
            <li key={s.to} className={'xw-row' + (open === i ? ' open' : '')} onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)} onClick={() => setOpen(i)}>
              <span className="xw-n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="xw-t"><Link href={s.to}>{s.title}</Link></h3>
              <div className="xw-d">
                <p>{s.desc}</p>
                <Link href={s.to} className="xw-more" aria-label={'Learn more about ' + s.title}>Learn more <Arrow /></Link>
              </div>
              <span className="xw-g" aria-hidden="true"><canvas ref={(el) => { canvases.current[i] = el }} /></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
