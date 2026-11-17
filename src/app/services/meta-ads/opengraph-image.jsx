import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Meta ads by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Meta ads', img: 'svc-ads.jpg' })
}
