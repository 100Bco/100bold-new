import { Link } from 'react-router-dom'
import WaveDivider from '../../components/WaveDivider'
import { useRef, useEffect } from 'react'

function LottieIcon({ src }) {
  const ref = useRef(null)
  useEffect(() => {
    let anim
    import('lottie-web/build/player/lottie_light').then(lottie => {
      if (!ref.current) return
      anim = lottie.default.loadAnimation({
        container: ref.current, renderer: 'svg',
        loop: true, autoplay: true, path: src,
      })
    }).catch(() => {})
    return () => { if (anim) anim.destroy() }
  }, [src])
  return <div ref={ref} style={{width: 64, height: 64}} />
}

export default function LawFirmsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx">
          <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:24}}>
            <LottieIcon src="/law-red.json" />
            <div>
              <h1 className="rv vis" style={{marginBottom:0}}>Personal Injury <span className="accent">Law Firms.</span></h1>
              <p style={{fontSize:17,color:'var(--text-3)',marginTop:8}}>PI Attorneys, Trial Lawyers</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="wave" />
      <section style={{background:'var(--cream)',padding:'var(--gap) 0'}}>
        <div className="mx">
          <div style={{maxWidth:800}}>
            <div className="rv" style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 36px',marginBottom:24}}>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:3,textTransform:'uppercase',color:'var(--red)',marginBottom:12}}>What You Want</div>
              <p style={{fontSize:20,color:'var(--dark)',fontWeight:600,lineHeight:1.5}}>Signed cases before competitors answer the phone</p>
            </div>
            <div className="rv rv-d1" style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 36px',marginBottom:40}}>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:3,textTransform:'uppercase',color:'var(--red)',marginBottom:12}}>What We Do</div>
              <p style={{fontSize:20,color:'var(--text-2)',fontStyle:'italic',lineHeight:1.6}}>"We build the review engine and lead funnel. Voice AI answers every call. You get warm leads, not cold ones."</p>
            </div>
            <div className="rv rv-d2" style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:48}}>
              {['GBP Domination','Paid Ads','MinAI Voice AI'].map(s => (
                <span key={s} style={{background:'var(--red)',color:'#fff',fontSize:12,fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'8px 18px',borderRadius:200}}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <section style={{padding:'60px 0',textAlign:'center'}}>
        <div className="mx">
          <h2 className="rv" style={{fontFamily:'var(--font-head)',fontSize:'clamp(36px,4vw,56px)',textTransform:'uppercase',marginBottom:24}}>
            Ready to <span className="accent">dominate?</span>
          </h2>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/industries" className="btn btn-outline rv rv-d1">All Industries</Link>
            <button className="btn btn-red rv rv-d2">Contact Now
              <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
