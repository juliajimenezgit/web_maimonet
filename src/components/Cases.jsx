const cases = [
  {
    title: 'Automatización de documentos y tareas administrativas',
    problem: <>Una empresa dedicaba varias horas a la semana a crear documentos repetitivos, copiar información entre archivos y realizar procesos manuales.</>,
    solution: <>Desarrollo de un sistema personalizado que organiza la información y genera documentos automáticamente siguiendo sus propios criterios y formatos.</>,
    result: <>Menos trabajo manual, reducción de errores y más tiempo para centrarse en tareas de mayor valor.</>,
  },
  {
    title: 'Herramienta interna para centralizar procesos',
    problem: <>La información del negocio estaba repartida entre hojas de Excel, correos y diferentes documentos, dificultando el seguimiento diario.</>,
    solution: <>Creación de una aplicación web privada adaptada a su forma de trabajar para gestionar clientes, datos y procesos desde un único lugar.</>,
    result: <>Información centralizada, procesos más rápidos y una gestión interna más sencilla.</>,
  },
  {
    title: 'Asistente IA personalizado para consultar información empresarial',
    problem: <>El equipo perdía tiempo buscando información entre documentos, manuales y archivos internos.</>,
    solution: <>Implementación de un asistente con inteligencia artificial conectado a su propia documentación para obtener respuestas rápidas y precisas.</>,
    result: <>Acceso inmediato al conocimiento interno y menos dependencia de búsquedas manuales.</>,
  },
]

function Cases() {
  return (
    <section className="section cases-section" id="casos">
      <div className="section__inner">
        <div className="section-heading section-heading--wide" data-reveal>
          <span className="eyebrow">Casos reales</span>
          <h2>Ejemplos de problemas reales resueltos con tecnología a medida.</h2>
        </div>
        <div className="cases-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <dl>
                <div>
                  <dt>Problema</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>Solución</dt>
                  <dd>{item.solution}</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="cases-note" data-reveal>
          Por confidencialidad, los casos mostrados representan soluciones desarrolladas sin exponer información privada de clientes. Cada proyecto se adapta desde cero a los procesos y necesidades reales de cada empresa.
        </p>
      </div>
    </section>
  )
}

export default Cases
