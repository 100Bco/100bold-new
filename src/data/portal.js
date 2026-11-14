/* Portal, 100Bold's AI production studio. Structure follows the Content Blueprint (AI Production House).
   To add a piece: drop the mp4 and a poster jpg in /public/portal and add an entry to `pieces`.
   Every piece needs a written description; add `transcript` when it has spoken words. */
export const portalPage = {
  title: 'Portal | AI Video Production for Brands | 100Bold',
  description: 'Portal is 100Bold’s AI production studio. Brand films, ads, and social content for service businesses, without a film crew or a six-week timeline.',
  hero: {
    eyebrow: 'Portal · AI production studio',
    h1: ['Film-quality video,', 'made with AI,', 'delivered in days'],
    line: 'Portal is 100Bold’s AI production studio. We make brand films, ads, and social content for service businesses without a film crew or a six-week timeline.',
    cta: 'Start a project',
  },
}

const P = '/portal/'
const piece = (id, file, o) => ({ id, src: P + file + '.mp4', poster: P + file + '-poster.jpg', transcript: null, turnaround: null, ...o })

/* Every piece, in the order shown. ratio is the video's own shape (used by the pop-up player). */
export const pieces = [
  piece('paperwork', 'dang-man-v2', { client: 'Dang Law Group', title: 'The paperwork monster', format: 'Short film, vertical', duration: '0:33', ratio: '9/16', description: 'A crash victim is chased down the street by a monster made of insurance paperwork, until Dang-Man steps in and clears the way.' }),
  piece('bills-stacking', 'dlg-ad-2', { client: 'Dang Law Group', title: 'Bills stacking up', format: 'Short film, vertical', duration: '0:33', ratio: '9/16', description: 'After a crash, medical bills and statements take shape as a storm. Dang-Man answers the call and holds the line.' }),
  piece('low-offer', 'dlg-ad-3', { client: 'Dang Law Group', title: 'The low offer', format: 'Short film, vertical', duration: '0:29', ratio: '9/16', description: 'An insurance adjuster rolls a boulder marked “low offer” at an injured driver. Dang-Man pushes back with the facts of the case.' }),
  piece('actor-to-client', 'portal-compare', { client: 'Dang Law Group', title: 'Actor to client', format: 'Side by side', duration: '0:24', ratio: '1214/1080', description: 'Each scene is played by a real actor, then rebuilt with the founder in his place. The same performance, now in his own office and city.' }),
  piece('pharmacy', 'bond-111', { client: 'BOND', title: 'Dance at the pharmacy', format: 'TikTok', duration: '0:33', ratio: '16/9', description: 'A crew in black suits turns a busy pharmacy storefront into a stage, part of a dance series shot across the city.' }),
  piece('milk-store', 'bond-114', { client: 'BOND', title: 'Dance at the dairy', format: 'TikTok', duration: '0:32', ratio: '16/9', description: 'The crew takes the routine to the sidewalk outside a dairy shop, in red socks and black suits.' }),
  piece('office', 'bond-109', { client: 'BOND', title: 'Dance at the office', format: 'TikTok', duration: '0:27', ratio: '16/9', description: 'A selfie, then a full routine through a bright pink-and-white tech office.' }),
  piece('bank', 'bond-110', { client: 'BOND', title: 'Solo at the bank', format: 'TikTok', duration: '0:15', ratio: '16/9', description: 'One dancer, one bank lobby, fifteen seconds.' }),
  piece('night-in', 'miami-vice-42', { client: 'Miami Vice', title: 'A night in', format: 'Brand film, vertical', duration: '0:11', ratio: '9/16', description: 'Neon light, a glass of wine, and the pool after dark: one evening at the property, told in eleven seconds.' }),
  piece('golden-hour', 'miami-vice-43', { client: 'Miami Vice', title: 'Golden hour', format: 'Brand film, vertical', duration: '0:12', ratio: '9/16', description: 'From the bedroom to the pool deck to the skyline, as hot-air balloons drift over the sunset.' }),
  piece('santa', 'video-0728', { client: 'LT Commercial Group', title: 'Christmas AI Film', format: 'Holiday film, vertical', duration: '0:32', ratio: '9/16', description: 'Santa sits down with the team to plan a new home, a holiday card for the real estate group’s clients and partners.' }),
  piece('halloween', 'video-0728b', { client: 'LT Commercial Group', title: 'Halloween AI Film', format: 'Holiday film, vertical', duration: '0:51', ratio: '9/16', description: 'Trick-or-treaters stop at an abandoned building. One redevelopment later, it is bright, leased, and open for business.' }),
  piece('clinic', 'video-0310', { client: 'Bee Construction', title: 'Built for care', format: 'Project film, vertical', duration: '0:39', ratio: '9/16', description: 'A finished clinic project, from the storm outside to the skylight ceilings and exam rooms inside.' }),
]

export const make = {
  h2: 'What we make',
  lead: 'One studio for every piece of video a service brand needs, from the big film to the weekly post.',
  items: [
    { k: 'Brand films', d: 'A story about who you are and why clients choose you, made to be watched to the end.' },
    { k: 'Ad creative', d: 'Video and image ads for Facebook and Instagram, made fast enough to test many ideas.' },
    { k: 'Social series', d: 'Recurring characters and formats that keep your brand in the feed every week.' },
    { k: 'Explainers', d: 'Clear, short videos that explain a service, a process, or a legal right in plain words.' },
  ],
  note: 'This is also where ongoing content and social lives.',
}

export const how = {
  h2: 'How it works',
  lead: 'Four steps from idea to finished video.',
  items: [
    { k: 'Brief', by: 'Day one', text: 'We learn your brand, your buyers, and what the piece needs to do.' },
    { k: 'Script', by: 'Words first', text: 'You approve the story and the script before anything is made.' },
    { k: 'Production', by: 'AI-native', text: 'We produce with AI tools and a human team, without a film crew.' },
    { k: 'Delivery', by: 'In days', text: 'You get the finished cuts, sized for every channel you use.' },
  ],
}

export const portalFaq = {
  h2: 'Questions',
  items: [
    { q: 'What is an AI production studio?', a: 'A studio that makes film-quality video with AI tools and a human creative team, instead of a film crew and a long shoot. Portal is 100Bold’s AI production studio.' },
    { q: 'How fast can you deliver a video?', a: 'Most pieces are delivered in days, not weeks. The timeline depends on the length and the number of versions.' },
    { q: 'Who owns the footage?', a: 'You do. The finished videos are yours to use on your site, your social channels, and your ads.' },
    { q: 'How do you handle real people and likenesses?', a: 'We only use a real person’s face, voice, or likeness with their written permission, and you approve every version before it is published.' },
    { q: 'What kinds of video do you make?', a: 'Brand films, ad creative, social series, and explainers, plus ongoing content and social for brands that want to post every week.' },
    { q: 'Do I need to be on camera?', a: 'No. Many pieces use characters, voice-over, or visuals only. If you want to appear, we can work with footage of you.' },
  ],
}

export const portalClosing = { href: '/contact?from=video#form', h2: 'Make something people watch', body: 'Tell us what you want to make. We will come back with an idea, a script outline, and a timeline.', cta: 'Start a project' }
