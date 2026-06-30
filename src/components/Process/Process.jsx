import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Process.module.css'

export default function Process() {
  const { t } = useI18n()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.process.label}</span>
          <h2 className="section-title">{t.process.title}</h2>
        </div>

        <div className={styles.grid}>
          {t.processSteps.map((s, i) => (
            <div key={i} className={styles.step}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.line} />
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
