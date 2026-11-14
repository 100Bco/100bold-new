'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* ChatGPT ads, early access: a short, separate note */
export default function ChatgptBand({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdx-in > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="sdx" ref={ref}>
      <div className="mx">
        <div className="sdx-in">
          <span className="sdx-tag">{d.tag}</span>
          <h2 className="sd-h2">{d.h2}</h2>
          <p>{d.text}</p>
          <Link href="/contact" className="nk-btn nk-btn-red" data-magnetic="0.3">{d.cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
