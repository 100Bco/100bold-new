export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-[60px] relative">
      {/* Decorative SVGs */}
      <svg className="absolute top-[15%] right-[4%] w-20 h-20 opacity-[0.12] pointer-events-none" viewBox="0 0 80 80" fill="none">
        <path d="M10 40C20 20,30 60,40 40C50 20,60 60,70 40" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
      <svg className="absolute bottom-[12%] left-[2%] w-[100px] h-[100px] opacity-[0.08] pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="6 8" fill="none"/>
      </svg>

      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-center">
          <div>
            <div className="rv vis inline-flex items-center gap-2 py-2 px-[18px] rounded-pill bg-cream text-[12px] font-bold text-text-2 mb-7">
              <span className="w-[7px] h-[7px] rounded-full bg-red" style={{ animation: 'pulse 2s ease-in-out infinite' }}></span>
              Austin, TX &bull; Accepting Clients
            </div>
            <h1 className="rv vis rv-d1 font-head text-[clamp(56px,7.5vw,110px)] leading-[0.88] text-dark uppercase mb-6 relative inline-block">
              START <span className="text-red">BRAVE.</span><br/>STAY BOLD.
              <svg className="absolute bottom-[-8px] left-0 w-full h-4 opacity-20" viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                <path d="M4 12C60 4,120 14,180 8C220 4,260 10,296 6" stroke="var(--color-red)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </h1>
            <p className="rv vis rv-d2 text-[clamp(17px,1.4vw,20px)] text-text-2 leading-[1.65] max-w-[460px] mb-9">
              We dominate Google, build LinkedIn authority, and install AI infrastructure for $5M+ service businesses.
            </p>
            <div className="rv vis rv-d3 flex gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2.5 font-body font-bold text-sm tracking-[0.5px] py-4 px-9 bg-dark text-white rounded-pill border-none cursor-pointer hover:bg-red hover:-translate-y-0.5 transition-all duration-350">
                Apply Now
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <a href="#services" className="inline-flex items-center gap-2.5 font-body font-bold text-sm tracking-[0.5px] py-4 px-9 bg-transparent text-dark border-2 border-border rounded-pill hover:border-red hover:text-red transition-all duration-350">
                View Playbook
              </a>
            </div>
          </div>

          <div className="rv vis rv-d2 relative">
            <svg className="absolute -top-6 -right-4 w-12 h-12 opacity-20 pointer-events-none" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L27 20L44 17L29 28L38 44L24 32L10 44L19 28L4 17L21 20Z" stroke="var(--color-red)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            </svg>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-dark shadow-[0_32px_72px_rgba(0,0,0,0.1)] group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="100Bold Showreel"
                className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-red flex items-center justify-center shadow-[0_10px_36px_rgba(200,16,46,0.3)] group-hover:scale-110 transition-transform duration-400">
                <svg className="w-[26px] h-[26px] text-white ml-[3px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
