import IndustryPageTemplate from './IndustryPageTemplate'

export default function LocalServicesPage() {
  const data = {
    label: 'HVAC, ROOFING, PLUMBING, SOLAR',
    headline: <>Stop Losing Jobs While<br/>You're On <span className="accent">The Job.</span></>,
    subtitle: "Your phone rings at 2 PM — you're on a roof. By the time you call back, they've already hired someone else. 100Bold makes sure that never happens again.",
    stats: [
      { num: '3X', label: 'More Booked Jobs in 60 Days' },
      { num: '<5s', label: 'Average Lead Response Time' },
      { num: '85%', label: 'Fewer Missed Opportunities' },
    ],
    painPoints: [
      'Missing calls while on job sites',
      'Losing leads to competitors who respond faster',
      'No time to chase reviews or follow up with old customers',
      'Your Google profile is empty while competitors rank above you',
    ],
    solutionIntro: 'A complete system built specifically for local service contractors.',
    solutions: [
      {
        title: 'GBP Domination',
        desc: 'We optimize every field, post weekly content, and reply to every review. You show up first when customers search.',
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'Automated Review Engine',
        desc: 'SMS and email campaigns request reviews from past customers on autopilot. Build a 5-star reputation without lifting a finger.',
        iconPath: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      {
        title: 'AI Call & Text Response',
        desc: "Never miss a lead again. MinAI answers calls and texts instantly 24/7, qualifying prospects while you're on the job site.",
        iconPath: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
      },
      {
        title: 'Social Content Pipeline',
        desc: 'Your best reviews become TikToks, Reels, and posts. Consistent content without you touching it.',
        iconPath: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      },
    ],
    services: ['GBP Domination', 'Review Engine', 'Social Content', 'MinAI'],
    shortName: 'Local Service Contractors',
    ctaIndustry: 'local service',
  }

  return <IndustryPageTemplate data={data} />
}
