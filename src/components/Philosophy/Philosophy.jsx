import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const valuesRef = useScrollReveal()

  return (
    <section id="filosofia" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.philosophy.label}</span>
        </div>

        <div ref={contentRef} className={`${styles.content} reveal`}>
          <blockquote className={styles.quote}>
            {t.philosophy.quote1}
            <span className={styles.emphasis}>{t.philosophy.quote2}</span>
          </blockquote>
          <p className={styles.text}>{t.philosophy.text}</p>
          <p className={styles.motto}>{t.philosophy.motto}</p>
        </div>

        <div ref={valuesRef} className={`${styles.values} reveal`}>
          {t.values.map((v, i) => (
            <div key={i} className={styles.valueItem}>
              <span className={styles.valueDot} />
              <span className={styles.valueText}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
