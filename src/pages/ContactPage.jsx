import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <h1 className="rv vis">Let's <span className="accent">Talk.</span></h1>
          <p className="page-hero-body rv vis rv-d2">Ready to dominate Google, build your authority, and grow? Reach out — we'll show you exactly how.</p>
        </div>
      </section>

      <section style={{background:'var(--cream)',padding:'var(--gap) 0'}}>
        <div className="mx">
          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div className="contact-info rv">
              <h2 style={{fontFamily:'var(--font-head)',fontSize:'clamp(28px,3vw,40px)',textTransform:'uppercase',marginBottom:24}}>Get in <span className="accent">Touch.</span></h2>

              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:start@100bold.co" className="contact-value">start@100bold.co</a>
                </div>
              </div>

              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Austin, Texas</div>
                </div>
              </div>

              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/company/100bold" target="_blank" rel="noopener noreferrer" className="contact-value">100Bold</a>
                </div>
              </div>

              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <div>
                  <div className="contact-label">Instagram</div>
                  <a href="https://www.instagram.com/100bold.co/" target="_blank" rel="noopener noreferrer" className="contact-value">@100bold.co</a>
                </div>
              </div>

              <div style={{marginTop:32}}>
                <a href="https://link.minai.biz/widget/bookings/100bold" target="_blank" rel="noopener noreferrer" className="btn btn-red">
                  Book a Call
                  <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-wrap rv rv-d1">
              <h3 style={{fontFamily:'var(--font-head)',fontSize:24,textTransform:'uppercase',marginBottom:20}}>Send a <span className="accent">Message.</span></h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="contact-field">
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                  <div className="contact-field">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(512) 000-0000" />
                  </div>
                </div>
                <div className="contact-field">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you're looking for..." rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-red" style={{width:'100%',justifyContent:'center'}}>
                  Send Message
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
