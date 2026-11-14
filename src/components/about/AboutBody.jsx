'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { about } from '@/data/about'
import Icon from '@/components/service/Icon'
import Arrow from '@/components/home/Arrow'

const reveal = (root, sel, opts = {}) => gsap.from(root.querySelectorAll(sel), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, clearProps: 'transform,opacity', scrollTrigger: { trigger: root, start: 'top 72%', once: true }, ...opts })

/* The founder: photo beside the story and the path that led here */
export function Founder() {
  const ref = useRef(null)
  const f = about.founder
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      reveal(ref.current, '.abf-photo, .abf-copy > *')
      gsap.from(ref.current.querySelectorAll('.abf-path li'), { x: 40, opacity: 0, duration: .9, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current.querySelector('.abf-path'), start: 'top 80%', once: true } })
    })
  })
  return (
    <section className="abf" ref={ref}>
      <div className="mx abf-grid">
        <div className="abf-photo">
          <img src={f.photo} alt={f.name + ', ' + f.role} loading="lazy" width="1254" height="1254" />
          <div className="abf-name"><b>{f.name}</b><span>{f.role}</span></div>
        </div>
        <div className="abf-copy">
          <p className="sd-eyebrow">{f.h2}</p>
          <h2 className="sd-h2">Built and ran companies before marketing them</h2>
          <p className="abf-story">{f.story}</p>
          <ol className="abf-path">
            {f.path.map((p) => <li key={p.k}><b>{p.k}</b><span>{p.v}</span></li>)}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* Why that matters: what an agency counts versus what an owner counts */
export function Why() {
  const ref = useRef(null)
  const w = about.why
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      reveal(ref.current, '.abw-head > *')
      ref.current.querySelectorAll('.abw-row').forEach((r) => {
        gsap.from(r.querySelector('.a'), { opacity: 0, x: -30, duration: .8, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 82%', once: true } })
        gsap.from(r.querySelector('.b'), { opacity: 0, x: 30, duration: .8, delay: .2, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 82%', once: true } })
      })
    })
  })
  return (
    <section className="abw" ref={ref}>
      <div className="mx">
        <div className="abw-head"><h2 className="sd-h2">{w.h2}</h2><p>{w.lead}</p></div>
        <div className="abw-table">
          <div className="abw-cols"><span>Most agencies report</span><span>We report</span></div>
          {w.rows.map((r) => (
            <div className="abw-row" key={r.a}>
              <span className="a">{r.a}</span>
              <i aria-hidden="true">→</i>
              <span className="b">{r.b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const icons = ['key', 'check', 'bolt']
/* How we work: three principles */
export function Principles() {
  const ref = useRef(null)
  const p = about.principles
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => reveal(ref.current, '.abp-head > *, .abp-card')) })
  return (
    <section className="abp" ref={ref}>
      <div className="mx">
        <div className="abp-head"><h2 className="sd-h2">{p.h2}</h2></div>
        <div className="abp-grid">
          {p.items.map((it, i) => (
            <article className="abp-card" key={it.k}>
              <span className="abp-ic"><Icon name={icons[i]} /></span>
              <h3>{it.k}</h3>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Our network */
export function Network() {
  const ref = useRef(null)
  const n = about.network
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => reveal(ref.current, '.abn-head > *, .abn-grid')) })
  return (
    <section className="abn" ref={ref}>
      <div className="mx">
        <div className="abn-head"><h2 className="sd-h2">{n.h2}</h2><p>{n.lead}</p></div>
        <div className="abn-grid">
          {n.items.map((it, i) => (
            <article key={it.k}><span className="abn-n">{String(i + 1).padStart(2, '0')}</span><h3>{it.k}</h3><p>{it.d}</p></article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Our technology: one short paragraph on MinAI */
export function Tech() {
  const ref = useRef(null)
  const t = about.tech
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => reveal(ref.current, '.abt-in > *')) })
  return (
    <section className="abt" ref={ref}>
      <div className="mx">
        <div className="abt-in">
          <span className="abt-logo"><img src="/Logo%20MinAI-01.png" alt="MinAI" loading="lazy" /></span>
          <div><h2 className="sd-h2">{t.h2}</h2><p>{t.text}</p></div>
          <a href={t.href} target="_blank" rel="noopener" className="nk-btn nk-btn-white">{t.cta} <Arrow /></a>
        </div>
      </div>
    </section>
  )
}
