import { useState } from 'react'

const services = [
  { id: 'gbp', title: 'Google Domination', desc: 'Rank top in local search. Drive high-intent leads directly to your calendar.', img: '/works/GIF 1.gif' },
  { id: 'linkedin', title: 'LinkedIn CEO Authority', desc: 'Position you as an industry titan. Build trust and generate premium B2B pipelines.', img: '/works/GIF 2.gif' },
  { id: 'social', title: 'Social Media Content', desc: 'High-converting content across Meta, LinkedIn, Instagram, TikTok, and more.', img: '/works/GIF 3.gif' },
  { id: 'ads', title: 'Paid Ads', desc: 'Meta and Google campaigns that turn ad spend into scalable revenue.', img: '/works/GIF 4.gif' },
]

const colors = { gbp: '#C8102E', linkedin: '#0A66C2', social: '#E8443A', ads: '#1A1816' }

export default function Services() {
  const [active, setActive] = useState('gbp')

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
        <div className="srv-block rv rv-d2" style={{background: colors[active], transition: 'background .5s ease'}}>
          <div className="srv-block-inner">
            <div>
              <div className="srv-visual">
                {services.map((srv) => (
                  <img key={srv.id} className={`srv-visual-img${active === srv.id ? ' active' : ''}`} src={srv.img} alt={srv.title} />
                ))}
              </div>
            </div>
            <div>
              {services.map((srv) => (
                <div key={srv.id} className={`srv-item${active === srv.id ? ' active' : ''}`} onClick={() => setActive(srv.id)}>
                  <div className="srv-item-head">
                    <h3>{srv.title}</h3>
                    <div className="srv-item-arrow">
                      <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <div className="srv-expand">
                    <p>{srv.desc}</p>
                    <a href="/services" className="srv-expand-cta">Explore <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
