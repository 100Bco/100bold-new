/* Shared link-preview (Open Graph) image: dark panel with the page title on the left,
   the page's own picture on the right. Used by each route's opengraph-image.jsx. */
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const assets = join(process.cwd(), 'src/og-assets')
const file = (p) => readFile(join(assets, p))
const dataUrl = async (p, type) => `data:${type};base64,${(await file(p)).toString('base64')}`

export async function renderOg({ eyebrow, title, desc, img, imgPos = '50% 30%' }) {
  const [a800, a900, o400, o600, logo, photo] = await Promise.all([
    file('fonts/Archivo-wght-800.ttf'),
    file('fonts/Archivo-wght-900.ttf'),
    file('fonts/Outfit-wght-400.ttf'),
    file('fonts/Outfit-wght-600.ttf'),
    dataUrl('logo-light.png', 'image/png'),
    img ? dataUrl('img/' + img, 'image/jpeg') : null,
  ])
  const long = title.length > 22

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#141210', position: 'relative' }}>
        {photo && (
          <div style={{ position: 'absolute', right: 0, top: 0, width: 600, height: 630, display: 'flex' }}>
            <img src={photo} width={600} height={630} style={{ width: 600, height: 630, objectFit: 'cover', objectPosition: imgPos }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: 260, height: 630, display: 'flex', backgroundImage: 'linear-gradient(to right, #141210, rgba(20,18,16,0))' }} />
          </div>
        )}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 630, background: '#C8102E', display: 'flex' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: photo ? 640 : 1080, height: '100%', padding: '56px 0 52px 72px' }}>
          <img src={logo} width={112} height={69} style={{ width: 112, height: 69 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {eyebrow && <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 22, letterSpacing: 5, textTransform: 'uppercase', color: '#E8455C', marginBottom: 18 }}>{eyebrow}</div>}
            <div style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: long ? 58 : 76, maxWidth: photo ? 530 : 1000, lineHeight: 1, letterSpacing: -2.5, color: '#F7F3ED' }}>{title}</div>
            {desc && <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 25, lineHeight: 1.35, color: 'rgba(247,243,237,.72)', marginTop: 22, maxWidth: photo ? 500 : 900 }}>{desc}</div>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Outfit', fontWeight: 600, fontSize: 22, color: 'rgba(247,243,237,.6)' }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: '#C8102E', marginRight: 12, display: 'flex' }} />
            100bold.co
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Archivo', data: a800, weight: 800, style: 'normal' },
        { name: 'Archivo', data: a900, weight: 900, style: 'normal' },
        { name: 'Outfit', data: o400, weight: 400, style: 'normal' },
        { name: 'Outfit', data: o600, weight: 600, style: 'normal' },
      ],
    }
  )
}
