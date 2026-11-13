'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { router } from '@/data/home'
import Arrow from './Arrow'

/* Short chip labels (menu names); the answer and card use the full wording from the copy */
const chips = ['PI law firms', 'PI medical', 'Real estate', 'Construction', 'Local services', 'Founder or CEO']
const extraImg = { 5: '/works/LINKEDINGLENN.png' }

/* "What do you run?" — the question, an answer that types itself, six choices, and a result card */
export default function RunAnswer() {
  const [active, setActive] = useState(0)
  const [typed, setTyped] = useState('')
  const auto = useRef(true)
  const root = useRef(null)
  const inView = useRef(false)

  // type the current answer letter by letter
  useEffect(() => {
    const full = router.items[active].title
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setTyped(full); return }
    setTyped('')
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 34)
    return () => clearInterval(id)
  }, [active])

  // cycle through the answers on its own until the visitor picks one
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { inView.current = e.isIntersecting }, { threshold: 0.4 })
    if (root.current) io.observe(root.current)
    const id = setInterval(() => {
      if (auto.current && inView.current) setActive((a) => (a + 1) % router.items.length)
    }, 4200)
    return () => { clearInterval(id); io.disconnect() }
  }, [])

  const pick = (i) => { auto.current = false; setActive(i) }
  const it = router.items[active]
  const img = it.img || extraImg[active]

  return (
    <div className="ra" ref={root}>
      <div className="ra-left">
        <span className="nk-index ra-index">01</span>
        <h2 className="ra-q">{router.h2}</h2>
        <p className="ra-a" aria-live="polite">
          <span className="ra-a-text">{typed}</span><i className="ra-caret" aria-hidden="true" />
        </p>
        <ul className="ra-chips" role="tablist" aria-label={router.h2}>
          {chips.map((c, i) => (
            <li key={c}>
              <button
                type="button" role="tab" aria-selected={i === active}
                className={'ra-chip' + (i === active ? ' on' : '')}
                onMouseEnter={() => pick(i)} onFocus={() => pick(i)} onClick={() => pick(i)}
              >
                <b>{String(i + 1).padStart(2, '0')}</b>{c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ra-right">
        <Link href={it.to} className="ra-card" key={active} aria-label={it.title}>
          <span className="ra-media">
            {img ? <img src={img} alt="" /> : <span className="ra-media-num">{String(active + 1).padStart(2, '0')}</span>}
          </span>
          <span className="ra-body">
            <span className="ra-count">{String(active + 1).padStart(2, '0')} / {String(chips.length).padStart(2, '0')}</span>
            <span className="ra-line">{it.line}</span>
            <span className="ra-cta">Learn more <Arrow /></span>
          </span>
        </Link>
      </div>
    </div>
  )
}
