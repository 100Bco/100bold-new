'use client'

import Link from 'next/link'

/** The Mark: case-study card with a cursor-following glow (--mx / --my). */
export default function CaseCard({ href, children }) {
  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Link href={href} className="tm-case-card" onMouseMove={onMouseMove}>
      {children}
    </Link>
  )
}
