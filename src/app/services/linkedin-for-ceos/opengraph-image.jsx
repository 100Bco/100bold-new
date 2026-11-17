import { renderSceneOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'LinkedIn for CEOs by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderSceneOg({ title: 'LinkedIn for CEOs', scene: 'linkedin' })
}
