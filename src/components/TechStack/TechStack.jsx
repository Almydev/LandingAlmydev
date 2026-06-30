import { useI18n } from '../../context/I18nContext.jsx'
import styles from './TechStack.module.css'

export default function TechStack() {
  const { t } = useI18n()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.tech.label}</span>
          <h2 className="section-title">{t.tech.title}</h2>
          <p className="section-subtitle">{t.tech.desc}</p>
        </div>

        <div className={styles.grid}>
          {t.techList.map((tech, i) => (
            <div key={i} className={styles.chip}>{tech}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
