import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const industryLinks = [
  { path: '/industries/local-services', name: 'Local Services' },
  { path: '/industries/construction', name: 'Construction' },
  { path: '/industries/real-estate', name: 'Real Estate' },
  { path: '/industries/law-firms', name: 'Law Firms' },
  { path: '/industries/rehab-chiro', name: 'Rehab & Chiro' },
  { path: '/industries/plumbing-roofing', name: 'Plumbing & Roofing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDropOpen(false); setMobileOpen(false) }, [location.pathname])

  const isActive = (path) => location.pathname === path
  const isIndustryActive = location.pathname.startsWith('/industries')

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nav-logo" />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
          <div className="nav-dropdown-wrap" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <Link to="/industries" className={`nav-dropdown-trigger${isIndustryActive ? ' nav-active' : ''}`}>
              Industries
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{marginLeft:4}}><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            {dropOpen && (
              <div className="nav-dropdown">
                {industryLinks.map(ind => (
                  <Link key={ind.path} to={ind.path} className="nav-dropdown-item">{ind.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
          <Link to="/work" className={isActive('/work') ? 'nav-active' : ''}>Work</Link>
          <Link to="/minai" className={isActive('/minai') ? 'nav-active' : ''}>MinAI</Link>
        </div>

        <div className="nav-btns">
          <a href="https://link.minai.biz/widget/bookings/100bold" target="_blank" rel="noopener noreferrer" className="nav-cta">Contact</a>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className={`nav-burger-line${mobileOpen ? ' open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile">
          <Link to="/" className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
          <Link to="/industries" className={isIndustryActive ? 'nav-active' : ''}>Industries</Link>
          {industryLinks.map(ind => (
            <Link key={ind.path} to={ind.path} className="nav-mobile-sub">{ind.name}</Link>
          ))}
          <Link to="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
          <Link to="/work" className={isActive('/work') ? 'nav-active' : ''}>Work</Link>
          <Link to="/minai" className={isActive('/minai') ? 'nav-active' : ''}>MinAI</Link>
          <a href="https://link.minai.biz/widget/bookings/100bold" target="_blank" rel="noopener noreferrer" className="nav-mobile-cta">Contact Now</a>
        </div>
      )}
    </div>
  )
}
