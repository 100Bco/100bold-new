import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`} id="navWrap">
      <nav className="nav">
        <a href="#">
          <img src="/logo.svg" alt="100Bold" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="#services">Playbook</a>
          <a href="#minai">MinAI</a>
          <a href="#work">Work</a>
        </div>
        <button className="nav-cta">Apply</button>
      </nav>
    </div>
  )
}
