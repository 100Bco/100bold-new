import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const industries = [
  { name: 'Contractors', lottie: '/repair-tools-red.json', angle: 270 },
  { name: 'HVAC', lottie: '/power-red.json', angle: 330 },
  { name: 'Real Estate', lottie: '/building-red.json', angle: 30 },
  { name: 'Law', lottie: '/law-red.json', angle: 90 },
  { name: 'Rehab', lottie: '/wheelchair-insurance-red.json', angle: 150 },
  { name: 'Plumbing', lottie: '/hourse-red.json', angle: 210 },
]

const cx = 250, cy = 210, radius = 165

function LottieSmall({ src }) {
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
  return <div ref={ref} style={{width: 28, height: 28, flexShrink: 0}} />
}

export default function IndustriesHeroGraphic() {
  const nodePositions = industries.map(ind => {
    const rad = (ind.angle * Math.PI) / 180
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
  })

  return (
    <div style={{position:'relative',width:'100%',height:'100%',minHeight:420,display:'flex',alignItems:'center',justifyContent:'center'}}>

      {/* Dashed orbit */}
      <motion.svg
        animate={{rotate:[0,360]}}
        transition={{duration:45,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',top:'50%',left:'50%',marginTop:-175,marginLeft:-175,pointerEvents:'none',overflow:'visible',opacity:.2}}
        width="350" height="350" viewBox="0 0 350 350"
      >
        <circle cx="175" cy="175" r="165" stroke="#E31837" strokeWidth="1.5" fill="none" strokeDasharray="8 8"/>
      </motion.svg>

      {/* Connecting lines from nodes to center */}
      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1,overflow:'visible'}} viewBox="0 0 500 420">
        <defs>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="rgba(227,24,55,.3)" />
          </marker>
        </defs>
        {nodePositions.map((pos, i) => {
          const dx = cx - pos.x, dy = cy - pos.y
          const len = Math.sqrt(dx*dx + dy*dy)
          const endX = pos.x + dx * ((len - 55) / len)
          const endY = pos.y + dy * ((len - 55) / len)
          return (
            <line key={i}
              x1={pos.x} y1={pos.y} x2={endX} y2={endY}
              stroke="rgba(227,24,55,.2)" strokeWidth="1.5" strokeDasharray="6 4"
              markerEnd="url(#arrowRed)"
            />
          )
        })}
      </svg>

      {/* Central node */}
      <motion.div
        initial={{rotate: 45}}
        animate={{y:[-6,6,-6], rotate: 45}}
        transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'absolute',top:'50%',left:'50%',marginTop:-55,marginLeft:-55,zIndex:20,width:110,height:110,background:'#1C1A1A',borderRadius:24,boxShadow:'0 16px 40px rgba(0,0,0,.2), 0 0 50px rgba(227,24,55,.06)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,.08)'}}
      >
        <div style={{transform:'rotate(-45deg)',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'var(--font-head)',fontSize:28,color:'var(--red)',lineHeight:1}}>$5M+</span>
          <span style={{color:'rgba(255,255,255,.6)',fontWeight:700,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginTop:4}}>Service Biz</span>
        </div>
      </motion.div>

      {/* Industry nodes - fixed positions on circle, subtle scale pulse */}
      {industries.map((ind, i) => {
        const pos = nodePositions[i]
        return (
          <motion.div
            key={ind.name}
            animate={{scale:[1, 1.05, 1]}}
            transition={{duration: 3, repeat: Infinity, ease:'easeInOut', delay: i * 0.5}}
            style={{
              position:'absolute',
              top: `${(pos.y / 420) * 100}%`,
              left: `${(pos.x / 500) * 100}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background:'#fff', padding:'8px 14px', borderRadius:14,
              boxShadow:'0 6px 20px rgba(0,0,0,.07)',
              border:'1px solid #f3f4f6',
              display:'flex', alignItems:'center', gap:8,
            }}
          >
            <LottieSmall src={ind.lottie} />
            <span style={{fontSize:12,fontWeight:700,color:'var(--dark)',whiteSpace:'nowrap'}}>{ind.name}</span>
          </motion.div>
        )
      })}

      {/* Badge */}
      <motion.div
        animate={{y:[-4,4,-4]}}
        transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'absolute',bottom:'3%',right:'12%',zIndex:30,background:'var(--red)',color:'#fff',fontSize:11,fontWeight:700,letterSpacing:2,textTransform:'uppercase',padding:'6px 16px',borderRadius:20,boxShadow:'0 8px 20px rgba(200,16,46,.3)'}}
      >
        6 Industries
      </motion.div>
    </div>
  )
}
