import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      sections.forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Seksjoner som alt er synlige når siden åpnes, får stå i fred. Ellers ville
    // den ferdigbygde teksten blinket bort og inn igjen.
    const below = sections.filter((el) => el.getBoundingClientRect().top > window.innerHeight)
    below.forEach((el) => el.classList.add('reveal'))
    sections.filter((el) => !below.includes(el)).forEach((el) => el.classList.add('is-visible'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    below.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}
