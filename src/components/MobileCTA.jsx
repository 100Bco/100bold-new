'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileCTA() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(false)
    const targets = document.querySelectorAll('.xc, .nk-footer')
    if (!targets.length) return
    const seen = new Set()
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
      setHidden(seen.size > 0)
    }, { threshold: 0.15 })
    targets.forEach((t) => obs.observe(t))
    return () => obs.disconnect()
  }, [pathname])

  if (pathname === '/contact') return null
  return (
    <div className={`nk-mcta${hidden ? ' is-hidden' : ''}`}>
      <Link href="/contact">Book a call
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  )
}
