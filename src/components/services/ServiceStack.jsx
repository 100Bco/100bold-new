'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { offers } from '@/data/services'
import { isoScenes } from '@/lib/isoScenes'
import Arrow from '@/components/home/Arrow'

/* Five service cards that stack on scroll: each new card slides over the last, which shrinks and dims */
export default function ServiceStack() {
  const ref = useRef(null)
  const canvases = useRef({})
  const draws = useRef({})
  const active = useRef(new Set())

  useGsap(ref, (mm) => {
    mm.add(MQ.desktop, () => {
      const cards = gsap.utils.toArray(ref.current.querySelectorAll('.svc'))
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const inner = card.querySelector('.svc-in')
        const shade = card.querySelector('.svc-shade')
        const st = { trigger: next, start: 'top bottom', end: 'top top+=' + (96 + (i + 1) * 14), scrub: true }
        gsap.to(inner, { scale: 0.92, ease: 'none', scrollTrigger: st })
        gsap.to(shade, { opacity: 0.55, ease: 'none', scrollTrigger: { ...st } })
      })
      cards.forEach((card) => {
        gsap.from(card.querySelectorAll('.svc-copy > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: card, start: 'top 70%', once: true } })
      })
    })
    mm.add(MQ.mobile, () => {
      gsap.utils.toArray(ref.current.querySelectorAll('.svc-in')).forEach((el) => {
        gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
      })
    })
  })

  // isometric scenes: draw a finished still, then play only the ones on screen
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ready = () => {
      Object.entries(canvases.current).forEach(([i, cv]) => {
        if (!cv) return
        cv.width = 712; cv.height = 428
        draws.current[i] = isoScenes[i](cv)
        draws.current[i](4.6)
      })
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready)
    else ready()
    if (reduce) return
    const t0 = {}
    let raf = 0
    const tick = (now) => {
      active.current.forEach((i) => {
        if (t0[i] == null) t0[i] = now
        draws.current[i] && draws.current[i]((now - t0[i]) / 1000)
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      const i = e.target.dataset.scene
      if (e.isIntersecting) { active.current.add(i); t0[i] = null } else active.current.delete(i)
    }), { threshold: 0.4 })
    Object.values(canvases.current).forEach((cv) => cv && io.observe(cv))
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [])

  // the Portal film: load and play only when it is near
  useEffect(() => {
    const v = ref.current.querySelector('.svc-video')
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) { v.src = v.dataset.src; v.load() } if (!reduce) v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '200px 0px', threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <section className="svs" ref={ref} aria-label="Our services">
      {offers.map((o, i) => (
        <article key={o.id} id={o.id} className={'svc t-' + o.tone} style={{ '--i': i }}>
          <div className="svc-in">
            <div className="svc-copy">
              <span className="svc-tag">{i < 3 ? 'Growth services' : 'Specialist studio'} · {o.name}</span>
              <h2 className="svc-h">{o.h3}</h2>
              <p className="svc-line">{o.line}</p>
              <ul className="svc-points">{o.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="svc-foot">
                <p className="svc-suits"><span>Best for</span>{o.suits}</p>
                <Link href={o.to} className="svc-more" data-magnetic="0.2">{o.more} <i><Arrow /></i></Link>
              </div>
            </div>
            <div className="svc-media">
              {o.media.kind === 'scene' && <canvas ref={(el) => { canvases.current[o.media.i] = el }} data-scene={o.media.i} aria-hidden="true" />}
              {o.media.kind === 'img' && <img src={o.media.src} alt={o.media.alt} loading="lazy" />}
              {o.media.kind === 'video' && <video className="svc-video" data-src={o.media.src} poster={o.media.poster} muted loop playsInline preload="none" aria-label={o.media.alt} />}
              {o.proof && (
                <div className="svc-proof">
                  <b>{o.proof.big}</b>
                  <span>{o.proof.label}</span>
                  <em>{o.proof.who}</em>
                </div>
              )}
            </div>
            <div className="svc-shade" aria-hidden="true" />
          </div>
        </article>
      ))}
    </section>
  )
}
