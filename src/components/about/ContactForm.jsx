'use client'

import { useEffect, useRef } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { contact } from '@/data/about'

/* Contact form: the same MinAI form used on Insights, sent straight to the team's CRM */
export default function ContactForm() {
  const ref = useRef(null)
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => {
    gsap.from(ref.current.querySelector('.ctf-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } })
  }) })
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.minai.biz/js/form_embed.js"]')) {
      const sc = document.createElement('script'); sc.src = 'https://link.minai.biz/js/form_embed.js'; document.body.appendChild(sc)
    }
  }, [])
  return (
    <section className="ctf" ref={ref} id="form">
      <div className="mx">
        <div className="ctf-card">
          <div className="ctf-intro">
            <h2 className="sd-h2">Tell us about your business</h2>
            <p>Not ready to pick a time? Send a few details and we will get back to you.</p>
            <p className="ctf-mail">Prefer email? <a href={'mailto:' + contact.email}>{contact.email}</a></p>
          </div>
          <div className="ctf-embed">
            <iframe src="https://link.minai.biz/widget/form/FWsWItRpNxvcxPDQuzSO" id="inline-FWsWItRpNxvcxPDQuzSO-contact" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="SIGN UP FORM - WEBSITE 100BOLD" data-layout-iframe-id="inline-FWsWItRpNxvcxPDQuzSO-contact" data-form-id="FWsWItRpNxvcxPDQuzSO" title="Contact 100Bold" />
          </div>
        </div>
      </div>
    </section>
  )
}
