import { Link } from 'react-router-dom'

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="mx">
        <div className="section-label rv">Why 100Bold</div>
        <h2 className="why-us-heading rv rv-d1">We Are <span className="accent">Operators.</span> Not Marketers.</h2>
        <p className="why-us-sub rv rv-d2">Our founding team has owned and operated businesses in the exact industries we serve. We know your pain points because we've lived them.</p>
        <div className="why-grid rv rv-d2">
          <div className="why-card">
            <div className="why-num">01</div>
            <h3>Operator Credibility</h3>
            <p>We've built businesses in real estate, construction, and local services. We speak your language — not marketing language.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <h3>The Austin Network</h3>
            <p>6,000+ business professionals. GAACC involvement. Events with 100+ leaders. Your growth is powered by a real community.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <h3>GBP + LinkedIn System</h3>
            <p>Productized, systematized playbooks that deliver consistently at scale. No back-and-forth. Just results.</p>
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
