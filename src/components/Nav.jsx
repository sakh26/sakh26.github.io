import { useLanguage } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const ids = t.nav.links.map((link) => link.href.slice(1))
  const active = useActiveSection(ids)

  return (
    <header className="nav">
      <a href="#om" className="nav-logo">Sara Khudadad</a>
      <nav aria-label="Hovedmeny">
        <ul className="nav-links">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'nav-active' : ''}
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
          aria-label="Bytt lyst / mørkt tema"
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          aria-label="Bytt språk / Switch language"
        >
          <span className={lang === 'no' ? 'lang-active' : ''}>NO</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
        </button>
        <a href="/cv.pdf" className="nav-cv" download>
          {t.nav.cv}
        </a>
      </div>
    </header>
  )
}
