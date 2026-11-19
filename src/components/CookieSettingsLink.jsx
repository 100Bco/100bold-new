'use client'

import { openCookieSettings } from '@/lib/consent'

export default function CookieSettingsLink({ className, children = 'Cookie settings' }) {
  return <button type="button" className={className} onClick={openCookieSettings}>{children}</button>
}
