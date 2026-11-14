'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* One named result: the picture, the number, the link to the full story */
export default function CaseCard({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelector('.sdr-img img'), { scale: 1.15, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelectorAll('.sdr-copy > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    })
  })
  return (
    <section className="sdr" ref={ref}>
      <div className="mx">
        <p className="sd-eyebrow">Result</p>
        <Link href={d.to} className="sdr-card">
          <div className="sdr-img"><img src={d.img} alt={d.alt} loading="lazy" /></div>
          <div className="sdr-copy">
            <span className="sdr-who"><b>{d.client}</b> · {d.industry}</span>
            {d.big ? <b className="sdr-big">{d.big}</b> : null}
            <span className="sdr-label">{d.label}</span>
            <p>{d.text}</p>
            <span className="sdr-more">Read the case study <i><Arrow /></i></span>
          </div>
        </Link>
      </div>
    </section>
  )
}
