import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

const industryData = [
  { name: 'General Contractors', desc: 'Google domination for builders and GCs', lottie: '/repair-tools-red.json' },
  { name: 'HVAC / Electrical', desc: 'More calls, more jobs, less complexity', lottie: '/power-red.json' },
  { name: 'Real Estate', desc: 'Credibility and deal flow from the right relationships', lottie: '/building-red.json' },
  { name: 'PI Law Firms', desc: 'Signed cases before competitors answer the phone', lottie: '/law-red.json' },
  { name: 'Rehab & Chiro', desc: 'Dominate Google, get more PI referrals', lottie: '/wheelchair-insurance-red.json' },
  { name: 'Plumbing / Roofing', desc: 'Own every local search in your area', lottie: '/hourse-red.json' },
]

function LottieIcon({ src }) {
  const ref = useRef(null)
  useEffect(() => {
    let anim
    import('lottie-web/build/player/lottie_light').then(lottie => {
      if (!ref.current) return
      anim = lottie.default.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: src,
      })
    }).catch(() => {})
    return () => { if (anim) anim.destroy() }
  }, [src])
  return <div ref={ref} style={{width: 48, height: 48}} />
}

export default function IndustriesPreview() {
  return (
    <section className="industries-preview" style={{position: 'relative'}}>
      <svg className="deco" style={{top: '8%', left: '4%', width: 70, height: 70, opacity: .08}} viewBox="0 0 70 70" fill="none">
        <path d="M10 35C20 15,30 55,40 35C50 15,60 55,70 35" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <svg className="deco" style={{bottom: '10%', right: '6%', width: 50, height: 50, opacity: .1}} viewBox="0 0 50 50" fill="none">
        <rect x="5" y="5" width="40" height="40" rx="8" stroke="var(--red)" strokeWidth="2" strokeDasharray="5 7"/>
      </svg>
      <svg className="deco" style={{top: '50%', left: '7%', width: 45, height: 45, opacity: .08}} viewBox="0 0 45 45" fill="none">
        <path d="M22.5 5v35M5 22.5h35" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 12l21 21M33 12L12 33" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
      <div className="mx">
        <div className="ip-head rv">
          <h2>Built for <span className="accent">$5M+ Service</span> Businesses.</h2>
          <p>We only work in industries we've operated in. We know your pain points firsthand.</p>
        </div>
        <div className="ip-grid rv rv-d1">
          {industryData.map((ind) => (
            <div key={ind.name} className="ip-card">
              <div className="ip-icon"><LottieIcon src={ind.lottie} /></div>
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
