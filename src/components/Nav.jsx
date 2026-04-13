'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const industryLinks = [
  { path: '/industries/construction', name: 'Contractors & Builders' },
  { path: '/industries/plumbing-roofing', name: 'Plumbing & Roofing' },
  { path: '/industries/local-services', name: 'Home Services & Solar' },
  { path: '/industries/real-estate', name: 'Real Estate' },
  { path: '/industries/law-firms', name: 'PI Law Firms' },
  { path: '/industries/rehab-chiro', name: 'Chiro & Rehab' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDropOpen(false); setMobileOpen(false) }, [pathname])

  const isActive = (path) => pathname === path
  const isIndustryActive = pathname.startsWith('/industries')

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link href="/">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" className="nav-logo" />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          <Link href="/" className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link href="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
          <div className="nav-dropdown-wrap" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <Link href="/industries" className={`nav-dropdown-trigger${isIndustryActive ? ' nav-active' : ''}`}>
              Industries
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{marginLeft:4}}><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            {dropOpen && (
              <div className="nav-dropdown">
                {industryLinks.map(ind => (
                  <Link key={ind.path} href={ind.path} className="nav-dropdown-item">{ind.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
          <Link href="/work" className={isActive('/work') ? 'nav-active' : ''}>Work</Link>
          <Link href="/minai" className={isActive('/minai') ? 'nav-active' : ''}>MinAI</Link>
        </div>

        <div className="nav-btns">
          <a href="https://app.minai.biz/" target="_blank" rel="noopener noreferrer" className="nav-login">Log In</a>
          <Link href="/contact" className="nav-cta">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className={`nav-burger-line${mobileOpen ? ' open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile">
          <Link href="/" className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link href="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
          <Link href="/industries" className={isIndustryActive ? 'nav-active' : ''}>Industries</Link>
          {industryLinks.map(ind => (
            <Link key={ind.path} href={ind.path} className="nav-mobile-sub">{ind.name}</Link>
          ))}
          <Link href="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
          <Link href="/work" className={isActive('/work') ? 'nav-active' : ''}>Work</Link>
          <Link href="/minai" className={isActive('/minai') ? 'nav-active' : ''}>MinAI</Link>
          <Link href="/contact" className="nav-mobile-cta">Contact Us</Link>
        </div>
      )}
    </div>
  )
}
