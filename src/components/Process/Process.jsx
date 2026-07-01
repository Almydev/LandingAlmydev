import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Process.module.css'

export default function Process() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.process.label}</span>
          <h2 className="section-title">{t.process.title}</h2>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
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
