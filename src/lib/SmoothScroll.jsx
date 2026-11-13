'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis = null
export const getLenis = () => lenis

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (prefersReducedMotion()) return
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis && lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    document.documentElement.classList.add('lenis')
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenis = null
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
    const id = setTimeout(() => ScrollTrigger.refresh(), 100)
    return () => clearTimeout(id)
  }, [pathname])

  useEffect(() => {
    const locked = () => document.documentElement.classList.contains('nav-locked')
    const obs = new MutationObserver(() => { if (lenis) locked() ? lenis.stop() : lenis.start() })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  return null
}
