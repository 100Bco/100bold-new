const LinkedInIcon = () => (
  <svg className="ml-auto w-[18px] h-[18px] text-linkedin opacity-40 shrink-0" viewBox="0 0 24 24" fill="currentColor">
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
    <section className="py-[clamp(80px,10vw,140px)] relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="rv mb-[clamp(32px,4vw,56px)]">
          <h2 className="font-head text-[clamp(44px,5vw,72px)] leading-[0.9] text-dark uppercase mb-2.5">
            Real Posts.<br/><span className="text-red">Real Results.</span>
          </h2>
          <p className="text-[17px] text-text-2 max-w-[480px]">LinkedIn authority isn't a promise. It's a feed you can scroll right now.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <div key={post.name} className={`rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''} bg-card rounded-sm border border-border p-6 hover:border-linkedin hover:shadow-[0_10px_40px_rgba(10,102,194,0.07)] hover:-translate-y-[3px] transition-all duration-400`}>
              <div className="flex gap-3 items-start mb-4">
                <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-head text-[18px] text-white" style={{ background: post.gradient }}>
                  {post.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-dark leading-tight">{post.name}</div>
                  <div className="text-[11px] text-text-3 mt-[1px]">{post.title}</div>
                </div>
                <LinkedInIcon />
              </div>
              <div className="text-[13px] text-text-2 leading-[1.65] mb-4 line-clamp-4">{post.body}</div>
              <div className="flex items-center justify-between pt-3.5 border-t border-border">
                <div className="flex items-center gap-1">
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] bg-[#1877F2] text-white z-[3] border-2 border-card -mr-[3px]">&#128077;</span>
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] bg-[#E8453C] text-white z-[2] border-2 border-card -mr-[3px]">&#10084;</span>
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] bg-[#5DBB63] text-white z-[1] border-2 border-card">&#128079;</span>
                  <span className="text-[12px] text-text-3 ml-1.5">{post.likes}</span>
                </div>
                <span className="text-[11px] text-text-3">{post.comments} comments</span>
              </div>
              <a href="#" className="inline-flex items-center gap-[5px] mt-3 text-[11px] font-bold text-linkedin hover:gap-[9px] transition-[gap] duration-300">
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
