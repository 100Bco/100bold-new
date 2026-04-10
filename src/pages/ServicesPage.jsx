import { Link } from 'react-router-dom'
import WaveDivider from '../components/WaveDivider'
import ServicesHeroGraphic from '../components/ServicesHeroGraphic'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" style={{position: 'relative'}}>
        <div className="mx">
          <div className="about-hero-grid">
            <div>
              <h1 className="rv vis">Two Products.<br/><span className="accent">Zero Fluff.</span></h1>
              <p className="page-hero-body rv vis rv-d2">We offer two distinct, standalone products. Each stands on its own value.</p>
            </div>
            <div className="about-hero-visual rv vis rv-d2">
              <ServicesHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Google Domination */}
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <section className="svc-detail" style={{background: 'var(--dark)', color: '#fff', padding: 'var(--gap) 0', position: 'relative'}}>
        {/* Cross/plus - white on dark */}
        <svg className="deco" style={{top: '8%', right: '6%', width: 50, height: 50, opacity: .1}} viewBox="0 0 50 50" fill="none">
          <path d="M25 5v40M5 25h40" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <div className="mx">
          <h2 className="svc-title rv">Google <span className="accent">Domination.</span></h2>
          <p className="svc-intro rv rv-d2">Your Google Business Profile is your most important digital asset. We treat it like one.</p>

          <div className="tier-grid rv rv-d2">
            <div className="tier-card">
              <div className="tier-label">Tier 1</div>
              <h3>Google Domination</h3>
              <div className="tier-price" style={{display: 'none'}}>$4,000<span>/month</span></div>
              <ul className="tier-list">
                <li>Full Google profile optimization</li>
                <li>Weekly content posted to Google</li>
                <li>Review generation campaigns (SMS + email)</li>
                <li>Every review replied to with keyword-rich responses</li>
                <li>Monthly performance heat map</li>
                <li>AI chatbot on website (powered by MinAI)</li>
                <li>Lead capture form + CRM setup</li>
              </ul>
              <p className="tier-best">Best for: Towing, HVAC, plumbing, roofing — where customers go straight to Google.</p>
            </div>

            <div className="tier-card tier-featured">
              <div className="tier-label">Tier 2</div>
              <h3>Google + Social Content</h3>
              <div className="tier-price" style={{display: 'none'}}>$6,500–7,000<span>/month</span></div>
              <ul className="tier-list">
                <li>Everything in Tier 1</li>
                <li>Reviews transformed into short-form video</li>
                <li>Carousels and infographics</li>
                <li>Written posts and feature stories</li>
                <li>Content posted on schedule — no approval delays</li>
              </ul>
              <p className="tier-best">Best for: Businesses with a social presence that want it fed consistently.</p>
            </div>

            <div className="tier-card">
              <div className="tier-label">Tier 3</div>
              <h3>Paid Ads</h3>
              <div className="tier-price" style={{display: 'none'}}>Custom</div>
              <ul className="tier-list">
                <li>Google Ads and/or Meta Ads</li>
                <li>Layered on organic foundation only</li>
                <li>Organic ranking reduces cost-per-click</li>
                <li>Never run ads before organic is established</li>
              </ul>
              <p className="tier-best">Best for: Clients with solid organic foundation ready to accelerate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn CEO Authority */}
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <section className="svc-detail" style={{background: 'var(--cream)', padding: 'var(--gap) 0', position: 'relative'}}>
        {/* Diamond shapes */}
        <svg className="deco" style={{bottom: '15%', left: '4%', width: 55, height: 55, opacity: .08}} viewBox="0 0 55 55" fill="none">
          <path d="M27.5 5L50 27.5L27.5 50L5 27.5Z" stroke="var(--red)" strokeWidth="2" fill="none"/>
          <path d="M27.5 15L40 27.5L27.5 40L15 27.5Z" stroke="var(--red)" strokeWidth="1.5" fill="none"/>
        </svg>
        <div className="mx">
          <h2 className="svc-title rv" style={{color: 'var(--dark)'}}>LinkedIn CEO <span className="accent">Authority.</span></h2>
          <p className="svc-intro rv rv-d2" style={{color: 'var(--text-2)'}}>We hand-pick the CEOs we work with and take over LinkedIn completely.</p>

          <div className="lnk-details rv rv-d2">
            <div className="lnk-detail-grid">
              <div className="lnk-item">
                <h4>Who It's For</h4>
                <p>CEO or Founder only. $5M+ revenue. Industries the 100Bold team has operated in.</p>
              </div>
              <div className="lnk-item">
                <h4>Full Scope</h4>
                <p>Strategy, writing, posting, engagement, network growth. Fully hands-off.</p>
              </div>
              <div className="lnk-item">
                <h4>Pricing</h4>
                <p>Contact us for pricing. No long-term contract required.</p>
              </div>
              <div className="lnk-item">
                <h4>Why It Works</h4>
                <p>Multiple CEO profiles across complementary industries. Cross-amplification accelerates growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding: '60px 0', textAlign: 'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 24}}>
            Ready to <span className="accent">dominate?</span>
          </h2>
          <Link to="/contact" className="btn btn-red rv rv-d1">
            Contact Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
