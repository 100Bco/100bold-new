const services = [
  { title: 'GBP Domination', desc: 'Own every local search. Full optimization, review funnels, social content.' },
  { title: 'LinkedIn CEO Authority', desc: 'Strategy, ghostwriting, engagement, and network growth.' },
  { title: 'Social Media Content', desc: 'Facebook, Instagram, TikTok, Threads — designed to convert.' },
  { title: 'Paid Ads', desc: 'Google and Meta layered on organic foundation.' },
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
        <div className="srv-compact rv rv-d1">
          {services.map((srv) => (
            <div key={srv.title} className="srv-row">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
