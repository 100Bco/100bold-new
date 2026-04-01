import IndustryPageTemplate from './IndustryPageTemplate'

export default function RealEstatePage() {
  const data = {
    label: 'DEVELOPERS, PROPERTY MANAGERS, BROKERAGES',
    headline: <>The Right Deals Find You<br/>When You <span className="accent">Own The Room.</span></>,
    subtitle: "In Austin real estate, it's not about cold calling. It's about being the name everyone already knows before the deal hits the table.",
    stats: [
      { num: '2.5X', label: 'LinkedIn Growth' },
      { num: '6,000+', label: 'Business Leader Network' },
      { num: '100+', label: 'Event Attendees' },
    ],
    painPoints: [
      'Relying on personal network without scaling it',
      "No digital authority — investors can't find you online",
      "Competitors are building LinkedIn presence while you're not",
      "Missing deal flow from developers and partners you don't know yet",
    ],
    solutionIntro: 'We build your digital authority and put you in front of the people that matter.',
    solutions: [
      {
        title: 'LinkedIn CEO Authority',
        desc: 'We take over your LinkedIn completely. Content strategy, ghostwriting, engagement, and network growth. You get the credit, we do the work.',
        iconPath: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
      },
      {
        title: 'GBP Domination',
        desc: 'Own local search for your market. When investors and partners search for commercial real estate in Austin, they find you.',
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'Network Access',
        desc: "100Bold's Austin network includes GCs, developers, architects, city officials, and business leaders. Introductions happen naturally.",
        iconPath: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
      },
      {
        title: 'Event Marketing',
        desc: "From Dacy Business Park's sold-out launch to multi-industry networking events — we put you in the right rooms.",
        iconPath: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      },
    ],
    services: ['LinkedIn CEO Authority', 'GBP Domination', 'Network Access', 'Event Marketing'],
    shortName: 'Real Estate',
    ctaIndustry: 'real estate',
  }

  return <IndustryPageTemplate data={data} />
}
