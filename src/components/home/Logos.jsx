import { useRef } from 'react'
import { useGsap, gsap, ScrollTrigger, MQ } from '../../lib/motion'
import { logos } from '../../data/home'

const Row = () => (
  <div className="nk-marquee-set">
    {logos.items.map((l) => (
      <div className="nk-logo-cell" key={l.name}>
        {l.src ? <img src={l.src} alt={l.name} loading="lazy" /> : <span className="nk-logo-word">{l.name}</span>}
      </div>
    ))}
  </div>
)

export default function Logos() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tween = gsap.to('.nk-marquee-track', { xPercent: -50, duration: 30, ease: 'none', repeat: -1 })
      const st = ScrollTrigger.create({
        trigger: ref.current, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => {
          const v = self.getVelocity()
          gsap.timeline({ overwrite: true })
            .to(tween, { timeScale: Math.min(1 + Math.abs(v) / 250, 6), duration: 0.2 })
            .to(tween, { timeScale: 1, duration: 1.2 })
        },
      })
      return () => st.kill()
    })
  })

  return (
    <section className="nk-logos" ref={ref}>
      <p className="nk-logos-label">{logos.label}</p>
      <div className="nk-marquee">
        <div className="nk-marquee-track"><Row /><Row /><Row /><Row /></div>
      </div>
    </section>
  )
}
