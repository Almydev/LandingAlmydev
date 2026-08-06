import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import path from 'node:path'

const inputs = [
  { src: 'src/assets/logobg.png', dest: 'src/assets/logobg.webp', width: null },
  { src: 'src/assets/banner.png', dest: 'src/assets/banner.webp', width: 1600 },
  { src: 'src/assets/faviconbg.png', dest: 'public/faviconbg-256.png', width: 256 },
  { src: 'src/assets/faviconbg.png', dest: 'public/faviconbg-64.png', width: 64 },
]

for (const { src, dest, width } of inputs) {
  mkdirSync(path.dirname(dest), { recursive: true })
  let pipeline = sharp(src)
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true })
  if (dest.endsWith('.webp')) {
    await pipeline.webp({ quality: 90, effort: 4 }).toFile(dest)
  } else {
    await pipeline.png({ palette: true, quality: 90 }).toFile(dest)
  }
  console.log(`✓ ${src} -> ${dest}`)
}
