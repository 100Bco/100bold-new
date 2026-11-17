import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Law firms: marketing by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Law firms', img: 'ind-law.jpg' })
}
