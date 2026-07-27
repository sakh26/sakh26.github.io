import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="skills" id="ferdigheter">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        {t.skills.groups.map((group) => (
          <div className="skills-group" key={group.label}>
            <h3 className="skills-group-label">{group.label}</h3>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="skills-group learning-group">
          <h3 className="skills-group-label">{t.learning.title}</h3>
          <ul className="skills-list">
            {t.learning.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
