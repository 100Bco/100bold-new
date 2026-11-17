// The Mark (LinkedIn for CEOs) — ported from themark.100bold.co.
// Its stylesheet is fully scoped under .tm and is only loaded for /the-mark routes.
import '@/styles/the-mark.css'

export default function TheMarkLayout({ children }) {
  return <div className="tm">{children}</div>
}
