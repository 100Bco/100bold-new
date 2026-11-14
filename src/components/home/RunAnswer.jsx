'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { router } from '@/data/home'
import Arrow from './Arrow'

const extraImg = {}

/* "What do you run?" — five framed answers, the active one in red and a result card */
export default function RunAnswer() {
  const [active, setActive] = useState(0)
  const auto = useRef(true)
  const root = useRef(null)
  const inView = useRef(false)

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
        
        <h2 className="ra-q">{router.h2}</h2>
        <div className="ra-wheel" style={{ '--i': active }}>
          <ul className="ra-list" role="tablist" aria-label={router.h2}>
            {router.items.map((x, i) => (
              <li key={x.to} style={{ '--d': Math.abs(i - active) }}>
                <button
                  type="button" role="tab" aria-selected={i === active}
                  className={'ra-row' + (i === active ? ' on' : '')}
                  onMouseEnter={() => pick(i)} onClick={() => pick(i)} onFocus={() => pick(i)}
                >
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <span>{x.title}</span>
                  <i className="ra-row-arrow" aria-hidden="true"><Arrow /></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="ra-founder">{router.founder.q} <Link href={router.founder.to}>{router.founder.cta} <Arrow /></Link></p>
      </div>

      <div className="ra-right">
        <Link href={it.to} className="ra-card" key={active} aria-label={'Explore marketing for ' + it.title.replace(/^(A|An) /, '').replace(/^I'm /, '')}>
          <span className="ra-media">
            {img ? <img src={img} alt="" /> : <span className="ra-media-num">{String(active + 1).padStart(2, '0')}</span>}
          </span>
          <span className="ra-body">
            <span className="ra-count">{String(active + 1).padStart(2, '0')} / {String(router.items.length).padStart(2, '0')}</span>
            <span className="ra-line">{it.line}</span>
            <span className="ra-cta">Learn more <Arrow /></span>
          </span>
        </Link>
      </div>
    </div>
  )
}
