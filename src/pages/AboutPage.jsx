import WaveDivider from '../components/WaveDivider'

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{position: 'relative'}}>
        {/* Arrow swoosh */}
        <svg className="deco" style={{top: '18%', right: '6%', width: 80, height: 45, opacity: .09}} viewBox="0 0 80 45" fill="none">
          <path d="M5 35C18 8,45 3,72 18" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M62 8L74 18L60 24" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="mx">
          <h1 className="rv vis">We Are <span className="accent">Operators.</span><br/>Not Marketers.</h1>
          <p className="page-hero-body rv vis rv-d2">We are operators who have built and run businesses in the exact industries we serve. Not a traditional marketing agency.</p>
        </div>
      </section>

      {/* 3 Unfair Advantages */}
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <section className="about-advantages" style={{position: 'relative'}}>
        {/* Concentric rings - white on dark bg */}
        <svg className="deco" style={{top: '10%', left: '5%', width: 70, height: 70, opacity: .1}} viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="10" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="35" cy="35" r="20" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="35" cy="35" r="30" stroke="#fff" strokeWidth="1.5"/>
        </svg>
        <div className="mx">
          <div className="adv-grid">
            <div className="adv-card rv">
              <div className="adv-num">01</div>
              <h3>Operator Credibility</h3>
              <p>We've built businesses in your industry. We speak your language — not marketing language.</p>
            </div>
            <div className="adv-card rv rv-d1">
              <div className="adv-num">02</div>
              <h3>The Austin Network</h3>
              <p>6,000+ Austin business professionals in our network. Active in GAACC with events of 100+ business leaders.</p>
            </div>
            <div className="adv-card rv rv-d2">
              <div className="adv-num">03</div>
              <h3>GBP + LinkedIn System</h3>
              <p>Proven playbooks that deliver consistently at scale. No back-and-forth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <section className="about-ecosystem" style={{position: 'relative'}}>
        {/* Zigzag line */}
        <svg className="deco" style={{bottom: '12%', right: '6%', width: 90, height: 40, opacity: .08}} viewBox="0 0 90 40" fill="none">
          <path d="M4 36L18 4L32 36L46 4L60 36L74 4L88 36" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="mx">
          <h2 className="rv">The 100Bold <span className="accent">Ecosystem.</span></h2>
          <p className="about-eco-body rv rv-d1">100Bold is the agency. MinAI is the technology engine. Together — complete growth infrastructure.</p>
          <div className="eco-stats rv rv-d2">
            <div className="eco-stat">
              <div className="eco-stat-num">6,000+</div>
              <div className="eco-stat-label">Austin Business Contacts</div>
            </div>
            <div className="eco-stat eco-stat-wide">
              <div className="eco-stat-num">Growth-Focused</div>
              <div className="eco-stat-label" style={{fontWeight: 700, fontSize: 16, marginBottom: 4}}>Founders</div>
              <div className="eco-stat-label">Ambitious leaders ready to scale bold</div>
            </div>
            <div className="eco-stat eco-stat-wide">
              <div className="eco-stat-num">Proven</div>
              <div className="eco-stat-label" style={{fontWeight: 700, fontSize: 16, marginBottom: 4}}>Industries</div>
              <div className="eco-stat-label">Real Estate, Services, Construction, Manufacturing, Import-Export, and more</div>
            </div>
            <div className="eco-stat">
              <div className="eco-stat-num">$5M+</div>
              <div className="eco-stat-label">Minimum Client Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Network */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section className="about-network">
        <div className="mx">
          <h2 className="rv">The Austin <span className="accent">Network.</span></h2>
          <p className="about-net-body rv rv-d1">Our clients get access — not just marketing. Surrounded by leaders in complementary industries, referrals happen naturally.</p>
          <div className="net-features rv rv-d2">
            <div className="net-feat">
              <h4>GAACC Involvement</h4>
              <p>Active in Greater Austin Asian Chamber of Commerce.</p>
            </div>
            <div className="net-feat">
              <h4>Community Events</h4>
              <p>100+ business owners and city officials at our events. Covered by local press.</p>
            </div>
            <div className="net-feat">
              <h4>Founder Introductions</h4>
              <p>Personal introductions to founders and business leaders in Austin.</p>
            </div>
            <div className="net-feat">
              <h4>Cross-Referrals</h4>
              <p>GCs, developers, subs, property managers — cross-referrals happen naturally.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
