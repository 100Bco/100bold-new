import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGsap, gsap, MQ, revealIn, Lines } from '../../lib/motion'
import { services } from '../../data/home'
import Arrow from './Arrow'

export default function WhatWeDo() {
  const ref = useRef(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      const cards = gsap.utils.toArray('.nk-stack-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card.querySelector('.nk-stack-inner'), {
          scale: 0.9, filter: 'brightness(0.8)', ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top 65%', end: 'top 20%', scrub: true },
        })
      })
    })
  })

  return (
    <section className="nk-wwd" ref={ref} id="services">
      <div className="mx">
        <div className="nk-sec-head">
          <span className="nk-index" data-reveal>02</span>
          <Lines lines={[services.h2]} className="nk-h2" />
        </div>
        <div className="nk-stack">
          {services.items.map((s, i) => (
            <article className="nk-stack-card" key={s.to} style={{ '--i': i }}>
              <div className="nk-stack-inner">
                <div className="nk-stack-copy">
                  <span className="nk-stack-num">0{i + 1} / 0{services.items.length}</span>
                  <h3><Link to={s.to}>{s.title}</Link></h3>
                  <p>{s.desc}</p>
                  <Link to={s.to} className="nk-link-arrow" aria-label={`Learn more about ${s.title}`}>
                    <span>Learn more</span><Arrow />
                  </Link>
                </div>
                <div className="nk-stack-media">
                  <img src={s.gif} alt="" loading="lazy" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
