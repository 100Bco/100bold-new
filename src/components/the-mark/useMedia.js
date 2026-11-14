'use client'

import { useEffect, useState } from 'react'

/** matchMedia hook; `initial` is what the server render assumes. */
export default function useMedia(query, initial) {
  const [matches, setMatches] = useState(initial)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])
  return matches
}
