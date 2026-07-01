import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Solution.module.css'

export default function Solution() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <section id="solucion" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div ref={headerRef} className={`${styles.content} reveal`}>
            <span className="section-label">{t.solution.label}</span>
            <h2 className="section-title">{t.solution.title}</h2>
            <p className={styles.text}>{t.solution.desc1}</p>
            <p className={styles.text}>{t.solution.desc2}</p>
            <p className={styles.text}>{t.solution.desc3}</p>
          </div>
          <div ref={statsRef} className={`${styles.stats} reveal`}>
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
