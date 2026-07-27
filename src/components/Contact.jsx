import { useLanguage } from '../i18n/LanguageContext'

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
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </li>
          <li>
            <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}>{t.contact.phone}</a>
          </li>
          <li>
            <a href="https://github.com/sakh26" target="_blank" rel="noopener">
              github.com/sakh26
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
