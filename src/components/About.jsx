import { useLanguage } from '../i18n/LanguageContext'

const badgeIcons = {
  health: (
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10ZM7.5 11.5h2.5l1.2-2.2 1.8 4.2 1.2-2h2.3" />
  ),
  code: <path d="M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 5l-3 14" />,
}

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about" id="om">
      <h2 className="section-title">{t.about.title}</h2>
      <ul className="about-badges">
        {t.about.badges.map((badge) => (
          <li key={badge.label} className="about-badge">
            <svg
              className="about-badge-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {badgeIcons[badge.icon]}
            </svg>
            {badge.label}
          </li>
        ))}
      </ul>
      <div className="about-body">
        {t.about.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
