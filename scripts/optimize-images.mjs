import sharp from 'sharp'
import { mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'

const inputs = [
  { src: 'src/assets/logobg.png', dest: 'src/assets/logobg.webp', width: null },
  { src: 'src/assets/banner.png', dest: 'src/assets/banner.webp', width: 1600 },
  { src: 'src/assets/faviconbg.png', dest: 'public/faviconbg-256.png', width: 256 },
  { src: 'src/assets/faviconbg.png', dest: 'public/faviconbg-64.png', width: 64 },
  { src: 'src/assets/productos/control-gastos.png', dest: 'public/img/productos/control-gastos.webp', width: 800 },
  { src: 'src/assets/productos/nomina.png', dest: 'public/img/productos/nomina.webp', width: 800 },
  { src: 'src/assets/productos/inventarios.png', dest: 'public/img/productos/inventarios.webp', width: 800 },
  { src: 'src/assets/productos/recursos-humanos.png', dest: 'public/img/productos/recursos-humanos.webp', width: 800 },
  { src: 'src/assets/productos/finanzas-contabilidad.png', dest: 'public/img/productos/finanzas-contabilidad.webp', width: 800 },
  { src: 'src/assets/productos/crm-ventas.png', dest: 'public/img/productos/crm-ventas.webp', width: 800 },
  { src: 'src/assets/productos/compras-proveedores.png', dest: 'public/img/productos/compras-proveedores.webp', width: 800 },
]

for (const { src, dest, width } of inputs) {
  if (!existsSync(src)) {
    console.log(`- ${src} no existe, se omite`)
    continue
  }
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
