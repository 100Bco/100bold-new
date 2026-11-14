import Link from 'next/link'
import Reveal from '@/components/the-mark/Reveal'
import ApplyBar from '@/components/the-mark/ApplyBar'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/about (markup converted from the live SSR output).
export const metadata = {
  title: "About | The Mark",
  description: "The Mark is built by Minh Mac, Founder of 100Bold. 15 years building brands across Austin and Southeast Asia.",
  alternates: { canonical: '/the-mark/about' },
  openGraph: {
    title: "About | The Mark",
    description: "The Mark is built by Minh Mac, Founder of 100Bold. 15 years building brands across Austin and Southeast Asia.",
    url: '/the-mark/about',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function AboutPage() {
  return (
    <>
      <main className="ab">
        <section className="ab-hero">
          <div className="ab-wrap">
            <h1 className="ab-title reveal">We don&#x27;t run your LinkedIn for likes.<span className="tm-accent"> We run it for business.</span></h1>
            <p className="ab-lead reveal">The deals, the partnerships, the speaking invitations. It all starts with showing up. The Mark is the system that makes it happen.</p>
          </div>
        </section>
        <section className="ab-story">
          <div className="ab-wrap ab-split">
            <div className="ab-text reveal">
              <div className="csx-label">Behind The Mark</div>
              <h2 className="ab-h2">Built by someone who has done the work.</h2>
              <p className="ab-body"><strong>Minh Mac</strong> is the Founder of 100Bold, a growth agency based in Austin, Texas. Over 15 years he has built businesses, scaled brands, and learned what it takes to turn a founder&#x27;s LinkedIn into a real growth channel.</p>
              <ul className="ab-checks">
                <li><span className="ab-check-icon" aria-hidden="true">✓</span>15 years building businesses and scaling brands.</li>
                <li><span className="ab-check-icon" aria-hidden="true">✓</span>Based in Austin, working across Southeast Asia.</li>
                <li><span className="ab-check-icon" aria-hidden="true">✓</span>Founder of 100Bold, a full-service growth agency.</li>
              </ul>
              <a href="https://www.linkedin.com/in/minhlaunch/" className="founder-btn" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">→</span></a>
            </div>
            <div className="ab-photo reveal">
              <img src="/the-mark/images/team/minh-mac.webp" alt="Minh Mac, Founder of 100Bold" />
              <div className="ab-photo-tag">
                <span className="ab-photo-name">Minh Mac</span>
                <span className="ab-photo-role">Founder, 100Bold</span>
              </div>
            </div>
          </div>
        </section>
        <section className="ab-faq">
          <div className="ab-wrap">
            <div className="csx-head">
              <div className="csx-label reveal">Questions</div>
              <h2 className="csx-h2 reveal">Frequently <span className="tm-accent">asked</span></h2>
              <span className="ab-underline reveal" aria-hidden="true" />
            </div>
            <div className="ab-faq-list">
              <div className="ab-faq-card reveal">
                <span className="ab-faq-num">1</span>
                <div>
                  <h3 className="ab-faq-q">How much of my time does this take?</h3>
                  <p className="ab-faq-a">3 to 4 hours upfront for voice capture sessions. After that, less than 30 minutes per month for strategy alignment. We handle everything else.</p>
                </div>
              </div>
              <div className="ab-faq-card reveal">
                <span className="ab-faq-num">2</span>
                <div>
                  <h3 className="ab-faq-q">How long until I see results?</h3>
                  <p className="ab-faq-a">Most clients see meaningful engagement within the first 30 days. Inbound conversations typically start within 60 to 90 days. Growth accelerates from month 3 onward.</p>
                </div>
              </div>
              <div className="ab-faq-card reveal">
                <span className="ab-faq-num">3</span>
                <div>
                  <h3 className="ab-faq-q">Do you manage other platforms besides LinkedIn?</h3>
                  <p className="ab-faq-a">LinkedIn is our primary focus. For clients who need it, we also manage content on company pages and provide full-service marketing through 100Bold, including paid ads, SEO, video production, and brand strategy.</p>
                </div>
              </div>
              <div className="ab-faq-card reveal">
                <span className="ab-faq-num">4</span>
                <div>
                  <h3 className="ab-faq-q">Who writes the content?</h3>
                  <p className="ab-faq-a">Our team writes every post, but it sounds like you. The voice capture process ensures your thinking, your stories, and your expertise come through in every piece.</p>
                </div>
              </div>
              <div className="ab-faq-card reveal">
                <span className="ab-faq-num">5</span>
                <div>
                  <h3 className="ab-faq-q">What industries do you work with?</h3>
                  <p className="ab-faq-a">We work across multiple industries with proven results in legal, real estate, investment, import/export, and manufacturing. The strategy adapts to your market and your target audience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
