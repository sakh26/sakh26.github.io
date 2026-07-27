import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="projects" id="prosjekter">
      <div className="section-header">
        <h2 className="section-title">{t.projects.title}</h2>
        <a
          href="https://github.com/sakh26"
          className="section-link"
          target="_blank"
          rel="noopener"
        >
          {t.projects.seeAll}
        </a>
      </div>

      <div className="project-grid">
        {t.projects.items.map((project) => (
          <article className="proj-card" key={project.index}>
            <div className="proj-card-top">
              <span className="proj-index">{project.index}</span>
              <span className={`tag tag-${project.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.tag}
              </span>
            </div>

            <h3 className="proj-name">{project.name}</h3>
            <p className="proj-desc">{project.desc}</p>

            <ul className="proj-tech">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="proj-actions">
              {project.repo && (
                <a
                  href={`https://github.com/sakh26/${project.repo}`}
                  className="proj-link"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a href={project.live} className="proj-link" target="_blank" rel="noopener">
                  {t.projects.liveLabel} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
