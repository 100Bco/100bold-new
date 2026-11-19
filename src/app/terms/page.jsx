import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import { company as c } from '@/data/company'
import '@/styles/legal.css'

export const metadata = {
  title: 'Terms of Use & Disclaimer | 100Bold',
  description: 'The terms for using the 100Bold website, and important notes about case study results, AI-generated content and third-party trademarks.',
  alternates: { canonical: '/terms' },
}

const mail = <a href={'mailto:' + c.email}>{c.email}</a>

const sections = [
  { id: 'accept', h: 'Using this site', body: <>
    <p>These Terms of Use govern your use of {c.site.replace('https://', '')} (the “Site”), operated by {c.name}. By using the Site you agree to these terms and to our <Link href="/privacy">Privacy &amp; Cookie Policy</Link>. If you do not agree, please do not use the Site. The Site is intended for adults and businesses in the United States.</p>
  </> },
  { id: 'services', h: 'Our services', body: <>
    <p>Information on the Site describes our services in general terms. Filling in a form, booking a call or receiving a proposal does not create a client relationship. Any work we do is governed by a separate written agreement, which controls if it conflicts with these terms. Prices, offers and availability may change without notice.</p>
  </> },
  { id: 'ip', h: 'Content and trademarks', body: <>
    <p>The Site and its content, including text, design, graphics, video and the names 100Bold, Portal and LinkedIn for CEOs, belong to {c.name} or our licensors and are protected by copyright and trademark law. You may view and share pages for personal or internal business use with a link back to us. You may not copy, republish or sell our content without written permission.</p>
    <p>Client names, logos and work samples are shown with permission and remain the property of their owners. LinkedIn, Google, ChatGPT, Meta, Facebook, Instagram and TikTok are trademarks of their respective owners; we are not affiliated with or endorsed by them.</p>
  </> },
  { id: 'use', h: 'Acceptable use', body: <>
    <p>Do not use the Site to break the law, send spam or harmful code, scrape it in bulk, try to access systems you are not authorized to use, or submit false information in our forms.</p>
  </> },
  { id: 'disclaimer', h: 'Disclaimer', body: <>
    <p><b>General information only.</b> Content on the Site, including articles and insights, is general marketing information. It is not legal, financial, tax or other professional advice. Speak with a qualified professional about your situation.</p>
    <p><b>Results are not guaranteed.</b> Case studies, figures and testimonials describe what happened for specific clients, as reported by them or measured at the time. Every business, market and budget is different, and past results do not guarantee future results. We do not guarantee any ranking on Google, mention in AI answers, number of leads, clients or revenue.</p>
    <p><b>AI-generated content.</b> Some images, video and characters on the Site, including work from our AI Production studio, Portal, are created or edited with artificial intelligence. People shown in illustrative images may not be real clients.</p>
    <p><b>Law firm and medical clients.</b> Work shown for law firms and medical providers is marketing material we produced. It is not an endorsement by, or advice from, those firms or providers.</p>
  </> },
  { id: 'links', h: 'Third-party sites and tools', body: <>
    <p>The Site links to and embeds content from third parties, such as booking and form tools, video players and social media posts. We are not responsible for their content, availability or practices.</p>
  </> },
  { id: 'warranty', h: 'No warranties', body: <>
    <p>The Site is provided “as is” and “as available.” To the fullest extent allowed by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not promise the Site will be error-free or always available.</p>
  </> },
  { id: 'liability', h: 'Limitation of liability', body: <>
    <p>To the fullest extent allowed by law, {c.name} will not be liable for any indirect, incidental, special, consequential or punitive damages, or lost profits or data, arising from your use of the Site. Our total liability for any claim related to the Site is limited to one hundred US dollars ($100). Some states do not allow these limits, so they may not apply to you.</p>
  </> },
  { id: 'indemnity', h: 'Indemnity', body: <>
    <p>You agree to defend and indemnify {c.name} against claims arising from your misuse of the Site or breach of these terms.</p>
  </> },
  { id: 'law', h: 'Governing law', body: <>
    <p>These terms are governed by the laws of the State of {c.state}, without regard to conflict-of-law rules. Any dispute will be brought in the state or federal courts located in {c.county}, {c.state}, and you consent to their jurisdiction.</p>
  </> },
  { id: 'access', h: 'Accessibility', body: <>
    <p>We want the Site to be usable by everyone and work toward the Web Content Accessibility Guidelines (WCAG) 2.1 AA. If something is hard to use, email {mail} and we will help and fix it.</p>
  </> },
  { id: 'changes', h: 'Changes and contact', body: <>
    <p>We may update these terms; the effective date shows the latest version. Continued use of the Site means you accept the changes. Questions: {mail} or {c.name}, {c.address}.</p>
  </> },
]

export default function Page() {
  return <LegalPage title="Terms of Use & Disclaimer" updated={c.effective} sections={sections} />
}
