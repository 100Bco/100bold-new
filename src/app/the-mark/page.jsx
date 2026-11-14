import Link from 'next/link'
import WhatWeDo from '@/components/the-mark/WhatWeDo'
import Journey from '@/components/the-mark/Journey'
import CaseCard from '@/components/the-mark/CaseCard'
import Reveal from '@/components/the-mark/Reveal'
import ApplyBar from '@/components/the-mark/ApplyBar'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/ (markup converted from the live SSR output).
export const metadata = {
  title: "The Mark | Done-for-you LinkedIn Growth for Founders & CEOs",
  description: "Fully managed LinkedIn service that builds your authority and turns attention into deals, partnerships, and speaking invitations. By 100Bold.",
  alternates: { canonical: '/the-mark' },
  openGraph: {
    title: "The Mark | Done-for-you LinkedIn Growth for Founders & CEOs",
    description: "Fully managed LinkedIn service that builds your authority and turns attention into deals, partnerships, and speaking invitations. By 100Bold.",
    url: '/the-mark',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function TheMarkHome() {
  return (
    <>
      <section className="tm-hero">
        <div className="hero-eyebrow">The Mark by 100Bold</div>
        <h1 className="hero-headline">Done-for-you<br className="br-m" /> LinkedIn growth for <br className="br-m" /><span style={{ color: "var(--gold)" }}>founders and CEOs.</span></h1>
        <p className="hero-sub">We build your LinkedIn, generate inbound leads, and turn your profile into a pipeline of deals and partnerships.</p>
        <div className="hero-cta-group">
          <Link href="/the-mark/apply" className="btn-primary">Apply to Work With Us</Link>
          <a href="#results" className="btn-ghost">See Client Results</a>
        </div>
        <div className="stats-bar-wrap" style={{ display: "flex", gap: "64px", justifyContent: "center", marginTop: "64px", opacity: 0, animation: "tm-fadeUp 0.8s 0.9s forwards" }}>
          <div className="stat-cell" style={{ textAlign: "center", padding: "0 32px", borderRight: "1px solid rgba(209,172,114,0.2)", paddingRight: "64px" }}>
            <div className="stat-num" style={{ fontSize: "48px", fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: "10px" }}>1M+</div>
            <div style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", color: "var(--muted-lt)", textTransform: "uppercase" }}>Impressions</div>
          </div>
          <div className="stat-cell" style={{ textAlign: "center", padding: "0 32px", borderRight: "1px solid rgba(209,172,114,0.2)", paddingRight: "64px" }}>
            <div className="stat-num" style={{ fontSize: "48px", fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: "10px" }}>10K+</div>
            <div style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", color: "var(--muted-lt)", textTransform: "uppercase" }}>Followers</div>
          </div>
          <div className="stat-cell" style={{ textAlign: "center", padding: "0 32px", borderRight: "none", paddingRight: "32px" }}>
            <div className="stat-num" style={{ fontSize: "48px", fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: "10px" }}>89%</div>
            <div style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", color: "var(--muted-lt)", textTransform: "uppercase" }}>Out-of-Network</div>
          </div>
        </div>
        <div className="trust-line" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "48px", opacity: 0, animation: "tm-fadeUp 0.8s 1.1s forwards" }}>
          <div style={{ display: "flex", marginRight: "4px" }}>
            <img src="/the-mark/images/tung-cao/Tung%20Cao%20Photo.png" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", border: "3px solid var(--navy)" }} />
            <img src="/the-mark/images/loc-dang/loc-dang-headshot.webp" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 20%", border: "3px solid var(--navy)", marginLeft: "-14px" }} />
            <img src="/the-mark/images/lezlie-avatar.webp" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 30%", border: "3px solid var(--navy)", marginLeft: "-14px" }} />
          </div>
          <span style={{ fontSize: "16px", fontWeight: 400, color: "var(--muted-lt)" }}>Trusted by founders across industries</span>
        </div>
      </section>
      <section className="what" style={{ paddingBottom: "80px", background: "#091020" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <div className="tm-section-label reveal">What We Do</div>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.15, marginBottom: "16px" }}>We do <span style={{ color: "var(--gold)" }}>two things.</span></h2>
          <p className="reveal" style={{ fontSize: "18px", fontWeight: 400, color: "var(--muted-lt)", marginBottom: "48px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>The Mark is a fully managed LinkedIn growth service for founders and CEOs who want measurable results from their online presence.</p>
          <WhatWeDo />
        </div>
      </section>
      <section className="what" id="what" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="tm-section-label reveal">Your Journey With Us</div>
          <h2 className="what-headline reveal" style={{ marginBottom: "64px" }}>From onboarding to <em>inbound pipeline.</em></h2>
          <Journey />
        </div>
      </section>
      <section className="casestudy" id="results" style={{ background: "#091020" }}>
        <div className="casestudy-inner">
          <div className="tm-section-label reveal">The Results</div>
          <h2 className="what-headline reveal" style={{ marginBottom: "64px", maxWidth: "none" }}>Real founders. <em>Real outcomes.</em></h2>
          <div className="reveal cards-2col case-grid">
            <CaseCard href="/the-mark/case-studies/tung-cao">
              <div className="case-card-media">
                <img src="/the-mark/images/tung-cao/tc-imc-group.webp" alt="Tung Cao at International Manufacturing Congress" className="case-card-img" style={{ objectPosition: "66% 64%", transformOrigin: "66% 64%", "--zoom": "1.9" }} />
                <div className="case-card-shade" />
              </div>
              <div className="case-card-body">
                <div className="case-card-name">Tung Cao</div>
                <div className="case-card-title">Co-Founder, 100B Global</div>
                <p className="case-card-intro">From zero to 1M+ impressions in 12 months. 2 speaker invitations, daily inbound from decision‑makers worldwide.</p>
                <div className="case-card-stats">
                  <div>
                    <div className="case-card-num">1M+</div>
                    <div className="case-card-label">Impressions</div>
                  </div>
                  <div>
                    <div className="case-card-num">7K</div>
                    <div className="case-card-label">Followers</div>
                  </div>
                </div>
                <span className="case-card-link">Read the case study <span className="case-card-arrow" aria-hidden="true">→</span></span>
              </div>
            </CaseCard>
            <CaseCard href="/the-mark/case-studies/loc-dang">
              <div className="case-card-media">
                <img src="/the-mark/images/loc-dang/ld-office-portrait.webp" alt="Loc Dang at his office in Austin" className="case-card-img" style={{ objectPosition: "62% 22%", transformOrigin: "62% 22%", "--zoom": "1.15" }} />
                <div className="case-card-shade" />
              </div>
              <div className="case-card-body">
                <div className="case-card-name">Loc Dang</div>
                <div className="case-card-title">Founder, Dang Law Group</div>
                <p className="case-card-intro">Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.</p>
                <div className="case-card-stats">
                  <div>
                    <div className="case-card-num">49K+</div>
                    <div className="case-card-label">Impressions</div>
                  </div>
                  <div>
                    <div className="case-card-num">3,596</div>
                    <div className="case-card-label">Followers</div>
                  </div>
                </div>
                <span className="case-card-link">Read the case study <span className="case-card-arrow" aria-hidden="true">→</span></span>
              </div>
            </CaseCard>
          </div>
          <p className="case-note reveal">Every client starts from a different place. Results depend on industry, audience, and consistency.</p>
          <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/the-mark/case-studies" style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "2px", color: "var(--gold)", textTransform: "uppercase", textDecoration: "none" }}>View all case studies →</Link>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--navy)", padding: "100px 64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="tm-section-label reveal" style={{ color: "var(--gold)", textAlign: "center" }}>Who This Is For</div>
          <div className="reveal cards-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "48px" }}>
            <div className="who-card" style={{ background: "rgba(209,172,114,0.04)", borderRadius: "8px", padding: "36px 28px 36px 32px", borderLeft: "3px solid var(--gold)", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px", opacity: 0.4 }}>01</div>
              <h3 style={{ fontSize: "24px", fontWeight: 600, color: "var(--white)", marginBottom: "16px", lineHeight: 1.35 }}>Founders<br /><span style={{ color: "var(--gold)" }}>&amp; CEOs.</span></h3>
              <p style={{ fontSize: "17px", fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.75 }}>You run the business. You don&#x27;t have time to run LinkedIn. But you know you should be there.</p>
            </div>
            <div className="who-card" style={{ background: "rgba(209,172,114,0.04)", borderRadius: "8px", padding: "36px 28px 36px 32px", borderLeft: "3px solid var(--gold)", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px", opacity: 0.4 }}>02</div>
              <h3 style={{ fontSize: "24px", fontWeight: 600, color: "var(--white)", marginBottom: "16px", lineHeight: 1.35 }}>Leaders with no<br /><span style={{ color: "var(--gold)" }}>online presence.</span></h3>
              <p style={{ fontSize: "17px", fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.75 }}>Your reputation is real but invisible online. The right people can&#x27;t find you.</p>
            </div>
            <div className="who-card" style={{ background: "rgba(209,172,114,0.04)", borderRadius: "8px", padding: "36px 28px 36px 32px", borderLeft: "3px solid var(--gold)", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px", opacity: 0.4 }}>03</div>
              <h3 style={{ fontSize: "24px", fontWeight: 600, color: "var(--white)", marginBottom: "16px", lineHeight: 1.35 }}>Businesses that<br /><span style={{ color: "var(--gold)" }}>rely on referrals.</span></h3>
              <p style={{ fontSize: "17px", fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.75 }}>Referrals work, but they don&#x27;t scale. LinkedIn puts you in front of new people every day.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="founder-section">
        <div className="founder reveal">
          <div className="founder-media">
            <span className="founder-frame" aria-hidden="true" />
            <div className="founder-photo">
              <img src="/the-mark/images/team/minh-mac.webp" alt="Minh Mac, Founder of 100Bold" />
              <span className="founder-curtain" aria-hidden="true" />
            </div>
          </div>
          <div className="founder-text">
            <div className="founder-label f-line" style={{ transitionDelay: "0.55s" }}>Behind The Mark</div>
            <h2 className="founder-name f-line" style={{ transitionDelay: "0.7s" }}>Minh Mac</h2>
            <div className="founder-role f-line" style={{ transitionDelay: "0.85s" }}>Founder, 100Bold</div>
            <span className="founder-rule f-line" style={{ transitionDelay: "1s" }} aria-hidden="true" />
            <p className="founder-bio f-line" style={{ transitionDelay: "1.1s" }}>15 years building businesses and scaling brands across Austin and Southeast Asia. The Mark is the system he built to turn a founder&#x27;s LinkedIn into a real growth channel.</p>
            <Link href="/the-mark/about" className="founder-btn f-line" style={{ transitionDelay: "1.3s" }}>Learn more <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <section id="apply" className="cta2-section">
        <h2 className="cta2-title reveal">Become the<br className="br-m" /> <span className="nowrap">best-known</span> name<br /><span className="tm-accent">in your industry.</span></h2>
        <p className="cta2-sub reveal">Limited spots. Application only.</p>
        <Link href="/the-mark/apply" className="btn-primary cta2-btn reveal">Apply to Work With Us</Link>
        <p className="cta2-mail reveal">Or reach us directly at <a href="mailto:start@100bold.co">start@100bold.co</a></p>
      </section>
      <Reveal />
      <ApplyBar />
    </>
  )
}
