'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { industries } from '@/data/industries'
import Lottie from './Lottie'
import MobileSlider from '@/components/MobileSlider'

/* Industries hub: five tall panels; the one you point at opens to show who, the proof, and the way in */
export default function IndPanels() {
  const ref = useRef(null)
  const [on, setOn] = useState(0)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.idp'), { y: window.innerWidth <= 960 ? 0 : 80, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.07, clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } })
    })
  })
  return (
    <section className="idps" ref={ref} aria-label="Industries">
      <MobileSlider trackClass="idps-row" labels={industries.map((d) => d.name)}>
        {industries.map((d, i) => (
          <article key={d.slug} className={'idp' + (on === i ? ' on' : '') + (d.img ? '' : ' noimg')} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onClick={() => setOn(i)}>
            {d.img && <img className="idp-bg" src={d.img} alt="" style={{ objectPosition: d.imgPos }} loading="lazy" />}
            <div className="idp-shade" />
            <div className="idp-top"><Lottie className="idp-ic" src={d.icon} play={on === i} /></div>
            <span className="idp-v" aria-hidden="true">{d.name}</span>
            <div className="idp-body">
              <h2 className="idp-name">{d.name}</h2>
              {d.mode && <p className="idp-mode">{d.mode}</p>}
              <p className="idp-who">{d.who.items.slice(0, 4).join(' · ')}</p>
              {d.proof && d.proof.big && <div className="idp-proof"><b>{d.proof.big}</b><span>{d.proof.label}{d.result ? ' · ' + d.result.client : ''}</span></div>}
              <Link href={'/industries/' + d.slug} className="nk-btn nk-btn-white idp-go">Explore {d.short} <i aria-hidden="true">→</i></Link>
            </div>
          </article>
        ))}
      </MobileSlider>
    </section>
  )
}
