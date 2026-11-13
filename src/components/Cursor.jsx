import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

/** Desktop-only custom cursor + magnetic buttons ([data-magnetic]) + labelled hover ([data-cursor="View"]) */
export default function Cursor() {
  const dot = useRef(null)
  const label = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches
    if (!fine || !dot.current) return
    document.documentElement.classList.add('has-cursor')
    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.35, ease: 'power3' })
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.35, ease: 'power3' })
    const move = (e) => { xTo(e.clientX); yTo(e.clientY) }
    const over = (e) => {
      const t = e.target.closest('[data-cursor], a, button')
      const el = dot.current
      if (!el) return
      el.classList.toggle('is-link', !!t && !t.dataset.cursor)
      el.classList.toggle('is-label', !!t?.dataset.cursor)
      if (label.current) label.current.textContent = t?.dataset.cursor || ''
    }
    const leave = () => gsap.to(dot.current, { opacity: 0, duration: .2 })
    const enter = () => gsap.to(dot.current, { opacity: 1, duration: .2 })
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  // magnetic elements (re-bind per route)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
    const els = [...document.querySelectorAll('[data-magnetic]')]
    const handlers = els.map((el) => {
      const s = parseFloat(el.dataset.magnetic) || 0.35
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const m = (e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * s)
        yTo((e.clientY - (r.top + r.height / 2)) * s)
      }
      const l = () => { xTo(0); yTo(0) }
      el.addEventListener('mousemove', m); el.addEventListener('mouseleave', l)
      return () => { el.removeEventListener('mousemove', m); el.removeEventListener('mouseleave', l) }
    })
    return () => handlers.forEach((h) => h())
  }, [pathname])

  return (
    <div className="nk-cursor" ref={dot} aria-hidden="true">
      <span ref={label} />
    </div>
  )
}
