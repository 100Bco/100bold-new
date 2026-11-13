'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { serviceLinks, industryLinks, aboutLinks } from '@/data/nav'

const menu = [
  { name: 'Services', path: '/services', children: serviceLinks },
  { name: 'Industries', path: '/industries', children: industryLinks },
  { name: 'Work', path: '/work' },
  { name: 'Portal', path: '/portal' },
  { name: 'The Mark', path: '/the-mark', tag: 'For CEOs' },
  { name: 'About', path: '/about', children: aboutLinks, match: ['/about', '/insights', '/contact'] },
]

const Chevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(null); setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-locked', mobileOpen)
  }, [mobileOpen])

  const isActive = (item) => {
    const paths = item.match || [item.path]
    return paths.some(p => pathname === p || pathname.startsWith(p + '/'))
  }

  return (
    <header className={`nk-nav-wrap${scrolled ? ' scrolled' : ''}${mobileOpen ? ' menu-open' : ''}`}>
      <nav className="nk-nav" aria-label="Main">
        <Link href="/" className="nk-logo" aria-label="100Bold home">
          <img src="/100BOLD - OP3-09 (1).png" alt="100Bold" />
        </Link>

        <ul className="nk-links">
          {menu.map(item => (
            <li
              key={item.name}
              className={`nk-item${item.children ? ' has-drop' : ''}${open === item.name ? ' open' : ''}`}
              onMouseEnter={() => item.children && setOpen(item.name)}
              onMouseLeave={() => item.children && setOpen(null)}
            >
              <Link href={item.path} className={`nk-link${isActive(item) ? ' active' : ''}`}>
                <span>{item.name}</span>
                {item.tag && <em className="nk-tag">{item.tag}</em>}
                {item.children && <Chevron />}
              </Link>
              {item.children && (
                <div className="nk-drop">
                  {item.children.map(c => (
                    <Link key={c.path} href={c.path} className={`nk-drop-item${pathname === c.path ? ' active' : ''}`}>
                      {c.name}
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nk-btns">
          <a href="https://app.minai.biz/" target="_blank" rel="noopener noreferrer" className="nk-login">Log In</a>
          <Link href="/contact" className="nk-cta"><span data-text="Book a call">Book a call</span></Link>
        </div>

        <button className="nk-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" aria-expanded={mobileOpen}>
          <span /><span />
        </button>
      </nav>

      <div className="nk-mobile" aria-hidden={!mobileOpen}>
        <div className="nk-mobile-inner">
          {menu.map((item, i) => (
            <div key={item.name} className="nk-m-group" style={{ '--i': i }}>
              <Link href={item.path} className={`nk-m-link${isActive(item) ? ' active' : ''}`}>
                {item.name}{item.tag && <em className="nk-tag">{item.tag}</em>}
              </Link>
              {item.children && (
                <div className="nk-m-sub">
                  {item.children.map(c => <Link key={c.path} href={c.path}>{c.name}</Link>)}
                </div>
              )}
            </div>
          ))}
          <div className="nk-m-foot">
            <Link href="/contact" className="nk-m-cta">Book a call</Link>
            <a href="https://app.minai.biz/" target="_blank" rel="noopener noreferrer" className="nk-m-login">Log In</a>
          </div>
        </div>
      </div>
    </header>
  )
}
