'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ, Lines } from '@/lib/motion'
import { router } from '@/data/home'
import Arrow from './Arrow'

/* "What do you run?" — six tall doors side by side; the one you point at opens */
export default function RunDoors() {
  const ref = useRef(null)
  const [open, setOpen] = useState(0)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const root = ref.current
      // the heading rises in
      gsap.from(root.querySelectorAll('.rd2-head .nk-line > span'), {
        yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: 0.08,
        scrollTrigger: { trigger: root, start: 'top 80%', once: true },
      })
      gsap.from(root.querySelectorAll('.rd2-index'), {
        y: 24, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08,
        scrollTrigger: { trigger: root, start: 'top 80%', once: true },
      })
      // transition from the hero: the red stream runs in from the right as one strip,
      // breaks into six pieces, and each piece drops onto a door, which then rises open
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.querySelector('.rd2-doors'), start: 'top 95%', end: 'top 35%', scrub: 0.6 },
      })
      tl.fromTo(root.querySelectorAll('.rd2-bar'),
        { scaleX: 0, y: () => (window.innerWidth > 960 ? -36 : -10) },
        { scaleX: 1, ease: 'none', duration: 0.5, stagger: { each: 0.07, from: 'end' } }, 0)
        .to(root.querySelectorAll('.rd2-bar'), { y: 0, ease: 'power2.inOut', duration: 0.35, stagger: { each: 0.04, from: 'end' } }, 0.45)
        .fromTo(root.querySelectorAll('.rd2-door-in'),
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', ease: 'power2.out', duration: 0.5, stagger: { each: 0.05, from: 'end' } }, 0.6)
    })
  })

  return (
    <section className="rd2" ref={ref}>
      <div className="mx">
        <div className="rd2-head">
          <span className="nk-index rd2-index">01</span>
          <Lines lines={[router.h2]} className="nk-h2" />
        </div>
      </div>

      <ul className="rd2-doors">
        {router.items.map((it, i) => (
          <li
            key={it.to}
            className={`rd2-door${open === i ? ' open' : ''}${it.img ? ' has-img' : ''}`}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
          >
            <i className="rd2-bar" aria-hidden="true" />
            <Link href={it.to} className="rd2-door-in" onClick={(e) => { if (open !== i && window.matchMedia('(hover: none)').matches) { e.preventDefault(); setOpen(i) } }}>
              {it.img && <img className="rd2-img" src={it.img} alt="" loading="lazy" />}
              <span className="rd2-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="rd2-vtitle" aria-hidden="true">{it.title}</span>
              <span className="rd2-body">
                <span className="rd2-title">{it.title}</span>
                <span className="rd2-line">{it.line}</span>
                <span className="rd2-go"><Arrow /></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
