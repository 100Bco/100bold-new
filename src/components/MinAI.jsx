import MinAIGraphic from './MinAIGraphic'

export default function MinAI() {
  return (
    <section className="minai" id="minai" style={{position: 'relative'}}>
      <div className="mx">
        <div className="minai-card rv rv-d2">
          <div className="minai-glow"></div>
          <div className="minai-content">
            <h2 className="minai-headline">Embed <span className="accent">MinAI.</span><br/>Automate Growth.</h2>
            <p className="minai-subtitle">Every 100Bold client gets MinAI — our AI platform — from day one.<br/><span className="accent">No extra cost.</span></p>

            <div className="minai-features">
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> AI Chatbot</h4>
                <p>Qualifies leads & books appointments 24/7.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> Voice AI</h4>
                <p>Answers calls & handles leads automatically.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Review Funnel</h4>
                <p>Automated 5-star review requests on autopilot.</p>
              </div>
              <div className="minai-feat">
                <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> CRM + Inbox</h4>
                <p>All leads in one place. Nothing falls through.</p>
              </div>
            </div>
            <button className="btn btn-red">
              Learn More About MinAI
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="minai-visual">
            <MinAIGraphic />
          </div>
        </div>
      </div>
    </section>
  )
}
