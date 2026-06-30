import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Problem.module.css'

export default function Problem() {
  const { t } = useI18n()

  return (
    <section id="problema" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.problem.label}</span>
          <h2 className="section-title">{t.problem.title}</h2>
          <p className="section-subtitle">{t.problem.desc}</p>
        </div>

        <div className={styles.grid}>
          {t.problemCards.map((p, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
