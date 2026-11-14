'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { mark } from '@/data/home'
import Arrow from './Arrow'


/* The Mark — the question on the left, two CEO results as LinkedIn-style posts on the right */
export default function Mark() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.xm-copy > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelectorAll('.xm-post'), { y: 120, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: 0.18, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      // numbers count up and reactions pop when the posts arrive
      ref.current.querySelectorAll('.xm-num').forEach((el, i) => {
        const to = +el.dataset.to, unit = el.dataset.unit, o = { v: 0 }
        const fmt = (v) => (to < 10 ? (v >= to ? to : v.toFixed(1)) + unit : Math.round(v).toLocaleString('en-US') + unit)
        el.textContent = fmt(0)
        gsap.to(o, { v: to, duration: 2.2, delay: 0.5 + i * 0.25, ease: 'power3.out', onUpdate: () => { el.textContent = fmt(o.v) }, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
      })
      gsap.from(ref.current.querySelectorAll('.xm-re i'), { scale: 0, y: 10, duration: 0.6, ease: 'back.out(3)', stagger: 0.12, delay: 1.2, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    })
  })
  return (
    <section className="xm" ref={ref}>
      <div className="mx xm-grid">
        <div className="xm-copy">
          <p className="x-eyebrow">{mark.eyebrow}</p>
          <h2 className="x-h2 xm-h2">{mark.h2.replace(' Do you?', '')} <span>Do you?</span></h2>
          <p className="xm-body">{mark.body}</p>
          <Link href="/the-mark" className="nk-btn nk-btn-red" data-magnetic="0.3">{mark.cta} <Arrow /></Link>
        </div>
        <ul className="xm-posts">
          {mark.results.map((r, i) => (
            <li className={'xm-post p' + i} key={r.who}>
              <div className="xm-ph">
                <img className="xm-av xm-photo" src={r.photo} alt={r.who.split(',')[0]} loading="lazy" />
                <div><b>{r.who.split(',')[0]}</b><span>{r.who.split(',').slice(1).join(',').trim()}</span></div>
                <svg className="xm-in" viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2"/><path fill="#fff" d="M6.9 9.5h-3v9.6h3zM5.4 4.6a1.7 1.7 0 1 0 0 3.5 1.7 1.7 0 0 0 0-3.5zM19.6 13.6c0-2.6-.6-4.4-3.6-4.4-1.5 0-2.4.8-2.8 1.5V9.5h-2.9v9.6h3v-4.8c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6v4.7h3z"/></svg>
              </div>
              <strong className="xm-k" aria-label={r.big + ' ' + r.bigLabel}><span className="xm-num" aria-hidden="true" data-to={r.count} data-unit={r.unit}>{r.big}</span><em aria-hidden="true">{r.bigLabel}</em></strong>
              <p>{r.text}</p>
              <div className="xm-ft"><span className="xm-re"><i>👍</i><i>❤️</i><i>👏</i></span></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
