import ApplyForm from '@/components/the-mark/ApplyForm'
import { OG_IMAGES } from '@/components/the-mark/meta'

// Ported from https://themark.100bold.co/apply (markup converted from the live SSR output).
export const metadata = {
  title: "Apply | The Mark",
  description: "Apply to work with The Mark. Tell us about your business and your goals on LinkedIn.",
  alternates: { canonical: '/the-mark/apply' },
  openGraph: {
    title: "Apply | The Mark",
    description: "Apply to work with The Mark. Tell us about your business and your goals on LinkedIn.",
    url: '/the-mark/apply',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', images: OG_IMAGES },
}

export default function ApplyPage() {
  return (
    <>
      <main className="ap">
        <div className="ap-wrap">
          <div className="ap-head">
            <div className="csx-label">Application</div>
            <h1 className="ap-title">Apply to work <span className="tm-accent">with us.</span></h1>
            <p className="ap-lead">Limited spots. Tell us a little about you and your business, and we will be in touch.</p>
          </div>
          <div className="ap-know">
            <div><b>What to have ready</b><p>Your LinkedIn profile, your company website, and the one or two things you want LinkedIn to bring you.</p></div>
            <div><b>What happens next</b><p>We read every application and reply by email. If it looks like a fit, we set up a short call to plan your first 90 days.</p></div>
          </div>
          <ApplyForm />
          <p className="ap-alt">Prefer email? Reach us directly at <a href="mailto:start@100bold.co">start@100bold.co</a></p>
        </div>
      </main>
    </>
  )
}
