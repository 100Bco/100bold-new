'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { isLive } from '@/lib/cases'
import Arrow from '@/components/home/Arrow'

/* Two or more named results side by side: picture on top, number and story below */
export default function CaseRow({ items }) {
  const ref = useRef(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdr-head, .crw-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    })
  })
  return (
    <section className="sdr crw" ref={ref}>
      <div className="mx">
        <div className="sdr-head"><p className="sd-eyebrow">Results</p></div>
        <div className="crw-grid">
          {items.map((d) => {
            const live = isLive(d.to)
            return (
              <article className="crw-card" key={d.client}>
                <div className="crw-img"><img src={d.img} alt={d.alt} loading="lazy" width="1280" height="800" /></div>
                <div className="crw-body">
                  <span className="sdr-who"><b>{d.client}</b> · {d.industry}</span>
                  {d.big ? <b className="crw-big">{d.big}</b> : null}
                  {d.label && <span className="sdr-label">{d.label}</span>}
                  {d.text && <p>{d.text}</p>}
                  {live && <Link href={d.to} className="sdr-more">Read the case study <i><Arrow /></i></Link>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
