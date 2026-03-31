import { useState } from 'react'

const services = [
  { title: 'GBP Domination', desc: 'Optimize your Google Business Profile to rank #1 in local search, driving high-intent leads directly to your calendar.' },
  { title: 'LinkedIn CEO Authority', desc: 'Position you as the go-to expert in your industry with strategic content, ghostwriting, and network growth on LinkedIn.' },
  { title: 'Social Media Content', desc: 'Facebook, Instagram, TikTok, Threads — scroll-stopping content designed to build trust and convert followers into clients.' },
  { title: 'Paid Ads', desc: 'Google and Meta ad campaigns layered on top of your organic foundation for maximum ROI.' },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="services-section" id="services" style={{position: 'relative'}}>
      <svg className="deco" style={{top: '8%', right: '5%', width: 80, height: 40, opacity: .09}} viewBox="0 0 80 40" fill="none">
        <path d="M4 36L16 4L28 36L40 4L52 36L64 4L76 36" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <svg className="deco" style={{bottom: '12%', left: '3%', width: 70, height: 70, opacity: .07}} viewBox="0 0 70 70" fill="none">
        <path d="M35 35C35 30,40 28,43 31C46 34,44 40,39 41C33 42,28 37,29 31C30 23,38 19,44 22C52 26,54 38,48 45C41 53,27 53,22 44C16 33,20 18,32 14" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
      <div className="mx">
        <div className="services-heading rv">
          Here's how we build your <span className="accent">Growth Machine.</span>
        </div>
        {/* Decorative ellipse + arrow */}
        <div className="srv-deco-arrow rv rv-d1">
          <svg width="120" height="50" viewBox="0 0 120 50" fill="none">
            <ellipse cx="60" cy="18" rx="55" ry="16" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="4 4" opacity=".25"/>
          </svg>
          <svg className="srv-arrow-down" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 6v16M8 16l6 6 6-6" stroke="var(--text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="srv-block rv rv-d2">
          <div className="srv-block-inner">
            <div>
              <div className="srv-video">
                <div className="srv-showreel-label">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg>
                  Showreel
                </div>
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1000" alt="Showreel" />
                <div className="srv-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
              </div>
              <div className="srv-caption">100Bold Client Growth Showreel</div>
              <div className="srv-caption-body">From GBP to LinkedIn authority — the output machine in action.</div>
            </div>
            <div>
              <div className="srv-list-label">Types of Work</div>
              {services.map((srv, i) => (
                <div
                  key={srv.title}
                  className={`srv-item${openIdx === i ? ' srv-item-open' : ''}`}
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                >
                  <div className="srv-item-header">
                    <h3>{srv.title}</h3>
                    <span className="srv-toggle">{openIdx === i ? '−' : '+'}</span>
                  </div>
                  <p>{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
