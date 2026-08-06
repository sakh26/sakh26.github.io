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

    sections.forEach((el) => el.classList.add('reveal'))
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
    sections.forEach((el) => observer.observe(el))

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
