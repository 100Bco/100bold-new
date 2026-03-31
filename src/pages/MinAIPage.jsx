import WaveDivider from '../components/WaveDivider'

const features = [
  { icon: '💬', name: 'AI Chatbot', desc: 'Installed on website and socials. Trained on your business data. Answers FAQs, qualifies leads, books appointments 24/7.' },
  { icon: '📞', name: 'Voice AI Receptionist', desc: 'Answers inbound calls automatically. Handles lead qualification. Works at 4 AM on weekends.' },
  { icon: '⭐', name: '5-Star Review Funnel', desc: 'Automated SMS + email sequences that request reviews from past customers on autopilot.' },
  { icon: '📊', name: 'CRM + Unified Inbox', desc: 'All leads from web, phone, and social flow into one place. Nothing falls through the cracks.' },
  { icon: '🔄', name: 'Database Reactivation', desc: 'Re-engage dormant past clients. Most businesses are sitting on thousands of untouched contacts.' },
]

export default function MinAIPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <div className="section-label rv vis">AI Infrastructure</div>
          <h1 className="rv vis rv-d1">Meet <span className="accent">MinAI.</span><br/>The Engine Behind 100Bold.</h1>
          <p className="page-hero-body rv vis rv-d2">MinAI is our sister company and the technology infrastructure behind every client engagement. A founder-built platform with experience scaling to over 1,000,000 users.</p>
        </div>
      </section>

      {/* Features */}
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <section style={{background: 'var(--dark)', color: '#fff', padding: 'var(--gap) 0'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 48, color: '#fff'}}>
            What MinAI <span className="accent">Does.</span>
          </h2>
          <div className="minai-feat-grid">
            {features.map((f, i) => (
              <div key={f.name} className={`minai-feat-card rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
                <span className="minai-feat-icon">{f.icon}</span>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <section style={{background: 'var(--cream)', padding: 'var(--gap) 0'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 12}}>
            MinAI <span className="accent">Pricing.</span>
          </h2>
          <p className="rv rv-d1" style={{color: 'var(--text-2)', fontSize: 17, marginBottom: 48, maxWidth: 500}}>100Bold clients receive MinAI Essentials included as part of their retainer.</p>

          <div className="minai-pricing-grid">
            <div className="minai-price-card rv rv-d1">
              <div className="tier-label">Included with 100Bold</div>
              <h3>The Essentials</h3>
              <div className="tier-price" style={{color: 'var(--dark)'}}>$297<span>/month</span></div>
              <ul className="tier-list" style={{color: 'var(--text-2)'}}>
                <li>AI Chatbot</li>
                <li>Missed call text-back</li>
                <li>Review funnel</li>
                <li>Unified inbox</li>
              </ul>
            </div>
            <div className="minai-price-card tier-featured rv rv-d2">
              <div className="tier-label">Upgrade</div>
              <h3>The Growth Machine</h3>
              <div className="tier-price">$497<span>/month + setup</span></div>
              <ul className="tier-list">
                <li>Everything in Essentials</li>
                <li>Website builder + funnels</li>
                <li>Workflows + automations</li>
                <li>AI content tools</li>
                <li>Unlimited contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding: '60px 0', textAlign: 'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 24}}>
            Get MinAI working for <span className="accent">your business.</span>
          </h2>
          <button className="btn btn-red rv rv-d1">
            Apply Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
    </>
  )
}
