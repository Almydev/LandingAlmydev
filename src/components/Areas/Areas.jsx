import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Areas.module.css'

export default function Areas() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="areas" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.areas.label}</span>
          <h2 className="section-title">{t.areas.title}</h2>
          <p className="section-subtitle">{t.areas.desc}</p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {t.areasList.map((a, i) => (
            <div key={i} className={`${styles.tag} reveal reveal-delay-${Math.min(i + 1, 5)}`} data-tip={t.areasDesc[i]}>{a}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
