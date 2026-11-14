'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { contact } from '@/data/about'

/* Contact: the booking calendar beside what to expect and how else to reach us */
export default function ContactBody() {
  const ref = useRef(null)
  const d = contact
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => {
    gsap.from(ref.current.querySelectorAll('.ctb-cal, .ctb-side > *'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } })
  }) })
  return (
    <section className="ctb" ref={ref}>
      <div className="mx ctb-grid">
        <div className="ctb-cal">
          <iframe src={d.booking} title="Book a call with 100Bold" scrolling="no" />
        </div>
        <aside className="ctb-side">
          <div className="ctb-steps">
            <h2>What to expect</h2>
            <ol>{d.steps.map((s, i) => <li key={s.k}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{s.k}</b><p>{s.d}</p></div></li>)}</ol>
          </div>
          <div className="ctb-reach">
            <h2>Prefer to write?</h2>
            <a href={'mailto:' + d.email} className="ctb-mail">{d.email}</a>
            <p><a href={'tel:' + d.phone.replace(/-/g, '')}>{d.phone}</a><br />{d.address}</p>
            <ul>{d.socials.map((s) => <li key={s.k}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.k}</a></li>)}</ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
