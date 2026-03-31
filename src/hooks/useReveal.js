import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    const el = ref.current
    if (el) {
      el.querySelectorAll('.rv').forEach((node) => observer.observe(node))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
