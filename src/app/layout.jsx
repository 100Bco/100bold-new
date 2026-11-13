import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import SmoothScroll from '@/lib/SmoothScroll'
import Cursor from '@/components/Cursor'
import MobileCTA from '@/components/MobileCTA'
import './globals.css'
import '@/styles/kinetic.css'
import '@/styles/home.css'
import '@/styles/hero-stream.css'
import '@/styles/run-answer.css'
import '@/styles/process-gauge.css'
import '@/styles/sections.css'

const POSITIONING = '100Bold is a growth agency for $5M+ service businesses. We get you found on Google and in AI search, turn ad spend into signed clients and booked jobs, and make your CEO the best-known name in your market.'

export const metadata = {
  metadataBase: new URL('https://100bold.co'),
  title: {
    default: '100Bold | Growth Agency for $5M+ Service Businesses',
    template: '%s',
  },
  description: '100Bold helps $5M+ service businesses win more of the right clients through SEO and AI search, Meta ads, and LinkedIn for CEOs. Based in Austin, Texas.',
  openGraph: {
    title: '100Bold | Growth Agency for $5M+ Service Businesses',
    description: 'Growth agency for $5M+ service businesses. SEO and AI search, Meta ads, and LinkedIn for CEOs.',
    url: 'https://100bold.co',
    siteName: '100Bold',
    images: [{ url: '/100BOLD - OP3-09 (1).png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/100BOLD - OP3-09 (1).png'],
  },
  icons: {
    icon: '/100BOLD - OP3-02.png',
  },
  other: {
    'llms': '/llms.txt',
  },
}

const address = {
  '@type': 'PostalAddress',
  streetAddress: '12516 Walnut Park Crossing #200',
  addressLocality: 'Austin',
  addressRegion: 'TX',
  postalCode: '78753',
  addressCountry: 'US',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '100Bold',
  alternateName: '100Bold Agency',
  url: 'https://100bold.co',
  logo: 'https://100bold.co/100BOLD%20-%20OP3-09%20(1).png',
  description: POSITIONING,
  email: 'start@100bold.co',
  telephone: '+1-757-773-5707',
  address,
  founder: { '@type': 'Person', name: 'Minh Mac' },
  sameAs: [
    'https://www.facebook.com/100bold.co',
    'https://www.linkedin.com/company/100bold',
    'https://www.instagram.com/100bold.co/',
  ],
  slogan: 'Start Brave. Stay Bold.',
  knowsAbout: ['AI SEO', 'Generative engine optimization', 'Local SEO', 'Web design', 'Meta ads', 'LinkedIn for CEOs', 'AI video production'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '100Bold',
  url: 'https://100bold.co',
  description: POSITIONING,
  email: 'start@100bold.co',
  telephone: '+1-757-773-5707',
  address,
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO and AI Search', url: 'https://100bold.co/services/seo-ai-search' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web design', url: 'https://100bold.co/services/web-design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta ads', url: 'https://100bold.co/services/meta-ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portal, AI production', url: 'https://100bold.co/portal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'The Mark, LinkedIn for CEOs', url: 'https://100bold.co/the-mark' } },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '100Bold',
  url: 'https://100bold.co',
  description: POSITIONING,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Bebas+Neue&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll />
        <Cursor />
        <RevealObserver />
        <Nav />
        {children}
        <Footer />
        <MobileCTA />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LJ53QH6QEZ" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LJ53QH6QEZ');`}
        </Script>

        {/* Wistia Video */}
        <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
        <Script src="https://fast.wistia.com/embed/futnh0kwqu.js" strategy="lazyOnload" type="module" />

        <Analytics />
      </body>
    </html>
  )
}
