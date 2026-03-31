export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-[clamp(56px,7vw,96px)] pb-[clamp(28px,3vw,40px)] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[clamp(32px,5vw,72px)] flex-wrap mb-[clamp(56px,7vw,96px)]">
          <div className="rv max-w-[500px]">
            <h2 className="font-head text-[clamp(44px,5vw,72px)] leading-[0.88] uppercase mb-4">
              Ready to<br/><span className="text-red">Scale?</span>
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.35)] mb-7">
              We work with established businesses ($5M+ revenue) that have proven market demand.
            </p>
            <button className="inline-flex items-center gap-2.5 font-body font-bold text-sm tracking-[0.5px] py-4 px-9 bg-red text-white rounded-pill border-none cursor-pointer hover:bg-dark hover:-translate-y-0.5 transition-all duration-350">
              Apply Now
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="rv rv-d1 grid grid-cols-2 gap-10 pt-1.5">
            <div>
              <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-[rgba(255,255,255,0.2)] mb-4">Menu</div>
              <div className="flex flex-col">
                <a href="#services" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">Playbook</a>
                <a href="#minai" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">MinAI</a>
                <a href="#work" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">Work</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-[rgba(255,255,255,0.2)] mb-4">Social</div>
              <div className="flex flex-col">
                <a href="#" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">LinkedIn</a>
                <a href="#" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">Twitter</a>
                <a href="#" className="text-[13px] font-bold text-[rgba(255,255,255,0.6)] py-[5px] hover:text-red transition-colors duration-300">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant logo */}
        <div className="text-center border-t border-[rgba(255,255,255,0.05)] pt-[clamp(36px,5vw,64px)] pb-[clamp(28px,3vw,40px)] mb-5">
          <h1 className="font-head text-[clamp(72px,15vw,200px)] leading-[0.78] text-white select-none">
            100<span className="text-red">BOLD</span>
          </h1>
        </div>

        <div className="flex justify-between items-center text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(255,255,255,0.15)]">
          <span>&copy; 2026 100Bold Agency.</span>
          <span>Start Brave. Stay Bold.</span>
        </div>
      </div>
    </footer>
  )
}
