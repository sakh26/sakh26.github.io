import { useEffect, useState } from 'react'

// Temaet settes på <html> av et lite skript i index.html før siden tegnes.
// Hooken starter på 'light' så den stemmer med den ferdigbygde HTML-en,
// og leser det faktiske valget etterpå.
export function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'light')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Lagring kan være blokkert, temaet gjelder da bare til siden lukkes.
    }
  }

  return { theme, toggleTheme }
}
