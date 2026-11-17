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

export async function renderOg({ title, img, imgPos = '50% 30%' }) {
  const [a800, a900, o400, o600, logo, photo] = await Promise.all([
    file('fonts/Archivo-wght-800.ttf'),
    file('fonts/Archivo-wght-900.ttf'),
    file('fonts/Outfit-wght-400.ttf'),
    file('fonts/Outfit-wght-600.ttf'),
    dataUrl('logo-light.png', 'image/png'),
    img ? dataUrl('img/' + img, 'image/jpeg') : null,
  ])
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#141210', position: 'relative' }}>
        {photo && (
          <div style={{ position: 'absolute', right: 0, top: 0, width: 760, height: 630, display: 'flex' }}>
            <img src={photo} width={760} height={630} style={{ width: 760, height: 630, objectFit: 'cover', objectPosition: imgPos }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: 300, height: 630, display: 'flex', backgroundImage: 'linear-gradient(to right, #141210, rgba(20,18,16,0))' }} />
          </div>
        )}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: photo ? 520 : 1080, height: '100%', padding: '64px 0 64px 68px' }}>
          <img src={logo} width={130} height={80} style={{ width: 130, height: 80 }} />
          <div style={{ display: 'flex', fontFamily: 'Archivo', fontWeight: 900, fontSize: 72, lineHeight: 0.98, letterSpacing: -2.5, color: '#F7F3ED', maxWidth: photo ? 440 : 1000 }}>
            {title}
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

/* Full-bleed photo variant: realistic picture of the page's subject, logo and short title on a soft left shade */
export async function renderPhotoOg({ title, img }) {
  const [a900, logo, photo] = await Promise.all([
    file('fonts/Archivo-wght-900.ttf'),
    dataUrl('logo-light.png', 'image/png'),
    dataUrl('img/' + img, 'image/jpeg'),
  ])
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#141210' }}>
        <img src={photo} width={1200} height={630} style={{ position: 'absolute', left: 0, top: 0, width: 1200, height: 630 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: 760, height: 630, display: 'flex', backgroundImage: 'linear-gradient(to right, rgba(20,18,16,.82), rgba(20,18,16,.45) 55%, rgba(20,18,16,0))' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 520, height: '100%', padding: '60px 0 60px 68px' }}>
          <img src={logo} width={120} height={74} style={{ width: 120, height: 74 }} />
          <div style={{ display: 'flex', fontFamily: 'Archivo', fontWeight: 900, fontSize: 68, lineHeight: 0.98, letterSpacing: -2.5, color: '#F7F3ED', maxWidth: 440 }}>
            {title}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Archivo', data: a900, weight: 900, style: 'normal' }] }
  )
}
