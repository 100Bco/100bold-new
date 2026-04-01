import WaveDivider from '../components/WaveDivider'
import MinAIPageGraphic from '../components/MinAIPageGraphic'

const ChatIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
const PhoneIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
const StarIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const GridIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
const RefreshIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>

const features = [
  { icon: <ChatIcon />, name: 'AI Chatbot', desc: 'Installed on website and socials. Trained on your business data. Answers FAQs, qualifies leads, books appointments 24/7.' },
  { icon: <PhoneIcon />, name: 'Voice AI Receptionist', desc: 'Answers inbound calls automatically. Handles lead qualification. Works at 4 AM on weekends.' },
  { icon: <StarIcon />, name: '5-Star Review Funnel', desc: 'Automated SMS + email sequences that request reviews from past customers on autopilot.' },
  { icon: <GridIcon />, name: 'CRM + Unified Inbox', desc: 'All leads from web, phone, and social flow into one place. Nothing falls through the cracks.' },
  { icon: <RefreshIcon />, name: 'Database Reactivation', desc: 'Re-engage dormant past clients. Most businesses are sitting on thousands of untouched contacts.' },
]

export default function MinAIPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <div className="about-hero-grid">
            <div>
              <h1 className="rv vis">Meet <span className="accent">MinAI.</span><br/>The Engine Behind 100Bold.</h1>
              <p className="page-hero-body rv vis rv-d2">MinAI is the technology engine behind every 100Bold engagement. Founder-built, scaled to 1M+ users.</p>
            </div>
            <div className="about-hero-visual rv vis rv-d2">
              <MinAIPageGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <section style={{background: 'var(--dark)', color: '#fff', padding: 'var(--gap) 0', position: 'relative'}}>
        {/* Zigzag - white on dark */}
        <svg className="deco" style={{top: '8%', left: '4%', width: 80, height: 40, opacity: .1}} viewBox="0 0 80 40" fill="none">
          <path d="M4 36L16 4L28 36L40 4L52 36L64 4L76 36" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 48, color: '#fff'}}>
            What MinAI <span className="accent">Does.</span>
          </h2>
          <div className="minai-feat-grid">
            {features.map((f, i) => (
              <div key={f.name} className={`minai-feat-card rv${i > 0 ? ` rv-d${Math.min(i, 3)}` : ''}`}>
                <span className="minai-feat-icon">{f.icon}</span>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Demo */}
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <section style={{background: 'var(--cream)', padding: 'var(--gap) 0', position: 'relative'}}>
        <div className="mx" style={{textAlign: 'center'}}>
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 48}}>
            Watch Demo <span className="accent">Video!</span>
          </h2>
          <div className="minai-demo-video rv rv-d1">
            <iframe src="https://fast.wistia.net/embed/iframe/clfoknzq7j?seo=true&videoFoam=true" title="MinAI Demo" allow="autoplay; fullscreen" allowFullScreen style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0,borderRadius: 'var(--r-lg)'}}></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding: '60px 0', textAlign: 'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 4vw, 56px)', textTransform: 'uppercase', marginBottom: 24}}>
            Get 100Bold working for <span className="accent">your business.</span>
          </h2>
          <button className="btn btn-red rv rv-d1">
            Contact Now
            <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
    </>
  )
}
