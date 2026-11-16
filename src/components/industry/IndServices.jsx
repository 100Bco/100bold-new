'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { offers } from '@/data/services'
import { isoScenes } from '@/lib/isoScenes'
import MobileSlider from '@/components/MobileSlider'

const sceneFor = { '/services/seo-ai-search': 0, '/services/web-design': 1, '/services/meta-ads': 2, '/portal': 3, '/the-mark': 4 }

/* What we do for you: the services that fit this industry, each a card with its live 3D scene */
export default function IndServices({ items, name }) {
  const ref = useRef(null)
  const cvs = useRef([])
  const list = items.filter((s) => offers.find((o) => o.to === s.to))
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ids-head > *, .isv-wrap'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  useEffect(() => {
    const draws = cvs.current.map((cv, i) => { if (!cv) return null; cv.width = 712; cv.height = 428; const d = isoScenes[sceneFor[list[i].to]](cv); d(4.6); return d })
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0, on = false
    const t0 = performance.now()
    const tick = (now) => { if (on) draws.forEach((d) => d && d((now - t0) / 1000)); raf = requestAnimationFrame(tick) }
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting }, { threshold: 0.1 })
    io.observe(ref.current)
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [list.length])
  return (
    <section className="ids" ref={ref}>
      <div className="mx">
        <div className="ids-head"><p className="sd-eyebrow">What we do for you</p><h2 className="sd-h2">The services that move the needle</h2><p>Picked for {name}.</p></div>
        <div className="isv-wrap">
          <MobileSlider trackClass={'isv-grid n' + list.length} labels={list.map((s) => offers.find((o) => o.to === s.to).name)}>
            {list.map((s, i) => {
              const o = offers.find((x) => x.to === s.to)
              return (
                <Link href={s.to} className="isv" key={s.to}>
                  <span className="isv-scene"><canvas ref={(el) => { cvs.current[i] = el }} aria-hidden="true" /></span>
                  <span className="isv-body">
                    <span className="isv-name">{o.name}</span>
                    <span className="isv-h">{o.h3}</span>
                    <span className="isv-go">Learn more <i aria-hidden="true">→</i></span>
                  </span>
                </Link>
              )
            })}
          </MobileSlider>
        </div>
      </div>
    </section>
  )
}
