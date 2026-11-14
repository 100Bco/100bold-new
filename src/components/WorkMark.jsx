'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'

const people = [
  { name: 'Tung Cao', role: 'Co-Founder, 100B Global', big: '1M+', unit: 'impressions', text: 'From zero to 1M+ impressions in 12 months. Two speaker invitations and daily inbound from decision-makers worldwide.', photo: '/the-mark/images/tung-cao/Tung%20Cao%20Photo.png', to: '/the-mark/case-studies/tung-cao' },
  { name: 'Loc Dang', role: 'Founder, Dang Law Group', big: '3,596', unit: 'followers', text: 'Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.', photo: '/the-mark/images/loc-dang/loc-dang-headshot.webp', to: '/the-mark/case-studies/loc-dang' },
]

/* Work page: The Mark results for founders and CEOs */
export default function WorkMark() {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.wm-head > *, .wm-row'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="wm" ref={ref}>
      <div className="mx">
        <div className="wm-head">
          <p className="wm-eyebrow">The Mark</p>
          <h2 className="wm-h2">Founders and CEOs</h2>
          <Link href="/the-mark" className="wm-all">Explore The Mark →</Link>
        </div>
        <ul className="wm-list">
          {people.map((p) => (
            <li key={p.name}>
              <Link href={p.to} className="wm-row">
                <img className="wm-photo" src={p.photo} alt={p.name} loading="lazy" />
                <span className="wm-who"><b>{p.name}</b><small>{p.role}</small></span>
                <p className="wm-text">{p.text}</p>
                <span className="wm-stat"><b>{p.big}</b><small>{p.unit}</small></span>
                <i className="wm-go" aria-hidden="true">→</i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
