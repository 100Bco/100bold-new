import { motion } from 'framer-motion'
import { TrendingUp, Award, PhoneCall, DollarSign } from 'lucide-react'

export default function WorkHeroGraphic() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', perspective: '1000px' }}>

      {/* Background 3D Bars */}
      <motion.div
        animate={{ rotateX: [10, -5, 10], rotateY: [-10, 5, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 20, display: 'flex', alignItems: 'flex-end', gap: 16, transformStyle: 'preserve-3d', opacity: .15 }}
      >
        <div style={{ width: 40, height: 80, background: 'var(--text)', borderRadius: '8px 8px 0 0' }} />
        <div style={{ width: 40, height: 140, background: 'var(--text)', borderRadius: '8px 8px 0 0' }} />
        <div style={{ width: 40, height: 220, background: 'var(--red)', borderRadius: '8px 8px 0 0' }} />
        <div style={{ width: 40, height: 320, background: 'var(--red)', borderRadius: '8px 8px 0 0', boxShadow: '0 0 40px rgba(200,16,46,.5)' }} />
      </motion.div>

      {/* Floating Notification 1 */}
      <motion.div
        animate={{ y: [150, -50], opacity: [0, 1, 1, 0], scale: [.9, 1, 1, .9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 0 }}
        style={{ position: 'absolute', left: '10%', top: '50%', background: 'var(--card)', padding: '16px 20px', borderRadius: 16, border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,.08)', display: 'flex', alignItems: 'center', gap: 12, zIndex: 5 }}
      >
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,16,46,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TrendingUp color="var(--red)" size={20} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 24, color: 'var(--dark)', lineHeight: 1 }}>2.5X</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1, marginTop: 4 }}>LinkedIn Growth</div>
        </div>
      </motion.div>

      {/* Floating Notification 2 */}
      <motion.div
        animate={{ y: [150, -50], opacity: [0, 1, 1, 0], scale: [.9, 1, 1, .9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 2 }}
        style={{ position: 'absolute', right: '5%', top: '20%', background: 'var(--card)', padding: '16px 20px', borderRadius: 16, border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,.08)', display: 'flex', alignItems: 'center', gap: 12, zIndex: 10 }}
      >
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,16,46,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PhoneCall color="var(--red)" size={20} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 24, color: 'var(--dark)', lineHeight: 1 }}>+215%</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1, marginTop: 4 }}>Call Volume</div>
        </div>
      </motion.div>

      {/* Floating Notification 3 */}
      <motion.div
        animate={{ y: [150, -50], opacity: [0, 1, 1, 0], scale: [.9, 1, 1, .9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 4 }}
        style={{ position: 'absolute', left: '25%', top: '10%', background: 'var(--card)', padding: '16px 20px', borderRadius: 16, border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,.08)', display: 'flex', alignItems: 'center', gap: 12, zIndex: 15 }}
      >
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,16,46,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DollarSign color="var(--red)" size={20} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 24, color: 'var(--dark)', lineHeight: 1 }}>$2M+</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1, marginTop: 4 }}>Lead in 72 Hrs</div>
        </div>
      </motion.div>

      {/* Central "Proven" Badge */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ width: 80, height: 80, background: 'var(--dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,.3)', border: '2px solid rgba(255,255,255,.1)' }}>
          <Award color="#fff" size={32} />
        </div>
        <div style={{ marginTop: 16, background: 'var(--red)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, boxShadow: '0 10px 20px rgba(200,16,46,.3)' }}>
          Verified
        </div>
      </motion.div>
    </div>
  )
}
