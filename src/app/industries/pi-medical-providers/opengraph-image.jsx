import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'PI medical providers: marketing by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'PI medical providers', img: 'ind-medical.jpg' })
}
