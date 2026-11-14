'use client'

import { useState } from 'react'
import Link from 'next/link'

// Posts to Formspree only when NEXT_PUBLIC_FORMSPREE_ID is set; otherwise opens
// the visitor's email client with the answers pre-filled (same as the original site).
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''
const EMAIL = 'start@100bold.co'
const GOALS = ['Find clients', 'Partnerships', 'Investors', 'Speaking and media', 'Other']
const TIMING = ['Right away', 'In 1 to 3 months', 'Just exploring']

export default function ApplyForm() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!FORMSPREE_ID) {
      const body = Array.from(data.entries()).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('The Mark - Application')}&body=${encodeURIComponent(body)}`
      setStatus('done')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="ap-done">
        <div className="ap-done-icon" aria-hidden>✓</div>
        <h2 className="ap-done-title">Thank you. We received your application.</h2>
        <p className="ap-done-text">We review every application personally and will be in touch.</p>
        <Link href="/the-mark" className="founder-btn">Back to home <span aria-hidden>→</span></Link>
      </div>
    )
  }

  return (
    <form className="ap-form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="The Mark - New application" />
      <div className="ap-row">
        <label className="ap-field"><span>Full name</span><input name="Name" required autoComplete="name" /></label>
        <label className="ap-field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="ap-row">
        <label className="ap-field"><span>Company</span><input name="Company" required autoComplete="organization" /></label>
        <label className="ap-field"><span>Your title</span><input name="Title" required autoComplete="organization-title" /></label>
      </div>
      <label className="ap-field">
        <span>Your LinkedIn profile link</span>
        <input name="LinkedIn" type="url" inputMode="url" placeholder="https://www.linkedin.com/in/..." required />
      </label>
      <fieldset className="ap-choices">
        <legend>What do you want LinkedIn to bring you most?</legend>
        <div className="ap-pills">
          {GOALS.map((g, i) => (
            <label key={g} className="ap-pill"><input type="radio" name="Main goal" value={g} required={i === 0} /><span>{g}</span></label>
          ))}
        </div>
      </fieldset>
      <fieldset className="ap-choices">
        <legend>When would you like to start?</legend>
        <div className="ap-pills">
          {TIMING.map((t, i) => (
            <label key={t} className="ap-pill"><input type="radio" name="Timing" value={t} required={i === 0} /><span>{t}</span></label>
          ))}
        </div>
      </fieldset>
      <label className="ap-field">
        <span>Anything else we should know? <em className="ap-opt">(optional)</em></span>
        <textarea name="Notes" rows={4} />
      </label>
      <button type="submit" className="btn-primary ap-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Submit application'}
      </button>
      {status === 'error' && (
        <p className="ap-error">Something went wrong. Please email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      )}
      <p className="ap-note">Takes about 2 minutes.</p>
    </form>
  )
}
