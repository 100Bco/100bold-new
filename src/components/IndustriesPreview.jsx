import { Link } from 'react-router-dom'

const industries = [
  { icon: '🏗️', name: 'General Contractors', desc: 'GBP domination for builders and GCs' },
  { icon: '⚡', name: 'HVAC / Electrical', desc: 'More calls, more jobs, less complexity' },
  { icon: '🏠', name: 'Real Estate', desc: 'Credibility and deal flow from the right relationships' },
  { icon: '⚖️', name: 'PI Law Firms', desc: 'Signed cases before competitors answer the phone' },
  { icon: '🏥', name: 'Rehab & Chiropractic', desc: 'Dominate Google, get more PI referrals' },
  { icon: '🔧', name: 'Plumbing / Roofing', desc: 'Own every local search in your service area' },
]

export default function IndustriesPreview() {
  return (
    <section className="industries-preview">
      <div className="mx">
        <div className="ip-head rv">
          <h2>Built for <span className="accent">$5M+ Service</span> Businesses.</h2>
          <p>We only work in industries our founding team has operated in. We know your pain points because we've lived them.</p>
        </div>
        <div className="ip-grid rv rv-d2">
          {industries.map((ind) => (
            <div key={ind.name} className="ip-card">
              <span className="ip-icon">{ind.icon}</span>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
        <div className="ip-cta rv rv-d3">
          <Link to="/industries" className="btn btn-dark">
            View All Industries
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
