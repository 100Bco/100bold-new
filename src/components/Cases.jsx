const cases = [
  {
    title: 'LT Commercial',
    desc: 'Dominated local SEO, turning search visibility into a predictable revenue engine.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    metric: '+215%',
    metricLabel: 'Call Volume',
    tags: ['SEO', 'GBP'],
  },
  {
    title: 'T98 Rehab',
    desc: 'Built founder authority on LinkedIn, generating high-ticket leads in healthcare.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    metric: '1.2M+',
    metricLabel: 'Content Views',
    tags: ['LinkedIn', 'Content'],
  },
  {
    title: 'Bee Construction',
    desc: 'Zero to dominant — top-3 local ranking and review machine in 6 months.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    metric: '47',
    metricLabel: '5-Star Reviews',
    tags: ['GBP', 'Reviews'],
  },
]

export default function Cases() {
  return (
    <section id="work" className="py-[clamp(80px,10vw,140px)] bg-cream relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="mb-[clamp(32px,4vw,56px)] flex justify-between items-end flex-wrap gap-5">
          <h2 className="rv font-head text-[clamp(44px,5vw,72px)] leading-[0.9] text-dark uppercase">
            Proven <span className="text-red">Results.</span>
          </h2>
          <button className="rv rv-d1 inline-flex items-center gap-2.5 font-body font-bold text-sm bg-transparent text-text border-none cursor-pointer hover:text-red hover:gap-3.5 transition-all duration-300">
            View All
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <div key={c.title} className={`rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''} bg-card rounded-lg overflow-hidden border border-border hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(0,0,0,0.07)] transition-all duration-400 cursor-pointer group`}>
              <div className="aspect-[16/10] bg-dark relative overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-500" />
                <div className="absolute top-3.5 left-3.5 py-2.5 px-4 bg-[rgba(0,0,0,0.7)] backdrop-blur-[12px] rounded-[14px]">
                  <div className="font-head text-[28px] text-red leading-none">{c.metric}</div>
                  <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-[rgba(255,255,255,0.5)] mt-[1px]">{c.metricLabel}</div>
                </div>
                <div className="absolute bottom-3 left-3.5 flex gap-1.5">
                  {c.tags.map((tag) => (
                    <span key={tag} className="py-1 px-3 rounded-pill bg-[rgba(255,255,255,0.15)] backdrop-blur-[8px] text-[10px] font-bold tracking-[1.5px] uppercase text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 px-6 pb-6">
                <h3 className="font-head text-[28px] text-dark uppercase leading-none mb-2">{c.title}</h3>
                <p className="text-[13px] text-text-2 leading-[1.55] mb-3.5">{c.desc}</p>
                <a href="#" className="inline-flex items-center gap-2.5 font-body font-bold text-[12px] bg-transparent text-text border-none cursor-pointer hover:text-red hover:gap-3.5 transition-all duration-300">
                  Case Study
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
