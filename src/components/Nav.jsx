import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-100 pointer-events-none transition-all duration-400 ${scrolled ? 'py-2.5 px-[clamp(20px,4vw,48px)]' : 'py-4 px-[clamp(20px,4vw,48px)]'}`}>
      <nav className="max-w-[1240px] mx-auto flex items-center justify-between h-[60px] px-6 bg-[rgba(254,252,249,0.94)] backdrop-blur-[20px] border border-border rounded-pill pointer-events-auto shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <a href="#" className="flex flex-col leading-[0.82]">
          <span className="font-head text-[19px] text-dark">100</span>
          <span className="font-head text-[19px] text-dark">
            BOLD<span className="inline-block w-[5px] h-[5px] bg-red rounded-full ml-[1px] align-middle"></span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#services" className="text-[13px] font-bold text-text-2 hover:text-red transition-colors duration-300">Playbook</a>
          <a href="#minai" className="text-[13px] font-bold text-text-2 hover:text-red transition-colors duration-300">MinAI</a>
          <a href="#work" className="text-[13px] font-bold text-text-2 hover:text-red transition-colors duration-300">Work</a>
        </div>
        <button className="py-2.5 px-[22px] bg-red text-white rounded-pill text-[13px] font-bold border-none cursor-pointer hover:bg-dark transition-all duration-300">
          Apply
        </button>
      </nav>
    </div>
  )
}
