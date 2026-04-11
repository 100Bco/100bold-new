import { Link } from 'react-router-dom'
import IndustriesHeroGraphic from '../components/IndustriesHeroGraphic'
import WaveDivider from '../components/WaveDivider'
import { useRef, useEffect } from 'react'

function LottieIcon({ src }) {
  const ref = useRef(null)
  useEffect(() => {
    let anim
    import('lottie-web/build/player/lottie_light').then(lottie => {
      if (!ref.current) return
      anim = lottie.default.loadAnimation({
        container: ref.current, renderer: 'svg',
        loop: true, autoplay: true, path: src,
      })
    }).catch(() => {})
    return () => { if (anim) anim.destroy() }
  }, [src])
  return <div ref={ref} style={{width: 48, height: 48}} />
}

const industries = [
  { name: 'General Contractors & Builders', desc: 'Commercial GCs, Residential Builders, Remodeling Contractors', lottie: '/repair-tools-red.json', path: '/industries/construction' },
  { name: 'Plumbing, Roofing & Electrical', desc: 'Plumbers, Roofers, Electricians', lottie: '/hourse-red.json', path: '/industries/plumbing-roofing' },
  { name: 'Home Services & Solar', desc: 'HVAC, Solar, Pest Control, Painting, Landscaping', lottie: '/power-red.json', path: '/industries/local-services' },
  { name: 'Real Estate & Property Management', desc: 'Developers, Property Managers, Brokerages', lottie: '/building-red.json', path: '/industries/real-estate' },
  { name: 'Personal Injury Law Firms', desc: 'PI Attorneys, Trial Lawyers', lottie: '/law-red.json', path: '/industries/law-firms' },
  { name: 'Chiropractic & Rehabilitation', desc: 'Chiropractors, Physical Therapy, Rehab Centers', lottie: '/wheelchair-insurance-red.json', path: '/industries/rehab-chiro' },
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
      <section style={{background: 'var(--cream)', padding: 'var(--gap) 0'}}>
        <div className="mx">
          <div className="ind-landing-grid">
            {industries.map((ind, i) => (
              <Link to={ind.path} key={ind.name} className={`ind-landing-card rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
                <div className="ind-landing-icon">
                  <LottieIcon src={ind.lottie} />
                </div>
                <div>
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                </div>
                <svg className="ind-landing-arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding: '60px 0', textAlign: 'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 24}}>
            Ready to <span className="accent">dominate?</span>
          </h2>
          <Link to="/contact" className="btn btn-red rv rv-d1">
            Contact Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
