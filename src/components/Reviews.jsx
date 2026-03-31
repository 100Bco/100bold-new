export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="mx">
        <h2 className="reviews-heading rv">5-Star <span className="accent">Reviews.</span></h2>
        <p className="reviews-sub rv rv-d2">Real reviews from real clients on Google.</p>

        {/* GHL Widget Placeholder — replace div below with GHL embed script */}
        <div className="reviews-widget rv rv-d2">
          <div className="reviews-placeholder">
            <div className="rp-stars">
              {'★★★★★'.split('').map((s, i) => <span key={i} className="rp-star">{s}</span>)}
            </div>
            <p className="rp-rating">5.0 on Google</p>
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
            <p className="rp-note">↑ Replace this section with your GHL Google Review widget embed code</p>
          </div>
        </div>
      </div>
    </section>
  )
}
