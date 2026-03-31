import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nav-logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
          <Link to="/industries" className={isActive('/industries') ? 'nav-active' : ''}>Industries</Link>
          <Link to="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
          <Link to="/work" className={isActive('/work') ? 'nav-active' : ''}>Work</Link>
          <Link to="/minai" className={isActive('/minai') ? 'nav-active' : ''}>MinAI</Link>
        </div>
        <div className="nav-btns">
          <a href="https://portfolio.100bold.co/" target="_blank" rel="noopener noreferrer" className="nav-portfolio">Our Portfolio</a>
          <button className="nav-cta">Contact</button>
        </div>
      </nav>
    </div>
  )
}
