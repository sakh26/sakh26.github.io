import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  // Listen lages på nytt ved hver tegning, så effekten følger innholdet i stedet.
  const key = ids.join(',')

  useEffect(() => {
    const observers = key
      .split(',')
      .map((id) => {
        const el = document.getElementById(id)
        if (!el) return null
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(id)
          },
          { rootMargin: '-45% 0px -50% 0px' },
        )
        obs.observe(el)
        return obs
      })
      .filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [key])

  return active
}
