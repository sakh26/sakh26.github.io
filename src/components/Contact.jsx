import { useLanguage } from '../i18n/LanguageContext'

const icons = {
  mail: 'M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7',
  phone:
    'M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z',
  github:
    'M9 19c-4 1.3-4-2-5.5-2.5M14.5 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.5 3.3 5.5 3.6 5.5 3.6a4.2 4.2 0 0 0-.1 3.1 4.5 4.5 0 0 0-1.2 3.1c0 4.5 2.7 5.5 5.3 5.8a2.8 2.8 0 0 0-.8 2.2V21',
  linkedin: 'M4.5 9.5v10M4.5 5v.5M9.5 19.5v-10M9.5 13.5a3.5 3.5 0 0 1 7 0v6M3.5 3.5h17v17h-17z',
}

function Icon({ d }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact" id="kontakt">
      <div className="contact-inner">
        <p className="eyebrow contact-eyebrow">{t.contact.eyebrow}</p>
        <h2 className="contact-title">{t.contact.title}</h2>
        <p className="contact-desc">{t.contact.desc}</p>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${t.contact.email}`} className="contact-btn">
              <Icon d={icons.mail} />
              {t.contact.email}
            </a>
          </li>
          <li>
            <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`} className="contact-btn">
              <Icon d={icons.phone} />
              {t.contact.phone}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sakh26"
              className="contact-btn"
              target="_blank"
              rel="noopener"
            >
              <Icon d={icons.github} />
              github.com/sakh26
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sara-khudadad-dev"
              className="contact-btn"
              target="_blank"
              rel="noopener"
            >
              <Icon d={icons.linkedin} />
              Sara Khudadad
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
