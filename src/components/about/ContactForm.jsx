'use client'

import { useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { contact } from '@/data/about'
import Arrow from '@/components/home/Arrow'

/* Short contact form: name, company, revenue range, what you need. Opens an email to the team with the details filled in. */
export default function ContactForm() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => {
    gsap.from(ref.current.querySelector('.ctf-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } })
  }) })
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const needs = f.getAll('need').join(', ') || 'Not given'
    const body = [
      'Name: ' + f.get('name'),
      'Company: ' + f.get('company'),
      'Email: ' + f.get('email'),
      'Phone: ' + (f.get('phone') || '-'),
      'Yearly revenue: ' + f.get('revenue'),
      'What I need: ' + needs,
      '',
      f.get('message') || '',
    ].join('\n')
    window.location.href = 'mailto:' + contact.email + '?subject=' + encodeURIComponent('New inquiry from ' + f.get('company')) + '&body=' + encodeURIComponent(body)
    setSent(true)
  }
  return (
    <section className="ctf" ref={ref} id="form">
      <div className="mx">
        <div className="ctf-card">
          <div className="ctf-intro">
            <h2 className="sd-h2">Tell us about your business</h2>
            <p>Not ready to pick a time? Send a few details and we will reply within one business day.</p>
          </div>
          <form className="ctf-form" onSubmit={submit}>
            <label>Your name<input name="name" required autoComplete="name" placeholder="Jane Smith" /></label>
            <label>Company<input name="company" required autoComplete="organization" placeholder="Smith Law Firm" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" /></label>
            <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" placeholder="(512) 555-0100" /></label>
            <label className="full">Yearly revenue
              <select name="revenue" required defaultValue=""><option value="" disabled>Choose a range</option>{contact.revenue.map((r) => <option key={r}>{r}</option>)}</select>
            </label>
            <fieldset className="full" style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>What do you need?</legend>
              <div className="ctf-chips">{contact.needs.map((n) => <label key={n} style={{ fontWeight: 600 }}><input type="checkbox" name="need" value={n} /><span>{n}</span></label>)}</div>
            </fieldset>
            <label className="full">Anything else (optional)<textarea name="message" placeholder="Where you are now, and what you want to change" /></label>
            <div className="ctf-foot">
              <small>Sending opens your email app with these details, addressed to {contact.email}.</small>
              <button type="submit" className="nk-btn nk-btn-red">Send <Arrow /></button>
            </div>
            {sent && <p className="ctf-sent">Your email app should now be open with the message ready. Press send there, or write to {contact.email}.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
