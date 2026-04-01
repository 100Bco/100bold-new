const logos = [
  { src: '/LT Commercial group logo.png', alt: 'LT Commercial Group' },
  { src: '/Logo Miami Vice.png', alt: 'Miami Vice' },
  { src: '/t98-rehab-red-logo-400x299.png', alt: 'T98 Rehab' },
  { src: '/Asset 1@10x.png', alt: 'Dang Law Group' },
  { src: '/GAACC-logo-400x400-1.webp', alt: 'GAACC' },
  { src: '/100B - TACH NEN -1.png', alt: '100B Beyond Borders' },
  { src: '/Bee Con Logo.png', alt: 'Bee Con' },
  { src: '/CCHL Logo.png', alt: 'CCHL' },
  { src: '/Kalotoy Logo.webp', alt: 'Kalotoy' },
  { src: '/Logo Woodsland.jpg', alt: 'Woodsland' },
  { src: '/Logo-Sao-Thai-Duong.png', alt: 'Sao Thái Dương' },
  { src: '/Logo-Hexagon.png', alt: 'Hexagon' },
  { src: '/Quang Vinh Logo.png', alt: 'Quang Vinh' },
  { src: '/Logo Dacy.jpg', alt: 'Dacy Business Park' },
  { src: '/tab+tm512-1920w.webp', alt: 'TAB' },
  { src: '/Logo Linkedin Glenn.png', alt: 'Glenn' },
  { src: '/Subele_logo_1-removebg-preview.png', alt: 'Subele' },
]

export default function LogoBar() {
  const allLogos = [...logos, ...logos]

  return (
    <section className="logo-bar">
      <div className="mx">
        <h2 className="logo-bar-heading rv">Trusted <span className="accent">Partners.</span></h2>
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
