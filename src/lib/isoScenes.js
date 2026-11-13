/* eslint-disable */
/* Isometric scenes for "What we do" — lit, detailed, on a bright stage. Each factory takes a canvas and returns draw(seconds). */
  const MAT = {
    white: [['#ffffff', '#f2ece4'], ['#ece5db', '#d9cfc2'], ['#d2c8bb', '#bdb1a2']],
    red: [['#ff4a66', '#e11a3c'], ['#d41637', '#a10c26'], ['#9a0b23', '#6e0517']],
    dark: [['#46403c', '#2f2a27'], ['#2a2523', '#1c1816'], ['#191513', '#0f0c0b']],
    road: [['#e3ddd4', '#d9d2c7'], ['#cfc6b9', '#c2b8aa'], ['#b9ae9f', '#a99e8f']],
    sage: [['#a9bf8f', '#8ea672'], ['#7f9563', '#687d4f'], ['#5f7247', '#4b5b37']],
    silver: [['#f4f1ec', '#e2ddd5'], ['#d8d2c8', '#c4bdb1'], ['#b9b1a5', '#a49b8e']],
  }
  const C30 = Math.cos(Math.PI / 6)
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v))
  const easeOut = (t) => 1 - Math.pow(1 - clamp(t), 3)
  const easeInOut = (t) => { t = clamp(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 }
  const bounce = (t) => {
    t = clamp(t); const n = 7.5625, d = 2.75
    if (t < 1 / d) return n * t * t
    if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375
    return n * (t -= 2.625 / d) * t + 0.984375
  }

  function setup(cv, S0, ox0, oy0) {
    const g = cv.getContext('2d')
    const k = cv.width / 712
    const W = 712, H = cv.height / k
    let S = S0, ox = ox0, oy = oy0
    const cam = (t) => { // slow drift + breathing zoom
      S = S0 * (1 + 0.025 * Math.sin(t * 0.5)); ox = ox0 + 8 * Math.sin(t * 0.35); oy = oy0 + 4 * Math.sin(t * 0.45)
    }
    const P = (x, y, z) => [ox + (x - y) * C30 * S, oy + (x + y) * 0.5 * S - z * S]
    const path = (pts) => { g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath() }
    const face = (pts, cols, a = 1) => {
      const gr = g.createLinearGradient(pts[3][0], pts[3][1], pts[1][0], pts[1][1])
      gr.addColorStop(0, cols[0]); gr.addColorStop(1, cols[1])
      g.globalAlpha = a; path(pts); g.fillStyle = gr; g.fill(); g.globalAlpha = 1
    }
    const shadow = (x, y, w, d, blur = 10, a = 0.22, off = 0.5) => {
      g.save(); g.filter = 'blur(' + blur + 'px)'; g.globalAlpha = a
      path([P(x + off, y + off, 0), P(x + w + off, y + off, 0), P(x + w + off, y + d + off, 0), P(x + off, y + d + off, 0)])
      g.fillStyle = '#3a2a24'; g.fill(); g.restore()
    }
    const box = (x, y, z, w, d, h, m, a = 1) => {
      if (h <= 0) return
      const M = MAT[m] || m
      face([P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)], M[1], a)
      face([P(x + w, y + d, z + h), P(x + w, y, z + h), P(x + w, y, z), P(x + w, y + d, z)], M[2], a)
      face([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)], M[0], a)
      // rim light on the top edges
      g.globalAlpha = 0.7 * a; g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 1
      g.beginPath(); const p1 = P(x, y + d, z + h), p2 = P(x + w, y + d, z + h), p3 = P(x + w, y, z + h)
      g.moveTo(p1[0], p1[1]); g.lineTo(p2[0], p2[1]); g.lineTo(p3[0], p3[1]); g.stroke(); g.globalAlpha = 1
    }
    const onFront = (x, y, z, w, h, fn) => {
      const [x0, y0] = P(x, y, z + h), [x1, y1] = P(x + 1, y, z + h)
      g.save(); g.transform(x1 - x0, y1 - y0, 0, S, x0, y0)
      g.beginPath(); g.rect(0, 0, w, h); g.clip(); fn(g); g.restore()
    }
    const onSide = (x, y, z, d, h, fn) => { // the x+w face, u along y
      const [x0, y0] = P(x, y, z + h), [x1, y1] = P(x, y + 1, z + h)
      g.save(); g.transform(x1 - x0, y1 - y0, 0, S, x0, y0)
      g.beginPath(); g.rect(0, 0, d, h); g.clip(); fn(g); g.restore()
    }
    const onTop = (x, y, z, w, d, fn) => {
      const [x0, y0] = P(x, y, z), [x1, y1] = P(x + 1, y, z), [x2, y2] = P(x, y + 1, z)
      g.save(); g.transform(x1 - x0, y1 - y0, x2 - x0, y2 - y0, x0, y0)
      g.beginPath(); g.rect(0, 0, w, d); g.clip(); fn(g); g.restore()
    }
    const card = (x, y, w, h, r = 12) => {
      g.save(); g.shadowColor = 'rgba(60,30,20,.22)'; g.shadowBlur = 24; g.shadowOffsetY = 10
      g.beginPath(); g.roundRect(x, y, w, h, r); g.fillStyle = '#fff'; g.fill(); g.restore()
    }
    const pill = (x, y, w, h, fill) => { g.beginPath(); g.roundRect(x, y, w, h, h / 2); g.fillStyle = fill; g.fill() }
    const glowDot = (x, y, r, col) => {
      g.save(); g.shadowColor = col; g.shadowBlur = r * 2.5; g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.restore()
    }
    const pin = (px, py, s, col, glossy) => {
      g.save()
      if (glossy) { g.shadowColor = 'rgba(200,16,46,.55)'; g.shadowBlur = 24 }
      const gr = g.createLinearGradient(px - s * 0.5, py - s * 1.6, px + s * 0.5, py)
      gr.addColorStop(0, glossy ? '#ff5470' : col); gr.addColorStop(1, glossy ? '#b70e2c' : col)
      g.fillStyle = gr; g.beginPath()
      g.moveTo(px, py); g.bezierCurveTo(px - s * 0.2, py - s * 0.45, px - s * 0.55, py - s * 0.62, px - s * 0.55, py - s); g.arc(px, py - s, s * 0.55, Math.PI, 0)
      g.bezierCurveTo(px + s * 0.55, py - s * 0.62, px + s * 0.2, py - s * 0.45, px, py); g.fill(); g.restore()
      g.fillStyle = '#fff'; g.beginPath(); g.arc(px, py - s, s * 0.22, 0, 7); g.fill()
      if (glossy) { g.fillStyle = 'rgba(255,255,255,.45)'; g.beginPath(); g.ellipse(px - s * 0.25, py - s * 1.25, s * 0.12, s * 0.22, -0.5, 0, 7); g.fill() }
    }
    const stage = () => {
      g.setTransform(k, 0, 0, k, 0, 0)
      const bg = g.createRadialGradient(W * 0.5, H * 0.45, 40, W * 0.5, H * 0.5, W * 0.75)
      bg.addColorStop(0, '#fffdfa'); bg.addColorStop(1, '#efe7dc')
      g.fillStyle = bg; g.fillRect(0, 0, W, H)
    }
    return { g, P, box, face, shadow, onFront, onSide, onTop, card, pill, glowDot, pin, stage, cam, W, H, get S() { return S } }
  }

  /* 01 — SEO and AI Search */
  function seo(cv) {
    const c = setup(cv, 25, 318, 150)
    const blds = [[0.8, 0.8, 2.6, 'white'], [3, 0.8, 1.6, 'white'], [6.9, 0.9, 3.4, 'white'], [0.9, 6.7, 1.8, 'white'], [6.9, 6.8, 1.3, 'white'], [8.6, 3.4, 2.2, 'white']]
    const trees = [[3.4, 3.4], [3.4, 7.4], [7.4, 3.6], [2.4, 9.2], [9.3, 9.2]]
    const greys = [[2.4, 4.1], [7.8, 5.3], [4.2, 8], [9.2, 1.6], [1.5, 9.3]]
    return (t) => {
      const { g, P, box, shadow, onFront, onSide, onTop, card, pill, pin, stage, cam } = c
      const T = t % 7
      stage(); cam(t)
      shadow(-0.4, -0.4, 11, 11, 18, 0.25, 0.6)
      box(-0.4, -0.4, -0.45, 11, 11, 0.45, 'white')
      onTop(-0.4, -0.4, 0, 11, 11, (q) => {
        q.fillStyle = '#e6dfd5'; q.fillRect(5, 0, 1.1, 11); q.fillRect(0, 5, 11, 1.1)
        q.fillStyle = '#fff'; for (let i = 0.3; i < 11; i += 0.9) { q.fillRect(5.52, i, 0.06, 0.45); q.fillRect(i, 5.52, 0.45, 0.06) }
      })
      // everything that stands on the ground is drawn back-to-front
      const items = []
      for (let i = 0; i < 3; i++) {
        const p = ((T * 0.18 + i / 3) % 1) * 11 - 0.4
        items.push({ k: 4.8 + p + 0.8, f: () => box(4.8, p, 0, 0.42, 0.8, 0.32, i === 1 ? 'red' : 'dark') })
        items.push({ k: 10.2 - p + 5.25 + 0.8, f: () => box(10.2 - p, 5.25, 0, 0.8, 0.42, 0.32, i === 2 ? 'red' : 'dark') })
      }
      trees.forEach(([x, y]) => items.push({ k: x + y + 0.7, f: () => { shadow(x, y, 0.7, 0.7, 4, 0.2, 0.2); box(x + 0.25, y + 0.25, 0, 0.2, 0.2, 0.5, 'dark'); box(x, y, 0.5, 0.7, 0.7, 0.7, 'sage') } }))
      blds.forEach(([x, y, h, m]) => items.push({ k: x + y + 1.7, f: () => {
        shadow(x, y, 1.7, 1.7, 8, 0.25, 0.5)
        box(x, y, 0, 1.7, 1.7, h, m)
        onFront(x, y + 1.7, 0, 1.7, h, (q) => { for (let r = 0.25; r < h - 0.2; r += 0.5) for (let cc = 0.2; cc < 1.5; cc += 0.45) { q.fillStyle = ((r * 7 + cc * 3 + Math.floor(T * 1.3)) % 5 < 1) ? '#ffcf6b' : '#cbd8e2'; q.fillRect(cc, r, 0.26, 0.28) } })
        onSide(x + 1.7, y, 0, 1.7, h, (q) => { for (let r = 0.25; r < h - 0.2; r += 0.5) for (let cc = 0.2; cc < 1.5; cc += 0.45) { q.fillStyle = '#a9b7c2'; q.fillRect(cc, r, 0.26, 0.28) } })
      } }))
      items.sort((a, b) => a.k - b.k).forEach((it) => it.f())
      greys.forEach(([x, y], i) => { const [px, py] = P(x, y, 0); g.globalAlpha = clamp((T - 0.1 * i) * 3); pin(px, py, 16, '#6f6863'); g.globalAlpha = 1 })
      // the red pin drops in
      const dt = T - 0.9, [gx, gy] = P(5.55, 5.55, 0)
      if (dt > 0) {
        const pr = (T * 0.7) % 1
        g.strokeStyle = 'rgba(200,16,46,' + (0.7 * (1 - pr)) + ')'; g.lineWidth = 2.5
        g.beginPath(); g.ellipse(gx, gy, 16 + pr * 70, (16 + pr * 70) * 0.5, 0, 0, 7); g.stroke()
        g.save(); g.filter = 'blur(4px)'; g.fillStyle = 'rgba(80,20,20,.35)'; g.beginPath(); g.ellipse(gx, gy, 18, 8, 0, 0, 7); g.fill(); g.restore()
        const y = gy - (1 - bounce(dt / 1.1)) * 260
        pin(gx, y, 54, '#C8102E', true)
        if (dt > 1.1) { pill(gx - 22, y - 138, 44, 24, '#1A1816'); g.fillStyle = '#fff'; g.font = '800 13px Archivo'; g.textAlign = 'center'; g.fillText('#1', gx, y - 121) }
      }
      // floating cards
      const bt = T - 2.1
      if (bt > 0) {
        const a = clamp(bt * 3), x = 478, y = 52 + Math.sin(t * 1.2) * 4
        g.globalAlpha = a; card(x, y, 206, 92, 16)
        g.fillStyle = '#C8102E'; const sx = x + 24, sy = y + 27; g.beginPath(); g.moveTo(sx, sy - 9); g.lineTo(sx + 3, sy - 3); g.lineTo(sx + 9, sy); g.lineTo(sx + 3, sy + 3); g.lineTo(sx, sy + 9); g.lineTo(sx - 3, sy + 3); g.lineTo(sx - 9, sy); g.lineTo(sx - 3, sy - 3); g.fill()
        g.fillStyle = '#1A1816'; g.font = '700 13px Outfit'; g.textAlign = 'left'; g.fillText('AI answer', x + 42, y + 32)
        const msg = 'Top pick: your business', n = Math.floor(clamp((bt - 0.3) / 1.3) * msg.length)
        g.fillStyle = '#C8102E'; g.font = '800 15px Archivo'; g.fillText(msg.slice(0, n), x + 18, y + 62)
        g.fillStyle = '#eee7de'; g.fillRect(x + 18, y + 72, 160, 5); g.globalAlpha = 1
      }
      const mt = T - 2.8
      if (mt > 0) {
        const a = clamp(mt * 3), x = 40, y = 238 + Math.sin(t * 1.1 + 1) * 4
        g.globalAlpha = a; card(x, y, 170, 62, 14)
        g.fillStyle = '#1A1816'; g.font = '800 14px Archivo'; g.textAlign = 'left'; g.fillText('Your business', x + 16, y + 26)
        g.fillStyle = '#f5b301'; g.font = '700 12px Outfit'; g.fillText('★★★★★', x + 16, y + 46); g.fillStyle = '#8b847d'; g.fillText('Open now', x + 92, y + 46)
        g.globalAlpha = 1
      }
    }
  }

  /* 02 — Web design: a laptop whose screen assembles a page; a cursor clicks; page speed hits the top */
  function web(cv) {
    const c = setup(cv, 25, 300, 222)
    return (t) => {
      const { g, P, box, shadow, onFront, onTop, card, pill, stage, cam } = c
      const T = t % 7
      stage(); cam(t)
      // laptop base
      shadow(0, 0, 9, 6, 16, 0.3, 0.6)
      box(0, 0, 0, 9, 6, 0.32, 'silver')
      onTop(0, 0, 0.32, 9, 6, (q) => {
        q.fillStyle = '#d8d2c8'; for (let r = 0; r < 4; r++) for (let cc = 0; cc < 12; cc++) q.fillRect(1.6 + cc * 0.5, 0.9 + r * 0.55, 0.4, 0.42)
        q.fillStyle = '#dcd6cc'; q.fillRect(3.4, 3.6, 2.6, 1.6)
      })
      // screen
      box(0, -0.25, 0.32, 9, 0.25, 5.4, 'dark')
      const join = easeInOut((T - 0.5) / 1.5)
      onFront(0, 0, 0.32, 9, 5.4, (q) => {
        q.fillStyle = '#0f0d0c'; q.fillRect(0, 0, 9, 5.4)
        const fly = (dx, dy, f) => { q.save(); q.translate(dx * (1 - f), dy * (1 - f)); q.globalAlpha = clamp(f * 1.5); return () => { q.restore(); q.globalAlpha = 1 } }
        q.fillStyle = '#faf6f0'; q.fillRect(0.35, 0.3, 8.3, 4.8)
        let e = fly(0, -3, easeOut((T - 0.4) / 0.8)); q.fillStyle = '#1A1816'; q.fillRect(0.35, 0.3, 8.3, 0.55); q.fillStyle = '#C8102E'; q.beginPath(); q.arc(0.7, 0.58, 0.14, 0, 7); q.fill(); e()
        e = fly(-6, 0, easeOut((T - 0.8) / 0.8)); const hg = q.createLinearGradient(0, 1, 0, 3); hg.addColorStop(0, '#e11a3c'); hg.addColorStop(1, '#a10c26'); q.fillStyle = hg; q.fillRect(0.6, 1.1, 7.8, 1.9)
        q.fillStyle = '#fff'; q.fillRect(1, 1.45, 3.6, 0.3); q.fillRect(1, 1.95, 2.4, 0.2); q.fillStyle = '#1A1816'; q.beginPath(); q.roundRect(1, 2.35, 1.4, 0.4, 0.2); q.fill(); e()
        ;[0, 1, 2].forEach((i) => { e = fly(0, 4, easeOut((T - 1.2 - i * 0.15) / 0.8)); q.fillStyle = '#fff'; q.fillRect(0.6 + i * 2.65, 3.25, 2.4, 1.6); q.fillStyle = '#e6dfd5'; q.fillRect(0.8 + i * 2.65, 4.3, 1.4, 0.16); q.fillStyle = i === 1 ? '#C8102E' : '#d8cfc3'; q.fillRect(0.8 + i * 2.65, 3.45, 0.7, 0.7); e() })
        // cursor clicks the hero button
        const ct = T - 2.3
        if (ct > 0) {
          const f = easeInOut(ct / 0.9), cx = 6.5 + (1.7 - 6.5) * f, cy = 4.3 + (2.55 - 4.3) * f
          if (ct > 0.9 && ct < 1.4) { q.strokeStyle = 'rgba(255,255,255,' + (1 - (ct - 0.9) / 0.5) + ')'; q.lineWidth = 0.05; q.beginPath(); q.arc(1.7, 2.55, (ct - 0.9) * 1.2, 0, 7); q.stroke() }
          q.fillStyle = '#fff'; q.strokeStyle = '#1A1816'; q.lineWidth = 0.04; q.beginPath(); q.moveTo(cx, cy); q.lineTo(cx, cy + 0.6); q.lineTo(cx + 0.16, cy + 0.45); q.lineTo(cx + 0.36, cy + 0.42); q.closePath(); q.fill(); q.stroke()
        }
      })
      // page speed gauge card
      const st = T - 1.8
      if (st > 0) {
        const a = clamp(st * 3), x = 500, y = 60 + Math.sin(t * 1.2) * 4
        g.globalAlpha = a; card(x, y, 170, 120, 16)
        const cx = x + 85, cy = y + 82, r = 46, v = easeOut((st - 0.2) / 1.4)
        g.lineCap = 'round'; g.lineWidth = 10; g.strokeStyle = '#eee7de'; g.beginPath(); g.arc(cx, cy, r, Math.PI, 0); g.stroke()
        g.strokeStyle = '#C8102E'; g.beginPath(); g.arc(cx, cy, r, Math.PI, Math.PI + Math.PI * 0.98 * v); g.stroke()
        g.fillStyle = '#1A1816'; g.font = '900 26px Archivo'; g.textAlign = 'center'; g.fillText(Math.round(98 * v), cx, cy - 6)
        g.fillStyle = '#8b847d'; g.font = '700 11px Outfit'; g.fillText('PAGE SPEED', cx, cy + 16); g.globalAlpha = 1
      }
      const kt = T - 3.4
      if (kt > 0) {
        ;['Readable by AI', 'Yours to own'].forEach((s, i) => {
          const a = clamp((kt - i * 0.3) * 3); if (a <= 0) return
          g.globalAlpha = a; g.font = '700 13px Outfit'; const w = g.measureText(s).width + 46, x = 500, y = 196 + i * 42
          card(x, y, w, 32, 16); g.fillStyle = '#C8102E'; g.beginPath(); g.arc(x + 16, y + 16, 9, 0, 7); g.fill()
          g.fillStyle = '#fff'; g.font = '800 11px Outfit'; g.textAlign = 'center'; g.fillText('✓', x + 16, y + 20)
          g.fillStyle = '#1A1816'; g.font = '700 13px Outfit'; g.textAlign = 'left'; g.fillText(s, x + 32, y + 21); g.globalAlpha = 1
        })
      }
    }
  }

  /* 03 — Meta ads: a phone feed; your ad lifts out, likes float, leads drop through a glass funnel into signed clients */
  function ads(cv) {
    const c = setup(cv, 24, 214, 196)
    const hearts = Array.from({ length: 10 }, (_, i) => ({ d: i * 0.37, x: (i * 37) % 60 - 30 }))
    return (t) => {
      const { g, P, box, shadow, onFront, card, pill, glowDot, stage, cam } = c
      const T = t % 7
      stage(); cam(t)
      shadow(0.4, 2.8, 3.8, 1.2, 14, 0.3, 0.8)
      box(0.4, 2.8, 0, 3.6, 0.45, 6.4, 'dark')
      const scroll = (T * 0.8) % 2.6
      onFront(0.4, 3.25, 0, 3.6, 6.4, (q) => {
        q.fillStyle = '#0d0b0a'; q.fillRect(0, 0, 3.6, 6.4)
        q.fillStyle = '#fff'; q.fillRect(0.15, 0.15, 3.3, 6.1)
        for (let i = -1; i < 5; i++) {
          const y = 0.75 + i * 2.6 - scroll
          q.fillStyle = '#ddd'; q.beginPath(); q.arc(0.45, y + 0.18, 0.14, 0, 7); q.fill(); q.fillStyle = '#e6e0d8'; q.fillRect(0.7, y + 0.12, 1.2, 0.12)
          const ig = q.createLinearGradient(0, y + 0.4, 0, y + 2); const ad = i === 1
          ig.addColorStop(0, ad ? '#ff4a66' : '#e9e2d8'); ig.addColorStop(1, ad ? '#a10c26' : '#d4cabd'); q.fillStyle = ig; q.fillRect(0.25, y + 0.42, 3.1, 1.6)
          q.fillStyle = '#C8102E'; q.font = '0.28px Outfit'; q.fillText('♥', 0.3, y + 2.35)
        }
        q.fillStyle = '#fff'; q.fillRect(0.15, 0.15, 3.3, 0.45); q.fillStyle = '#1A1816'; q.font = 'bold 0.26px Outfit'; q.fillText('Feed', 0.35, 0.47)
      })
      const [fx, fy] = P(2.2, 3.25, 3.4)
      // hearts floating up from the phone
      hearts.forEach((h) => { const p = ((T + h.d) % 3) / 3, x = fx + h.x + Math.sin(p * 8) * 8, y = fy - 20 - p * 160; g.globalAlpha = (1 - p) * 0.9; g.fillStyle = '#C8102E'; g.font = (14 + 8 * (1 - p)) + 'px Outfit'; g.textAlign = 'center'; g.fillText('♥', x, y); g.globalAlpha = 1 })
      // ad card lifts out
      const at = T - 0.9
      if (at > 0) {
        const a = easeOut(at / 0.6), x = fx + 60 + a * 80, y = fy - 70 - a * 20 + Math.sin(t * 1.4) * 3
        g.save(); g.globalAlpha = clamp(at * 3); g.translate(x, y); g.rotate(-0.05)
        card(-74, -54, 148, 108, 14)
        const ag = g.createLinearGradient(0, -44, 0, 12); ag.addColorStop(0, '#ff4a66'); ag.addColorStop(1, '#a10c26'); g.fillStyle = ag; g.beginPath(); g.roundRect(-64, -44, 128, 58, 9); g.fill()
        g.fillStyle = '#1A1816'; g.font = '700 11px Outfit'; g.textAlign = 'left'; g.fillText('Sponsored', -64, 34)
        pill(14, 22, 50, 20, '#C8102E'); g.fillStyle = '#fff'; g.font = '800 10px Outfit'; g.textAlign = 'center'; g.fillText('Call now', 39, 36)
        g.restore()
        // glass funnel
        const ux = 545, uy = 150
        g.save(); const fg = g.createLinearGradient(ux - 70, 0, ux + 70, 0); fg.addColorStop(0, 'rgba(255,255,255,.35)'); fg.addColorStop(0.5, 'rgba(255,255,255,.9)'); fg.addColorStop(1, 'rgba(255,255,255,.3)')
        g.beginPath(); g.moveTo(ux - 70, uy); g.lineTo(ux + 70, uy); g.lineTo(ux + 16, uy + 80); g.lineTo(ux + 16, uy + 120); g.lineTo(ux - 16, uy + 120); g.lineTo(ux - 16, uy + 80); g.closePath()
        g.shadowColor = 'rgba(60,30,20,.2)'; g.shadowBlur = 20; g.fillStyle = fg; g.fill(); g.restore()
        g.strokeStyle = 'rgba(26,24,22,.25)'; g.lineWidth = 1.5; g.stroke()
        g.beginPath(); g.ellipse(ux, uy, 70, 12, 0, 0, 7); g.strokeStyle = 'rgba(26,24,22,.3)'; g.stroke()
        for (let i = 0; i < 8; i++) {
          if (T < 1.4) break
          const p = ((T - 1.4) * 0.6 + i / 8) % 1
          let lx, ly
          if (p < 0.45) { const q = p / 0.45; lx = x + 70 + (ux - 30 - x - 70) * q + (i % 4) * 14; ly = y - 20 - Math.sin(q * Math.PI) * 50 + (uy - y + 20) * q }
          else { const q = (p - 0.45) / 0.55; lx = ux - 30 + (i % 4) * 14 + (30 - (i % 4) * 14) * q; ly = uy + 6 + q * 112 }
          glowDot(lx, ly, 5, i % 3 ? '#C8102E' : '#1A1816')
        }
        const n = Math.max(0, Math.floor((T - 2) * 1.3))
        g.save(); g.shadowColor = 'rgba(200,16,46,.5)'; g.shadowBlur = 24; pill(ux - 74, uy + 136, 148, 52, '#C8102E'); g.restore()
        g.fillStyle = '#fff'; g.textAlign = 'center'; g.font = '900 22px Archivo'; g.fillText('+' + n, ux, uy + 162); g.font = '700 10px Outfit'; g.fillText('SIGNED CLIENTS', ux, uy + 178)
        // new lead toast
        const lt = (T - 2.6) % 2.2
        if (T > 2.6 && lt < 1.6) { const a2 = clamp(lt * 4) * clamp((1.6 - lt) * 4); g.globalAlpha = a2; card(372, 40 - (1 - a2) * 10, 150, 46, 14); glowDot(392, 63 - (1 - a2) * 10, 6, '#22a35a'); g.fillStyle = '#1A1816'; g.font = '800 13px Archivo'; g.textAlign = 'left'; g.fillText('New lead', 406, 60 - (1 - a2) * 10); g.fillStyle = '#8b847d'; g.font = '600 11px Outfit'; g.fillText('just now', 406, 75 - (1 - a2) * 10); g.globalAlpha = 1 }
      }
    }
  }

  /* 04 — Portal: a camera on a tripod, reels turning, a light beam projecting the hero onto a screen */
  function portal(cv) {
    const c = setup(cv, 24, 250, 210)
    return (t) => {
      const { g, P, box, shadow, onFront, onSide, card, pill, stage, cam } = c
      const T = t % 7
      stage(); cam(t)
      // screen at the back right
      shadow(6.5, -1.5, 6, 0.6, 14, 0.25, 0.6)
      box(6.5, -1.5, 0, 6.6, 0.3, 4.6, 'dark')
      const prog = (T / 7)
      onFront(6.5, -1.2, 0, 6.6, 4.6, (q) => {
        const bg = q.createLinearGradient(0, 0, 0, 4.6); bg.addColorStop(0, '#e11a3c'); bg.addColorStop(1, '#6e0517'); q.fillStyle = bg; q.fillRect(0.2, 0.2, 6.2, 3.8)
        const bob = Math.sin(T * 2) * 0.08, fly = (T * 0.5) % 1
        q.fillStyle = 'rgba(255,255,255,.18)'; for (let i = 0; i < 6; i++) q.fillRect(((i * 1.3 + fly * 6) % 6.4), 0.6 + i * 0.55, 0.9, 0.04)
        q.fillStyle = '#1A1816'; q.beginPath(); q.arc(3.3, 1.3 + bob, 0.38, 0, 7); q.fill()
        q.beginPath(); q.moveTo(2.8, 1.75 + bob); q.lineTo(3.8, 1.75 + bob); q.lineTo(4.5, 3.9); q.lineTo(2.1, 3.9); q.closePath(); q.fill()
        q.fillStyle = '#fff'; q.beginPath(); q.arc(3.3, 2.4 + bob, 0.16, 0, 7); q.fill()
        q.fillStyle = 'rgba(255,255,255,.3)'; q.fillRect(0.2, 4.15, 6.2, 0.12); q.fillStyle = '#fff'; q.fillRect(0.2, 4.15, 6.2 * prog, 0.12)
      })
      // tripod + camera
      const base = P(1.6, 4.6, 0)
      shadow(0.4, 3.4, 2.4, 2.4, 10, 0.25, 0.3)
      g.strokeStyle = '#2b2624'; g.lineWidth = 5; g.lineCap = 'round'
      const top = P(1.6, 4.6, 3.2)
      ;[[0.2, 3.5], [3, 4], [1.2, 6]].forEach(([x, y]) => { const f = P(x, y, 0); g.beginPath(); g.moveTo(top[0], top[1]); g.lineTo(f[0], f[1]); g.stroke() })
      box(0.6, 3.6, 3.2, 2.8, 1.8, 1.6, 'dark')
      onSide(3.4, 3.6, 3.2, 1.8, 1.6, (q) => { q.fillStyle = '#C8102E'; q.fillRect(0.2, 0.25, 0.6, 0.18) })
      // lens
      const L = P(3.4, 4.5, 4)
      g.save(); g.shadowColor = 'rgba(0,0,0,.3)'; g.shadowBlur = 10
      g.fillStyle = '#1A1816'; g.beginPath(); g.ellipse(L[0] + 14, L[1] - 6, 18, 24, -0.5, 0, 7); g.fill(); g.restore()
      const lg = g.createRadialGradient(L[0] + 16, L[1] - 8, 2, L[0] + 16, L[1] - 6, 16); lg.addColorStop(0, '#ff8aa0'); lg.addColorStop(0.4, '#C8102E'); lg.addColorStop(1, '#2a0510')
      g.fillStyle = lg; g.beginPath(); g.ellipse(L[0] + 16, L[1] - 6, 12, 17, -0.5, 0, 7); g.fill()
      // beam to the screen
      const S1 = P(6.6, -1.2, 4.3), S2 = P(6.6, -1.2, 0.4), S3 = P(13, -1.2, 0.4)
      const beam = g.createLinearGradient(L[0], L[1], (S1[0] + S3[0]) / 2, (S1[1] + S3[1]) / 2)
      beam.addColorStop(0, 'rgba(255,220,200,.55)'); beam.addColorStop(1, 'rgba(255,220,200,0)')
      g.globalAlpha = 0.55 + 0.15 * Math.sin(T * 6); g.fillStyle = beam; g.beginPath(); g.moveTo(L[0] + 22, L[1] - 10); g.lineTo(S1[0], S1[1]); g.lineTo(S3[0], S3[1] - 4.3 * 24 + 10); g.lineTo(S2[0] + 40, S2[1]); g.closePath(); g.fill(); g.globalAlpha = 1
      // reels on top
      ;[[1.3, 4.5], [2.6, 4.5]].forEach(([x, y], i) => {
        const p = P(x, y, 4.8 + 0.9), r = 26
        g.fillStyle = '#2b2624'; g.beginPath(); g.ellipse(p[0], p[1], r, r, 0, 0, 7); g.fill()
        g.strokeStyle = '#4a433f'; g.lineWidth = 3; g.beginPath(); g.ellipse(p[0], p[1], r - 4, r - 4, 0, 0, 7); g.stroke()
        for (let s = 0; s < 3; s++) { const a = T * 4 * (i ? 1 : 1.2) + s * 2.094; g.fillStyle = '#efe7dc'; g.beginPath(); g.arc(p[0] + Math.cos(a) * 12, p[1] + Math.sin(a) * 12, 6, 0, 7); g.fill() }
        g.fillStyle = '#C8102E'; g.beginPath(); g.arc(p[0], p[1], 5, 0, 7); g.fill()
      })
      // chips
      card(470, 300, 168, 36, 18); g.fillStyle = '#C8102E'; g.beginPath(); g.arc(490, 318, 7, 0, 7); g.fill()
      g.fillStyle = '#1A1816'; g.font = '700 13px Outfit'; g.textAlign = 'left'; g.fillText('Delivered in days', 504, 323)
      const rec = Math.floor(T * 2) % 2 === 0
      pill(40, 40, 78, 28, '#1A1816'); g.fillStyle = rec ? '#ff3b55' : '#5a1520'; g.beginPath(); g.arc(56, 54, 5, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = '800 12px Outfit'; g.fillText('REC', 68, 58)
    }
  }

export const isoScenes = [seo, web, ads, portal]
