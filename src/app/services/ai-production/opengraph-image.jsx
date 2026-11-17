import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'AI Production by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'AI Production', img: 'svc-portal.jpg' })
}
