import compactLogo from '../assets/brand/logo_compacto.png'

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
            <img className="site-footer__logo" src={compactLogo} alt="" aria-hidden="true" />
            <div className="site-footer__brand-copy">
              <span className="site-footer__name">Maimonet</span>
              <p className="site-footer__tagline">Tecnología que simplifica, <br></br>IA que transforma.</p>
            </div>
          </a>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__section">
            <h3 className="site-footer__title">Navegación</h3>
            <ul className="site-footer__links">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__section">
            <h3 className="site-footer__title">Contacto</h3>
            <ul className="site-footer__contact">
              <li>
                <a href="mailto:juliajimenezayuso@maimonet.es">juliajimenezayuso@maimonet.es</a>
              </li>
              <li>
                <a href="tel:+34636809719" target="_blank" rel="noreferrer">+34 636 809 719</a>
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
        <p>Desarrollo de software, automatización e inteligencia artificial.</p>
      </div>
    </footer>
  )
}

export default Footer
