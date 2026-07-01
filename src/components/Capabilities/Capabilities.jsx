import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Capabilities.module.css'

export default function Capabilities() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="capacidades" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.capabilities.label}</span>
          <h2 className="section-title">{t.capabilities.title}</h2>
          <p className="section-subtitle">{t.capabilities.desc}</p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {t.capabilitiesList.map((c, i) => (
            <article key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <span className={styles.number}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
