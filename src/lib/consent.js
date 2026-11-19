/* Cookie consent: one first-party cookie holds the visitor's choice.
   Essential cookies always run; analytics and marketing run only after an opt-in.
   A Global Privacy Control signal is treated as an opt-out of both. */
'use client'

import { useEffect, useState } from 'react'

export const CONSENT_COOKIE = 'bold_consent'
const VERSION = 1
const MAX_AGE = 60 * 60 * 24 * 180 // 180 days

export function gpcOn() {
  return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true
}

export function readConsent() {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'))
  if (!m) return null
  try {
    const c = JSON.parse(decodeURIComponent(m[1]))
    if (c.v !== VERSION) return null
    if (gpcOn()) c.marketing = false
    return c
  } catch { return null }
}

export function saveConsent({ analytics, marketing }) {
  const c = { v: VERSION, analytics: !!analytics, marketing: !!marketing && !gpcOn(), ts: new Date().toISOString() }
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(c))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`
  if (!c.analytics) clearGaCookies()
  window.dispatchEvent(new CustomEvent('consentchange', { detail: c }))
  return c
}

function clearGaCookies() {
  const host = location.hostname.replace(/^www\./, '')
  document.cookie.split('; ').forEach((kv) => {
    const name = kv.split('=')[0]
    if (/^_ga/.test(name) || name === '_gid') {
      ;['', '.' + host, host].forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; Path=/${d ? '; Domain=' + d : ''}`
      })
    }
  })
}

export function openCookieSettings() {
  window.dispatchEvent(new Event('open-cookie-settings'))
}

/* Current choice; null until the visitor decides */
export function useConsent() {
  const [c, setC] = useState(null)
  useEffect(() => {
    setC(readConsent())
    const on = (e) => setC(e.detail)
    window.addEventListener('consentchange', on)
    return () => window.removeEventListener('consentchange', on)
  }, [])
  return c
}
