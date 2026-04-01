import IndustryPageTemplate from './IndustryPageTemplate'

export default function PlumbingRoofingPage() {
  const data = {
    label: 'PLUMBERS, ROOFERS, ELECTRICIANS',
    headline: <>Own Every Local Search<br/>In <span className="accent">Your City.</span></>,
    subtitle: "When a pipe bursts at midnight or a roof leaks after a storm, homeowners search Google — not Facebook. Be the first name they find.",
    stats: [
      { num: '#1', label: 'Local Search Position' },
      { num: '85%', label: 'Fewer Missed Calls' },
      { num: '5-Star', label: 'Review Machine' },
    ],
    painPoints: [
      'Competitors with fewer jobs rank above you on Google',
      "You're too busy on job sites to answer every call",
      'No system to ask happy customers for reviews',
      'Wasting money on ads without organic foundation',
    ],
    solutionIntro: 'We own your local search so every emergency call comes to you.',
    solutions: [
      {
        title: 'GBP Domination',
        desc: "Every field optimized, weekly content posted, every review replied to. When someone searches 'plumber near me' — you're first.",
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'Review Engine',
        desc: 'Automated SMS campaigns after every job. QR codes for your field crews. Reviews pour in without you asking.',
        iconPath: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      {
        title: 'AI Call Response',
        desc: 'MinAI answers every call and text instantly — even at midnight. Qualifies leads and books appointments while you work.',
        iconPath: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
      },
      {
        title: 'Paid Ads Layer',
        desc: 'Once organic is solid, we layer Google Ads on top. Lower cost-per-click because your organic ranking does the heavy lifting.',
        iconPath: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
      },
    ],
    services: ['GBP Domination', 'Review Engine', 'Paid Ads', 'MinAI'],
    shortName: 'Plumbing & Roofing',
    ctaIndustry: 'plumbing & roofing',
  }

  return <IndustryPageTemplate data={data} />
}
