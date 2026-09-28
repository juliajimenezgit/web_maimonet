import { useState } from 'react'

const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+34 636 809 719',
    href: 'https://wa.me/34636809719',
    note: 'Cuéntame qué necesitas por WhatsApp.',
  },
  {
    label: 'Email',
    value: 'juliajimenezayuso@maimonet.es',
    href: 'mailto:juliajimenezayuso@maimonet.es',
    note: 'Para contarme el contexto con calma',
    className: 'contact-card--email',
  },
  {
    label: 'LinkedIn',
    value: 'Julia Jiménez Ayuso',
    meta: '/in/juliajimenezayuso',
    href: 'https://www.linkedin.com/in/juliajimenezayuso/',
    note: 'Perfil profesional',
  },
  {
    label: 'Instagram',
    value: '@maimonet_ai',
    href: 'https://www.instagram.com/maimonet_ai/',
    note: 'Redes de Maimonet',
  },
]

function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [emailPrepared, setEmailPrepared] = useState(false)

  const prepareEmail = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Nombre: ${data.get('name')}`,
      `Empresa: ${data.get('company') || 'No indicada'}`,
      `Email de contacto: ${data.get('email')}`,
      '',
      data.get('message'),
    ].join('\n')
    window.location.href = `mailto:juliajimenezayuso@maimonet.es?subject=${encodeURIComponent('Consulta sobre un proyecto — Maimonet')}&body=${encodeURIComponent(body)}`
    setEmailPrepared(true)
  }

  return (
    <section className="section contact-section" id="contacto">
      <div className="section__inner contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Contacto</span>
          <h2>¿Tienes una idea o un proceso que crees que podría <strong>mejorar</strong>?</h2>
          <p>
            Cuéntame cómo trabajas y qué parte de tu negocio te gustaría simplificar.
            Si lo tienes claro, genial. Si no, también. Puedo empezar por detectar
            <strong> dónde se está perdiendo tiempo</strong>.
          </p>
        </div>
        <div className="contact-direct" data-reveal>
          {contactLinks.map((item) => (
            <a
              key={item.label}
              className={item.className}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              {item.meta ? <b>{item.meta}</b> : null}
              <small>{item.note}</small>
            </a>
          ))}
          <button
            className={`contact-card contact-card--form ${isFormOpen ? 'is-active' : ''}`}
            type="button"
            aria-expanded={isFormOpen}
            aria-controls="contact-form-panel"
            onClick={() => setIsFormOpen((open) => !open)}
          >
            <span>Formulario</span>
            <strong>Analizar mi proyecto</strong>
            <small>Si prefieres dejarlo escrito paso a paso</small>
          </button>
        </div>
        <div className={`contact-panel ${isFormOpen ? 'is-open' : ''}`} id="contact-form-panel" hidden={!isFormOpen}>
          <div className="contact-panel__copy">
            <h3>Cuéntame el contexto y vemos si tiene sentido automatizarlo.</h3>
            <p>No hace falta que traigas una idea cerrada. Con que me expliques el problema, ya podemos empezar.</p>
          </div>
          <form className="contact-form" onSubmit={prepareEmail} aria-describedby="contact-form-note">
            <label>
              <span>Nombre</span>
              <input type="text" name="name" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              <span>Empresa</span>
              <input type="text" name="company" autoComplete="organization" maxLength={150} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" maxLength={254} required />
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" rows="4" maxLength={1500} required />
            </label>
            <p className="contact-form-note" id="contact-form-note">
              Se abrirá tu aplicación de correo con el mensaje preparado. Revisa y envía el correo allí;
              este formulario no lo envía ni guarda los datos en la web.
            </p>
            <button className="button button-primary" type="submit">Preparar correo</button>
            <p className="contact-form-note" role="status">
              {emailPrepared ? 'Mensaje preparado. Si no se abre tu aplicación de correo, puedes copiar el mensaje y escribir a juliajimenezayuso@maimonet.es.' : ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
