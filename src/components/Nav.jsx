import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nav-logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/minai">MinAI</Link>
          <a href="https://portfolio.100bold.co/" target="_blank" rel="noopener noreferrer">Our Portfolio</a>
        </div>
        <button className="nav-cta">Contact</button>
      </nav>
    </div>
  )
}
