import { siteGroups } from '@/data/sitemap'

export default function sitemap() {
  const now = new Date()
  return siteGroups.flatMap((g) => g.links).map((l) => ({
    url: 'https://100bold.co' + (l.path === '/' ? '/' : l.path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: l.path === '/' ? 1 : g(l.path),
  }))
}
const g = (p) => (p.startsWith('/privacy') || p.startsWith('/terms') || p === '/sitemap' ? 0.3 : p.split('/').length > 3 ? 0.6 : 0.8)
