import { useEffect } from 'react'
import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { PRODUCTS, productosPage, STATUS } from './productsData.js'
import ProductCard from './ProductCard.jsx'
import styles from './Productos.module.css'

function setMetaDescription(content) {
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

export default function Productos() {
  const { lang } = useI18n()
  const ui = productosPage[lang]
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal(0.05)

  useEffect(() => {
    document.title = ui.seoTitle
    setMetaDescription(ui.seoDescription)
  }, [ui.seoTitle, ui.seoDescription])

  const availableCount = PRODUCTS.filter((p) => p.status === 'available').length
  const devCount = PRODUCTS.filter((p) => p.status === 'development').length
  const soonCount = PRODUCTS.filter((p) => p.status === 'soon').length

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div ref={headerRef} className={`${styles.header} reveal`}>
            <span className="section-label">{ui.label}</span>
            <h1 className={styles.title}>{ui.title}</h1>
            <p className={styles.subtitle}>{ui.subtitle}</p>
            <p className={styles.countNote}>
              <strong>{availableCount}</strong> {ui.availableCount} ·{' '}
              {STATUS.development[lang]}: {devCount} · {STATUS.soon[lang]}: {soonCount}
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.catalog}`}>
        <div className="container">
          <div ref={gridRef} className={`${styles.grid} reveal`}>
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} lang={lang} ui={ui} />
            ))}
          </div>
          <p className={styles.note}>{ui.pipelineNote}</p>
        </div>
      </section>
    </div>
  )
}
