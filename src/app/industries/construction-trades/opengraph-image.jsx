import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Construction and trades: marketing by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Construction and trades', img: 'ind-construction.jpg' })
}
