'use client'

import { useEffect, useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { insights } from '@/data/about'

const reveal = (root, sel) => gsap.from(root.querySelectorAll(sel), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, clearProps: 'transform,opacity', scrollTrigger: { trigger: root, start: 'top 75%', once: true } })

/* Insights hub: the featured guide, articles on the way, topics, newsletter */
export default function InsightsBody() {
  const ref = useRef(null)
  const d = insights
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => {
    ref.current.querySelectorAll('section').forEach((s) => reveal(s, '.ins-reveal'))
  }) })
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.minai.biz/js/form_embed.js"]')) {
      const s = document.createElement('script'); s.src = 'https://link.minai.biz/js/form_embed.js'; s.type = 'text/javascript'; document.body.appendChild(s)
    }
  }, [])
  return (
    <div ref={ref}>
      <section className="insf">
        <div className="mx">
          <article className="insf-card ins-reveal">
            <div className="insf-copy">
              <span className="insf-tag">{d.featured.tag}</span>
              <h2>{d.featured.h}</h2>
              <p>{d.featured.d}</p>
              <span className="insf-soon">Coming soon</span>
            </div>
            <div className="insf-art" aria-hidden="true">
              <span>GEO</span><span>AEO</span><span>AI SEO</span>
            </div>
          </article>
        </div>
      </section>
      <section className="insl">
        <div className="mx">
          <div className="insl-head ins-reveal"><h2 className="sd-h2">Latest articles</h2><p>The first guides are being written now.</p></div>
          <ul className="insl-list ins-reveal">
            {d.upcoming.map((a, i) => (
              <li key={a.t}><span className="insl-n">{String(i + 1).padStart(2, '0')}</span><h3>{a.t}</h3><span className="insl-topic">{a.topic}</span><span className="insl-soon">Soon</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="inst">
        <div className="mx">
          <div className="inst-head ins-reveal"><h2 className="sd-h2">Topics</h2></div>
          <div className="inst-grid ins-reveal">
            {d.topics.map((t) => <article key={t.k}><h3>{t.k}</h3><p>{t.d}</p></article>)}
          </div>
        </div>
      </section>
      <section className="insn">
        <div className="mx insn-grid">
          <div className="ins-reveal"><h2 className="sd-h2">{d.newsletter.h}</h2><p>{d.newsletter.d}</p></div>
          <div className="insn-form ins-reveal">
            <iframe src="https://link.minai.biz/widget/form/FWsWItRpNxvcxPDQuzSO" id="inline-FWsWItRpNxvcxPDQuzSO" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="SIGN UP FORM - WEBSITE 100BOLD" data-layout-iframe-id="inline-FWsWItRpNxvcxPDQuzSO" data-form-id="FWsWItRpNxvcxPDQuzSO" title="Newsletter sign-up" />
          </div>
        </div>
      </section>
    </div>
  )
}
