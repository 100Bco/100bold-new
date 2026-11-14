import ComingSoon from '@/components/ComingSoon'
import { cases } from '@/data/work'
import { isLive } from '@/lib/cases'

const slug = (to) => to.split('/').pop()

export function generateStaticParams() {
  return cases.map((c) => ({ slug: slug(c.to) }))
}

/* Each case has its own title: client and result. Pages stay out of the index until they are published. */
export async function generateMetadata({ params }) {
  const { slug: s } = await params
  const c = cases.find((x) => slug(x.to) === s)
  const title = c ? `${c.client}: ${c.big} ${c.label} | 100Bold` : 'Case study | 100Bold'
  return { title, alternates: { canonical: `/work/${s}` }, robots: c && isLive(c.to) ? undefined : { index: false, follow: true } }
}

export default async function CaseStudyPage({ params }) {
  const { slug: s } = await params
  const c = cases.find((x) => slug(x.to) === s)
  return <ComingSoon title={c ? c.client + ' case study' : 'Case study'} />
}
