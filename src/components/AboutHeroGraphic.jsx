'use client'

import { motion } from 'framer-motion'

export default function AboutHeroGraphic() {
  return (
    <div style={{position:'relative',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',perspective:1200,transform:'scale(.9)'}}>
      {/* Background Grid */}
      <div style={{position:'absolute',inset:0,overflow:'hidden',borderRadius:'50%',opacity:.2,maskImage:'radial-gradient(circle,black 30%,transparent 70%)',WebkitMaskImage:'radial-gradient(circle,black 30%,transparent 70%)'}}>
        <motion.div
          animate={{backgroundPosition:['0px 0px','40px 40px']}}
          transition={{duration:2,repeat:Infinity,ease:'linear'}}
          style={{width:'100%',height:'100%',backgroundImage:'linear-gradient(to right,#888 1px,transparent 1px),linear-gradient(to bottom,#888 1px,transparent 1px)',backgroundSize:'40px 40px'}}
        />
      </div>

      {/* Main Dashboard Card */}
      <motion.div
        animate={{y:[-10,10,-10],rotateX:[5,-5,5],rotateY:[-5,5,-5]}}
        transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'relative',zIndex:20,width:280,height:320,background:'#fff',borderRadius:24,boxShadow:'0 30px 60px rgba(0,0,0,.12)',border:'1px solid #f3f4f6',padding:24,display:'flex',flexDirection:'column'}}
      >
        {/* Header dots */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
          <div style={{display:'flex',gap:8}}>
            <div style={{width:12,height:12,borderRadius:'50%',background:'#ef4444'}}/>
            <div style={{width:12,height:12,borderRadius:'50%',background:'#f59e0b'}}/>
            <div style={{width:12,height:12,borderRadius:'50%',background:'#22c55e'}}/>
          </div>
          <div style={{width:64,height:8,background:'#e5e7eb',borderRadius:4}}/>
        </div>

        {/* Bar Chart */}
        <div style={{flex:1,display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:8}}>
          {[40,70,45,90,65,100].map((h,i) => (
            <div key={i} style={{width:'100%',height:'100%',background:'#f3f4f6',borderRadius:'6px 6px 0 0',position:'relative',overflow:'hidden'}}>
              <motion.div
                initial={{height:'10%'}}
                animate={{height:`${h}%`}}
                transition={{duration:2,repeat:Infinity,repeatType:'reverse',ease:'easeInOut',delay:i*.1}}
                style={{position:'absolute',bottom:0,left:0,width:'100%',borderRadius:'6px 6px 0 0',background:i===5?'#E31837':'#111'}}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Circular Progress */}
      <motion.div
        animate={{y:[15,-15,15],x:[-10,10,-10]}}
        transition={{duration:5,repeat:Infinity,ease:'easeInOut',delay:.5}}
        style={{position:'absolute',top:'10%',right:'5%',zIndex:30,width:96,height:96,background:'#1C1A1A',borderRadius:16,boxShadow:'0 25px 50px rgba(0,0,0,.25)',border:'1px solid #333',display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <svg width="64" height="64" style={{transform:'rotate(-90deg)'}}>
          <circle cx="32" cy="32" r="28" stroke="#333" strokeWidth="6" fill="none"/>
          <motion.circle
            cx="32" cy="32" r="28"
            stroke="#E31837" strokeWidth="6" fill="none"
            strokeDasharray="175"
            animate={{strokeDashoffset:[175,0,175]}}
            transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
            strokeLinecap="round"
          />
        </svg>
        <div style={{position:'absolute',color:'#fff',fontWeight:700,fontSize:12}}>100%</div>
      </motion.div>

      {/* Status Card */}
      <motion.div
        animate={{y:[-15,15,-15],x:[10,-10,10]}}
        transition={{duration:7,repeat:Infinity,ease:'easeInOut',delay:1}}
        style={{position:'absolute',bottom:'15%',left:'0%',zIndex:30,background:'rgba(255,255,255,.9)',backdropFilter:'blur(12px)',padding:16,borderRadius:12,boxShadow:'0 20px 40px rgba(227,24,55,.15)',border:'1px solid #fecaca',display:'flex',alignItems:'center',gap:16}}
      >
        <div style={{position:'relative',width:16,height:16}}>
          <span className="about-ping" style={{position:'absolute',inset:0,borderRadius:'50%',background:'#E31837',opacity:.75}}/>
          <span style={{position:'relative',display:'inline-flex',width:16,height:16,borderRadius:'50%',background:'#E31837'}}/>
        </div>
        <div>
          <div style={{width:80,height:8,background:'#111',borderRadius:4,marginBottom:8}}/>
          <div style={{width:48,height:8,background:'#d1d5db',borderRadius:4}}/>
        </div>
      </motion.div>
    </div>
  )
}
