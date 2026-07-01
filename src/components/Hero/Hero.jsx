import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Hero.module.css'

const banner = 'https://raw.githubusercontent.com/Almydev/Almydev/main/assets/banner.png'

export default function Hero() {
  const { t } = useI18n()
  const visualRef = useScrollReveal(0.05)
  const contentRef = useScrollReveal(0.05)

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div ref={visualRef} className={`${styles.visual} reveal`}>
          <div className={styles.glow} />
          <img src={banner} alt="ALMYDEV Banner" className={styles.banner} />
        </div>
        <div ref={contentRef} className={`${styles.content} reveal`}>
          {t.hero.badge && <span className={styles.badge}>{t.hero.badge}</span>}
            <h1 className={styles.title}>
            {t.hero.title}{' '}
            <span className={styles.highlight}>{t.hero.highlight}</span>
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <div className={styles.actions}>
            <a href="#problema" className={styles.btnPrimary}>{t.hero.cta}</a>
            <a href="#capacidades" className={styles.btnSecondary}>{t.hero.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
