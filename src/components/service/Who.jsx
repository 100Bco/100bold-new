'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'

function Card({ it }) {
  const ref = useRef(null)
  return (
    <Link href={it.to} className="sdw-card" ref={ref}>
      <HoverLottie src={it.icon} el={ref} />
      <h3>{it.name}</h3>
      <p>{it.want}</p>
      <i className="sdw-go" aria-hidden="true">→</i>
    </Link>
  )
}

function HoverLottie({ src, el }) {
  const box = useRef(null)
  useEffect(() => {
    let a
    const card = el.current
    const enter = () => { if (a) { a.loop = true; a.goToAndPlay(0, true) } }
    const leave = () => { if (a) a.loop = false }
    import('lottie-web/build/player/lottie_light').then((l) => {
      if (!box.current) return
      a = l.default.loadAnimation({ container: box.current, renderer: 'svg', loop: false, autoplay: true, path: src })
    }).catch(() => {})
    card && card.addEventListener('mouseenter', enter)
    card && card.addEventListener('mouseleave', leave)
    return () => { a && a.destroy(); card && card.removeEventListener('mouseenter', enter); card && card.removeEventListener('mouseleave', leave) }
  }, [src, el])
  return <span className="sdw-ic" ref={box} aria-hidden="true" />
}

/* Who this is for: five industry cards, each with what that buyer wants */
export default function Who({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdw-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelectorAll('.sdw-card'), { y: 70, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 68%', once: true } })
    })
  })
  return (
    <section className="sdw" ref={ref}>
      <div className="mx">
        <div className="sdw-head"><h2 className="sd-h2">{d.h2}</h2><p>Service businesses with $5M+ in yearly revenue, led by an owner, founder, or managing partner.</p></div>
        <div className="sdw-grid">{d.items.map((it) => <Card it={it} key={it.to} />)}</div>
      </div>
    </section>
  )
}
