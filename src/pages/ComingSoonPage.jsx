import { Link } from 'react-router-dom'

export default function ComingSoonPage({ title }) {
  return (
    <section className="nk-soon">
      <div className="mx">
        <p className="nk-eyebrow">100Bold</p>
        <h1>{title}</h1>
        <p className="nk-soon-sub">This page is being built. Book a call and we will walk you through it.</p>
        <Link to="/contact" className="nk-btn nk-btn-red">Book a call</Link>
      </div>
    </section>
  )
}
