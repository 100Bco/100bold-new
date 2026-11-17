import { renderSceneOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Meta ads by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderSceneOg({ title: 'Meta ads', scene: 'ads' })
}
