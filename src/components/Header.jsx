import { useState } from 'react'
import compactLogo from '../assets/brand/logo_compacto.png'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Sobre mí', href: '#sobre' },
]

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v2.1M12 18.9V21M4.6 4.6l1.5 1.5M17.9 17.9l1.5 1.5M3 12h2.1M18.9 12H21M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
        <circle cx="12" cy="12" r="4.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.1 14.4A7.7 7.7 0 0 1 9.6 3.9 8.5 8.5 0 1 0 20.1 14.4Z" />
    </svg>
  )
}

function Header({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Maimonet inicio">
        <img className="brand__logo" src={compactLogo} alt="" aria-hidden="true" />
      </a>
      <nav className="site-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          <ThemeIcon theme={theme} />
        </button>
        <a className="header-cta" href="#contacto">
          <span className="header-cta__full">Cuéntame tu proyecto</span>
          <span className="header-cta__short">Proyecto</span>
        </a>
      </div>
      <nav
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        id="mobile-menu"
        aria-label="Navegación móvil"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
