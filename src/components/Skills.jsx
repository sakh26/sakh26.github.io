import { useLanguage } from '../i18n/LanguageContext'
import java from '../assets/icons/java.svg'
import javascript from '../assets/icons/javascript.svg'
import typescript from '../assets/icons/typescript.svg'
import sql from '../assets/icons/sql.svg'
import html5 from '../assets/icons/html5.svg'
import css3 from '../assets/icons/css3.svg'
import spring from '../assets/icons/spring.svg'
import react from '../assets/icons/react.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import git from '../assets/icons/git.svg'
import github from '../assets/icons/github.svg'
import githubactions from '../assets/icons/githubactions.svg'
import vitejs from '../assets/icons/vitejs.svg'
import vitest from '../assets/icons/vitest.svg'
import linux from '../assets/icons/linux.svg'
import docker from '../assets/icons/docker.svg'
import postgresql from '../assets/icons/postgresql.svg'
import testing from '../assets/icons/testing.svg'
import entra from '../assets/icons/entra.svg'
import intune from '../assets/icons/intune.svg'

// Ikonene er de samme på begge språk, så de slås opp på navnet.
// Svarte ikoner er merket mono, slik at de kan lysne i mørkt tema.
const icons = {
  Java: { src: java },
  JavaScript: { src: javascript },
  TypeScript: { src: typescript },
  SQL: { src: sql, mono: true },
  HTML: { src: html5 },
  CSS: { src: css3 },
  'Spring Boot': { src: spring },
  React: { src: react },
  Bootstrap: { src: bootstrap },
  Git: { src: git },
  GitHub: { src: github, mono: true },
  'GitHub Actions': { src: githubactions },
  Vite: { src: vitejs },
  Vitest: { src: vitest },
  Linux: { src: linux, mono: true },
  Docker: { src: docker },
  PostgreSQL: { src: postgresql },
  'Testprinsipper (ISTQB)': { src: testing, mono: true },
  'Test principles (ISTQB)': { src: testing, mono: true },
  'Microsoft Entra ID': { src: entra, mono: true },
  Intune: { src: intune, mono: true },
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="skills" id="ferdigheter">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-icon-groups">
        {t.skills.groups.map((group) => (
          <div key={group.label}>
            <h3 className="skills-group-label">{group.label}</h3>
            <ul className="skills-icons">
              {group.items.map((item) => {
                const icon = icons[item]
                return (
                  <li key={item} className="skill-tile">
                    {icon && (
                      <img
                        src={icon.src}
                        alt=""
                        className={icon.mono ? 'skill-icon is-mono' : 'skill-icon'}
                        width="40"
                        height="40"
                        loading="lazy"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
