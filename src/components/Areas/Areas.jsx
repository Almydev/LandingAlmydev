import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Areas.module.css'

export default function Areas() {
  const { t } = useI18n()

  return (
    <section id="areas" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.areas.label}</span>
          <h2 className="section-title">{t.areas.title}</h2>
          <p className="section-subtitle">{t.areas.desc}</p>
        </div>

        <div className={styles.grid}>
          {t.areasList.map((a, i) => (
            <div key={i} className={styles.tag} data-tip={t.areasDesc[i]}>{a}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
