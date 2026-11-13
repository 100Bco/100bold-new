import Link from 'next/link'
import { serviceLinks, industryLinks } from '@/data/nav'

const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/100bold', path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
  { name: 'Facebook', href: 'https://www.facebook.com/100bold.co', path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
  { name: 'Instagram', href: 'https://www.instagram.com/100bold.co/', path: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
]

export default function Footer() {
  return (
    <footer className="nk-footer">
      <div className="mx">
        <div className="nk-f-top">
          <div className="nk-f-brand">
            <Link href="/" aria-label="100Bold home">
              <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nk-f-logo" />
            </Link>
            <p>100Bold is a growth agency for $5M+ service businesses. We get you found on Google and in AI search, turn ad spend into signed clients and booked jobs, and make your CEO the best-known name in your market.</p>
          </div>

          <div className="nk-f-cols">
            <div className="nk-f-col">
              <h3>Services</h3>
              <ul>
                {serviceLinks.map(l => <li key={l.path}><Link href={l.path}>{l.name}</Link></li>)}
                <li><Link href="/portal">Portal, AI production</Link></li>
                <li><Link href="/the-mark">The Mark, LinkedIn for CEOs</Link></li>
              </ul>
            </div>
            <div className="nk-f-col">
              <h3>Industries</h3>
              <ul>
                {industryLinks.map(l => <li key={l.path}><Link href={l.path}>{l.name}</Link></li>)}
              </ul>
            </div>
            <div className="nk-f-col">
              <h3>Company</h3>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/insights">Insights</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
            <div className="nk-f-col">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:start@100bold.co">start@100bold.co</a></li>
                <li><a href="tel:+17577735707">757-773-5707</a></li>
                <li><address>12516 Walnut Park Crossing #200<br/>Austin, TX 78753</address></li>
              </ul>
              <div className="nk-f-social">
                {social.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.path}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="nk-f-word" aria-hidden="true">100BOLD<span>.</span></div>

        <div className="nk-f-bottom">
          <span>&copy; 2026 100Bold Agency. Start Brave. Stay Bold.</span>
          <span>Automation and CRM powered by <a href="https://www.minai.biz/" target="_blank" rel="noopener noreferrer">MinAI</a></span>
        </div>
      </div>
    </footer>
  )
}
