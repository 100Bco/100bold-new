import WaveDivider from '../components/WaveDivider'
import { Link } from 'react-router-dom'

const industries = [
  {
    name: 'Local Service Contractors',
    examples: 'HVAC, Plumbing, Electrical, Roofing, Solar, Painting, Pest Control',
    want: 'More calls, more jobs, less marketing complexity',
    message: 'We take over your Google presence completely. More reviews, more visibility, more calls — without you touching it.',
    services: ['GBP Domination', 'Review Engine', 'Social Content'],
  },
  {
    name: 'General Contractors & Construction',
    examples: 'Commercial GCs, Residential Builders, Construction Firms',
    want: 'Consistent project pipeline and industry credibility',
    message: 'We dominate local search and build your digital authority so the right projects find you.',
    services: ['GBP Domination', 'LinkedIn CEO Authority', 'Network Access'],
  },
  {
    name: 'Real Estate Developers',
    examples: 'Residential & Commercial Developers, Property Managers',
    want: 'Credibility and deal flow from the right relationships',
    message: 'We build your digital authority and put you in front of the people that matter in Austin.',
    services: ['LinkedIn CEO Authority', 'GBP Domination', 'Network Access'],
  },
  {
    name: 'Personal Injury Law Firms',
    examples: 'PI Attorneys, Trial Lawyers',
    want: 'Signed cases before competitors answer the phone',
    message: 'We build the review engine and lead funnel. Voice AI answers every call. You get warm leads, not cold ones.',
    services: ['GBP Domination', 'Paid Ads', 'MinAI Voice AI'],
  },
  {
    name: 'PI Chiropractors & Rehab Clinics',
    examples: 'Personal Injury Chiropractors, Rehabilitation Centers',
    want: 'More PI referrals, stronger GBP presence',
    message: 'We dominate your Google profile and generate the reviews that make attorneys refer to you first.',
    services: ['GBP Domination', 'Review Engine', 'Social Content'],
  },
  {
    name: 'Import/Export & Trade',
    examples: 'Construction Materials, International Trade Businesses',
    want: 'Market presence and digital credibility in a niche space',
    message: 'We know import/export because we\'ve done it. We build the digital presence that sets you apart.',
    services: ['LinkedIn CEO Authority', 'GBP Domination'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <h1 className="rv vis">We Only Work in Industries<br/>We've <span className="accent">Operated In.</span></h1>
          <p className="page-hero-body rv vis rv-d2">We know your pain points because we've lived them. Our founding team has owned and operated businesses in real estate, construction, local services, and technology.</p>
        </div>
      </section>

      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section className="ind-list">
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
            Apply Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
    </>
  )
}
