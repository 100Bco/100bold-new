import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'About 100Bold: Minh Mac, founder'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'About 100Bold', img: 'about-founder.jpg' })
}
