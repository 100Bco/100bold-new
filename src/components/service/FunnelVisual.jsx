'use client'

/* Meta ads hero: an ad sends leads down a line; some drop off, the ones that sign are counted */
export default function FunnelVisual() {
  return (
    <div className="sdv sdv-funnel" aria-hidden="true">
      <div className="sdv-ad">
        <div className="sdv-ad-h"><span className="av" /><div><b>Your business</b><small>Sponsored</small></div></div>
        <div className="sdv-ad-img"><span>Hurt in a crash?</span><small>Talk to a lawyer today</small></div>
        <div className="sdv-ad-f"><span>yourbusiness.com</span><em>Call now</em></div>
      </div>
      <div className="sdv-flow">
        <div className="sdv-track">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <i key={i} className={i % 3 === 1 ? 'drop' : ''} style={{ animationDelay: i * 0.55 + 's' }} />)}
        </div>
        <ol className="sdv-stages">
          <li><b>Lead</b><small>Call or form</small></li>
          <li><b>Consult</b><small>Real conversation</small></li>
          <li className="win"><b>Signed client</b><small>What you pay for</small></li>
        </ol>
      </div>
      <div className="sdv-badge sdv-cpsc"><span>$</span><div><b>Cost per signed client</b><small>Reported every month</small></div></div>
    </div>
  )
}
