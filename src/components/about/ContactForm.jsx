'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { contact } from '@/data/about'
import Arrow from '@/components/home/Arrow'

const VIDEO = 'AI video (Portal)'

/* Short contact form: name, company, revenue range, what you need. It opens an email to the team with the details filled in. */
export default function ContactForm() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  const [needs, setNeeds] = useState([])
  useGsap(ref, (mm) => { mm.add(MQ.motion, () => {
    gsap.from(ref.current.querySelector('.ctf-card'), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } })
  }) })
  // arriving from Portal ("Start a project") preselects AI video
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    if (q.get('need') === 'video' || q.get('from') === 'video') setNeeds([VIDEO])
    if (q.get('from') === 'mark') setNeeds(['The Mark (LinkedIn for CEOs)'])
  }, [])
  const toggle = (n) => setNeeds((x) => (x.includes(n) ? x.filter((y) => y !== n) : [...x, n]))
  const video = needs.includes(VIDEO)
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const lines = [
      'Name: ' + f.get('name'),
      'Company: ' + f.get('company'),
      'Email: ' + f.get('email'),
      'Phone: ' + (f.get('phone') || '-'),
      'Yearly revenue: ' + f.get('revenue'),
      'What I need: ' + (needs.join(', ') || 'Not given'),
    ]
    if (video) lines.push('Video type: ' + (f.get('videoType') || '-'), 'Where it will run: ' + (f.getAll('channel').join(', ') || '-'), 'Needed by: ' + (f.get('deadline') || '-'))
    lines.push('', f.get('message') || '')
    window.location.href = 'mailto:' + contact.email + '?subject=' + encodeURIComponent('New inquiry from ' + f.get('company')) + '&body=' + encodeURIComponent(lines.join('\n'))
    setSent(true)
  }
  return (
    <section className="ctf" ref={ref} id="form">
      <div className="mx">
        <div className="ctf-card">
          <div className="ctf-intro">
            <h2 className="sd-h2">Tell us about your business</h2>
            <p>Not ready to pick a time? Send a few details and we will get back to you.</p>
          </div>
          <form className="ctf-form" onSubmit={submit}>
            <p className="ctf-note">This form opens your email app with your answers filled in, addressed to {contact.email}. You send it from there.</p>
            <label>Your name<input name="name" required autoComplete="name" placeholder="Jane Smith" /></label>
            <label>Company<input name="company" required autoComplete="organization" placeholder="Smith Law Firm" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" /></label>
            <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" placeholder="(512) 555-0100" /></label>
            <label className="full">Yearly revenue
              <select name="revenue" required defaultValue=""><option value="" disabled>Choose a range</option>{contact.revenue.map((r) => <option key={r}>{r}</option>)}</select>
            </label>
            <fieldset className="full" style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>What do you need?</legend>
              <div className="ctf-chips">{contact.needs.map((n) => <label key={n} style={{ fontWeight: 600 }}><input type="checkbox" checked={needs.includes(n)} onChange={() => toggle(n)} /><span>{n}</span></label>)}</div>
            </fieldset>
            {video && (
              <div className="ctf-video">
                <label>Type of video
                  <select name="videoType" defaultValue=""><option value="" disabled>Choose one</option>{contact.videoTypes.map((t) => <option key={t}>{t}</option>)}</select>
                </label>
                <label>Needed by<input name="deadline" type="text" placeholder="e.g. end of next month" /></label>
                <fieldset className="full" style={{ border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Where will it run?</legend>
                  <div className="ctf-chips">{contact.channels.map((c) => <label key={c} style={{ fontWeight: 600 }}><input type="checkbox" name="channel" value={c} /><span>{c}</span></label>)}</div>
                </fieldset>
              </div>
            )}
            <label className="full">Anything else (optional)<textarea name="message" placeholder="Where you are now, and what you want to change" /></label>
            <div className="ctf-foot">
              <small>By sending, you agree to our <Link href="/privacy">Privacy policy</Link>.</small>
              <button type="submit" className="nk-btn nk-btn-red">Continue in your email app <Arrow /></button>
            </div>
            {sent && <p className="ctf-sent">Your email app should now be open with the message ready. Press send there, or write to {contact.email}.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
