'use client'

import { useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Icon from './Icon'

/* A dark band with one promise: you own it */
export default function OwnBand({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdo-in > *'), { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelector('.sdo-key'), { rotate: -60, scale: 0.6, opacity: 0, duration: 1.4, ease: 'back.out(1.6)', scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    })
  })
  return (
    <section className="sdo" ref={ref}>
      <div className="mx sdo-in">
        <span className="sdo-key"><Icon name="key" /></span>
        <h2 className="sdo-h2">{d.h2}</h2>
        <p>{d.text}</p>
      </div>
    </section>
  )
}
