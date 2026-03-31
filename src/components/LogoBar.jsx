const logos = ['LT Commercial', 'Miami Vice', 'T98 Rehab', 'Dang Law', 'Bee Construction']

export default function LogoBar() {
  return (
    <section className="logo-bar">
      <div className="mx">
        <p className="rv">Trusted by $5M+ Service Businesses</p>
        <div className="logo-bar-row rv rv-d1">
          {logos.map((name) => (
            <span key={name} className="logo-item">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
