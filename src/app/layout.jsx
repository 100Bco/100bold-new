import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WaveDivider from '@/components/WaveDivider'
import RevealObserver from '@/components/RevealObserver'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://100bold.co'),
  title: {
    default: '100Bold — Start Brave. Stay Bold.',
    template: '%s — 100Bold',
  },
  description: "100Bold Agency is Austin's growth agency for $5M+ service businesses. We dominate Google Business Profile, build LinkedIn CEO authority, and install AI infrastructure powered by MinAI.",
  keywords: ['100Bold', 'Austin growth agency', 'Google Business Profile', 'LinkedIn CEO Authority', 'local service marketing', 'MinAI'],
  openGraph: {
    title: '100Bold — Start Brave. Stay Bold.',
    description: "Austin's growth agency for $5M+ service businesses. Google domination, LinkedIn authority, and AI infrastructure.",
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
  alternates: {
    canonical: 'https://100bold.co',
  },
  other: {
    'llms': '/llms.txt',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '100Bold Agency',
  alternateName: '100Bold',
  url: 'https://100bold.co',
  logo: 'https://100bold.co/100BOLD%20-%20OP3-09%20(1).png',
  description: "Austin's growth agency for $5M+ service businesses. We dominate Google, build LinkedIn authority, and install AI infrastructure.",
  email: 'start@100bold.co',
  address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' },
  sameAs: [
    'https://www.facebook.com/100bold.co',
    'https://www.linkedin.com/company/100bold',
    'https://www.instagram.com/100bold.co/',
  ],
  foundingLocation: 'Austin, Texas',
  slogan: 'Start Brave. Stay Bold.',
  knowsAbout: ['Google Business Profile', 'LinkedIn Marketing', 'AI Infrastructure', 'Local SEO', 'Social Media Marketing'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '100Bold Agency',
  url: 'https://100bold.co',
  email: 'start@100bold.co',
  address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' },
  priceRange: '$$$',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'San Antonio' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Houston' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Domination', description: 'Full Google Business Profile takeover — optimization, weekly content, review generation, local SEO, AI chatbot installation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn CEO Authority', description: 'Complete LinkedIn profile management for CEOs and founders — strategy, ghostwriting, engagement, and network growth.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Content', description: 'High-converting content across Meta, LinkedIn, Instagram, TikTok, and more.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Ads', description: 'Google and Meta ad campaigns layered on established organic foundation for maximum ROI.' } },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '100Bold',
  url: 'https://100bold.co',
  description: "Austin's growth agency for $5M+ service businesses.",
  potentialAction: { '@type': 'SearchAction', target: 'https://100bold.co/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RevealObserver />
        <Nav />
        {children}
        <WaveDivider from="var(--white)" to="#1A1816" variant="wave" />
        <Footer />

        {/* Static content for AI crawlers */}
        <noscript>
          <main>
            <h1>100Bold — Austin&apos;s Growth Agency for $5M+ Service Businesses</h1>
            <p>100Bold is a growth agency for established Texas service businesses and founders based in Austin, Texas. We dominate Google, build LinkedIn CEO authority, and install AI infrastructure powered by MinAI.</p>
            <h2>Our Services</h2>
            <ul>
              <li>Google Domination — Full Google Business Profile takeover, local SEO, review generation, weekly content</li>
              <li>LinkedIn CEO Authority — Complete LinkedIn profile management for CEOs and founders, ghostwriting, engagement</li>
              <li>Social Media Content — High-converting content across Meta, LinkedIn, Instagram, TikTok</li>
              <li>Paid Ads — Google and Meta campaigns layered on organic foundation</li>
            </ul>
            <h2>Industries We Serve</h2>
            <ul>
              <li>General Contractors and Builders</li>
              <li>Plumbing, Roofing and Electrical</li>
              <li>Home Services and Solar</li>
              <li>Real Estate and Property Management</li>
              <li>Personal Injury Law Firms</li>
              <li>Chiropractic and Rehabilitation</li>
            </ul>
            <p>Contact: start@100bold.co | Austin, Texas | https://100bold.co</p>
          </main>
        </noscript>

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
        <Script src="https://fast.wistia.com/embed/futnh0kwqu.js" strategy="lazyOnload" />

        <Analytics />
      </body>
    </html>
  )
}
