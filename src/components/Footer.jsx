mport { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-compact">
          <Link to="/" className="footer-logo-link">
            <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="footer-logo-img" />
          </Link>
          
          <div className="footer-nav">
            <Link to="/about">About</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/minai">MinAI</Link>
            
            <span className="footer-sep"></span>
            
            {/* Social Icons Section */}
            <div className="footer-socials" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {/* Facebook */}
              <a href="https://www.facebook.com/100bold.co" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/100bold" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/100bold.co/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              {/* Email */}
              <a href="mailto:start@100bold.co" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 100Bold Agency.</span>
          <span>Start Brave. Stay Bold.</span>
        </div>
      </div>
    </footer>
  )
}
