const steps = [
  { id: 'understand', content: <>Entiendo <strong>cómo trabajas</strong></> },
  { id: 'improve', content: <>Detecto qué puede mejorar</> },
  { id: 'design', content: <>Diseño la <strong>solución</strong></> },
  { id: 'build', content: <>Desarrollo y <em>acompaño</em></> },
]

function Process() {
  return (
    <section className="section process-section" id="proceso">
      <div className="section__inner process-grid">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Proceso</span>
          <h2>Un método cercano para convertir procesos complejos en <strong>herramientas simples</strong>.</h2>
        </div>
        <div className="process-list">
          {steps.map((step, index) => (
            <article className="process-step" key={step.id} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.content}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
