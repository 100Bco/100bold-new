'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Icon from './Icon'

const icons = ['phone', 'form', 'check', 'ai']

/* How we measure it: a dark report strip with the four numbers that matter */
export default function Measure({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdm-head > *, .sdm-item'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  return (
    <section className="sdm" ref={ref}>
      <div className="mx">
        <div className="sdm-head"><h2 className="sd-h2">{d.h2}</h2><p>{d.lead}</p></div>
        <ol className="sdm-row">
          {d.items.map((m, i) => (
            <li className={'sdm-item' + (i === 2 ? ' key' : '')} key={m.k}>
              <span className="sdm-ic"><Icon name={icons[i]} /></span>
              <b>{m.k}</b>
              <small>{m.d}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
