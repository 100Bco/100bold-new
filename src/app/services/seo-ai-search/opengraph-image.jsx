import { renderOg, ogSize, ogContentType } from '@/lib/og'

export const alt = 'SEO and AI Search by 100Bold'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({
    eyebrow: 'Services · SEO and AI Search',
    title: 'Be the business Google and ChatGPT recommend',
    desc: 'Rank in Google and Maps, and get named when buyers ask AI who to hire.',
    img: 'seo.jpg',
    imgPos: '70% 30%',
  })
}
