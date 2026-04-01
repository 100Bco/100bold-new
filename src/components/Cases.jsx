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
  {
    title: 'Bee Construction',
    desc: 'From zero to a $2M+ development lead within 72 hours of launch.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    metric: '$2M+', metricLabel: 'Lead in 72 Hours', tags: ['Website', 'Content', 'Paid Ads'],
  },
  {
    title: 'T98 Rehab',
    desc: 'First lead came in and closed within 12 hours. Now scaling across 3 locations.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    metric: '12 Hrs', metricLabel: 'First Lead Closed', tags: ['GBP', 'Content', 'MinAI'],
  },
  {
    title: 'Dang Law Group',
    desc: 'Intake automation, bold founder persona, and real traction in the local community.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    metric: '30%', metricLabel: 'Intake Automated', tags: ['GBP', 'Content'],
  },
  {
    title: 'Subele Tequila',
    desc: '$11K in charity sales in under two hours. Brand awareness in rooms full of the right people.',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    metric: '$11K', metricLabel: 'Sales in 2 Hours', tags: ['Brand', 'Events', 'Content'],
  },
  {
    title: 'Taco Man 512',
    desc: "Austin's favorite taco crew in the right rooms. Turning a beloved brand into a booking machine.",
    img: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
    metric: '300+', metricLabel: 'Attendees in 2 Events', tags: ['Brand', 'Events', 'Content'],
  },
  {
    title: '100B',
    desc: "Gateway connecting global investors with Vietnam's most elite construction materials manufacturers.",
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    metric: '20+', metricLabel: 'Nine-Figure Factories', tags: ['Website', 'Brand', 'BD'],
  },
  {
    title: 'Woodsland',
    desc: '$5M film-faced plywood export contract into Europe for a longtime IKEA supplier.',
    img: 'https://images.unsplash.com/photo-1490226463991-628f804cc254?auto=format&fit=crop&q=80&w=800',
    metric: '$5M', metricLabel: 'Export Contract', tags: ['Brand', 'Content', 'BD'],
  },
  {
    title: 'Hexagon Group',
    desc: 'First container of custom interior materials shipped into the US market.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    metric: '1st', metricLabel: 'US Container Shipped', tags: ['Brand', 'Content', 'BD'],
  },
  {
    title: 'AREAA Austin',
    desc: "Same team, twice the reach. Rebuilt digital infrastructure for Austin's key RE network.",
    img: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&q=80&w=800',
    metric: '2X', metricLabel: 'Outreach Efficiency', tags: ['Website', 'Email'],
  },
]

export default function Cases() {
  return (
    <section className="cases" id="work" style={{position: 'relative'}}>
      <svg className="deco" style={{top: '6%', left: '4%', width: 90, height: 50, opacity: .1}} viewBox="0 0 90 50" fill="none">
        <path d="M5 40C20 10,50 5,80 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M70 10L82 20L68 26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
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
            <div key={c.title} className={`case-card rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
