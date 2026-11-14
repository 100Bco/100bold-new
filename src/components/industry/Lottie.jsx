'use client'

import { useEffect, useRef } from 'react'

/* A lottie icon. Plays once on load; loops while `hoverEl` (a ref) is hovered or while `play` is true. */
export default function Lottie({ src, className = '', hoverEl, play }) {
  const box = useRef(null)
  const anim = useRef(null)
  useEffect(() => {
    let a
    const el = hoverEl && hoverEl.current
    const enter = () => { if (a) { a.loop = true; a.goToAndPlay(0, true) } }
    const leave = () => { if (a) a.loop = false }
    import('lottie-web/build/player/lottie_light').then((l) => {
      if (!box.current) return
      a = l.default.loadAnimation({ container: box.current, renderer: 'svg', loop: !!play, autoplay: true, path: src })
      anim.current = a
    }).catch(() => {})
    el && el.addEventListener('mouseenter', enter)
    el && el.addEventListener('mouseleave', leave)
    return () => { a && a.destroy(); el && el.removeEventListener('mouseenter', enter); el && el.removeEventListener('mouseleave', leave) }
  }, [src, hoverEl])
  useEffect(() => {
    const a = anim.current
    if (!a) return
    a.loop = !!play
    if (play) a.goToAndPlay(0, true)
  }, [play])
  return <span className={className} ref={box} aria-hidden="true" />
}
