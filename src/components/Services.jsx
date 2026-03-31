const services = [
  { title: 'GBP Domination', desc: 'Optimize your Google Business Profile to rank top in local search, driving high-intent leads directly to your calendar.' },
  { title: 'LinkedIn CEO Authority', desc: 'Position your leadership as industry titans. We craft compelling narratives that build trust and generate premium B2B pipelines.' },
  { title: 'Social Media Content', desc: 'Stop posting into the void. We create high-converting content engines across Meta, Linkedin, Instagram, TikTok, and many more.' },
  { title: 'Paid Ads', desc: 'Data-driven campaigns across Meta and Google that turn ad spend into measurable, scalable revenue with ruthless efficiency.' },
]

export default function Services() {
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
