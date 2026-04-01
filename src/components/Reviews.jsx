export default function Reviews() {
  return (
    <section className="reviews-section" style={{position: 'relative'}}>
      {/* Cross/plus pattern */}
      <svg className="deco" style={{top: '12%', left: '5%', width: 50, height: 50, opacity: .08}} viewBox="0 0 50 50" fill="none">
        <path d="M25 8v34M8 25h34" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      {/* Dot grid */}
      <svg className="deco" style={{bottom: '10%', right: '4%', width: 70, height: 70, opacity: .06}} viewBox="0 0 70 70" fill="none">
        {[0,1,2,3,4,5].flatMap(r => [0,1,2,3,4,5].map(c => <circle key={`${r}${c}`} cx={5+c*12} cy={5+r*12} r="2" fill="var(--red)"/>))}
      </svg>
      <div className="mx">
        <h2 className="reviews-heading rv">5-Star <span className="accent">Reviews.</span></h2>
        <p className="reviews-sub rv rv-d2">Real reviews from real clients on Google.</p>

        {/* GHL Widget Placeholder — replace div below with GHL embed script */}
        <div className="reviews-widget rv rv-d2">
          <div className="reviews-placeholder">
            <div className="rp-cards">
              {[
                { name: 'David D.', text: 'Incredible results. Our Google presence went from invisible to dominant in 3 months.' },
                { name: 'Lezlie T.', text: 'They don\'t just do marketing — they understand our business inside and out.' },
                { name: 'Jason B.', text: '47 five-star reviews and counting. Best investment we\'ve made this year.' },
              ].map((r) => (
                <div key={r.name} className="rp-card">
                  <div className="rp-card-stars">★★★★★</div>
                  <p className="rp-card-text">"{r.text}"</p>
                  <p className="rp-card-name">— {r.name}</p>
                </div>
              ))}
            </div>
            <p className="rp-note" style={{display: 'none'}}>↑ Replace this section with your GHL Google Review widget embed code</p>
          </div>
        </div>
      </div>
    </section>
  )
}
