import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGsap, gsap, MQ } from '../../lib/motion'
import { hero } from '../../data/home'
import Arrow from './Arrow'

const ringText = 'START BRAVE • STAY BOLD • START BRAVE • STAY BOLD • '

export default function Hero() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 })
      tl.from('.nk-h1 .nk-line > span', { yPercent: 115, rotate: 3, duration: 1.4, stagger: 0.1 })
        .from('.nk-hero-dot', { scale: 0, rotate: -120, duration: 1.4 }, '-=1.1')
        .from('.nk-hero-sub, .nk-hero-ctas', { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, '-=1.1')
        .from('.nk-hero-media', { clipPath: 'inset(100% 0 0 0 round 32px)', duration: 1.6, ease: 'expo.inOut' }, '-=1.4')
        .from('.nk-proof-item', { y: 40, opacity: 0, duration: 1, stagger: 0.1 }, '-=0.9')

      gsap.utils.toArray('.nk-count').forEach((el) => {
        const end = +el.dataset.to
        const o = { v: 0 }
        tl.to(o, { v: end, duration: 1.6, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v) } }, '-=0.9')
      })

      gsap.to('.nk-hero-media-inner', {
        yPercent: 10, scale: 1.08, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.nk-hero-dot', {
        y: -80, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    })
  })

  return (
    <section className="nk-hero" ref={ref}>
      <div className="mx">
        <div className="nk-hero-grid">
          <div className="nk-hero-copy">
            <h1 className="nk-h1">
              {hero.h1Lines.map((l, i) => (
                <span className="nk-line" key={i}><span>{l}</span></span>
              ))}
            </h1>
            <p className="nk-hero-sub">{hero.sub}</p>
            <div className="nk-hero-ctas">
              <Link to="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">Book a call <Arrow /></Link>
              <Link to="/work" className="nk-btn nk-btn-ghost" data-magnetic="0.3">See our work</Link>
            </div>
          </div>

          <div className="nk-hero-side">
            <div className="nk-hero-media">
              <div className="nk-hero-media-inner">
                <wistia-player media-id="jzqrwe3t4z" style={{ width: '100%', height: '100%', display: 'block' }}></wistia-player>
              </div>
            </div>
            <div className="nk-hero-dot" aria-label={hero.tagline.join(' ')}>
              <svg viewBox="0 0 200 200" className="nk-ring" aria-hidden="true">
                <defs><path id="nk-ring-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
                <text><textPath href="#nk-ring-path">{ringText}</textPath></text>
              </svg>
              <span className="nk-dot-core">{hero.tagline[0]}<br />{hero.tagline[1]}</span>
            </div>
          </div>
        </div>

        <ul className="nk-proof">
          {hero.proof.map((p, i) => (
            <li className="nk-proof-item" key={i}>
              <strong>{p.pre}<span className="nk-count" data-to={p.num}>{p.num}</span>{p.post}</strong>
              <span>{p.who}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
