'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/** The Mark: mobile sticky "Apply" bar. Visible after 0.8 viewport of scroll, until #apply is on screen. */
export default function ApplyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const target = document.getElementById('apply')
      const past = window.scrollY > window.innerHeight * 0.8
      const reached = !!target && target.getBoundingClientRect().top < window.innerHeight
      setVisible(past && !reached)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className={`apply-bar${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <Link href="/the-mark/apply" className="btn-primary apply-bar-btn" tabIndex={visible ? 0 : -1}>
        Apply to Work With Us
      </Link>
    </div>
  )
}
