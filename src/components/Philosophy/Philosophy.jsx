import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  const { t } = useI18n()

  return (
    <section id="filosofia" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.philosophy.label}</span>
        </div>

        <div className={styles.content}>
          <blockquote className={styles.quote}>
            {t.philosophy.quote1}
            <span className={styles.emphasis}>{t.philosophy.quote2}</span>
          </blockquote>
          <p className={styles.text}>{t.philosophy.text}</p>
          <p className={styles.motto}>{t.philosophy.motto}</p>
        </div>

        <div className={styles.values}>
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
