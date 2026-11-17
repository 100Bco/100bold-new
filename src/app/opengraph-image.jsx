import { renderOg, ogSize, ogContentType } from '@/lib/og'

export const alt = '100Bold, the growth agency for $5M+ service businesses'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({
    eyebrow: 'Growth agency · Austin, TX',
    title: 'The growth agency for $5M+ service businesses',
    desc: 'SEO and AI search, web design, Meta ads, LinkedIn for CEOs, and AI video.',
    img: 'founder.jpg',
    imgPos: '60% 30%',
  })
}
