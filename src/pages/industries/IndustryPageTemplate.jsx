import { Link } from 'react-router-dom'
import WaveDivider from '../../components/WaveDivider'

export default function IndustryPageTemplate({ data }) {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{position:'relative'}}>
        <div className="mx">
          <div style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:'uppercase',color:'var(--red)',marginBottom:16}}>{data.label}</div>
          <h1 className="rv vis" style={{maxWidth:650}}>{data.headline}</h1>
          <p className="page-hero-body rv vis rv-d1" style={{maxWidth:560}}>{data.subtitle}</p>
          <div className="rv vis rv-d2" style={{display:'flex',gap:12,marginTop:32}}>
            <button className="btn btn-red">Contact Now <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <Link to="/services" className="btn btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{background:'var(--dark)',padding:'48px 0',color:'#fff'}}>
        <div className="mx">
          <div className="rv vis" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,textAlign:'center'}}>
            {data.stats.map((s,i) => (
              <div key={i}>
                <div style={{fontFamily:'var(--font-head)',fontSize:'clamp(36px,4vw,56px)',color:'var(--red)',lineHeight:1}}>{s.num}</div>
                <div style={{fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'rgba(255,255,255,.5)',marginTop:8}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section style={{padding:'var(--gap) 0',background:'var(--white)',textAlign:'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(36px,4vw,56px)',textTransform:'uppercase',marginBottom:12}}>Sound <span className="accent">Familiar?</span></h2>
          <p className="rv rv-d1" style={{fontSize:18,color:'var(--text-2)',marginBottom:48}}>These problems cost you money every single day.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,maxWidth:800,margin:'0 auto'}}>
            {data.painPoints.map((p,i) => (
              <div key={i} className={`rv rv-d${Math.min(i+1,3)}`} style={{background:'var(--cream)',border:'1px solid var(--border)',borderRadius:20,padding:'24px 28px',display:'flex',alignItems:'center',gap:16,textAlign:'left'}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:'rgba(200,16,46,.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3L3 11" stroke="var(--red)" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <span style={{fontSize:17,fontWeight:600,color:'var(--dark)'}}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How 100Bold Fixes It */}
      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section style={{padding:'var(--gap) 0',background:'var(--cream)'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(36px,4vw,56px)',textTransform:'uppercase',marginBottom:12,textAlign:'center'}}>Here's How 100Bold <span className="accent">Fixes It.</span></h2>
          <p className="rv rv-d1" style={{fontSize:18,color:'var(--text-2)',marginBottom:48,textAlign:'center'}}>{data.solutionIntro}</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,maxWidth:900,margin:'0 auto'}}>
            {data.solutions.map((s,i) => (
              <div key={i} className={`rv rv-d${Math.min(i+1,3)}`} style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:20,padding:'28px 28px'}}>
                <div style={{width:44,height:44,borderRadius:14,background:'rgba(200,16,46,.06)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html: s.iconPath}} />
                </div>
                <h3 style={{fontFamily:'var(--font-body)',fontSize:18,fontWeight:700,color:'var(--dark)',marginBottom:8}}>{s.title}</h3>
                <p style={{fontSize:16,color:'var(--text-2)',lineHeight:1.6}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding:'60px 0',textAlign:'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(32px,3.5vw,48px)',textTransform:'uppercase',marginBottom:24}}>Services for <span className="accent">{data.shortName}.</span></h2>
          <div className="rv rv-d1" style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
            {data.services.map(s => (
              <span key={s} style={{background:'var(--red)',color:'#fff',fontSize:13,fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'10px 22px',borderRadius:200}}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--red)',padding:'80px 0',textAlign:'center',color:'#fff'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(36px,4vw,56px)',textTransform:'uppercase',marginBottom:16,color:'#fff'}}>Ready to grow your <span style={{color:'#fff'}}>{data.ctaIndustry}</span> business?</h2>
          <p className="rv rv-d1" style={{fontSize:18,color:'rgba(255,255,255,.7)',marginBottom:32}}>We'll show you exactly how the system works for your industry.</p>
          <button className="btn rv rv-d2" style={{background:'#fff',color:'var(--red)',fontWeight:700}}>Contact Now <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
        </div>
      </section>

      {/* Back link */}
      <section style={{padding:'32px 0',textAlign:'center'}}>
        <Link to="/industries" style={{fontSize:15,fontWeight:600,color:'var(--text-3)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to All Industries
        </Link>
      </section>
    </>
  )
}
