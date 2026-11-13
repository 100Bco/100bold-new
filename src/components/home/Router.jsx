'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, ScrollTrigger, MQ, revealIn, Lines } from '@/lib/motion'
import { router } from '@/data/home'
import Arrow from './Arrow'

export default function Router() {
  const ref = useRef(null)
  const preview = useRef(null)
  const [active, setActive] = useState(null)

  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      revealIn(ref.current)
      gsap.from('.nk-row', {
        y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07,
        scrollTrigger: { trigger: '.nk-rows', start: 'top 80%', once: true },
      })

      // the red thread arriving from the hero keeps running down the list, drawing each row as it passes
      const wrap = ref.current.querySelector('.nk-router-body')
      const line = ref.current.querySelector('.nk-thread-line')
      const bead = ref.current.querySelector('.nk-thread-bead')
      const rows = gsap.utils.toArray('.nk-row')
      const marks = rows.map((r) => r.offsetTop + r.offsetHeight)
      const st = ScrollTrigger.create({
        trigger: wrap, start: 'top bottom', end: 'bottom 55%', scrub: 0.4,
        onRefresh: () => { rows.forEach((r, i) => { marks[i] = r.offsetTop + r.offsetHeight }) },
        onUpdate: (self) => {
          const h = wrap.offsetHeight * self.progress
          line.style.transform = 'scaleY(' + self.progress + ')'
          bead.style.transform = 'translateY(' + h + 'px)'
          ref.current.classList.toggle('thread-head', h > 30)
          rows.forEach((r, i) => r.classList.toggle('drawn', h >= marks[i] - 2))
        },
      })
      return () => st.kill()
    })
    mm.add('(pointer: fine) and (min-width: 961px)', () => {
      const xTo = gsap.quickTo(preview.current, 'x', { duration: 0.6, ease: 'power3' })
      const yTo = gsap.quickTo(preview.current, 'y', { duration: 0.6, ease: 'power3' })
      const move = (e) => {
        const r = ref.current.getBoundingClientRect()
        xTo(e.clientX - r.left); yTo(e.clientY - r.top)
      }
      ref.current.addEventListener('mousemove', move)
      return () => ref.current && ref.current.removeEventListener('mousemove', move)
    })
  })

  const item = active !== null ? router.items[active] : null

  return (
    <section className="nk-router" ref={ref}>
      <div className="mx nk-router-body">
        <span className="nk-thread" aria-hidden="true"><i className="nk-thread-line" /><i className="nk-thread-bead" /></span>
        <div className="nk-sec-head">
          <span className="nk-index" data-reveal>01</span>
          <Lines lines={[router.h2]} className="nk-h2" />
        </div>
        <ul className="nk-rows" onMouseLeave={() => setActive(null)}>
          {router.items.map((it, i) => (
            <li key={it.to} className="nk-row" onMouseEnter={() => setActive(i)}>
              <Link href={it.to} className="nk-row-link">
                <span className="nk-row-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nk-row-title">{it.title}</span>
                <span className="nk-row-line">{it.line}</span>
                <span className="nk-row-arrow"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`nk-router-preview${item ? ' show' : ''}`} ref={preview} aria-hidden="true">
        {router.items.map((it, i) => (
          <div key={i} className={`nk-rp-card${active === i ? ' on' : ''}`}>
            {it.img ? <img src={it.img} alt="" loading="lazy" /> : <span>{String(i + 1).padStart(2, '0')}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
