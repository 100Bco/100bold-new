import { renderOg, ogSize, ogContentType } from '@/lib/og'

export const alt = '100Bold, the growth agency for $5M+ service businesses'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({
    title: 'Start Brave. Stay Bold.',
    img: 'founder.jpg',
    imgPos: '60% 30%',
  })
}
