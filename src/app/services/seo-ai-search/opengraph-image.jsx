import { renderSceneOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'SEO and AI Search by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderSceneOg({ title: 'SEO and AI Search', scene: 'seo' })
}
