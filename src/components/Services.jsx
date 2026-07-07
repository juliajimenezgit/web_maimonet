const services = [
  {
    number: '01',
    title: 'Automatización de tareas repetitivas',
    description: (
      <>
        Si una tarea se repite todas las semanas, probablemente se puede simplificar.
        Automatizo procesos manuales para que el equipo <strong>gane tiempo</strong> y
        reduzca errores sin cambiar su forma natural de trabajar.
      </>
    ),
    examples: [
      'Correos que se clasifican, responden o derivan solos',
      'Documentos que se generan a partir de datos reales',
      'Avisos, seguimientos y flujos internos automatizados',
      'Herramientas que se conectan entre sí',
      'Menos copiar y pegar, menos despistes, más foco',
    ],
  },
  {
    number: '02',
    title: 'Documentos, informes e información clara',
    description: (
      <>
        Trabajo con empresas que tienen información repartida en correos, PDFs, Excels o
        documentos internos. La idea es convertir todo eso en
        <strong> documentos útiles</strong>, bien escritos y fáciles de revisar.
      </>
    ),
    examples: [
      'Informes automáticos con estructura profesional',
      'Resúmenes inteligentes de documentos largos',
      'Extracción de datos importantes sin revisarlo todo a mano',
      'Contenido para web, redes o comunicación interna',
      'Información ordenada para tomar decisiones más rápido',
    ],
  },
  {
    number: '03',
    title: 'Software interno a medida',
    description: (
      <>
        Cuando Excel, WhatsApp o varias herramientas sueltas empiezan a quedarse cortas,
        desarrollo software interno adaptado al negocio. No se trata de meter otra
        plataforma más, sino de crear una herramienta que <strong>encaje con el día a día</strong>.
      </>
    ),
    examples: [
      'Aplicaciones privadas para el equipo',
      'CRM y gestión de clientes a medida',
      'Paneles para ver datos importantes de un vistazo',
      'Bases de datos centralizadas y ordenadas',
      'Procesos internos más claros y fáciles de seguir',
    ],
  },
]

const differences = [
  {
    title: 'Personalización de verdad',
    text: (
      <>
        No parto de una IA genérica y busco dónde encajarla. Primero entiendo
        <strong> cómo trabajas</strong>, qué te quita tiempo y qué resultado necesitas.
        A partir de ahí diseño la solución.
      </>
    ),
  },
  {
    title: 'Intermediarios de IA bien pensados',
    text: (
      <>
        Muchas veces creo <strong>capas intermedias</strong> que actúan entre tu empresa y
        modelos de IA ya existentes. Así aprovecho tecnología depurada, pero con contexto,
        reglas y tareas adaptadas a tu caso concreto.
      </>
    ),
  },
  {
    title: 'IA específica cuando hace falta',
    text: (
      <>
        No todo tiene que pasar por esos intermediarios. Si el proyecto lo necesita,
        también puedo generar modelos, asistentes o sistemas de IA concretos para
        <em> una empresa y un uso muy definido</em>.
      </>
    ),
  },
]

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="section__inner">
        <div className="section-heading section-heading--wide" data-reveal>
          <span className="eyebrow">Servicios</span>
          <h2>IA práctica para ahorrar tiempo, automatizar procesos y trabajar con más claridad.</h2>
          <p className="services-intro">
            Maimonet nace para ayudar a empresas a usar la inteligencia artificial de forma
            <strong> práctica, no teórica</strong>. La tecnología no tiene que complicar las
            cosas, tiene que resolver tareas reales y aportar valor desde el primer momento.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="glass-card service-card" key={service.title} data-reveal>
              <div className="card-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="service-difference" data-reveal>
          <div>
            <span className="eyebrow">Qué me diferencia</span>
            <h3>No vendo “una IA”. Construyo la solución alrededor de tu forma de trabajar.</h3>
          </div>
          <div className="difference-grid">
            {differences.map((item) => (
              <article key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
