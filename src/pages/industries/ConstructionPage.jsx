import IndustryPageTemplate from './IndustryPageTemplate'

export default function ConstructionPage() {
  const data = {
    label: 'GENERAL CONTRACTORS, BUILDERS, CONSTRUCTION',
    headline: <>Build Your Reputation<br/>As Fast As You <span className="accent">Build Projects.</span></>,
    subtitle: "You win jobs through relationships and reputation. But if your digital presence doesn't match the quality of your work, you're invisible to the next generation of decision makers.",
    stats: [
      { num: 'Top 3', label: 'Local Search Ranking' },
      { num: '6,000+', label: 'Austin Business Network' },
      { num: '100%', label: 'Hands-Off Management' },
    ],
    painPoints: [
      'Your best work is invisible online',
      'Competitors with worse track records outrank you on Google',
      'No time to manage social media or chase reviews',
      "Missing out on projects because developers can't find you",
    ],
    solutionIntro: 'We build your digital authority so the right projects find you.',
    solutions: [
      {
        title: 'GBP Domination',
        desc: 'Complete Google Business Profile takeover. Weekly content, review management, and local SEO that puts you in front of developers and property owners.',
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'LinkedIn CEO Authority',
        desc: 'We position you as the go-to GC in Austin. Strategy, ghostwriting, and network growth — fully hands-off.',
        iconPath: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
      },
      {
        title: 'Network Access',
        desc: 'Join 6,000+ Austin business professionals. GCs, developers, architects, and subs all connected. Referrals happen naturally.',
        iconPath: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
      },
      {
        title: 'Review Engine',
        desc: 'Automated review collection from past clients. Build the online reputation that matches the quality of your work.',
        iconPath: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
    ],
    services: ['GBP Domination', 'LinkedIn CEO Authority', 'Network Access', 'Review Engine'],
    shortName: 'Construction',
    ctaIndustry: 'construction',
  }

  return <IndustryPageTemplate data={data} />
}
