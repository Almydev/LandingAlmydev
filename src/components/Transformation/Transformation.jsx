import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Transformation.module.css'

export default function Transformation() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const tableRef = useScrollReveal()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.transformation.label}</span>
          <h2 className="section-title">{t.transformation.title}</h2>
        </div>

        <div ref={tableRef} className={`${styles.table} reveal`}>
          <div className={styles.colHeader}>
            <span className={styles.colTitle}>{t.transformation.current}</span>
            <span className={styles.colTitle}>{t.transformation.result}</span>
          </div>
          {t.transformationRows.map((r, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.current}>{r.current}</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.result}>{r.result}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
