import { MessageSquare, CalendarCheck, Zap } from 'lucide-react'
import MinAIGraphic from './MinAIGraphic'

export default function MinAI() {
  return (
    <section className="minai" id="minai">
      {/* Left decoration */}
      <div className="minai-side-deco">
        <svg width="50" height="100" viewBox="0 0 50 100" fill="none" stroke="var(--red)" strokeWidth="2">
          <path d="M0,0 L50,50 L0,100" />
          <path d="M-20,0 L30,50 L-20,100" />
        </svg>
      </div>

      <div className="mx">
        <div className="minai-card">
          <div className="minai-glow"></div>

          {/* Left Content */}
          <div className="minai-content">
            <div className="minai-badge">
              <Zap size={16} color="var(--red)" />
              <span>AI Infrastructure</span>
            </div>

            <h2 className="minai-headline">
              Embed <span className="accent">MinAI.</span><br/>
              Automate <span style={{color: '#fff'}}>Growth.</span>
            </h2>

            <p className="minai-subtitle">
              Every 100Bold client gets MinAI — our AI platform — from day one.<br/>
              <span className="accent">No extra cost.</span>
            </p>

            <div className="minai-features-row">
              <div className="minai-feat-item">
                <div className="minai-feat-head">
                  <MessageSquare size={20} color="var(--red)" />
                  <span>Instant Qualify</span>
                </div>
                <p>Engages visitors & qualifies leads instantly.</p>
              </div>
              <div className="minai-feat-item">
                <div className="minai-feat-head">
                  <CalendarCheck size={20} color="var(--red)" />
                  <span>Auto Booking</span>
                </div>
                <p>Syncs calendar to book meetings 24/7.</p>
              </div>
            </div>

            <button className="btn btn-red">
              Get MinAI
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Right Graphic */}
          <div className="minai-visual">
            <MinAIGraphic />
          </div>
        </div>
      </div>
    </section>
  )
}
