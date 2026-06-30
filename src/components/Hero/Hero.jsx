import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Hero.module.css'

const banner = 'https://raw.githubusercontent.com/Almydev/Almydev/main/assets/banner.png'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.visual}>
          <div className={styles.glow} />
          <img src={banner} alt="ALMYDEV Banner" className={styles.banner} />
        </div>
        <div className={styles.content}>
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
