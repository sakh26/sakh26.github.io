import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about" id="om">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-body">
        {t.about.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
