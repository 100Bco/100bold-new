export default function Hero() {
  return (
    <section className="hero">
      <svg className="deco" style={{ top: '15%', right: '4%', width: 80, height: 80, opacity: 0.12 }} viewBox="0 0 80 80" fill="none">
        <path d="M10 40C20 20,30 60,40 40C50 20,60 60,70 40" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
      <svg className="deco" style={{ bottom: '12%', left: '2%', width: 100, height: 100, opacity: 0.08 }} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="6 8" fill="none"/>
      </svg>

      <div className="mx">
        <div className="hero-grid">
          <div>
            <div className="hero-badge rv vis">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-red)', animation: 'pulse 2s ease-in-out infinite' }}></span>
              Austin, TX &bull; Accepting Clients
            </div>
            <h1 className="rv vis rv-d1">
              START <span className="accent">BRAVE.</span><br/>STAY BOLD.
              <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 16, opacity: 0.2 }} viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                <path d="M4 12C60 4,120 14,180 8C220 4,260 10,296 6" stroke="var(--color-red)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </h1>
            <p className="hero-body rv vis rv-d2">
              We dominate Google, build LinkedIn authority, and install AI infrastructure for $5M+ service businesses.
            </p>
            <div className="hero-ctas rv vis rv-d3">
              <button className="btn btn-dark">
                Apply Now
                <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <a href="#services" className="btn btn-outline">View Playbook</a>
            </div>
          </div>

          <div className="rv vis rv-d2" style={{ position: 'relative' }}>
            <svg className="deco" style={{ top: -24, right: -16, width: 48, height: 48, opacity: 0.2 }} viewBox="0 0 48 48" fill="none">
              <path d="M24 4L27 20L44 17L29 28L38 44L24 32L10 44L19 28L4 17L21 20Z" stroke="var(--color-red)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            </svg>
            <div className="hero-video">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="100Bold Showreel" />
              <div className="play-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
