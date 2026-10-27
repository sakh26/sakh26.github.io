import { useEffect, useState } from 'react'

// Bevegelse slås på og av med klassen «moving» på <html>. Et lite skript i
// index.html setter den før siden tegnes, ut fra valget som er lagret, eller
// ut fra om maskinen ber om mindre bevegelse. Hooken starter på «på» så den
// stemmer med den ferdigbygde HTML-en, og leser det faktiske valget etterpå.
export function useBevegelse() {
  const [pa, setPa] = useState(true)

  useEffect(() => {
    setPa(document.documentElement.classList.contains('moving'))
  }, [])

  const bytt = () => {
    const neste = !pa
    setPa(neste)
    document.documentElement.classList.toggle('moving', neste)
    try {
      localStorage.setItem('bevegelse', neste ? 'på' : 'av')
    } catch {
      // Lagring kan være blokkert, valget gjelder da bare til siden lukkes.
    }
  }

  return { pa, bytt }
}
