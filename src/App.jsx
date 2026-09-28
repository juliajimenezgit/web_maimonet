import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Cases from './components/Cases.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  // The initial render matches the HTML generated at build time.
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('maimonet-theme')
      if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
    } catch {
      // The site remains usable when browser storage is unavailable.
    }
  }, [])

  useEffect(() => {
    const animatedItems = document.querySelectorAll('[data-reveal]')
    const root = document.documentElement
    const header = document.querySelector('.site-header')
    let lastScrollY = window.scrollY
    let ticking = false

    const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '-5% 0px -8%' },
    ) : null

    const revealItems = () => {
      if (!observer || window.innerWidth < 980 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      animatedItems.forEach((item) => {
        // Visible by default; only animate individual elements below the fold.
        if (item.getBoundingClientRect().top > window.innerHeight && !item.querySelector('[data-reveal]')) {
          item.classList.add('reveal-pending')
          observer.observe(item)
        }
      })
    }

    const updateScrollState = () => {
      const currentScrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'

      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      root.dataset.scrollDirection = direction
      header?.classList.toggle('is-scrolled', currentScrollY > 24)
      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState)
        ticking = true
      }
    }

    revealItems()
    updateScrollState()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer?.disconnect()
      animatedItems.forEach((item) => item.classList.remove('reveal-pending'))
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    try {
      localStorage.setItem('maimonet-theme', nextTheme)
    } catch {
      // Theme switching does not require persistent storage.
    }
  }

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="contenido" tabIndex={-1}>
        <Hero theme={theme} />
        <Services />
        <Cases />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
