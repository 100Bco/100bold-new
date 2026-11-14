'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import Arrow from '@/components/home/Arrow'

/* One named result: the full 16:10 picture, with the number card overlapping its corner */
export default function CaseCard({ d }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelector('.sdr-img'), { clipPath: 'inset(8% 8% 8% 8% round 30px)', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      gsap.from(ref.current.querySelector('.sdr-info'), { y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', delay: 0.25, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="sdr" ref={ref}>
      <div className="mx">
        <div className="sdr-head"><p className="sd-eyebrow">Result</p><span className="sdr-who"><b>{d.client}</b> · {d.industry}</span></div>
        <div className="sdr-wrap">
          <Link href={d.to} className="sdr-img" aria-label={'Read the ' + d.client + ' case study'}><img src={d.img} alt={d.alt} loading="lazy" width="1280" height="800" /></Link>
          <div className="sdr-info">
            {d.big ? <b className="sdr-big">{d.big}</b> : null}
            <span className="sdr-label">{d.label}</span>
            <p>{d.text}</p>
            <Link href={d.to} className="sdr-more">Read the case study <i><Arrow /></i></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
