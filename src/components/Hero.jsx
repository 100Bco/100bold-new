import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const cities = ['Austin', 'Dallas', 'San Antonio', 'Houston']

export default function Hero() {
  return (
    <section className="hero">
      <svg className="deco" style={{ top: '15%', right: '4%', width: 80, height: 80, opacity: .12 }} viewBox="0 0 80 80" fill="none">
        <path d="M10 40C20 20,30 60,40 40C50 20,60 60,70 40" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
      <svg className="deco" style={{ bottom: '12%', left: '2%', width: 100, height: 100, opacity: .08 }} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="var(--red)" strokeWidth="2" strokeDasharray="6 8" fill="none"/>
      </svg>
      <div className="mx">
        <div className="hero-grid">
          <div>
            <h1 className="rv vis rv-d1">START <span className="accent">BRAVE.</span><br/>STAY BOLD.
              <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 16, opacity: .2 }} viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                <path d="M4 12C60 4,120 14,180 8C220 4,260 10,296 6" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </h1>
            <p className="hero-body rv vis rv-d2">We dominate Google, build LinkedIn authority, and install AI infrastructure for $5M+ service businesses.</p>
            <div className="hero-cities rv vis rv-d2">
              {cities.map((city) => (
                <span key={city} className="hero-city-badge">
                  <PinIcon /> {city}
                </span>
              ))}
            </div>
            <div className="hero-ctas rv vis rv-d3">
              <Link to="/contact" className="btn btn-red">Contact Now <ArrowIcon /></Link>
              <a href="#services" className="btn btn-outline">View Playbook</a>
            </div>
          </div>
          <div className="rv vis rv-d2" style={{ position: 'relative' }}>
            <div className="hero-video">
              <wistia-player media-id="jzqrwe3t4z" style={{width:'100%',height:'100%',display:'block'}}></wistia-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
