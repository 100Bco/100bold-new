'use client'

import { motion } from 'framer-motion'
import { PieChart, User, MessageCircle } from 'lucide-react'

export default function MinAIGraphic() {
  return (
    <div className="minai-graphic-wrap">

      {/* Central Emblem */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotateY: [-8, 8, -8], rotateX: [6, -6, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="minai-emblem transform-style-3d"
      >
        {/* Metallic Outer Ring */}
        <div className="minai-emblem-outer"></div>
        {/* Inner Silver Ring */}
        <div className="minai-emblem-inner"></div>
        {/* Red Center */}
        <div className="minai-emblem-center">
          <div className="minai-emblem-glow"></div>
          <div className="minai-emblem-content translate-z-30">
            <div className="minai-emblem-icon">
              <svg viewBox="0 0 24 24" className="minai-lighthouse-svg">
                <path d="M12 2L10 6H14L12 2Z" />
                <path d="M10 7L8 22H16L14 7H10Z" />
                <path d="M6 22H18V24H6V22Z" />
                <path d="M12 4L2 8L12 10L22 8L12 4Z" style={{opacity: 0.3}} />
              </svg>
            </div>
            <span className="minai-emblem-text">MinAI</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Element 1: Top Left Chat */}
      <motion.div
        animate={{ y: [-18, 18, -18], x: [-8, 8, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="minai-float minai-float-chat-tl"
      >
        <div className="minai-float-chat-inner">
          <div className="minai-float-avatar"><User size={16} color="#fff" /></div>
          <div className="minai-float-lines">
            <div className="minai-float-line" style={{width: 64, background: 'rgba(255,255,255,.8)'}}></div>
            <div className="minai-float-line" style={{width: 40, background: 'rgba(255,255,255,.5)'}}></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Element 2: Mid Left Dashboard */}
      <motion.div
        animate={{ y: [18, -18, 18], rotateY: [15, 25, 15], rotateX: [5, -5, 5] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="minai-float minai-float-dash-ml transform-style-3d"
      >
        <div className="minai-dash-dots">
          <span className="minai-dot" style={{background: '#f87171'}}></span>
          <span className="minai-dot" style={{background: '#facc15'}}></span>
          <span className="minai-dot" style={{background: '#4ade80'}}></span>
          <div className="minai-dash-bar-placeholder"></div>
        </div>
        <div className="minai-dash-body">
          <div className="minai-dash-col-left">
            <div className="minai-dash-chart-box">
              <svg viewBox="0 0 40 20" className="minai-dash-wave">
                <path d="M0,15 Q5,5 10,10 T20,15 T30,5 T40,10" />
              </svg>
            </div>
            <div className="minai-dash-bars-box">
              <div className="minai-dash-minibar" style={{height: '40%'}}></div>
              <div className="minai-dash-minibar" style={{height: '70%'}}></div>
              <div className="minai-dash-minibar" style={{height: '50%'}}></div>
            </div>
          </div>
          <div className="minai-dash-col-right">
            <div className="minai-dash-bar-sm"></div>
            <svg viewBox="0 0 100 40" className="minai-dash-area">
              <path d="M0,40 L0,20 Q10,10 20,25 T40,15 T60,30 T80,10 T100,20 L100,40 Z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating Element 3: Bottom Left Small Card */}
      <motion.div
        animate={{ y: [-12, 12, -12], x: [6, -6, 6], rotateZ: [-6, 6, -6] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="minai-float minai-float-card-bl"
      >
        <div className="minai-progress-ring">
          <div className="minai-progress-dot"></div>
        </div>
        <div className="minai-float-lines">
          <div className="minai-float-line" style={{width: 48, height: 10, background: '#d1d5db'}}></div>
          <div className="minai-float-line" style={{width: 32, background: '#e5e7eb'}}></div>
        </div>
      </motion.div>

      {/* Floating Element 4: Top Right Dashboard */}
      <motion.div
        animate={{ y: [12, -12, 12], rotateY: [-20, -10, -20], rotateX: [6, -6, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="minai-float minai-float-dash-tr transform-style-3d"
      >
        <div className="minai-dash-dots">
          <span className="minai-dot" style={{background: '#d1d5db'}}></span>
          <span className="minai-dot" style={{background: '#d1d5db'}}></span>
          <span className="minai-dot" style={{background: '#d1d5db'}}></span>
          <div className="minai-dash-bar-placeholder"></div>
        </div>
        <div className="minai-dash-bars-tall">
          {[30, 60, 40, 80, 50, 90].map((h, i) => (
            <div key={i} className="minai-dash-tallbar" style={{height: `${h}%`}}></div>
          ))}
        </div>
      </motion.div>

      {/* Floating Element 5: Mid Right Chat */}
      <motion.div
        animate={{ y: [-22, 22, -22], x: [-12, 12, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="minai-float minai-float-chat-mr"
      >
        <MessageCircle size={24} color="#fff" />
      </motion.div>

      {/* Floating Element 6: Bottom Right Dashboard */}
      <motion.div
        animate={{ y: [18, -18, 18], rotateY: [-15, -25, -15], rotateX: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
        className="minai-float minai-float-dash-br transform-style-3d"
      >
        <div className="minai-dash-br-head">
          <PieChart size={32} color="var(--red)" />
          <div className="minai-float-lines">
            <div className="minai-float-line" style={{width: 80, height: 10, background: '#d1d5db'}}></div>
            <div className="minai-float-line" style={{width: 48, background: '#e5e7eb'}}></div>
          </div>
        </div>
        <div className="minai-dash-br-bars">
          {[80, 50, 30].map((w, i) => (
            <div key={i} className="minai-dash-br-row">
              <div className="minai-float-line" style={{width: 32, background: '#e5e7eb'}}></div>
              <div className="minai-dash-br-track">
                <div className="minai-dash-br-fill" style={{width: `${w}%`, background: i === 0 ? 'var(--red)' : i === 1 ? '#fb7185' : '#fb923c'}}></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="minai-connections" style={{ filter: 'drop-shadow(0 0 8px rgba(227,24,55,0.5))' }}>
        <motion.path
          d="M 50 250 L 250 250"
          stroke="rgba(227,24,55,0.5)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M 450 200 L 300 250"
          stroke="rgba(227,24,55,0.5)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 100 400 L 250 300"
          stroke="rgba(227,24,55,0.5)" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, repeat: Infinity }}
        />
        <circle cx="50" cy="250" r="5" fill="#E31837" className="minai-pulse" />
        <circle cx="450" cy="200" r="5" fill="#E31837" className="minai-pulse" />
        <circle cx="100" cy="400" r="5" fill="#E31837" className="minai-pulse" />
        <circle cx="250" cy="250" r="3" fill="#ff4d63" />
        <circle cx="300" cy="250" r="3" fill="#ff4d63" />
        <circle cx="250" cy="300" r="3" fill="#ff4d63" />
      </svg>
    </div>
  )
}
