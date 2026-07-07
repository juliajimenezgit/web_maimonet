import whiteLogo from '../assets/brand/logo_completo_blanco.png'
import blackLogo from '../assets/brand/logo_completo_negro.png'

function Hero({ theme }) {
  const logo = theme === 'dark' ? whiteLogo : blackLogo

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-brand-scene" aria-hidden="true">
        <svg className="hero-network-plane" viewBox="0 0 720 460" role="presentation">
          <defs>
            <linearGradient id="heroPlaneStroke" x1="120" y1="100" x2="650" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-blue)" />
              <stop offset="1" stopColor="var(--color-violet)" />
            </linearGradient>
            <radialGradient id="heroPlaneNode" cx="50%" cy="50%" r="50%">
              <stop stopColor="var(--color-soft-white)" />
              <stop offset="0.48" stopColor="var(--color-blue)" />
              <stop offset="1" stopColor="var(--color-violet)" />
            </radialGradient>
          </defs>
          <g className="hero-plane-links">
            <path d="M84 322 L168 246 L272 278 L390 188 L522 224 L654 126" />
            <path d="M128 132 L244 182 L390 188 L492 86 L654 126" />
            <path d="M168 246 L244 182 L362 326 L522 224" />
            <path d="M84 322 L246 384 L362 326 L540 376 L654 126" />
            <path d="M244 182 L272 278 L246 384" />
            <path d="M492 86 L522 224 L540 376" />
          </g>
          <g className="hero-plane-nodes">
            <circle cx="84" cy="322" r="7" />
            <circle cx="128" cy="132" r="6" />
            <circle cx="168" cy="246" r="8" />
            <circle cx="244" cy="182" r="6" />
            <circle cx="272" cy="278" r="7" />
            <circle cx="246" cy="384" r="7" />
            <circle cx="390" cy="188" r="9" />
            <circle cx="362" cy="326" r="7" />
            <circle cx="492" cy="86" r="7" />
            <circle cx="522" cy="224" r="8" />
            <circle cx="540" cy="376" r="7" />
            <circle cx="654" cy="126" r="8" />
          </g>
        </svg>
        <img className="hero-brand-logo" src={logo} alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-inline-logo-frame" data-reveal>
          <img className="hero-inline-logo" src={logo} alt="Maimonet" />
        </div>
        <h1 className="sr-only">Maimonet</h1>
        <p className="hero-kicker" data-reveal>Tecnología que resuelve <strong>problemas reales</strong></p>
        <p className="hero-copy" data-reveal>
          Soluciones digitales <strong>a medida</strong> para ahorrar tiempo,
          <em> automatizar procesos</em> y hacer crecer tu negocio.
        </p>
        <div className="hero-actions" data-reveal>
          <a className="button button-primary" href="#contacto">Cuéntame tu proyecto</a>
          <a className="button button-secondary" href="#servicios">Ver soluciones</a>
        </div>
      </div>
      <div className="hero-metrics" data-reveal aria-label="Enfoque de Maimonet">
        <span>Software a medida</span>
        <span>Automatización</span>
        <span>IA aplicada</span>
      </div>
    </section>
  )
}

export default Hero
