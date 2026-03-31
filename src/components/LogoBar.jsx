const logos = ['LT Commercial', 'Miami Vice', 'T98 Rehab', 'Dang Law', 'Bee Construction']

export default function LogoBar() {
  return (
    <section className="py-10 border-t border-border relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <p className="rv text-center text-[12px] font-bold tracking-[2px] uppercase text-text-3 mb-7">
          Trusted by $5M+ Service Businesses
        </p>
        <div className="rv rv-d1 flex flex-wrap justify-center gap-[clamp(20px,4vw,48px)] items-center">
          {logos.map((name) => (
            <span
              key={name}
              className="font-head text-[clamp(18px,1.8vw,26px)] text-dark opacity-[0.18] hover:opacity-60 hover:text-red transition-all duration-400 uppercase cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
