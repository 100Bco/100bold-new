export default function WaveDivider({ from, to, flip = false, variant = 'wave' }) {
  const wrapStyle = {
    display: 'block',
    width: '100%',
    height: 'clamp(48px, 6vw, 100px)',
    background: from,
    position: 'relative',
    marginTop: -1,
    marginBottom: -1,
  }

  const svgStyle = {
    position: 'absolute',
    bottom: -1, left: 0, width: '100%', height: 'calc(100% + 2px)',
    display: 'block',
    transform: flip ? 'scaleY(-1)' : 'none',
  }

  const paths = {
    wave: 'M0,40 C320,100 480,0 720,50 C960,100 1120,10 1440,60 L1440,101 L0,101 Z',
    curve: 'M0,80 Q720,-20 1440,80 L1440,101 L0,101 Z',
    slant: 'M0,60 C360,100 1080,0 1440,40 L1440,101 L0,101 Z',
  }

  const d = paths[variant]
  if (!d) return null

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 1440 101" preserveAspectRatio="none" style={svgStyle} fill="none">
        <path d={d} fill={to} />
      </svg>
    </div>
  )
}
