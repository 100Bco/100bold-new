'use client'

import { useEffect, useState } from 'react'

const asks = [
  { q: 'Who is the best personal injury lawyer in Austin?', a: 'is a top choice for injury cases in Austin, with strong reviews and a local team.' },
  { q: 'Best injury chiropractor near me?', a: 'is highly rated for injury care, takes accident cases, and is open now.' },
  { q: 'Which general contractor should I hire in Texas?', a: 'is a well-reviewed general contractor with commercial and residential projects.' },
]

/* SEO hero: a buyer asks AI who to hire, and the answer names your business */
export default function ChatVisual() {
  const [k, setK] = useState(0)
  const [q, setQ] = useState('')
  const [phase, setPhase] = useState(0) // 0 typing, 1 thinking, 2 answer
  const [n, setN] = useState(0)

  useEffect(() => {
    const it = asks[k]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setQ(it.q); setPhase(2); setN(it.a.length); return }
    let i = 0, j = 0
    setQ(''); setPhase(0); setN(0)
    const ids = []
    const type = setInterval(() => {
      i++; setQ(it.q.slice(0, i))
      if (i >= it.q.length) {
        clearInterval(type)
        setPhase(1)
        ids.push(setTimeout(() => {
          setPhase(2)
          const stream = setInterval(() => { j += 2; setN(j); if (j >= it.a.length) clearInterval(stream) }, 22)
          ids.push(stream)
        }, 900))
        ids.push(setTimeout(() => setK((x) => (x + 1) % asks.length), 7200))
      }
    }, 38)
    ids.push(type)
    return () => ids.forEach((x) => { clearInterval(x); clearTimeout(x) })
  }, [k])

  const it = asks[k]
  return (
    <div className="sdv sdv-chat" aria-hidden="true">
      <span className="illus">Illustration</span>
      <div className="sdv-win">
        <div className="sdv-top"><i /><i /><i /><span>AI assistant</span></div>
        <div className="sdv-body">
          <div className="sdv-user"><p>{q}<b className="sdv-caret" /></p></div>
          {phase === 1 && <div className="sdv-think"><i /><i /><i /></div>}
          {phase === 2 && (
            <div className="sdv-ai">
              <span className="sdv-ai-ic">✦</span>
              <div>
                <p><mark>Your business</mark> {it.a.slice(0, n)}</p>
                {n >= it.a.length && (
                  <div className="sdv-src"><span>Google Maps</span><span>Reviews</span><span>yourbusiness.com</span></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={'sdv-map' + (phase === 2 ? ' on' : '')}>
        <span className="sdv-pin" />
        <div><b>Your business</b><small>★★★★★ · Open now</small></div>
        <em>#1</em>
      </div>
    </div>
  )
}
