import Hero from '@/components/about/Hero'
import ContactBody from '@/components/about/Contact'
import ContactForm from '@/components/about/ContactForm'
import { contact } from '@/data/about'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'
import '@/styles/about.css'

export const metadata = { title: contact.title, description: contact.description, alternates: { canonical: '/contact' } }

const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: contact.title, url: 'https://100bold.co/contact', mainEntity: { '@type': 'Organization', name: '100Bold', email: contact.email, telephone: contact.phone, address: { '@type': 'PostalAddress', streetAddress: '12516 Walnut Park Crossing #200', addressLocality: 'Austin', addressRegion: 'TX', postalCode: '78753', addressCountry: 'US' } } }

export default function ContactPage() {
  return (
    <main id="main" className="sd-page">
      <Hero d={{ ...contact.hero, bySource: contact.heroBySource }} cta={false} />
      <ContactBody />
      <ContactForm />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
