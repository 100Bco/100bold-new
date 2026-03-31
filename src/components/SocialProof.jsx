const LinkedInIcon = () => (
  <svg className="li-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.14 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const posts = [
  {
    initials: 'DD',
    gradient: 'linear-gradient(135deg,#2a4a7f,#1a3460)',
    name: 'David Dang',
    title: 'Managing Attorney, Dang Law Group',
    body: 'Most PI attorneys wait for the phone to ring. We built a system that makes it ring. Free police report + AI follow-up. 90-day results speak for themselves...',
    likes: 892,
    comments: 127,
  },
  {
    initials: 'LT',
    gradient: 'linear-gradient(135deg,#4a2a2a,#6b3535)',
    name: 'LT Commercial Group',
    title: 'Commercial Real Estate, Austin TX',
    body: 'GBP had 12 reviews, page 3. Six months with 100Bold: 47 five-star reviews, top 3 for "commercial real estate Austin." Phone hasn\'t stopped...',
    likes: 745,
    comments: 84,
  },
  {
    initials: 'T9',
    gradient: 'linear-gradient(135deg,#2a3a2a,#1a5a1a)',
    name: 'T98 Rehab Center',
    title: 'Healthcare & Rehabilitation',
    body: 'Skeptical about LinkedIn for rehab. But the referral network lives there. 400K+ healthcare professionals monthly. Inbound changed everything...',
    likes: 631,
    comments: 96,
  },
]

export default function SocialProof() {
  return (
    <section className="section-gap" style={{ position: 'relative' }}>
      <div className="mx">
        <div className="sp-head rv">
          <h2>Real Posts.<br/><span className="accent">Real Results.</span></h2>
          <p>LinkedIn authority isn't a promise. It's a feed you can scroll right now.</p>
        </div>

        <div className="li-grid">
          {posts.map((post, i) => (
            <div key={post.name} className={`li-card rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''}`}>
              <div className="li-header">
                <div className="li-avatar" style={{ background: post.gradient }}>{post.initials}</div>
                <div>
                  <div className="li-name">{post.name}</div>
                  <div className="li-title">{post.title}</div>
                </div>
                <LinkedInIcon />
              </div>
              <div className="li-body">{post.body}</div>
              <div className="li-reactions">
                <div className="li-reactions-left">
                  <span className="li-emoji blue">&#128077;</span>
                  <span className="li-emoji heart">&#10084;</span>
                  <span className="li-emoji clap">&#128079;</span>
                  <span className="li-count">{post.likes}</span>
                </div>
                <span className="li-engagement">{post.comments} comments</span>
              </div>
              <a href="#" className="li-link">
                View Post
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
