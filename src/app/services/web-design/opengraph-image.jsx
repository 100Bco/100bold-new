import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Web design by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Web design', img: 'svc-web.jpg' })
}
