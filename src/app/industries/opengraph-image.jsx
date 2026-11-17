import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Industries at 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Industries', img: 'hub-industries.jpg' })
}
