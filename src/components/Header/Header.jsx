import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useI18n } from '../../context/I18nContext.jsx'
import styles from './Header.module.css'
import logoImg from '../../assets/logobg.webp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useI18n()
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#problema', label: t.nav.problema },
    { href: '#solucion', label: t.nav.solucion },
    { href: '#capacidades', label: t.nav.capacidades },
    { href: '#areas', label: t.nav.areas },
    { href: '#filosofia', label: t.nav.filosofia },
    { href: '#contacto', label: t.nav.contacto },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="ALMYDEV" className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((l) => (
            <Link key={l.href} to={onHome ? l.href : `/${l.href}`} className={styles.link} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className={styles.toggles}>
            <button onClick={toggleLang} className={styles.toggleBtn} aria-label={lang === 'es' ? 'Inglés' : 'Español'}>
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={toggleTheme} className={styles.toggleBtn} aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </button>
          </div>
        </nav>

        <div className={styles.right}>
          <button onClick={toggleLang} className={`${styles.toggleBtn} ${styles.desktopToggle}`} aria-label={lang === 'es' ? 'Inglés' : 'Español'}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={toggleTheme} className={`${styles.toggleBtn} ${styles.desktopToggle}`} aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
