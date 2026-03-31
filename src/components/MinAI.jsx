export default function MinAI() {
  return (
    <section className="minai" id="minai" style={{position: 'relative'}}>
      {/* Concentric rings */}
      <svg className="deco" style={{top: '10%', right: '4%', width: 80, height: 80, opacity: .08}} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="12" stroke="var(--red)" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="24" stroke="var(--red)" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="36" stroke="var(--red)" strokeWidth="1.5"/>
      </svg>
      {/* Triangle cluster */}
      <svg className="deco" style={{bottom: '15%', left: '3%', width: 60, height: 60, opacity: .07}} viewBox="0 0 60 60" fill="none">
        <path d="M20 45L30 25L40 45Z" stroke="var(--red)" strokeWidth="2" fill="none"/>
        <path d="M10 55L20 38L30 55Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
        <path d="M30 55L40 38L50 55Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
      </svg>
      <div className="mx">
        {/* Headline with red underline like hero */}
        <h2 className="minai-headline rv" style={{position: 'relative', display: 'inline-block'}}>
          Your 24/7 <span className="accent">Growth Engine.</span><br/>Powered by MinAI.
          <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '60%', height: 14, opacity: .25 }} viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
            <path d="M4 10C60 3,120 12,180 6C220 3,260 9,296 5" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>
        </h2>
        <p className="minai-subtitle rv rv-d1">Every 100Bold client gets MinAI — our AI platform — from day one.<br/><span className="accent">No extra cost.</span></p>

        <div className="minai-card rv rv-d2">
          <div className="minai-glow"></div>
          <div className="minai-content">
            <div className="minai-features">
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> AI Chatbot</h4>
                <p>Qualifies leads & books appointments 24/7.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> Voice AI</h4>
                <p>Answers calls & handles leads automatically.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Review Funnel</h4>
                <p>Automated 5-star review requests on autopilot.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> CRM + Inbox</h4>
                <p>All leads in one place. Nothing falls through.</p>
              </div>
            </div>
            <button className="btn btn-red">
              Learn More About MinAI
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="minai-visual">
            <div className="minai-3d-stack">
              {/* 3D layered cards */}
              <div className="minai-3d-card minai-3d-back">
                <div className="minai-3d-bar"></div>
                <div className="minai-3d-bar short"></div>
              </div>
              <div className="minai-3d-card minai-3d-mid">
                <div className="minai-3d-chart">
                  <div className="minai-3d-col" style={{height: '40%'}}></div>
                  <div className="minai-3d-col" style={{height: '65%'}}></div>
                  <div className="minai-3d-col" style={{height: '85%'}}></div>
                  <div className="minai-3d-col accent" style={{height: '100%'}}></div>
                </div>
                <span className="minai-3d-label">Growth</span>
              </div>
              <div className="minai-3d-card minai-3d-front">
                <div className="minai-3d-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span className="minai-3d-stat">+127%</span>
                <span className="minai-3d-stat-label">Leads</span>
              </div>
              {/* Floating badges */}
              <div className="minai-float-badge minai-fb-green"><span className="fdot"></span> Lead Captured</div>
              <div className="minai-float-badge minai-fb-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Booked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
