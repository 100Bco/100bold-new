export default function MinAI() {
  return (
    <section id="minai" className="py-[clamp(80px,10vw,140px)] relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="rv bg-dark rounded-xl p-[clamp(36px,5vw,72px)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(36px,5vw,72px)] items-center relative overflow-hidden text-white">
          {/* Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] bg-[rgba(200,16,46,0.2)] rounded-full blur-[100px] pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-[2]">
            <div className="inline-flex items-center gap-2 py-[7px] px-4 rounded-pill border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[10px] font-bold tracking-[2px] uppercase mb-7">
              <svg className="w-3.5 h-3.5 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              AI Infrastructure
            </div>
            <h2 className="font-head text-[clamp(36px,4vw,60px)] leading-[0.9] uppercase mb-[18px]">
              Embed <span className="text-red">MinAI.</span><br/>Automate Growth.
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.5)] leading-relaxed mb-8 max-w-[440px]">
              We install custom MinAI agents directly onto your website — your 24/7 top-performing SDR.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-9">
              <div>
                <h4 className="text-[13px] font-bold mb-1 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Instant Qualify
                </h4>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)] leading-relaxed">Engages visitors & qualifies leads instantly.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold mb-1 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  Auto Booking
                </h4>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)] leading-relaxed">Syncs calendar to book meetings 24/7.</p>
              </div>
            </div>

            <button className="inline-flex items-center gap-2.5 font-body font-bold text-sm tracking-[0.5px] py-4 px-9 bg-red text-white rounded-pill border-none cursor-pointer hover:bg-dark hover:-translate-y-0.5 transition-all duration-350">
              Get MinAI
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Orb visual */}
          <div className="relative z-[2] flex justify-center">
            <div className="relative w-[clamp(220px,20vw,340px)] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.06)]"></div>
              <div className="absolute inset-[14%] rounded-full border border-[rgba(255,255,255,0.06)]"></div>
              <div className="absolute inset-[28%] rounded-full border border-[rgba(255,255,255,0.06)]"></div>
              <div className="w-[32%] aspect-square rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center z-[2]">
                <svg className="w-7 h-7 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              {/* Floating badges */}
              <div className="absolute top-[8%] right-[-8%] z-10 py-2.5 px-4 rounded-[16px_16px_16px_4px] text-[11px] font-bold tracking-[1px] uppercase flex items-center gap-1.5 bg-white text-dark shadow-[0_10px_28px_rgba(0,0,0,0.25)]" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e]"></span> Lead Captured
              </div>
              <div className="absolute bottom-[14%] left-[-8%] z-10 py-2.5 px-4 rounded-[16px_16px_4px_16px] text-[11px] font-bold tracking-[1px] uppercase flex items-center gap-1.5 bg-red text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)]" style={{ animation: 'float 4s ease-in-out infinite -2s' }}>
                <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Booked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
