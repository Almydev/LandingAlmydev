import { useId, useState } from 'react'
import { STATUS } from './productsData.js'
import ProductIllustration from './ProductIllustration.jsx'
import styles from './Productos.module.css'

export default function ProductCard({ product, lang, ui }) {
  const { slug, status, url } = product
  const c = product[lang]
  const detailsId = useId()
  const [open, setOpen] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  const available = status === 'available'

  return (
    <article className={`${styles.card} ${available ? styles.cardAvailable : ''}`}>
      <div className={styles.art}>
        {/* Ilustraciones finales: soltar WebP optimizado (scripts/optimize-images.mjs) en
            public/img/productos/<slug>.webp — si el archivo no existe, la tarjeta
            muestra la ilustración SVG inline como respaldo. */}
        {!imgFailed ? (
          <img
            src={`${import.meta.env.BASE_URL}img/productos/${slug}.webp`}
            alt=""
            className={styles.artImg}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className={styles.artSvg}>
            <ProductIllustration slug={slug} />
          </div>
        )}
        <span className={`${styles.badge} ${styles[status]}`}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {STATUS[status][lang]}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{c.name}</h3>
        <p className={styles.tagline}>{c.tagline}</p>

        <div className={styles.actions}>
          {available && (
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              {ui.tryNow}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          )}
          {status === 'development' && (
            <span className={styles.btnDisabled} aria-disabled="true">{ui.comingSoonBtn}</span>
          )}
          {status === 'soon' && (
            <span className={styles.btnDisabled} aria-disabled="true">{ui.soonBtn}</span>
          )}
          <button
            type="button"
            className={`${styles.btnMore} ${open ? styles.btnMoreOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={detailsId}
          >
            {open ? ui.knowLess : ui.knowMore}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>

        <div id={detailsId} className={styles.details} hidden={!open}>
          <p className={styles.desc}>{c.description}</p>
          <ul className={styles.features}>
            {c.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className={styles.audience}>
            <h4>{ui.audienceTitle}</h4>
            <p>{c.audience}</p>
          </div>
          <p className={c.price ? styles.price : styles.priceTba}>
            {c.price || ui.priceTba}
          </p>
        </div>
      </div>
    </article>
  )
}
