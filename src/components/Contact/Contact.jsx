import { useState } from 'react'
import { useI18n } from '../../context/I18nContext.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import styles from './Contact.module.css'

const FORM_URL = 'https://formspree.io/f/xxxxxxx'

export default function Contact() {
  const { t } = useI18n()
  const headerRef = useScrollReveal()
  const formRef = useScrollReveal()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORM_URL, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.desc}</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`${styles.form} reveal`}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>{t.contact.name}</label>
              <input id="name" name="name" type="text" required className={styles.input} placeholder={t.contact.name} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>{t.contact.email}</label>
              <input id="email" name="email" type="email" required className={styles.input} placeholder={t.contact.email} />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>{t.contact.message}</label>
            <textarea id="message" name="message" rows={5} required className={styles.textarea} placeholder={t.contact.message} />
          </div>

          {status === 'sent' && <p className={styles.success}>{t.contact.sent}</p>}
          {status === 'error' && <p className={styles.error}>{t.contact.error}</p>}

          <button type="submit" className={styles.btn} disabled={status === 'sending'}>
            {status === 'sending' ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
