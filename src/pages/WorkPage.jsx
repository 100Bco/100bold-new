import WaveDivider from '../components/WaveDivider'
import WorkHeroGraphic from '../components/WorkHeroGraphic'

const activeCases = [
  {
    title: 'LT Commercial Group',
    industry: 'Commercial RE — Brokerage, Development, Property Management',
    services: ['Content', 'Google'],
    img: '/works/LT COMMERCIAL GROUP.png',
    metric: '6,000+', metricLabel: 'Business Leaders Reached',
    desc: "Creative content that keeps Austin's top commercial real estate group top of mind. In front of the investors, brokers, and business owners that move the market.",
  },
  {
    title: 'Lezlie Tram',
    industry: 'CEO Personal Brand — LT Commercial Group Founder',
    services: ['LinkedIn CEO Authority'],
    img: '/works/LEZLIE TRAM.png',
    metric: '2.5X', metricLabel: 'LinkedIn Growth',
    desc: 'Turned an already-active LinkedIn into a magnet. Consistent content, real engagement, and a growing pipeline of connections and conversations.',
  },
  {
    title: 'Dacy Business Park',
    industry: 'Mixed-Use Business Park — Pflugerville, TX',
    services: ['Website', 'Google', 'Event Marketing'],
    img: '/works/DACY BUSINESS PARK.png',
    metric: '100 Attendees', metricLabel: '3 Leads in 24 Hours',
    desc: 'Built the digital presence from scratch, then launched a targeted campaign to 6,000 local business leaders. Sold-out launch event and immediate lease inquiries on day one.',
  },
  {
    title: 'Bee Construction',
    industry: 'General Contractor — Southern California',
    services: ['Website', 'Content', 'Paid Ads'],
    img: '/works/BEE CONSTRUCTION.png',
    metric: '$2M+', metricLabel: 'Lead in 72 Hours',
    desc: 'Took them from zero. No website, no social, no digital footprint. Within 72 hours of launch, a single ad brought in a $2M+ development lead.',
  },
  {
    title: 'T98 Rehab',
    industry: 'Auto Injury Chiropractor — Austin and Pflugerville, TX',
    services: ['Google', 'Content', 'MinAI'],
    img: '/works/T98 REHAB & CHIROPRACTIC.png',
    metric: '12 Hours', metricLabel: 'First Lead Closed',
    desc: "Connected the Google, wired in MinAI's lead capture backend, and within 12 hours the first lead came in and closed. Now scaling content and local search across 3 locations.",
  },
  {
    title: 'Dang Law Group',
    industry: 'Personal Injury Law Firm — Austin, TX',
    services: ['Google', 'Content'],
    img: '/works/DANG LAW GROUP.png',
    metric: '30%', metricLabel: 'Intake Automated',
    desc: 'Built the intake automation and the brand story. A bold founder persona, a smarter lead funnel, and real traction inside the local community. Ads coming soon.',
  },
  {
    title: 'Subele Tequila',
    industry: 'Premium Tequila Brand — Mexican Soul, Global Vision',
    services: ['Brand', 'Event Marketing', 'Content'],
    img: '/works/SUBELE TEQUILA.png',
    metric: '$11K', metricLabel: 'Sales in 2 Hours',
    desc: 'Two events, 300+ high-level attendees, and $11K in charity sales in under two hours. Building brand awareness where it counts — in rooms full of the right people.',
  },
  {
    title: 'Taco Man 512',
    industry: 'Authentic Mexican Catering — Austin, TX',
    services: ['Brand', 'Event Marketing', 'Content'],
    img: '/works/TACO MAN 512.png',
    metric: '300+', metricLabel: 'Attendees in 2 Events',
    desc: "Austin's favorite taco crew, now in the right rooms. We put Taco Man 512 in front of high-quality audiences through curated events and content, turning a beloved brand into a booking machine.",
  },
  {
    title: '100B',
    industry: 'Vietnam-to-Global Business Gateway',
    services: ['Website', 'Brand', 'Business Development'],
    img: '/works/100B HOLDING.png',
    metric: '20+', metricLabel: 'Nine-Figure Factories',
    desc: "Built everything from zero: brand, website, graphic design, back end, the full system. Now the gateway connecting global investors with a curated network of Vietnam's most elite construction materials manufacturers, each doing $100M to $400M a year.",
  },
  {
    title: 'Woodsland',
    industry: 'Furniture and Plywood Manufacturer — Vietnam',
    services: ['Brand', 'Content', 'Business Development'],
    img: '/works/WOODSLAND.png',
    metric: '$5M', metricLabel: 'Export Contract',
    desc: "One of Vietnam's largest furniture factories and a longtime IKEA supplier. We drove the brand positioning and outreach strategy that opened the door to a $5M film-faced plywood export contract into Europe.",
  },
  {
    title: 'Hexagon Group',
    industry: 'Custom Interior Design and Manufacturing — Vietnam',
    services: ['Brand', 'Content', 'Business Development'],
    img: '/works/HEXAGON GROUP.png',
    metric: '1st', metricLabel: 'US Container Shipped',
    desc: 'A leading Vietnamese interior firm serving global brands including Apple. We drove the content and business development strategy that got their first container of custom interior materials into the US market.',
  },
  {
    title: 'AREAA Austin',
    industry: 'Asian Real Estate Association of America — Austin Chapter',
    services: ['Website', 'Email Marketing'],
    img: '/works/AREAA AUSTIN.png',
    metric: '2X', metricLabel: 'Outreach Efficiency',
    desc: "Rebuilt their digital infrastructure and automated their outreach. Same team, twice the reach. Full website, streamlined backend, and email campaigns running for one of Austin's key real estate networks.",
  }
];

const worksCases = [
  {
    title: 'LinkedGlenn',
    industry: 'Austin Commercial Real Estate Networking and News',
    services: ['LinkedIn CEO Authority', 'Email Marketing', 'CRM'],
    img: '/works/LINKEDINGLENN.png',
    metric: '5,000+', metricLabel: 'Contacts Activated',
    desc: "Plugging in the full CRM stack and building Glenn Hart's LinkedIn CEO presence. Starting with a 5,000+ contact outreach campaign to activate one of Austin's most connected real estate networks.",
  },
  {
    title: 'InFrame Wedding Photography',
    industry: 'Wedding and Engagement Photography — Bay Area, CA',
    services: ['Google', 'Email Marketing'],
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    metric: 'Now', metricLabel: 'Onboarding',
    desc: 'Full backend integration, AI chatbot, and a review-generation campaign targeting past clients. Getting a beautiful brand the digital infrastructure it deserves.',
  }
];

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <div className="about-hero-grid">
            <div>
              <h1 className="rv vis">Proven <span className="accent">Results.</span><br/>Real Clients.</h1>
              <p className="page-hero-body rv vis rv-d2">Every result shown here is from a real client in our active roster.</p>
            </div>
            <div className="about-hero-visual rv vis rv-d2">
              <WorkHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section className="work-list" style={{position: 'relative', paddingBottom: '4rem'}}>
        {/* Arrow swoosh */}
        <svg className="deco" style={{top: '3%', left: '4%', width: 85, height: 45, opacity: .08}} viewBox="0 0 85 45" fill="none">
          <path d="M5 38C20 8,48 3,76 18" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M66 8L78 18L64 24" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="mx">
          <h2 className="rv vis" style={{ marginBottom: '2rem', fontSize: '2rem', borderBottom: '2px solid var(--red)', paddingBottom: '0.5rem', display: 'inline-block' }}>ACTIVE ROSTER</h2>
          <div className="work-grid">
            {activeCases.map((c, i) => (
              <div key={c.title} className="work-card rv vis">
                <div className="case-thumb">
                  <img src={c.img} alt={c.title} />
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

      <section className="work-list" style={{position: 'relative', background: '#F7F3ED'}}>
        {/* Concentric rings */}
        <svg className="deco" style={{bottom: '5%', right: '5%', width: 65, height: 65, opacity: .07}} viewBox="0 0 65 65" fill="none">
          <circle cx="32.5" cy="32.5" r="10" stroke="var(--red)" strokeWidth="1.5"/>
          <circle cx="32.5" cy="32.5" r="20" stroke="var(--red)" strokeWidth="1.5"/>
          <circle cx="32.5" cy="32.5" r="30" stroke="var(--red)" strokeWidth="1.5"/>
        </svg>
        <div className="mx">
          <h2 className="rv vis" style={{ marginBottom: '2rem', fontSize: '2rem', borderBottom: '2px solid var(--red)', paddingBottom: '0.5rem', display: 'inline-block' }}>NOW IN THE WORKS</h2>
          <div className="work-grid">
            {worksCases.map((c, i) => (
              <div key={c.title} className="work-card rv vis">
                <div className="case-thumb">
                  <img src={c.img} alt={c.title} />
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
