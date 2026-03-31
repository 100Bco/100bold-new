const services = [
  { title: 'GBP Domination', desc: 'Own every local search. Full optimization, review funnels, social content.' },
  { title: 'LinkedIn CEO Authority', desc: 'Strategy, ghostwriting, engagement, and network growth.' },
  { title: 'Social Media Content', desc: 'Facebook, Instagram, TikTok, Threads — designed to convert.' },
  { title: 'Paid Ads', desc: 'Google and Meta layered on organic foundation.' },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="mx">
        <div className="section-label rv">What We Do</div>
        <div className="services-heading rv rv-d1">
          Here's how we build your <span className="accent">Growth Machine.</span>
        </div>
        <div className="srv-block rv rv-d2">
          <div className="srv-block-inner">
            <div>
              <div className="srv-video">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1000" alt="Showreel" />
                <div className="srv-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
              </div>
              <div className="srv-caption">100Bold Client Growth Showreel</div>
              <div className="srv-caption-body">From GBP to LinkedIn authority — the output machine in action.</div>
            </div>
            <div>
              <div className="srv-list-label">Types of Work</div>
              {services.map((srv) => (
                <div key={srv.title} className="srv-item">
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <span className="srv-arrow">Explore <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
