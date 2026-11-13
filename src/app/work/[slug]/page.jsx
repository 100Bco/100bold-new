import ComingSoon from '@/components/ComingSoon'

const slugs = ['dang-law-group', 't98-rehab', 'lt-commercial-group', 'bee-construction']

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  return { title: 'Case study | 100Bold', alternates: { canonical: `/work/${slug}` } }
}

export default function CaseStudyPage() {
  return <ComingSoon title="Case study" />
}
