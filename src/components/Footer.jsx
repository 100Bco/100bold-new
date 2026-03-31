export default function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-top">
          <div className="footer-left rv">
            <h2>Ready to<br/><span className="accent">Scale?</span></h2>
            <p>We work with established businesses ($5M+ revenue) that have proven market demand.</p>
            <button className="btn btn-red">Apply Now <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
          <div className="footer-cols rv rv-d1">
            <div>
              <div className="footer-col-title">Menu</div>
              <div className="footer-col">
                <a href="#services">Playbook</a>
                <a href="#minai">MinAI</a>
                <a href="#work">Work</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Social</div>
              <div className="footer-col">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-logo-giant">
          <h1>100<span className="accent">BOLD</span></h1>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 100Bold Agency.</span>
          <span>Start Brave. Stay Bold.</span>
        </div>
      </div>
    </footer>
  )
}
