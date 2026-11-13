'use client'

import { useEffect } from 'react'
import WaveDivider from '@/components/WaveDivider'

export default function ContactContent() {
  useEffect(() => {
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

      {/* Schedule a Call + Sign Up Form */}
      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section style={{background:'var(--cream)',padding:'var(--gap) 0'}}>
        <div className="mx">
          <div className="contact-grid">
            {/* Left: Schedule a Call */}
            <div className="contact-form-wrap rv">
              <h2 style={{fontFamily:'var(--font-head)',fontSize:'clamp(28px,3vw,40px)',textTransform:'uppercase',marginBottom:16}}>Schedule a <span className="accent">Call.</span></h2>
              <iframe
                src="https://link.minai.biz/widget/booking/oPdza9BB7isKUhMkkyw2"
                style={{width:'100%',minHeight:550,border:'none',overflow:'hidden'}}
                scrolling="no"
                title="Book a Call with 100Bold"
              ></iframe>
            </div>

           {/* Right: Join Our List */}
            <div className="contact-form-wrap rv rv-d1">
              <h2 style={{fontFamily:'var(--font-head)',fontSize:'clamp(28px,3vw,40px)',textTransform:'uppercase',marginBottom:16}}>Join Our <span className="accent">List.</span></h2>

              <div style={{ overflow: 'hidden' }}>
                <iframe
                  src="https://link.minai.biz/widget/form/FWsWItRpNxvcxPDQuzSO"
                  style={{width:'100%',minHeight:550,border:'none',borderRadius:3, marginTop:'-45px'}}
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

      {/* Get in Touch */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding:'60px 0'}}>
        <div className="mx" style={{textAlign:'center'}}>
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(28px,3vw,40px)',textTransform:'uppercase',marginBottom:8}}>Get in <span className="accent">Touch.</span></h2>
          <div className="rv rv-d1" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:24,flexWrap:'wrap'}}>
            <a href="mailto:start@100bold.co" style={{fontSize:17,color:'var(--dark)',fontWeight:600}}>start@100bold.co</a>
            <span style={{color:'var(--text-3)'}}>·</span>
            <span style={{fontSize:17,color:'var(--text-2)'}}>Austin, Texas</span>
          </div>
          <div className="rv rv-d2" style={{display:'flex',justifyContent:'center',gap:20}}>
            <a href="https://www.facebook.com/100bold.co" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{color:'var(--text-3)',transition:'color .2s'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/100bold" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{color:'var(--text-3)',transition:'color .2s'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/100bold.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{color:'var(--text-3)',transition:'color .2s'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="mailto:start@100bold.co" aria-label="Email" style={{color:'var(--text-3)',transition:'color .2s'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
