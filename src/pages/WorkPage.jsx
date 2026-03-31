import WaveDivider from '../components/WaveDivider'

const cases = [
  {
    title: 'LT Commercial Group',
    industry: 'Commercial RE — Brokerage, Development, Property Management',
    services: ['GBP + Content'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    metric: '+215%', metricLabel: 'Call Volume',
    desc: 'Dominated local SEO, turning search visibility into a predictable revenue engine for Austin\'s leading commercial real estate group.',
  },
  {
    title: 'Lezlie Tram',
    industry: 'CEO Personal Brand — LT Commercial Group Founder',
    services: ['LinkedIn CEO Authority'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    metric: '50K+', metricLabel: 'Monthly Impressions',
    desc: 'Built founder authority on LinkedIn with documented, measurable growth. Strategy, ghostwriting, engagement, and network expansion.',
  },
  {
    title: 'Miami Vice',
    industry: 'Luxury Corporate Retreat — Destin, FL',
    services: ['GBP + Content'],
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    metric: '3X', metricLabel: 'Booking Inquiries',
    desc: 'Full GBP and social content management for a premium retreat destination, driving booking inquiries from high-value corporate clients.',
  },
  {
    title: 'T98 Rehab',
    industry: 'Personal Injury Chiropractor',
    services: ['GBP + Content'],
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    metric: '1.2M+', metricLabel: 'Content Views',
    desc: 'Built founder authority on LinkedIn, generating high-ticket leads in healthcare. 400K+ healthcare professionals reached monthly.',
  },
  {
    title: 'Dang Law Group',
    industry: 'Personal Injury Law Firm (~$17M/year revenue)',
    services: ['GBP + Content', 'Paid Ads'],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    metric: '4X', metricLabel: 'Lead Volume',
    desc: 'Built the review engine and lead funnel. AI follow-up system and free police report campaign turned cold searches into signed cases.',
  },
  {
    title: 'Bee Construction',
    industry: 'General Contractor',
    services: ['GBP', 'Reviews'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    metric: '47', metricLabel: '5-Star Reviews',
    desc: 'Zero to dominant — top-3 local ranking and review machine in 6 months. Full GBP takeover with automated review generation.',
  },
]

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <h1 className="rv vis">Proven <span className="accent">Results.</span><br/>Real Clients.</h1>
          <p className="page-hero-body rv vis rv-d2">Every result shown here is from a real client in our active roster. No hypotheticals. No projections.</p>
        </div>
      </section>

      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section className="work-list">
        <div className="mx">
          <div className="work-grid">
            {cases.map((c, i) => (
              <div key={c.title} className={`work-card rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
                <div className="case-thumb">
                  <img src={c.img} alt={c.title} />
                  <div className="case-metric">
                    <div className="case-metric-num">{c.metric}</div>
                    <div className="case-metric-label">{c.metricLabel}</div>
                  </div>
                  <div className="case-tags-row">
                    {c.services.map((s) => <span key={s} className="case-tag-pill">{s}</span>)}
                  </div>
                </div>
                <div className="work-card-body">
                  <h3>{c.title}</h3>
                  <p className="work-industry">{c.industry}</p>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
