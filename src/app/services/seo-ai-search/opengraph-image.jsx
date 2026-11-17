import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'SEO and AI Search by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'SEO and AI Search', img: 'svc-seo.jpg' })
}
