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
  const [theme, setTheme] = useState(() => localStorage.getItem('maimonet-theme') || 'dark')

  useEffect(() => {
    const animatedItems = document.querySelectorAll('[data-reveal]')
    const root = document.documentElement
    const header = document.querySelector('.site-header')
    let lastScrollY = window.scrollY
    let ticking = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.18, rootMargin: '-5% 0px -8%' },
    )

    const revealItems = () => {
      if (window.innerWidth < 980) {
        animatedItems.forEach((item) => item.classList.add('is-visible'))
        return
      }

      animatedItems.forEach((item) => observer.observe(item))
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
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('maimonet-theme', theme)
  }, [theme])

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <main>
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
