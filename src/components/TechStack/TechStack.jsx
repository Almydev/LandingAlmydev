import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './TechStack.module.css'

export default function TechStack() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.tech.label}</span>
          <h2 className="section-title">{t.tech.title}</h2>
          <p className="section-subtitle">{t.tech.desc}</p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {t.techList.map((tech, i) => (
            <div key={i} className={styles.chip} data-tip={t.techDesc[i]}>{tech}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
