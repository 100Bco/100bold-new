const logos = [
  { src: '/LT Commercial group logo.png', alt: 'LT Commercial Group' },
  { src: '/Logo Miami Vice.png', alt: 'Miami Vice' },
  { src: '/t98-rehab-red-logo-400x299.png', alt: 'T98 Rehab' },
  { src: '/Asset 1@10x.png', alt: 'Dang Law Group' },
  { src: '/Logo Bee.png', alt: 'Bee Construction' },
  { src: '/GAACC-logo-400x400-1.webp', alt: 'GAACC' },
  { src: '/100B - TACH NEN -1.png', alt: '100B Beyond Borders' },
]

export default function LogoBar() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos]

  return (
    <section className="logo-bar">
      <div className="mx">
        <p className="rv">Trusted by $5M+ Service Businesses</p>
      </div>
      <div className="marquee-wrap rv rv-d1">
        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div key={i} className="marquee-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
