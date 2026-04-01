import WaveDivider from '../components/WaveDivider'
import { Link } from 'react-router-dom'
import IndustriesHeroGraphic from '../components/IndustriesHeroGraphic'

const industries = [
  {
    name: 'Local Service Contractors',
    examples: 'HVAC, Plumbing, Electrical, Roofing, Solar, Painting, Pest Control',
    want: 'More calls, more jobs, less marketing complexity',
    message: 'We take over your Google presence. More reviews, more calls — hands-off.',
    services: ['GBP Domination', 'Review Engine', 'Social Content'],
  },
  {
    name: 'General Contractors & Construction',
    examples: 'Commercial GCs, Residential Builders, Construction Firms',
    want: 'Consistent project pipeline and industry credibility',
    message: 'Dominate local search so the right projects find you.',
    services: ['GBP Domination', 'LinkedIn CEO Authority', 'Network Access'],
  },
  {
    name: 'Real Estate Developers',
    examples: 'Residential & Commercial Developers, Property Managers',
    want: 'Credibility and deal flow from the right relationships',
    message: 'Digital authority that puts you in front of the people that matter.',
    services: ['LinkedIn CEO Authority', 'GBP Domination', 'Network Access'],
  },
  {
    name: 'Personal Injury Law Firms',
    examples: 'PI Attorneys, Trial Lawyers',
    want: 'Signed cases before competitors answer the phone',
    message: 'Review engine + lead funnel. Voice AI answers every call. Warm leads only.',
    services: ['GBP Domination', 'Paid Ads', 'MinAI Voice AI'],
  },
  {
    name: 'PI Chiropractors & Rehab Clinics',
    examples: 'Personal Injury Chiropractors, Rehabilitation Centers',
    want: 'More PI referrals, stronger GBP presence',
    message: 'Dominate Google and generate reviews that make attorneys refer you first.',
    services: ['GBP Domination', 'Review Engine', 'Social Content'],
  },
  {
    name: 'Import/Export & Trade',
    examples: 'Construction Materials, International Trade Businesses',
    want: 'Market presence and digital credibility in a niche space',
    message: 'We\'ve done import/export ourselves. We build the presence that sets you apart.',
    services: ['LinkedIn CEO Authority', 'GBP Domination'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <div className="about-hero-grid">
            <div>
              <h1 className="rv vis">We Only Work in Industries<br/>We've <span className="accent">Operated In.</span></h1>
              <p className="page-hero-body rv vis rv-d2">We know your pain points because we've lived them.</p>
            </div>
            <div className="about-hero-visual rv vis rv-d2">
              <IndustriesHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section className="ind-list" style={{position: 'relative'}}>
        {/* Spiral path */}
        <svg className="deco" style={{top: '5%', right: '4%', width: 70, height: 70, opacity: .07}} viewBox="0 0 70 70" fill="none">
          <path d="M35 35C35 30,40 28,43 31C46 34,44 40,39 41C33 42,28 37,29 31C30 23,38 19,44 22C52 26,54 38,48 45C41 53,27 53,22 44C16 33,20 18,32 14" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Triangle cluster */}
        <svg className="deco" style={{bottom: '8%', left: '3%', width: 55, height: 55, opacity: .08}} viewBox="0 0 55 55" fill="none">
          <path d="M18 45L28 25L38 45Z" stroke="var(--red)" strokeWidth="2" fill="none"/>
          <path d="M8 50L16 36L24 50Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
          <path d="M30 50L38 36L46 50Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
        </svg>
        <div className="mx">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`ind-item rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
              <div className="ind-item-left">
                <h2>{ind.name}</h2>
                <p className="ind-examples">{ind.examples}</p>
                <div className="ind-tags">
                  {ind.services.map((s) => <span key={s} className="ind-tag">{s}</span>)}
                </div>
              </div>
              <div className="ind-item-right">
                <div className="ind-want">
                  <span className="ind-want-label">What They Want</span>
                  {ind.want}
                </div>
                <div className="ind-msg">
                  <span className="ind-msg-label">What We Say</span>
                  "{ind.message}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="curve" />
      <section className="ind-cta">
        <div className="mx" style={{textAlign: 'center', padding: '60px 0'}}>
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 24}}>
            Don't see your industry? <span className="accent">Let's talk.</span>
          </h2>
          <button className="btn btn-red rv rv-d1">
            Contact Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
    </>
  )
}
