const compactLogo = '/favicon-96.png'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos reales', href: '#casos' },
  { label: 'Contacto', href: '#contacto' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a className="site-footer__brand-link" href="#inicio" aria-label="Maimonet inicio">
            <img className="site-footer__logo" src={compactLogo} width="96" height="96" alt="" aria-hidden="true" />
            <div className="site-footer__brand-copy">
              <span className="site-footer__name">Maimonet</span>
              <p className="site-footer__tagline">Tecnología que resuelve<br />problemas reales.</p>
            </div>
          </a>
        </div>

        <div className="site-footer__grid">
          <nav className="site-footer__section" aria-label="Navegación del pie">
            <h2 className="site-footer__title">Navegación</h2>
            <ul className="site-footer__links">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__section">
            <h2 className="site-footer__title">Contacto</h2>
            <ul className="site-footer__contact">
              <li>
                <a href="mailto:juliajimenezayuso@maimonet.es">juliajimenezayuso@maimonet.es</a>
              </li>
              <li>
                <a href="tel:+34636809719">+34 636 809 719</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/juliajimenezayuso/" target="_blank" rel="noreferrer">in/juliajimenezayuso/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Maimonet. Todos los derechos reservados.</p>
        <p>Software, automatización e inteligencia artificial desde Albacete para empresas de toda España.</p>
      </div>
    </footer>
  )
}

export default Footer
