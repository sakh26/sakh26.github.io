import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-portrait">
        <img
          src="/portrait.jpg"
          alt={t.hero.photoCaption}
          onError={(e) => {
            e.currentTarget.src = '/portrait-placeholder.svg'
          }}
        />
      </div>

      <div className="hero-text">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-title">
          {t.hero.title[0]}
          <br />
          {t.hero.title[1]}
        </h1>
        <ul className="hero-creds">
          {t.hero.credentials.map((cred) => (
            <li key={cred.main}>
              <span className="cred-main">{cred.main}</span>
              {cred.detail && <span className="cred-detail">{cred.detail}</span>}
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a href="#prosjekter" className="btn-dark">
            {t.hero.ctaProjects}
          </a>
          <a
            href="https://github.com/sakh26"
            className="btn-outline"
            target="_blank"
            rel="noopener"
          >
            {t.hero.ctaGithub}
          </a>
        </div>
      </div>
    </section>
  )
}
