import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  const current = t.experience.items.filter((item) => item.current)
  const rest = t.experience.items.filter((item) => !item.current)
  const visible = expanded ? [...current, ...rest] : current

  return (
    <section className="experience" id="erfaring">
      <h2 className="section-title">{t.experience.title}</h2>
      <ol className="timeline">
        {visible.map((item) => (
          <li
            className={`timeline-item${item.current ? ' timeline-featured' : ''}`}
            key={`${item.role}-${item.date}`}
          >
            <span className="timeline-date">{item.date}</span>
            <div className="timeline-content">
              <strong className="timeline-role">{item.role}</strong>
              <span className="timeline-place">{item.place}</span>
              {item.bullets?.length > 0 && (
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      {rest.length > 0 && (
        <button
          type="button"
          className="show-more"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? t.experience.showLess : t.experience.showMore}
          <span className={`show-more-icon${expanded ? ' open' : ''}`} aria-hidden="true">
            ↓
          </span>
        </button>
      )}
    </section>
  )
}
