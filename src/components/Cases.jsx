const cases = [
  {
    title: 'Automatización documental para una empresa de servicios',
    problem: <>Mucho tiempo creando documentos <strong>manualmente</strong>.</>,
    solution: <>Sistema personalizado capaz de generar documentos automáticamente siguiendo <strong>sus criterios</strong>.</>,
    result: <>Menos tareas repetitivas y más tiempo dedicado al <em>cliente</em>.</>,
  },
  {
    title: 'Herramienta interna de gestión',
    problem: <>Información repartida entre <strong>Excel y documentos</strong>.</>,
    solution: <>Aplicación web privada adaptada a su forma de trabajar.</>,
    result: <>Datos ordenados, acceso rápido y una operativa <strong>más clara</strong>.</>,
  },
  {
    title: 'Asistente inteligente basado en información propia',
    problem: <>Buscar información interna llevaba <strong>demasiado tiempo</strong>.</>,
    solution: <>Sistema con IA capaz de consultar documentación propia.</>,
    result: <>Respuestas más rápidas sin depender de búsquedas manuales.</>,
  },
]

function Cases() {
  return (
    <section className="section cases-section" id="casos">
      <div className="section__inner">
        <div className="section-heading section-heading--wide" data-reveal>
          <span className="eyebrow">Casos reales</span>
          <h2>Ejemplos confidenciales de problemas reales resueltos con tecnología a medida.</h2>
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
          Cada empresa funciona diferente. Por eso cada solución se diseña desde cero
          según tus <strong>procesos</strong>, <strong>objetivos</strong> y <strong>necesidades</strong>.
        </p>
      </div>
    </section>
  )
}

export default Cases
