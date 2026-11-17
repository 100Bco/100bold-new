import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Local services: marketing by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Local services', img: 'ind-local.jpg' })
}
