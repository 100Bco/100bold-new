const cases = [
  {
    title: 'LT Commercial Group',
    desc: "Creative content that keeps Austin's top commercial real estate group top of mind.",
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    metric: '6,000+', metricLabel: 'Business Leaders Reached', tags: ['Content', 'GBP'],
  },
  {
    title: 'Lezlie Tram',
    desc: 'Turned an already-active LinkedIn into a magnet. Consistent content and real engagement.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    metric: '2.5X', metricLabel: 'LinkedIn Growth', tags: ['LinkedIn', 'CEO Authority'],
  },
  {
    title: 'Dacy Business Park',
    desc: 'Built digital presence from scratch. Sold-out launch event and immediate lease inquiries.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    metric: '100', metricLabel: 'Attendees. 3 Leads in 24h', tags: ['Website', 'GBP', 'Events'],
  },
]

export default function Cases() {
  return (
    <section className="cases" id="work" style={{position: 'relative'}}>
      {/* Arrow swoosh - white stroke for dark bg */}
      <svg className="deco" style={{top: '6%', left: '4%', width: 90, height: 50, opacity: .1}} viewBox="0 0 90 50" fill="none">
        <path d="M5 40C20 10,50 5,80 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M70 10L82 20L68 26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      {/* Diamond - white stroke */}
      <svg className="deco" style={{bottom: '8%', right: '5%', width: 50, height: 50, opacity: .08}} viewBox="0 0 50 50" fill="none">
        <path d="M25 5L45 25L25 45L5 25Z" stroke="#fff" strokeWidth="2" fill="none"/>
      </svg>
      <div className="mx">
        <div className="cases-head">
          <h2 className="rv">Proven <span className="accent">Results.</span></h2>
          <a href="/work" className="btn btn-text rv rv-d1">View All <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
        <div className="cases-grid">
          {cases.map((c, i) => (
            <div key={c.title} className={`case-card rv${i === 1 ? ' rv-d1' : i === 2 ? ' rv-d2' : ''}`}>
              <div className="case-thumb">
                <img src={c.img} alt={c.title} />
                <div className="case-metric">
                  <div className="case-metric-num">{c.metric}</div>
                  <div className="case-metric-label">{c.metricLabel}</div>
                </div>
                <div className="case-tags-row">
                  {c.tags.map((tag) => <span key={tag} className="case-tag-pill">{tag}</span>)}
                </div>
              </div>
              <div className="case-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <a href="#" className="btn btn-text" style={{ fontSize: 12 }}>Case Study <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
