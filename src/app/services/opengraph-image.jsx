import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Services at 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Services', img: 'hub-services.jpg' })
}
