import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="education" id="utdannelse">
      <h2 className="section-title">{t.education.title}</h2>
      <div className="skills-grid">
        {t.education.groups.map((group) => (
          <div className="skills-group" key={group.label}>
            <h3 className="skills-group-label">{group.label}</h3>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
