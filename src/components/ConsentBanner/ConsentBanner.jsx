import { useState, useEffect } from 'react'
import { useI18n } from '../../context/I18nContext.jsx'
import styles from './ConsentBanner.module.css'

export default function ConsentBanner() {
  const { t, lang } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('almydev-consent')
    if (!consent) setVisible(true)
  }, [])

  const decide = (value) => {
    localStorage.setItem('almydev-consent', value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.consent.aria}>
      <p className={styles.text}>{t.consent.text} <a href={lang === 'es' ? '/cookies' : '/cookies'} className={styles.link}>{t.consent.more}</a></p>
      <div className={styles.actions}>
        <button onClick={() => decide('rejected')} className={styles.reject}>{t.consent.reject}</button>
        <button onClick={() => decide('accepted')} className={styles.accept}>{t.consent.accept}</button>
      </div>
    </div>
  )
}
