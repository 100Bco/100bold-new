import { Link } from 'react-router-dom'

const industries = [
  {
    name: 'General Contractors',
    desc: 'GBP domination for builders and GCs',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/></svg>,
  },
  {
    name: 'HVAC / Electrical',
    desc: 'More calls, more jobs, less complexity',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    name: 'Real Estate',
    desc: 'Credibility and deal flow from the right relationships',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3"/><path d="M2 13h20"/></svg>,
  },
  {
    name: 'PI Law Firms',
    desc: 'Signed cases before competitors answer the phone',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    name: 'Rehab & Chiro',
    desc: 'Dominate Google, get more PI referrals',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    name: 'Plumbing / Roofing',
    desc: 'Own every local search in your area',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  },
]

export default function IndustriesPreview() {
  return (
    <section className="industries-preview" style={{position: 'relative'}}>
      <svg className="deco" style={{top: '8%', left: '4%', width: 70, height: 70, opacity: .08}} viewBox="0 0 70 70" fill="none">
        <path d="M10 35C20 15,30 55,40 35C50 15,60 55,70 35" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <svg className="deco" style={{bottom: '10%', right: '6%', width: 50, height: 50, opacity: .1}} viewBox="0 0 50 50" fill="none">
        <rect x="5" y="5" width="40" height="40" rx="8" stroke="var(--red)" strokeWidth="2" strokeDasharray="5 7"/>
      </svg>
      <div className="mx">
        <div className="ip-head rv">
          <h2>Built for <span className="accent">$5M+ Service</span> Businesses.</h2>
          <p>We only work in industries our founding team has operated in.<br/>We know your pain points because we've lived them.</p>
        </div>
        <div className="ip-grid rv rv-d1">
          {industries.map((ind) => (
            <div key={ind.name} className="ip-card">
              <div className="ip-icon">{ind.icon}</div>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
        <div className="ip-cta rv rv-d2">
          <Link to="/industries" className="btn btn-dark">
            View All Industries
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
