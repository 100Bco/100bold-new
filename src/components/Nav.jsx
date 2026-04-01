import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const industryLinks = [
  { path: '/industries/local-services', name: 'Local Services', lottie: '/power-red.json' },
  { path: '/industries/construction', name: 'Construction', lottie: '/repair-tools-red.json' },
  { path: '/industries/real-estate', name: 'Real Estate', lottie: '/building-red.json' },
  { path: '/industries/law-firms', name: 'Law Firms', lottie: '/law-red.json' },
  { path: '/industries/rehab-chiro', name: 'Rehab & Chiro', lottie: '/wheelchair-insurance-red.json' },
  { path: '/industries/plumbing-roofing', name: 'Plumbing & Roofing', lottie: '/hourse-red.json' },
]

function NavLottie({ src }) {
  const ref = { current: null }
  useEffect(() => {
    let anim
    if (!ref.current) return
    import('lottie-web/build/player/lottie_light').then(lottie => {
      if (!ref.current) return
      anim = lottie.default.loadAnimation({
        container: ref.current, renderer: 'svg',
        loop: true, autoplay: true, path: src,
      })
    }).catch(() => {})
    return () => { if (anim) anim.destroy() }
  }, [src])
  return <div ref={el => ref.current = el} style={{width: 24, height: 24, flexShrink: 0}} />
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDropOpen(false) }, [location.pathname])

  const isActive = (path) => location.pathname === path
  const isIndustryActive = location.pathname.startsWith('/industries')

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nav-logo" />
        </Link>
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
                  <Link key={ind.path} to={ind.path} className="nav-dropdown-item">
                    <NavLottie src={ind.lottie} />
                    <span>{ind.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
