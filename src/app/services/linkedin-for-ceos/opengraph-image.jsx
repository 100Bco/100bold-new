import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'LinkedIn for CEOs by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'LinkedIn for CEOs', img: 'svc-linkedin.jpg' })
}
