const services = [
  { title: 'GBP Domination', desc: 'Own every local search. Full optimization, review funnels, social content.' },
  { title: 'LinkedIn CEO Authority', desc: 'Strategy, ghostwriting, engagement, and network growth.' },
  { title: 'Social Media Content', desc: 'Facebook, Instagram, TikTok, Threads — designed to convert.' },
  { title: 'Paid Ads', desc: 'Google and Meta layered on organic foundation.' },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Services() {
  return (
    <section id="services" className="py-[clamp(80px,10vw,140px)] relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="rv text-[11px] font-bold tracking-[3px] uppercase text-text-3 mb-4">What We Do</div>
        <div className="rv rv-d1 font-head text-[clamp(44px,5vw,72px)] leading-[0.9] text-dark uppercase mb-12 max-w-[650px]">
          Here's how we build your <span className="text-red">Growth Machine.</span>
        </div>

        <div className="rv rv-d2 bg-red-block rounded-xl p-[clamp(32px,4vw,64px)] relative overflow-hidden">
          {/* Decorative dots */}
          <svg className="absolute bottom-5 right-5 w-20 h-20 opacity-[0.08] pointer-events-none" viewBox="0 0 80 80" fill="none">
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <circle key={`${r}-${c}`} cx={10+c*20} cy={10+r*20} r="3" fill="#fff"/>
            )))}
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,4vw,64px)] items-center">
            {/* Video */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1000"
                  alt="Showreel"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[rgba(255,255,255,0.95)] flex items-center justify-center shadow-[0_8px_28px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[22px] h-[22px] text-dark ml-[2px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div className="mt-4 text-sm font-bold text-white">100Bold Client Growth Showreel</div>
              <div className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed mt-1">From GBP to LinkedIn authority — the output machine in action.</div>
            </div>

            {/* Service list */}
            <div>
              <div className="text-[11px] font-bold tracking-[3px] uppercase text-[rgba(255,255,255,0.5)] mb-6">Types of Work</div>
              {services.map((srv) => (
                <div key={srv.title} className="group py-5 border-b-2 border-[rgba(255,255,255,0.1)] first:border-t-2 cursor-pointer hover:pl-3 transition-all duration-300">
                  <h3 className="font-head text-[clamp(32px,3vw,48px)] text-white uppercase leading-[0.95]">{srv.title}</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.5)] mt-0 max-h-0 overflow-hidden opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 group-hover:mt-2 transition-all duration-400 leading-relaxed">
                    {srv.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[12px] font-bold text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase">
                    Explore <ArrowIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
