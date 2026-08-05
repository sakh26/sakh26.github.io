import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const ids = t.nav.links.map((link) => link.href.slice(1))
  const active = useActiveSection(ids)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="nav">
      <a href="#om" className="nav-logo" onClick={() => setMenuOpen(false)}>Sara Khudadad</a>
      <nav
        id="nav-menu"
        className={menuOpen ? 'nav-menu is-open' : 'nav-menu'}
        aria-label={t.nav.menuLabel}
      >
        <ul className="nav-links">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'nav-active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={t.nav.themeToggle}
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={t.nav.langToggle}
        >
          <span className={lang === 'no' ? 'lang-active' : ''}>NO</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
        </button>
        <a href="/cv.pdf" className="nav-cv" download="CV - Sara Khudadad.pdf">
          {t.nav.cv}
        </a>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={t.nav.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
