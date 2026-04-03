import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    // Load MinAI form embed script
    if (!document.querySelector('script[src="https://link.minai.biz/js/form_embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://link.minai.biz/js/form_embed.js'
      script.type = 'text/javascript'
      document.body.appendChild(script)
    }
  }, [])

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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                <div>
                  <div className="contact-label">Facebook</div>
                  <a href="https://www.facebook.com/100bold.co" target="_blank" rel="noopener noreferrer" className="contact-value">100Bold</a>
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
            </div>

            {/* Right: Booking Widget + Sign Up Form */}
            <div className="rv rv-d1">
              {/* Booking Widget */}
              <div className="contact-form-wrap" style={{marginBottom:24}}>
                <h3 style={{fontFamily:'var(--font-head)',fontSize:24,textTransform:'uppercase',marginBottom:16}}>Book a <span className="accent">Call.</span></h3>
                <iframe
                  src="https://link.minai.biz/widget/booking/oPdza9BB7isKUhMkkyw2"
                  style={{width:'100%',minHeight:500,border:'none',overflow:'hidden'}}
                  scrolling="no"
                  title="Book a Call with 100Bold"
                ></iframe>
              </div>

              {/* Sign Up Form */}
              <div className="contact-form-wrap">
                <h3 style={{fontFamily:'var(--font-head)',fontSize:24,textTransform:'uppercase',marginBottom:16}}>Sign <span className="accent">Up.</span></h3>
                <iframe
                  src="https://link.minai.biz/widget/form/FWsWItRpNxvcxPDQuzSO"
                  style={{width:'100%',minHeight:400,border:'none',borderRadius:3}}
                  id="inline-FWsWItRpNxvcxPDQuzSO"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="SIGN UP FORM - WEBSITE 100BOLD"
                  data-layout-iframe-id="inline-FWsWItRpNxvcxPDQuzSO"
                  data-form-id="FWsWItRpNxvcxPDQuzSO"
                  title="SIGN UP FORM - WEBSITE 100BOLD"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
