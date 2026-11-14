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
  reel: { src: '/portal/dang-man-v2.mp4', poster: '/portal/dang-man-v2-poster.jpg', alt: 'Portal reel: Dang-Man, the AI superhero made for Dang Law Group' },
}

const P = '/portal/'
const piece = (id, file, o) => ({ id, src: P + file + '.mp4', preview: P + file + '-preview.mp4', poster: P + file + '-poster.jpg', transcript: null, turnaround: null, ...o })

export const pieces = [
  piece('dang-man-1', 'dang-man-v2', { title: 'Dang-Man, ad one', client: 'Dang Law Group', format: 'AI ad, vertical', ratio: '9/16', description: 'Dang-Man, the AI superhero made for Dang Law Group, in a short vertical ad for social.' }),
  piece('dang-man-2', 'dlg-ad-2', { title: 'Dang-Man, ad two', client: 'Dang Law Group', format: 'AI ad, vertical', ratio: '9/16', description: 'A second Dang-Man ad: a car accident, and the firm that shows up to help.' }),
  piece('dang-man-3', 'dlg-ad-3', { title: 'Dang-Man, ad three', client: 'Dang Law Group', format: 'AI ad, vertical', ratio: '9/16', description: 'A third Dang-Man ad, made for Facebook and Instagram.' }),
  piece('bond-111', 'bond-111', { title: 'BOND, video 111', client: 'BOND', format: 'Social video', ratio: '16/9', description: 'A dance-led social video shot on location, part of an ongoing series for BOND.' }),
  piece('bond-114', 'bond-114', { title: 'BOND, video 114', client: 'BOND', format: 'Social video', ratio: '16/9', description: 'Another episode in the BOND social series, shot on location.' }),
  piece('bond-109', 'bond-109', { title: 'BOND, video 109', client: 'BOND', format: 'Social video', ratio: '16/9', description: 'A character-led episode in the BOND social series.' }),
  piece('bond-110', 'bond-110', { title: 'BOND, video 110', client: 'BOND', format: 'Social video', ratio: '16/9', description: 'A short episode in the BOND social series.' }),
  piece('real-vs-ai', 'portal-compare', { title: 'Real actor and client', client: 'Portal', format: 'Side-by-side', ratio: '1214/1080', description: 'The same scene side by side: a real actor on one side, the client on the other.' }),
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

export const portalClosing = { h2: 'Make something people watch', body: 'Tell us what you want to make. We will come back with an idea, a script outline, and a timeline.', cta: 'Start a project' }
