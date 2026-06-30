import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Capabilities.module.css'

export default function Capabilities() {
  const { t } = useI18n()

  return (
    <section id="capacidades" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.capabilities.label}</span>
          <h2 className="section-title">{t.capabilities.title}</h2>
          <p className="section-subtitle">{t.capabilities.desc}</p>
        </div>

        <div className={styles.grid}>
          {t.capabilitiesList.map((c, i) => (
            <article key={i} className={styles.card}>
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
