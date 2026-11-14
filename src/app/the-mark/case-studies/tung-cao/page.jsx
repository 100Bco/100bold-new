import Link from 'next/link'
import CsxGallery from '@/components/the-mark/CsxGallery'
import Reveal from '@/components/the-mark/Reveal'
import ApplyBar from '@/components/the-mark/ApplyBar'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/case-studies/tung-cao (markup converted from the live SSR output).
export const metadata = {
  title: "Tung Cao: 1M+ LinkedIn Impressions in 12 Months | The Mark",
  description: "How The Mark took Tung Cao from zero LinkedIn presence to 1 million impressions, 296K members reached, 2 speaker invitations, and a pipeline of inbound deals.",
  alternates: { canonical: '/the-mark/case-studies/tung-cao' },
  openGraph: {
    title: "Tung Cao: 1M+ LinkedIn Impressions in 12 Months | The Mark",
    description: "How The Mark took Tung Cao from zero LinkedIn presence to 1 million impressions, 296K members reached, 2 speaker invitations, and a pipeline of inbound deals.",
    url: '/the-mark/case-studies/tung-cao',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function TungCaoCaseStudy() {
  return (
    <>
      <main className="csx">
        <section className="csx-hero">
          <div className="csx-wide">
            <Link href="/the-mark/case-studies" className="csx-back">← Go back</Link>
            <div className="csx-hero-frame">
              <img src="/the-mark/images/tung-cao/tc-imc-group.webp" alt="Tung Cao at International Manufacturing Congress 2026" style={{ objectPosition: "center 72%" }} />
              <div className="csx-hero-shade" />
            </div>
            <div className="csx-namecard">
              <img src="/the-mark/images/tung-cao/Tung%20Cao%20Photo.png" alt="" className="csx-avatar" style={{ objectPosition: "center" }} />
              <div>
                <div className="csx-name">Tung Cao<span className="tm-accent">.</span></div>
                <p className="csx-quote">“Within 12 months, investors and partners I had never met started reaching out. I was invited to speak at the International Manufacturing Congress in Hanoi. The content opened doors that moved my business forward.”</p>
              </div>
            </div>
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">Milestones</div>
            <h2 className="csx-h2 reveal">Key <span className="tm-accent">milestones</span></h2>
          </div>
          <div className="csx-milestones csx-wide reveal">
            <div className="csx-milestone">
              <div className="csx-milestone-num">01</div>
              <div className="csx-milestone-kicker">Speaker</div>
              <h3 className="csx-milestone-title">International Manufacturing Congress 2026</h3>
              <p className="csx-milestone-desc">Invited as a panelist at VIIF Hanoi. Organizers found Tung directly through LinkedIn content.</p>
            </div>
            <div className="csx-milestone">
              <div className="csx-milestone-num">02</div>
              <div className="csx-milestone-kicker">Podcast</div>
              <h3 className="csx-milestone-title">Vietnam Supply Chain Network</h3>
              <p className="csx-milestone-desc">VSCN (9K+ members) invited Tung for a podcast on sourcing and export, sourced from his LinkedIn posts.</p>
            </div>
            <div className="csx-milestone">
              <div className="csx-milestone-num">03</div>
              <h3 className="csx-milestone-title">Global Inbound Pipeline</h3>
              <p className="csx-milestone-desc">Partnership proposals from Indonesia, sourcing inquiries from Brazil, collaboration from NUS Singapore. All inbound through LinkedIn.</p>
            </div>
          </div>
        </section>
        <section className="csx-section csx-section--tight">
          <div className="csx-box csx-box--glow csx-narrow reveal">
            <h3 className="csx-h3">Results</h3>
            <div className="csx-checks">
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>1,000,521 total impressions</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>296,123 members reached</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>7,000+ followers from zero</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>89% out-of-network reach</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>2x speaker invitations</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>Daily inbound conversations</span>
              </div>
            </div>
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">By the numbers</div>
            <h2 className="csx-h2 reveal">In 12 months</h2>
          </div>
          <div className="csx-nums csx-mid reveal">
            <div className="csx-num">
              <div className="csx-num-value">1M+</div>
              <div className="csx-num-label">Impressions in 12 months</div>
            </div>
            <div className="csx-num">
              <div className="csx-num-value">89%</div>
              <div className="csx-num-label">Reach outside existing network</div>
            </div>
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">Take a look at</div>
            <h2 className="csx-h2 reveal">The <span className="tm-accent">proof</span></h2>
          </div>
          <div className="csx-wide reveal">
            <CsxGallery kind="proof" images={[
              {
                "src": "/the-mark/images/tung-cao/tc-proof-analytics.webp",
                "alt": "LinkedIn analytics: 1,000,521 impressions, 89% out-of-network, 296,123 members reached",
                "fit": "contain"
              },
              {
                "src": "/the-mark/images/tung-cao/tc-proof-2.webp",
                "alt": "Tung Cao: 1M+ LinkedIn impressions in 12 months"
              },
              {
                "src": "/the-mark/images/tung-cao/tc-proof-inbox.webp",
                "alt": "Real inbound LinkedIn messages to Tung Cao, sender names blurred",
                "href": "/the-mark/images/tung-cao/tc-proof-inbox-all.webp",
                "cta": "View all messages ↗"
              }
            ]} />
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">The work</div>
            <h2 className="csx-h2 reveal">What we <span className="tm-accent">did</span></h2>
          </div>
          <div className="csx-box csx-narrow reveal">
            <p className="csx-body">Co-Founder and Head of International Trade at 100B Global, a company bridging Vietnamese manufacturers with international buyers. Despite years of industry expertise, Tung had zero LinkedIn presence. No followers, no content, no visibility to the global buyers and partners he needed to reach.</p>
            <p className="csx-body">We started with deep-dive voice capture sessions to extract Tung&#x27;s expertise in sourcing, export compliance, and Vietnam&#x27;s manufacturing landscape. From there, we built a content strategy focused on the specific problems his target audience faces when sourcing from Vietnam.</p>
            <p className="csx-body"><strong>3 to 4 posts per week.</strong> Strategic commentary on trade regulations, factory selection, quality control, and cross-border logistics. Full account management. An amplification network that triggered the algorithm from day one.</p>
            <p className="csx-body">The content wasn&#x27;t generic industry news. It was Tung&#x27;s real experience, published consistently and distributed to the right audience.</p>
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">Content</div>
            <h2 className="csx-h2 reveal">From the <span className="tm-accent">feed</span></h2>
          </div>
          <div className="csx-wide reveal">
            <CsxGallery kind="feed" images={[
              {
                "src": "/the-mark/images/tung-cao/tc-feed-1.webp",
                "alt": "LinkedIn post: Top 10 coffee companies worldwide 2026. Where is Vietnam?",
                "href": "https://www.linkedin.com/feed/update/urn:li:activity:7506338118694940673/"
              },
              {
                "src": "/the-mark/images/tung-cao/tc-feed-2.webp",
                "alt": "LinkedIn post: David Thai, founder of Highlands Coffee",
                "href": "https://www.linkedin.com/feed/update/urn:li:activity:7509242820700917760/"
              },
              {
                "src": "/the-mark/images/tung-cao/tc-feed-3.webp",
                "alt": "LinkedIn post: Vietnam feeds the world. Why become the next Singapore?",
                "href": "https://lnkd.in/p/gVd5VMDk"
              }
            ]} />
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">Across socials</div>
            <h2 className="csx-h2 reveal">Follow <span className="tm-accent">Tung</span></h2>
          </div>
          <div className="csx-socials reveal">
            <a href="https://www.linkedin.com/in/tungcao-thomas/" target="_blank" rel="noopener noreferrer" className="csx-social">
              <span className="csx-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="csx-social-text">
                <span className="csx-social-name">LinkedIn</span>
                <span className="csx-social-handle">tungcao-thomas</span>
              </span>
              <span className="csx-social-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <section id="apply" className="cta2-section">
        <h2 className="cta2-title reveal">Want results like <span className="tm-accent">Tung?</span></h2>
        <p className="cta2-sub reveal">We take on a limited number of clients at a time. Tell us your goal and we&#x27;ll show you what we&#x27;d build.</p>
        <Link href="/the-mark/apply" className="btn-primary cta2-btn reveal">Apply to Work With Us</Link>
      </section>
      <Reveal />
      <ApplyBar />
    </>
  )
}
