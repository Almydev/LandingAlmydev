import { useI18n } from '../../context/I18nContext.jsx'
import { companyInfo } from '../../config/companyInfo.js'
import { legalContent as legalDocs } from './legalContent.js'
import styles from './legal.module.css'

export default function LegalPage({ docKey }) {
  const { t, lang } = useI18n()
  const content = legalDocs[docKey][lang]
  const backLabel = t.legal.back
  const lastUpdated = lang === 'es' ? 'Última actualización' : 'Last updated'

  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.back}>
          ← {backLabel}
        </a>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.meta}>{lastUpdated}: {content.lastUpdated}</p>
        <p className={styles.owner}>{companyInfo.brandName} · NIT {companyInfo.nit} · {companyInfo.domicile}</p>
        {content.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className={styles.paragraph}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
