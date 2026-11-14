'use client'

import { useEffect } from 'react'

/**
 * The Mark: scroll reveal. Adds `.visible` to `.reveal` elements when they enter
 * the viewport and grows any `.cs-bar-fill` inside them to its data-w width.
 * Mirrors the original site's behaviour (threshold .12, -40px bottom margin).
 */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.tm .reveal')
    const timers = []
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          timers.push(setTimeout(() => {
            entry.target.classList.add('visible')
            entry.target.querySelectorAll('.cs-bar-fill').forEach((bar) => {
              timers.push(setTimeout(() => { bar.style.width = (bar.dataset.w ?? '0') + '%' }, 400))
            })
          }, 80))
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => { obs.disconnect(); timers.forEach(clearTimeout) }
  }, [])
  return null
}
