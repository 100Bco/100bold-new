import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Real estate: marketing by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderPhotoOg({ title: 'Real estate', img: 'ind-realestate.jpg' })
}
