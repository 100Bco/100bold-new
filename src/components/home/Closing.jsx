import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGsap, gsap, MQ, revealIn } from '../../lib/motion'
import { closing } from '../../data/home'
import Arrow from './Arrow'

export default function Closing() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.to('.nk-close-marquee .t1', {
        xPercent: -30, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.fromTo('.nk-close-marquee .t2', { xPercent: -30 }, {
        xPercent: 0, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })
  })

  const line = `${closing.h2} • `.repeat(4)

  return (
    <section className="nk-close" ref={ref}>
      <div className="nk-close-marquee" aria-hidden="true">
        <div className="t1">{line}</div>
        <div className="t2">{line}</div>
      </div>
      <div className="mx nk-close-inner">
        <h2 className="nk-close-h2" data-reveal>{closing.h2}</h2>
        <p data-reveal="0.1">{closing.body}</p>
        <Link to="/contact" className="nk-close-btn" data-magnetic="0.45" data-reveal="0.2">
          <span>{closing.cta}</span><Arrow />
        </Link>
      </div>
    </section>
  )
}
