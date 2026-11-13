import { Link, useLocation } from 'react-router-dom'

export default function MobileCTA() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null
  return (
    <div className="nk-mcta">
      <Link to="/contact">Book a call
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  )
}
