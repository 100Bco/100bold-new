'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, revealIn, Lines } from '@/lib/motion'
import { router } from '@/data/home'
import Arrow from './Arrow'

export default function Router() {
  const ref = useRef(null)
  const preview = useRef(null)
  const [active, setActive] = useState(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.from('.nk-row', {
        y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07,
        scrollTrigger: { trigger: '.nk-rows', start: 'top 80%', once: true },
      })

    })
    mm.add('(pointer: fine) and (min-width: 961px)', () => {
      const xTo = gsap.quickTo(preview.current, 'x', { duration: 0.6, ease: 'power3' })
      const yTo = gsap.quickTo(preview.current, 'y', { duration: 0.6, ease: 'power3' })
      const move = (e) => {
        const r = ref.current.getBoundingClientRect()
        xTo(e.clientX - r.left); yTo(e.clientY - r.top)
      }
      ref.current.addEventListener('mousemove', move)
      return () => ref.current && ref.current.removeEventListener('mousemove', move)
    })
  })

  const item = active !== null ? router.items[active] : null

  return (
    <section className="nk-router" ref={ref}>
      <div className="mx nk-router-body">
        <div className="nk-sec-head">
          <span className="nk-index" data-reveal>01</span>
          <Lines lines={[router.h2]} className="nk-h2" />
        </div>
        <ul className="nk-rows" onMouseLeave={() => setActive(null)}>
          {router.items.map((it, i) => (
            <li key={it.to} className="nk-row" onMouseEnter={() => setActive(i)}>
              <Link href={it.to} className="nk-row-link">
                <span className="nk-row-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nk-row-title">{it.title}</span>
                <span className="nk-row-line">{it.line}</span>
                <span className="nk-row-arrow"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`nk-router-preview${item ? ' show' : ''}`} ref={preview} aria-hidden="true">
        {router.items.map((it, i) => (
          <div key={i} className={`nk-rp-card${active === i ? ' on' : ''}`}>
            {it.img ? <img src={it.img} alt="" loading="lazy" /> : <span>{String(i + 1).padStart(2, '0')}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
