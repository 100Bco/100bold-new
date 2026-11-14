import Link from 'next/link'
import CsxGallery from '@/components/the-mark/CsxGallery'
import Reveal from '@/components/the-mark/Reveal'
import ApplyBar from '@/components/the-mark/ApplyBar'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/case-studies/loc-dang (markup converted from the live SSR output).
export const metadata = {
  title: "Loc Dang: 49K+ Impressions in 4 Months From Zero | The Mark",
  description: "How The Mark took Loc Dang from zero social media presence to 49K+ impressions, 3,596 followers, and a stream of inbound opportunities in just 4 months.",
  alternates: { canonical: '/the-mark/case-studies/loc-dang' },
  openGraph: {
    title: "Loc Dang: 49K+ Impressions in 4 Months From Zero | The Mark",
    description: "How The Mark took Loc Dang from zero social media presence to 49K+ impressions, 3,596 followers, and a stream of inbound opportunities in just 4 months.",
    url: '/the-mark/case-studies/loc-dang',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function LocDangCaseStudy() {
  return (
    <>
      <main className="csx">
        <section className="csx-hero">
          <div className="csx-wide">
            <Link href="/the-mark/case-studies" className="csx-back">← Go back</Link>
            <div className="csx-hero-frame">
              <img src="/the-mark/images/loc-dang/ld-billboard.webp" alt="Dang Law Group billboard in Austin, Texas" style={{ objectPosition: "center 38%" }} />
              <div className="csx-hero-shade" />
            </div>
            <div className="csx-namecard">
              <img src="/the-mark/images/loc-dang/Loc%20Dang.png" alt="" className="csx-avatar" style={{ objectPosition: "center 20%" }} />
              <div>
                <div className="csx-name">Loc Dang<span className="tm-accent">.</span></div>
                <p className="csx-quote">“I never used social media before. Within 4 months, attorneys and business owners were reaching out to connect, podcast hosts were inviting me on their shows, and my name was being recognized in the Austin legal community, all from LinkedIn.”</p>
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
              <div className="csx-milestone-kicker">Podcast</div>
              <h3 className="csx-milestone-title">Austin Business Spotlight Series</h3>
              <p className="csx-milestone-desc">Featured podcast (200+ episodes) reached out via LinkedIn and followed up three times to book Loc as a guest.</p>
            </div>
            <div className="csx-milestone">
              <div className="csx-milestone-num">02</div>
              <div className="csx-milestone-kicker">VIP Event</div>
              <h3 className="csx-milestone-title">Moody Center</h3>
              <p className="csx-milestone-desc">Invited to exclusive Moody Center events for strategic partnerships within the legal industry.</p>
            </div>
            <div className="csx-milestone">
              <div className="csx-milestone-num">03</div>
              <h3 className="csx-milestone-title">Peer &amp; Partner Inbound</h3>
              <p className="csx-milestone-desc">Attorneys, firm owners, and sales directors reaching out for lunch meetings, calls, and collaboration. All inbound.</p>
            </div>
          </div>
        </section>
        <section className="csx-section csx-section--tight">
          <div className="csx-box csx-box--glow csx-narrow reveal">
            <h3 className="csx-h3">Results</h3>
            <div className="csx-checks">
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>49,055 total impressions</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>3,596 followers from zero</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>4,632% growth rate</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>12% attorney audience</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>Podcast invitation received</span>
              </div>
              <div className="csx-check">
                <span className="csx-check-icon">✓</span>
                <span>10+ inbound conversations</span>
              </div>
            </div>
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">By the numbers</div>
            <h2 className="csx-h2 reveal">In 4 months</h2>
          </div>
          <div className="csx-nums csx-mid reveal">
            <div className="csx-num">
              <div className="csx-num-value">4,632%</div>
              <div className="csx-num-label">Follower growth</div>
            </div>
            <div className="csx-num">
              <div className="csx-num-value">0 → 3,596</div>
              <div className="csx-num-label">Followers in 4 months</div>
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
                "src": "/the-mark/images/loc-dang/ld-proof-analytics.webp",
                "alt": "LinkedIn analytics: 49,055 impressions, 13,238 members reached",
                "fit": "contain"
              },
              {
                "src": "/the-mark/images/loc-dang/ld-proof-2.webp",
                "alt": "Loc Dang: +4,632% follower growth in 4 months"
              },
              {
                "src": "/the-mark/images/loc-dang/ld-proof-inbox.webp",
                "alt": "Real inbound LinkedIn messages to Loc Dang, sender names blurred",
                "href": "/the-mark/images/loc-dang/ld-proof-inbox-all.webp",
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
            <p className="csx-body">Founder of Dang Law Group, a personal injury law firm based in Austin, Texas. Before working with The Mark, Loc had never used social media. No LinkedIn profile activity, no content, no online presence. His reputation was built entirely through word of mouth and courtroom results.</p>
            <p className="csx-body">Starting in June 2026, we built Loc&#x27;s LinkedIn presence from scratch. Voice capture sessions extracted his perspective on personal injury law, client advocacy, and what accident victims need to know.</p>
            <p className="csx-body"><strong>3 to 4 posts per week</strong> covering accident case insights, legal rights education, community involvement, and the story of building Dang Law Group. Full account management handled.</p>
            <p className="csx-body">In 4 months, Loc went from invisible online to a recognized voice in Austin&#x27;s legal and business community.</p>
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
                "src": "/the-mark/images/loc-dang/ld-feed-1.webp",
                "alt": "LinkedIn post: Hit by a drunk driver? Call Dang Law Group",
                "href": "https://lnkd.in/p/g_M7-kNS"
              },
              {
                "src": "/the-mark/images/loc-dang/ld-feed-2.webp",
                "alt": "LinkedIn post: Tennessee says no to private equity owning law firms",
                "href": "https://lnkd.in/p/g7Avgk6u"
              },
              {
                "src": "/the-mark/images/loc-dang/ld-feed-3.webp",
                "alt": "LinkedIn post: Dang Law Group, accidents and injuries",
                "href": "https://lnkd.in/p/gUNfc6Ds"
              }
            ]} />
          </div>
        </section>
        <section className="csx-section">
          <div className="csx-head">
            <div className="csx-label reveal">Across socials</div>
            <h2 className="csx-h2 reveal">Follow <span className="tm-accent">Loc</span></h2>
          </div>
          <div className="csx-socials reveal">
            <a href="https://www.linkedin.com/in/loc-dang-dlg/" target="_blank" rel="noopener noreferrer" className="csx-social">
              <span className="csx-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="csx-social-text">
                <span className="csx-social-name">LinkedIn</span>
                <span className="csx-social-handle">loc-dang-dlg</span>
              </span>
              <span className="csx-social-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <section id="apply" className="cta2-section">
        <h2 className="cta2-title reveal">Want results like <span className="tm-accent">Loc?</span></h2>
        <p className="cta2-sub reveal">We take on a limited number of clients at a time. Tell us your goal and we&#x27;ll show you what we&#x27;d build.</p>
        <Link href="/the-mark/apply" className="btn-primary cta2-btn reveal">Apply to Work With Us</Link>
      </section>
      <Reveal />
      <ApplyBar />
    </>
  )
}
