'use client'

import { useConsent, openCookieSettings } from '@/lib/consent'
import { useEffect, useRef, useState } from 'react'
import { useGsap, gsap, MQ } from '@/lib/motion'
import { pieces, pieceGroups, tiktoks } from '@/data/portal'

/* Pop-up player: just the video, at its own shape, as large as the screen allows */
function Player({ p, onClose }) {
  useEffect(() => {
    const key = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', key)
    document.documentElement.classList.add('pt-lock')
    return () => { window.removeEventListener('keydown', key); document.documentElement.classList.remove('pt-lock') }
  }, [onClose])
  return (
    <div className="ptl" role="dialog" aria-modal="true" aria-label={p.title} data-lenis-prevent onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="ptl-media" style={{ '--r': p.ratio }}>
        <iframe src={'https://fast.wistia.net/embed/iframe/' + p.wid + '?autoPlay=true&playbar=true&playerColor=C8102E&settingsControl=false&fullscreenButton=true&videoFoam=false'} title={p.title} allow="autoplay; fullscreen" allowFullScreen />
      </div>
      <button type="button" className="ptl-x" onClick={onClose} aria-label="Close">✕</button>
    </div>
  )
}

/* Selected pieces: one even grid of stills with the words underneath; tap one to watch it full size */
/* Official TikTok post embeds (the full post: account, video, caption, sound), loaded when near */
function TikTokPosts() {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  const consent = useConsent()
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { rootMargin: '600px 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div className="pttk" ref={ref}>
      {tiktoks.map((t) => (
        <div className="pttk-cell" key={t.id}>
          {on && consent?.marketing
            ? <div className="pttk-frame"><iframe src={'https://www.tiktok.com/embed/v2/' + t.id + '?lang=en-US'} title="TikTok post by @bond.gift247" allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen loading="lazy" /></div>
            : <button type="button" className="pttk-ph" onClick={openCookieSettings}>TikTok posts are off until you allow marketing cookies. Tap to change your cookie settings.</button>}
          <a href={t.url} target="_blank" rel="noopener noreferrer" className="pttk-link">Open on TikTok ↗</a>
        </div>
      ))}
    </div>
  )
}

const Card = ({ p, onOpen }) => (
  <article className="ptv" id={p.id}>
    <button type="button" className="ptv-thumb" onClick={() => onOpen(p)} aria-label={'Play ' + p.title}>
      <img src={p.poster} alt={p.title + ', ' + p.format + ' for ' + p.client} loading="lazy" />
      <span className="ptv-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
    </button>
    <h3>{p.title}</h3>
    <small>{p.client}</small>
    <p className="ptv-sr">{p.format}, {p.duration}. {p.description}</p>
  </article>
)

/* Selected pieces in three groups: AI films, property and project showcase, viral clips as live TikTok posts */
export default function PortalPieces() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)
  useGsap(ref, (mm) => {
    mm.add(MQ.motion, () => {
      gsap.from(ref.current.querySelectorAll('.ptps-head > *'), { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
      ref.current.querySelectorAll('.ptgp').forEach((g) => gsap.from(g, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: g, start: 'top 82%', once: true } }))
    })
  })
  const byId = Object.fromEntries(pieces.map((p) => [p.id, p]))
  return (
    <section className="ptps" id="pieces" ref={ref}>
      <div className="mx">
        <div className="ptps-head"><p className="sd-eyebrow">Selected pieces</p><h2 className="sd-h2">Work people choose to watch</h2></div>
        {pieceGroups.map((g) => (
          <div className={'ptgp ptgp-' + g.key} key={g.key}>
            <div className="ptgp-head"><span className="ptgp-n">{g.n}</span><h3 className="ptgp-h">{g.h}</h3><p>{g.d}</p></div>
            {g.ids
              ? <div className={'ptgrid n' + g.ids.length}>{g.ids.map((id) => <Card p={byId[id]} key={id} onOpen={setOpen} />)}</div>
              : <TikTokPosts />}
          </div>
        ))}
      </div>
      {open && <Player p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
