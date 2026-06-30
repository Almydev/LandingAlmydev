import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Solution.module.css'

export default function Solution() {
  const { t } = useI18n()

  return (
    <section id="solucion" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="section-label">{t.solution.label}</span>
            <h2 className="section-title">{t.solution.title}</h2>
            <p className={styles.text}>{t.solution.desc1}</p>
            <p className={styles.text}>{t.solution.desc2}</p>
            <p className={styles.text}>{t.solution.desc3}</p>
          </div>
          <div className={styles.stats}>
            {t.solutionCards.map((c, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{c.value}</span>
                <span className={styles.statLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
