import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <span>{t.footer.copyright}</span>
      <span>{t.footer.hosted}</span>
    </footer>
  )
}
