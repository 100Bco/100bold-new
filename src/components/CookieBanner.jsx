'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { readConsent, saveConsent, gpcOn } from '@/lib/consent'

const GA_ID = 'G-LJ53QH6QEZ'

/* Bottom cookie notice + preferences panel, and the Google Analytics loader that waits for an opt-in */
export default function CookieBanner() {
  const [ready, setReady] = useState(false)
  const [choice, setChoice] = useState(null)
  const [show, setShow] = useState(false)
  const [prefs, setPrefs] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [gpc, setGpc] = useState(false)

  useEffect(() => {
    const c = readConsent()
    setGpc(gpcOn())
    setChoice(c)
    setShow(!c)
    if (c) { setAnalytics(c.analytics); setMarketing(c.marketing) }
    setReady(true)
    const open = () => {
      const cur = readConsent()
      setAnalytics(cur ? cur.analytics : false)
      setMarketing(cur ? cur.marketing : false)
      setPrefs(true); setShow(true)
    }
    window.addEventListener('open-cookie-settings', open)
    return () => window.removeEventListener('open-cookie-settings', open)
  }, [])

  const decide = (a, m) => { setChoice(saveConsent({ analytics: a, marketing: m })); setShow(false); setPrefs(false) }

  return (
    <>
      {ready && choice?.analytics && (
        <>
          <Script src={'https://www.googletagmanager.com/gtag/js?id=' + GA_ID} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {show && (
        <div className={'ck' + (prefs ? ' ck-open' : '')} role="dialog" aria-modal="false" aria-labelledby="ck-title">
          {!prefs ? (
            <div className="ck-card">
              <h2 id="ck-title" className="ck-title">Your privacy</h2>
              <p className="ck-text">
                We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve your experience and understand site traffic. By clicking “Accept,” you agree to our use of cookies as described in our <Link href="/privacy#cookies">Cookie Policy</Link>. You can change your choice at any time from “Cookie settings” at the bottom of every page.
              </p>
              {gpc && <p className="ck-gpc">Global Privacy Control detected: we will not use your data for advertising.</p>}
              <div className="ck-btns">
                <button type="button" className="ck-btn ck-btn-dark" onClick={() => decide(true, true)}>Accept</button>
                <button type="button" className="ck-btn ck-btn-line" onClick={() => decide(false, false)}>Reject non-essential</button>
                <button type="button" className="ck-btn ck-btn-text" onClick={() => setPrefs(true)}>Preferences</button>
              </div>
            </div>
          ) : (
            <div className="ck-card ck-card-prefs">
              <h2 id="ck-title" className="ck-title">Cookie preferences</h2>
              <p className="ck-text">Choose which cookies we may use. Essential cookies are always on because the site cannot work without them. Read more in our <Link href="/privacy#cookies">Cookie Policy</Link>.</p>
              <ul className="ck-list">
                <li>
                  <div><b>Essential</b><span>Security, page delivery, your cookie choice, contact forms and video playback.</span></div>
                  <span className="ck-always">Always on</span>
                </li>
                <li>
                  <div><b>Analytics</b><span>Google Analytics, so we can see which pages help visitors. No ads.</span></div>
                  <Toggle on={analytics} set={setAnalytics} label="Analytics cookies" />
                </li>
                <li>
                  <div><b>Marketing</b><span>Embedded social posts (TikTok) that may track you across sites.{gpc ? ' Off because your browser sends Global Privacy Control.' : ''}</span></div>
                  <Toggle on={marketing && !gpc} set={setMarketing} label="Marketing cookies" disabled={gpc} />
                </li>
              </ul>
              <div className="ck-btns">
                <button type="button" className="ck-btn ck-btn-dark" onClick={() => decide(analytics, marketing)}>Save choices</button>
                <button type="button" className="ck-btn ck-btn-line" onClick={() => decide(true, true)}>Accept all</button>
                <button type="button" className="ck-btn ck-btn-text" onClick={() => decide(false, false)}>Reject non-essential</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

function Toggle({ on, set, label, disabled }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={disabled} className={'ck-sw' + (on ? ' on' : '')} onClick={() => set(!on)}>
      <i />
    </button>
  )
}
