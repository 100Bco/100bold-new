import Link from 'next/link'
import CaseCard from '@/components/the-mark/CaseCard'
import Reveal from '@/components/the-mark/Reveal'
import ApplyBar from '@/components/the-mark/ApplyBar'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/case-studies (markup converted from the live SSR output).
export const metadata = {
  title: "Case Studies | The Mark",
  description: "Real results from real founders. See how The Mark turned zero LinkedIn presence into 1M+ impressions, speaker invitations, and inbound deals.",
  alternates: { canonical: '/the-mark/case-studies' },
  openGraph: {
    title: "Case Studies | The Mark",
    description: "Real results from real founders. See how The Mark turned zero LinkedIn presence into 1M+ impressions, speaker invitations, and inbound deals.",
    url: '/the-mark/case-studies',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="tm-page-hero" style={{ background: "#091020", padding: "160px 64px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="tm-section-label">Case Studies</div>
          <h1 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.1, marginBottom: "20px" }}>The <span style={{ color: "var(--gold)" }}>results.</span></h1>
          <p style={{ fontSize: "18px", fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>The results you can expect from working with us.</p>
        </div>
      </section>
      <section style={{ background: "#091020", padding: "0 64px 120px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
