'use client'

import { useRef } from 'react'
import { useGsap, gsap, ScrollTrigger, MQ } from '@/lib/motion'
import { logos } from '@/data/home'

const Set = ({ copy }) => (
  <div className="xl-set" aria-hidden={copy || undefined}>
    {logos.items.map((l) => (
      <div className="xl-cell" key={l.name} tabIndex={copy ? -1 : 0} onClick={(e) => e.currentTarget.classList.toggle('on')}>
        <img src={l.src} alt={copy ? '' : l.name} width={l.w} height={l.h} style={{ width: l.w, height: l.h }} loading="lazy" />
      </div>
    ))}
  </div>
)

/* Trusted by — one row of logo tiles running sideways; speeds up with scroll */
export default function Logos() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tween = gsap.to(ref.current.querySelector('.xl-track'), { xPercent: -50, duration: 36, ease: 'none', repeat: -1 })
      const st = ScrollTrigger.create({
        trigger: ref.current, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => {
          gsap.timeline({ overwrite: true })
            .to(tween, { timeScale: Math.min(1 + Math.abs(self.getVelocity()) / 250, 6), duration: 0.2 })
            .to(tween, { timeScale: 1, duration: 1.2 })
        },
      })
      return () => st.kill()
    })
  })
  return (
    <section className="xl" ref={ref}>
      <p className="xl-label">{logos.label}</p>
      <div className="xl-marquee"><div className="xl-track"><Set /><Set copy /><Set copy /><Set copy /></div></div>
    </section>
  )
}
