export default function WaveDivider({ from, to, flip = false, variant = 'wave' }) {
  const style = {
    display: 'block',
    width: '100%',
    height: 'clamp(48px, 6vw, 100px)',
    background: from,
    position: 'relative',
    marginTop: -1,
    marginBottom: -1,
  }

  if (variant === 'wave') {
    return (
      <div style={style}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: 0, left: 0, width: '100%', height: '100%',
            transform: flip ? 'scaleY(-1)' : 'none',
          }}
          fill="none"
        >
          <path
            d="M0,40 C320,100 480,0 720,50 C960,100 1120,10 1440,60 L1440,100 L0,100 Z"
            fill={to}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div style={style}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: 0, left: 0, width: '100%', height: '100%',
            transform: flip ? 'scaleY(-1)' : 'none',
          }}
          fill="none"
        >
          <path
            d="M0,80 Q720,-20 1440,80 L1440,100 L0,100 Z"
            fill={to}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'slant') {
    return (
      <div style={style}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: 0, left: 0, width: '100%', height: '100%',
            transform: flip ? 'scaleY(-1)' : 'none',
          }}
          fill="none"
        >
          <path
            d="M0,60 C360,100 1080,0 1440,40 L1440,100 L0,100 Z"
            fill={to}
          />
        </svg>
      </div>
    )
  }

  return null
}
