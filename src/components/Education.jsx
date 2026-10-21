import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="education" id="utdannelse">
      <h2 className="section-title">{t.education.title}</h2>
      <div className="skills-grid">
        {t.education.groups.map((group) => (
          <div className="skills-group" key={group.label}>
            {/* Første gruppe heter det samme som seksjonen, så den overskriften vises ikke to ganger. En tom linje holder kolonnene på linje. */}
            {group.label !== t.education.title ? (
              <h3 className="skills-group-label">{group.label}</h3>
            ) : (
              <div className="skills-group-label" aria-hidden="true">&nbsp;</div>
            )}
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
