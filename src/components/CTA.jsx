import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta-block">
      <div className="mx">
        <div className="cta-inner rv">
          <svg className="deco" style={{ left: 'clamp(32px, 8vw, 120px)', top: '50%', transform: 'translateY(-50%)', width: 140, height: 140 }} viewBox="0 0 140 140" fill="none">
            <path d="M20 120C28 80,50 50,90 42C102 40,112 44,118 50" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity=".3"/>
            <path d="M100 32L120 50L98 58" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".3"/>
          </svg>
          <svg className="deco" style={{ bottom: 24, right: 32, width: 64, height: 64, opacity: .1 }} viewBox="0 0 64 64" fill="none">
            {[0,1,2,3].flatMap(r => [0,1,2,3].map(c => <circle key={`${r}${c}`} cx={8+c*16} cy={8+r*16} r="3" fill="#fff"/>))}
          </svg>
          <h2>Ready to build your<br/>Growth Machine?</h2>
          <Link href="/contact" className="btn btn-white">Contact Now <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
        </div>
      </div>
    </section>
  )
}
