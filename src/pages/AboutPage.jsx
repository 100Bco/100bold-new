import WaveDivider from '../components/WaveDivider'

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx">
          <div className="section-label rv vis">About Us</div>
          <h1 className="rv vis rv-d1">We Are <span className="accent">Operators.</span><br/>Not Marketers.</h1>
          <p className="page-hero-body rv vis rv-d2">100Bold is a growth agency for established Texas service businesses and founders. We are not a traditional marketing agency. We are operators who have built and run businesses in the exact industries we serve.</p>
        </div>
      </section>

      {/* 3 Unfair Advantages */}
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <section className="about-advantages">
        <div className="mx">
          <div className="section-label rv" style={{color: 'rgba(255,255,255,.35)'}}>The Three Unfair Advantages</div>
          <div className="adv-grid">
            <div className="adv-card rv">
              <div className="adv-num">01</div>
              <h3>Operator Credibility</h3>
              <p>We have built businesses in real estate, construction, and local services. When we sit across from a GC or a PI law firm or a property developer, we speak their language — not marketing language.</p>
            </div>
            <div className="adv-card rv rv-d1">
              <div className="adv-num">02</div>
              <h3>The Austin Network</h3>
              <p>6,000+ Austin business professionals in our active network. Active in GAACC, organized events with 100+ business owners and city officials. Your growth is powered by a real community.</p>
            </div>
            <div className="adv-card rv rv-d2">
              <div className="adv-num">03</div>
              <h3>GBP + LinkedIn System</h3>
              <p>Our services are productized and systematized. A proven playbook that works for any local service business, delivering consistently at scale without the back-and-forth that slows most agencies down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <section className="about-ecosystem">
        <div className="mx">
          <h2 className="rv">The 100Bold <span className="accent">Ecosystem.</span></h2>
          <p className="about-eco-body rv rv-d1">100Bold Agency is the client-facing brand. MinAI is the technology engine behind every engagement. Together, they form a complete growth infrastructure — from search dominance to AI-powered lead capture.</p>
          <div className="eco-stats rv rv-d2">
            <div className="eco-stat">
              <div className="eco-stat-num">6,000+</div>
              <div className="eco-stat-label">Austin Business Contacts</div>
            </div>
            <div className="eco-stat">
              <div className="eco-stat-num">1M+</div>
              <div className="eco-stat-label">Platform Users (MinAI)</div>
            </div>
            <div className="eco-stat">
              <div className="eco-stat-num">100+</div>
              <div className="eco-stat-label">Event Attendees (Dacy BP)</div>
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
          <p className="about-net-body rv rv-d1">Our clients don't just get marketing. They get access. When your business grows inside the 100Bold ecosystem, you are surrounded by other leaders in complementary industries. The referrals and partnerships happen naturally.</p>
          <div className="net-features rv rv-d2">
            <div className="net-feat">
              <h4>GAACC Involvement</h4>
              <p>Active in Greater Austin Asian Chamber of Commerce including Asia trade mission coordination.</p>
            </div>
            <div className="net-feat">
              <h4>Community Events</h4>
              <p>Dacy Business Park open house brought 100+ business owners, industry leaders, and city officials. Covered by local press.</p>
            </div>
            <div className="net-feat">
              <h4>Founder Introductions</h4>
              <p>Our founding team personally makes introductions to other founders, business owners, and business leaders in Austin.</p>
            </div>
            <div className="net-feat">
              <h4>Cross-Referrals</h4>
              <p>Clients in complementary industries — GCs, developers, subs, property managers — refer naturally within the ecosystem.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
