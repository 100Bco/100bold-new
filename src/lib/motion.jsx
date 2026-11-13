import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export { gsap, ScrollTrigger }

export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  desktop: '(min-width: 961px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 960px) and (prefers-reduced-motion: no-preference)',
}

/** Runs GSAP setup scoped to ref; setup(mm) receives a gsap.matchMedia instance. Reverted on unmount. */
export function useGsap(ref, setup, deps = []) {
  useLayoutEffect(() => {
    if (!ref.current) return
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => setup(mm), ref)
    return () => { mm.revert(); ctx.revert() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Fade-up reveal for [data-reveal] and mask-line reveal for .nk-line > span inside a scope */
export function revealIn(scope) {
  gsap.utils.toArray(scope.querySelectorAll('[data-reveal]')).forEach((el) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 1.1, ease: 'expo.out',
      delay: parseFloat(el.dataset.reveal) || 0,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })
  gsap.utils.toArray(scope.querySelectorAll('[data-lines]')).forEach((el) => {
    gsap.from(el.querySelectorAll('.nk-line > span'), {
      yPercent: 115, rotate: 2, duration: 1.2, ease: 'expo.out', stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    })
  })
}

export function Lines({ lines, as: Tag = 'h2', className = '', children }) {
  return (
    <Tag className={className} data-lines="">
      {lines.map((l, i) => (
        <span className="nk-line" key={i}><span>{l}{i === lines.length - 1 ? children : null}</span></span>
      ))}
    </Tag>
  )
}
