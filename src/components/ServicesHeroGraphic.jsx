import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)

export default function ServicesHeroGraphic() {
  return (
    <div style={{position:'relative',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',perspective:1200,transform:'scale(.9)'}}>
      {/* Background glow */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at center,rgba(227,24,55,.05) 0%,transparent 70%)'}} />

      {/* Central Hub */}
      <motion.div
        animate={{y:[-10,10,-10]}}
        transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'relative',zIndex:20,width:144,height:144,background:'#1C1A1A',borderRadius:24,boxShadow:'0 20px 50px rgba(227,24,55,.3)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #333',transform:'rotate(45deg)'}}
      >
        <div style={{transform:'rotate(-45deg)',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <TrendingUp size={48} color="#E31837" style={{marginBottom:8}} />
          <span style={{color:'#fff',fontWeight:700,fontSize:11,letterSpacing:3,textTransform:'uppercase'}}>Growth</span>
        </div>
      </motion.div>

      {/* Google / SEO */}
      <motion.div
        animate={{y:[-15,15,-15],x:[-5,5,-5],rotateZ:[-5,5,-5]}}
        transition={{duration:5.5,repeat:Infinity,ease:'easeInOut',delay:.2}}
        style={{position:'absolute',top:'10%',left:'10%',zIndex:30,background:'#fff',padding:16,borderRadius:16,boxShadow:'0 15px 30px rgba(0,0,0,.1)',border:'1px solid #f3f4f6',display:'flex',alignItems:'center',gap:12}}
      >
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div>
          <div style={{width:48,height:8,background:'#e5e7eb',borderRadius:4,marginBottom:6}} />
          <div style={{width:32,height:8,background:'#f3f4f6',borderRadius:4}} />
        </div>
      </motion.div>

      {/* LinkedIn */}
      <motion.div
        animate={{y:[15,-15,15],x:[5,-5,5],rotateZ:[5,-5,5]}}
        transition={{duration:6.5,repeat:Infinity,ease:'easeInOut',delay:.5}}
        style={{position:'absolute',top:'15%',right:'5%',zIndex:10,background:'#0A66C2',padding:16,borderRadius:16,boxShadow:'0 15px 30px rgba(10,102,194,.3)'}}
      >
        <LinkedinIcon />
      </motion.div>

      {/* Instagram */}
      <motion.div
        animate={{y:[-12,12,-12],x:[8,-8,8]}}
        transition={{duration:6,repeat:Infinity,ease:'easeInOut',delay:.8}}
        style={{position:'absolute',bottom:'10%',left:'15%',zIndex:30,background:'linear-gradient(135deg,#f09433,#dc2743,#bc1888)',padding:16,borderRadius:16,boxShadow:'0 15px 30px rgba(220,39,67,.3)'}}
      >
        <InstagramIcon />
      </motion.div>

      {/* Facebook */}
      <motion.div
        animate={{y:[18,-18,18],x:[-5,5,-5]}}
        transition={{duration:7,repeat:Infinity,ease:'easeInOut',delay:1.2}}
        style={{position:'absolute',bottom:'20%',right:'10%',zIndex:20,background:'#1877F2',padding:16,borderRadius:16,boxShadow:'0 15px 30px rgba(24,119,242,.3)',display:'flex',alignItems:'center',gap:12}}
      >
        <FacebookIcon />
        <div>
          <div style={{width:40,height:8,background:'rgba(255,255,255,.5)',borderRadius:4,marginBottom:6}} />
          <div style={{width:64,height:8,background:'rgba(255,255,255,.3)',borderRadius:4}} />
        </div>
      </motion.div>

      {/* Connecting dashed orbits */}
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0,opacity:.3}}>
        <circle cx="50%" cy="50%" r="130" stroke="#111" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="srv-orbit-slow" />
        <circle cx="50%" cy="50%" r="190" stroke="#E31837" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="srv-orbit-rev" />
        <path d="M 25% 25% L 50% 50%" stroke="#111" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        <path d="M 75% 25% L 50% 50%" stroke="#111" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        <path d="M 25% 75% L 50% 50%" stroke="#111" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        <path d="M 75% 75% L 50% 50%" stroke="#111" strokeWidth="1" fill="none" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}
