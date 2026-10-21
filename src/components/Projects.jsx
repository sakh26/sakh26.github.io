import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useOpenCard } from '../hooks/useOpenCard'
import ProjectVideo from './ProjectVideo'

export default function Projects() {
  const { t } = useLanguage()
  const slotRefs = useRef([])
  const open = useOpenCard(slotRefs)

  return (
    <section className="projects" id="prosjekter">
      <div className="section-header">
        <h2 className="section-title title-underline">{t.projects.title}</h2>
        <a
          href="https://github.com/sakh26"
          className="section-link"
          target="_blank"
          rel="noopener"
        >
          {t.projects.seeAll}
        </a>
      </div>

      {/* Små kort som brettes ut over siden når musen er over dem, eller når man
          trykker på dem på mobil. Plassen i rutenettet står fast, så ingenting rundt flytter seg. */}
      <div className="project-grid">
        {t.projects.items.map((project, i) => (
          <div
            className={open === i ? 'proj-slot is-open' : 'proj-slot'}
            key={project.name}
            ref={(el) => (slotRefs.current[i] = el)}
          >
            <article className="proj-card" tabIndex={0}>
              <div className="proj-front">
                <span className={`tag tag-${project.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.tag}
                </span>
                <h3 className="proj-name">{project.name}</h3>
                {project.tech.length > 0 && (
                  <ul className="proj-tech">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="proj-more">
                <div className="proj-more-inner">
                  <div className="proj-more-body">
                    <p className="proj-desc">{project.desc}</p>

                    {project.progress && (
                      <div className="proj-progress">
                        <div className="proj-progress-head">
                          <h4 className="proj-why-label">{project.progressLabel}</h4>
                          <span className="proj-progress-count">
                            {project.progress.filter((step) => step.done).length} / {project.progress.length}
                          </span>
                        </div>
                        <div className="proj-progress-bar" aria-hidden="true">
                          <span
                            style={{
                              width: `${(project.progress.filter((step) => step.done).length / project.progress.length) * 100}%`,
                            }}
                          />
                        </div>
                        <ul className="proj-progress-list">
                          {project.progress.map((step) => (
                            <li key={step.label} className={step.done ? 'is-done' : 'is-now'}>
                              <span className="proj-progress-mark" aria-hidden="true" />
                              <span>{step.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.why && (
                      <div className="proj-why">
                        <h4 className="proj-why-label">{t.projects.whyLabel}</h4>
                        <p>{project.why}</p>
                      </div>
                    )}

                    {project.video && (
                      <ProjectVideo
                        src={project.video}
                        poster={project.videoPoster}
                        name={project.name}
                      />
                    )}

                    {(project.live || project.repo) && (
                      <div className="proj-actions">
                        {project.live && (
                          <a
                            href={project.live}
                            className="proj-link proj-link-live"
                            target="_blank"
                            rel="noopener"
                          >
                            {t.projects.liveLabel} →
                          </a>
                        )}
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
