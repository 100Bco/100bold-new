'use client'

import { useEffect, useState } from 'react'

/* Web design hero: a site assembles itself block by block, then scores fast and sends a lead */
export default function BuildVisual() {
  const [run, setRun] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setRun((r) => r + 1), 8000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="sdv sdv-build" aria-hidden="true" key={run}>
      <div className="sdv-win">
        <div className="sdv-top"><i /><i /><i /><span className="sdv-url">yourfirm.com</span></div>
        <div className="sdv-page">
          <div className="b b-nav"><span className="lg" /><span /><span /><span /><span className="bt" /></div>
          <div className="b b-hero"><span className="h1" /><span className="h1 s" /><span className="p" /><span className="cta" /></div>
          <div className="b b-cards"><span /><span /><span /></div>
          <div className="b b-rev"><span className="st">★★★★★</span><span className="ln" /></div>
        </div>
      </div>
      <div className="sdv-badge sdv-speed"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" /><circle className="arc" cx="20" cy="20" r="16" /></svg><div><b>Fast</b><small>Page speed</small></div></div>
      <div className="sdv-badge sdv-schema"><span>{'{ }'}</span><div><b>Schema</b><small>Readable by AI</small></div></div>
      <div className="sdv-badge sdv-lead"><span className="dot" /><div><b>New lead</b><small>Sent to your CRM</small></div></div>
    </div>
  )
}
