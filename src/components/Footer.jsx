import { Link } from 'react-router-dom'

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
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
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
