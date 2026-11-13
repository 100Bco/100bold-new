'use client'

import Link from 'next/link'
import { router } from '@/data/home'
import Arrow from './Arrow'

/* Short rim labels (the menu names for each industry); the panel shows the full wording from the copy */
const rim = ['PI law firms', 'PI medical', 'Real estate', 'Construction', 'Local services', 'Founder or CEO']
const STEP = 360 / rim.length

/* "What do you run?" — a dial around the 100Bold dot. The parent drives which item is active. */
export default function RunDial({ active = 0, onPick = () => {}, onSkip }) {
  const it = router.items[active]
  return (
    <div className="rdl" style={{ '--rot': -active * STEP + 'deg' }}>
      <div className="rdl-head">
        <span className="nk-index">01</span>
        <h2 className="rdl-h2">{router.h2}</h2>
      </div>

      <div className="rdl-stage">
        <div className="rdl-wheel-wrap">
          <div className="rdl-wheel" aria-hidden="true">
            <div className="rdl-ticks" />
            <div className="rdl-ring" />
          </div>
          <ul className="rdl-rim">
            {rim.map((label, i) => (
              <li key={label} className={'rdl-pos' + (i === active ? ' on' : '')} style={{ '--a': i * STEP + 'deg' }}>
                <button type="button" onClick={() => onPick(i)} aria-label={router.items[i].title}>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="rdl-core"><img src="/100BOLD - OP3-09 (1).png" alt="" /></div>
          <i className="rdl-needle" aria-hidden="true" />
        </div>

        <div className="rdl-panel" aria-live="polite">
          <div className="rdl-panel-in" key={active}>
            <span className="rdl-count">{String(active + 1).padStart(2, '0')} / {String(rim.length).padStart(2, '0')}</span>
            <h3 className="rdl-title">{it.title}</h3>
            <p className="rdl-line">{it.line}</p>
            <Link href={it.to} className="rdl-card" aria-label={it.title}>
              {it.img ? <img src={it.img} alt="" /> : <span className="rdl-card-num">{String(active + 1).padStart(2, '0')}</span>}
              <span className="rdl-go"><Arrow /></span>
            </Link>
          </div>
          <div className="rdl-dots" aria-hidden="true">
            {rim.map((_, i) => <i key={i} className={i === active ? 'on' : ''} />)}
          </div>
          {onSkip && <button type="button" className="rdl-skip" onClick={onSkip}>Skip ↓</button>}
        </div>
      </div>
    </div>
  )
}
