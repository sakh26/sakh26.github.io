import { useLanguage } from '../i18n/LanguageContext'

// Tynne blomster og blader som svever rolig over fargefeltene bak toppen.
const flower = (
  <g>
    <circle cx="12" cy="12" r="2.2" />
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse key={deg} cx="12" cy="6" rx="2.6" ry="4" transform={`rotate(${deg} 12 12)`} />
    ))}
  </g>
)
const leaf = <path d="M5 19C5 10 11 4.5 19.5 4.5 19.5 13 14 19 5 19ZM5 19l9.5-9.5" />
const sprig = (
  <path d="M12 21V8M12 12c-2.5 0-4.5-2-4.5-4.5 2.5 0 4.5 2 4.5 4.5ZM12 15.5c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5ZM12 8c-1.4-1-1.4-3.5 0-4.5 1.4 1 1.4 3.5 0 4.5Z" />
)
const floaters = [flower, leaf, sprig, flower, leaf, flower]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        {floaters.map((shape, i) => (
          <svg
            key={i}
            className={`hero-floater hero-floater-${i + 1}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {shape}
          </svg>
        ))}
      </div>
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
