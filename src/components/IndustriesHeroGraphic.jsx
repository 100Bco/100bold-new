import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const industries = [
  { name: 'Contractors', lottie: '/repair-tools-red.json', pos: { top: '2%', left: '35%' } },
  { name: 'HVAC', lottie: '/power-red.json', pos: { top: '18%', right: '2%' } },
  { name: 'Real Estate', lottie: '/building-red.json', pos: { top: '55%', right: '0%' } },
  { name: 'Law', lottie: '/law-red.json', pos: { bottom: '2%', left: '55%' } },
  { name: 'Rehab', lottie: '/wheelchair-insurance-red.json', pos: { bottom: '15%', left: '5%' } },
  { name: 'Plumbing', lottie: '/hourse-red.json', pos: { top: '25%', left: '0%' } },
]

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
  return <div ref={ref} style={{width: 32, height: 32}} />
}

export default function IndustriesHeroGraphic() {
  return (
    <div style={{position:'relative',width:'100%',height:'100%',minHeight:420,display:'flex',alignItems:'center',justifyContent:'center'}}>

      {/* Dashed orbit */}
      <motion.svg
        animate={{rotate:[0,360]}}
        transition={{duration:40,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',top:'50%',left:'50%',marginTop:-170,marginLeft:-170,pointerEvents:'none',overflow:'visible',opacity:.2}}
        width="340" height="340" viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="155" stroke="#E31837" strokeWidth="1.5" fill="none" strokeDasharray="8 8"/>
      </motion.svg>
      <motion.svg
        animate={{rotate:[360,0]}}
        transition={{duration:55,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',top:'50%',left:'50%',marginTop:-195,marginLeft:-195,pointerEvents:'none',overflow:'visible',opacity:.15}}
        width="390" height="390" viewBox="0 0 390 390"
      >
        <circle cx="195" cy="195" r="185" stroke="#888" strokeWidth="1" fill="none" strokeDasharray="5 7"/>
      </motion.svg>

      {/* Central node */}
      <motion.div
        initial={{rotate: 45}}
        animate={{y:[-8,8,-8], rotate: 45}}
        transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'relative',zIndex:20,width:110,height:110,background:'#1C1A1A',borderRadius:24,boxShadow:'0 16px 40px rgba(0,0,0,.2), 0 0 50px rgba(227,24,55,.06)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,.08)'}}
      >
        <div style={{transform:'rotate(-45deg)',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'var(--font-head)',fontSize:28,color:'var(--red)',lineHeight:1}}>$5M+</span>
          <span style={{color:'rgba(255,255,255,.6)',fontWeight:700,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginTop:4}}>Service Biz</span>
        </div>
      </motion.div>

      {/* Industry nodes */}
      {industries.map((ind, i) => (
        <motion.div
          key={ind.name}
          animate={{
            y: [-(8 + i * 2), (8 + i * 2), -(8 + i * 2)],
            x: [i % 2 === 0 ? -4 : 4, i % 2 === 0 ? 4 : -4, i % 2 === 0 ? -4 : 4],
          }}
          transition={{duration: 5 + i * 0.5, repeat: Infinity, ease:'easeInOut', delay: i * 0.3}}
          style={{
            position:'absolute', ...ind.pos, zIndex: 10,
            background:'#fff', padding:'10px 14px', borderRadius:16,
            boxShadow:'0 8px 24px rgba(0,0,0,.08)',
            border:'1px solid #f3f4f6',
            display:'flex', alignItems:'center', gap:8,
          }}
        >
          <LottieSmall src={ind.lottie} />
          <span style={{fontSize:11,fontWeight:700,color:'var(--dark)',letterSpacing:.5}}>{ind.name}</span>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0,overflow:'visible'}} viewBox="0 0 500 420">
        {/* Lines from each node position toward center */}
        {[
          'M 250 30 L 260 180',
          'M 430 115 L 280 195',
          'M 440 280 L 285 220',
          'M 330 385 L 270 235',
          'M 80 340 L 240 230',
          'M 60 150 L 235 195',
        ].map((d, i) => (
          <motion.path
            key={i} d={d}
            stroke="rgba(227,24,55,.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
            initial={{pathLength:0}} animate={{pathLength:1}}
            transition={{duration:2+i*0.3,repeat:Infinity,ease:'easeInOut',delay:i*0.4}}
          />
        ))}
      </svg>

      {/* Floating badge */}
      <motion.div
        animate={{y:[-6,6,-6]}}
        transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'absolute',bottom:'5%',right:'15%',zIndex:30,background:'var(--red)',color:'#fff',fontSize:11,fontWeight:700,letterSpacing:2,textTransform:'uppercase',padding:'6px 16px',borderRadius:20,boxShadow:'0 8px 20px rgba(200,16,46,.3)'}}
      >
        6 Industries
      </motion.div>
    </div>
  )
}
