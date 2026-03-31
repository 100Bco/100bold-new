import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#" className="flex flex-col" style={{ lineHeight: 0.82 }}>
          <span className="font-head text-[19px] text-dark">100</span>
          <span className="font-head text-[19px] text-dark">
            BOLD<span className="inline-block w-[5px] h-[5px] bg-red rounded-full ml-px align-middle"></span>
          </span>
        </a>
        <div className="nav-links hidden md:flex items-center gap-7">
          <a href="#services">Playbook</a>
          <a href="#minai">MinAI</a>
          <a href="#work">Work</a>
        </div>
        <button className="py-2 px-5 bg-red text-white r-pill text-[13px] font-bold border-none cursor-pointer hover:bg-dark transition-all duration-300">
          Apply
        </button>
      </nav>
    </div>
  )
}
