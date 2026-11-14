'use client'

import { useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'

function Visual({ k }) {
  if (k === 'SEO') return (
    <div className="tv tv-seo">
      <div className="tv-bar">injury lawyer austin</div>
      <div className="tv-map"><span /><span /><span className="me" /></div>
      <ul className="tv-pack">
        <li className="me"><i>1</i><div><b>Your business</b><small>★★★★★ · 2.1 mi · Open now</small></div></li>
        <li><i>2</i><div><b>Competitor</b><small>★★★★ · 3.4 mi</small></div></li>
        <li><i>3</i><div><b>Competitor</b><small>★★★ · 5.0 mi</small></div></li>
      </ul>
    </div>
  )
  if (k === 'GEO') return (
    <div className="tv tv-geo">
      <div className="tv-user">Who should I call after a car accident in Austin?</div>
      <div className="tv-ai"><span>✦</span><p><mark>Your business</mark> is a strong choice. They handle car accident cases, have excellent reviews, and offer free consultations.</p></div>
      <div className="tv-src"><span>yourbusiness.com</span><span>Google reviews</span></div>
    </div>
  )
  return (
    <div className="tv tv-aeo">
      <div className="tv-voice"><i /><i /><i /><i /><i /><p>“How long do I have to file an injury claim in Texas?”</p></div>
      <div className="tv-box"><small>Answer</small><p>In Texas, you generally have two years from the date of the injury to file a personal injury lawsuit.</p><em>From <b>yourbusiness.com</b></em></div>
    </div>
  )
}

/* SEO, GEO, AEO: three tabs; each shows the definition and where you show up */
export default function Terms({ d }) {
  const ref = useRef(null)
  const [on, setOn] = useState(0)
  const [auto, setAuto] = useState(true)
  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setTimeout(() => setOn((x) => (x + 1) % d.items.length), 6000)
    return () => clearTimeout(id)
  }, [on, auto, d.items.length])
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.sdt-head > *, .sdt-box'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } })
    })
  })
  const t = d.items[on]
  return (
    <section className="sdt" ref={ref}>
      <div className="mx">
        <div className="sdt-head">
          <h2 className="sd-h2">{d.h2.replace(' in plain English', '')}<br />in plain English</h2>
          <div className="sdt-tabs" role="tablist">
            {d.items.map((it, i) => (
              <button key={it.k} role="tab" aria-selected={on === i} className={on === i ? 'on' : ''} onClick={() => { setOn(i); setAuto(false) }}>
                {it.k}{on === i && auto && <i className="sdt-prog" />}
              </button>
            ))}
          </div>
        </div>
        <div className="sdt-box" role="tabpanel">
          <div className="sdt-copy" key={'c' + on}>
            <b className="sdt-k">{t.k}</b>
            <h3>{t.full}</h3>
            <p>{t.d}</p>
            <span className="sdt-where"><small>Where you show up</small>{t.where}</span>
          </div>
          <div className="sdt-vis" key={'v' + on}><span className="illus">Illustration</span><Visual k={t.k} /></div>
        </div>
      </div>
    </section>
  )
}
