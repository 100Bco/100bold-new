import { Link } from 'react-router-dom'

export default function WhyUs() {
  return (
    <section className="why-us" style={{position: 'relative'}}>
      {/* Decorative illustrations */}
      <svg className="deco" style={{top: '10%', right: '5%', width: 80, height: 80, opacity: .1}} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="32" stroke="var(--red)" strokeWidth="2" strokeDasharray="6 8"/>
      </svg>
      <svg className="deco" style={{bottom: '15%', left: '3%', width: 60, height: 60, opacity: .08}} viewBox="0 0 60 60" fill="none">
        <path d="M30 5L33 24L52 21L37 32L44 50L30 38L16 50L23 32L8 21L27 24Z" stroke="var(--red)" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
      {/* Diamond shape */}
      <svg className="deco" style={{top: '55%', right: '8%', width: 50, height: 50, opacity: .07}} viewBox="0 0 50 50" fill="none">
        <path d="M25 2L48 25L25 48L2 25Z" stroke="var(--red)" strokeWidth="2" fill="none"/>
        <path d="M25 12L38 25L25 38L12 25Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
      </svg>
      <div className="mx">
        <h2 className="why-us-heading rv">We Are <span className="accent">Operators.</span> Not Marketers.</h2>
        <p className="why-us-sub rv rv-d2">Our founding team has owned and operated businesses in the exact industries we serve.</p>
        <p className="why-us-sub rv rv-d2" style={{marginTop: '24px'}}>We know your pain points because we've lived them.</p>
        <div className="why-grid rv rv-d2">
          <div className="why-card">
            <div className="why-num">01</div>
            <h3>Operator Credibility</h3>
            <p>We've built businesses in your industry. We speak your language — not marketing language.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <h3>The Austin Network</h3>
            <p>6,000+ business professionals. GAACC involvement. Events with 100+ leaders.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <h3>GBP + LinkedIn System</h3>
            <p>Proven playbooks that deliver consistently at scale. No back-and-forth.</p>
          </div>
        </div>
        <div className="why-cta rv rv-d3">
          <Link to="/about" className="btn btn-text">
            Learn More About Us
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
