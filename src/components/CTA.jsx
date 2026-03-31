export default function CTA() {
  return (
    <section className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="rv bg-red-block rounded-xl py-[clamp(48px,6vw,96px)] px-[clamp(32px,5vw,72px)] relative overflow-hidden text-center">
          {/* Decorative arrow */}
          <svg className="absolute left-[clamp(32px,8vw,120px)] top-1/2 -translate-y-1/2 w-[140px] h-[140px] pointer-events-none" viewBox="0 0 140 140" fill="none">
            <path d="M20 120C28 80,50 50,90 42C102 40,112 44,118 50" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity=".3"/>
            <path d="M100 32L120 50L98 58" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".3"/>
          </svg>
          {/* Decorative dots */}
          <svg className="absolute bottom-6 right-8 w-16 h-16 opacity-10 pointer-events-none" viewBox="0 0 64 64" fill="none">
            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
              <circle key={`${r}-${c}`} cx={8+c*16} cy={8+r*16} r="3" fill="#fff"/>
            )))}
          </svg>

          <h2 className="relative z-[2] font-head text-[clamp(40px,5vw,72px)] text-white uppercase leading-[0.92] mb-7">
            Ready to build your<br/>Growth Machine?
          </h2>
          <button className="relative z-[2] inline-flex items-center gap-2.5 font-body font-bold text-sm tracking-[0.5px] py-4 px-9 bg-white text-dark rounded-pill border-none cursor-pointer hover:bg-dark hover:text-white hover:-translate-y-0.5 transition-all duration-350">
            Apply Now
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
