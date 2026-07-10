const cases = [
  {
    title: 'Gestión automática de pedidos y comunicación con clientes para una inmobiliaria',
    problem: <>Una inmobiliaria recibía diariamente solicitudes de clientes por correo, WhatsApp y formularios web, y cada petición debía revisarse y registrarse manualmente.</>,
    solution: <>Desarrollé un sistema que centralizaba automáticamente las solicitudes, clasificaba cada petición, creaba la ficha correspondiente y avisaba al equipo cuando necesitaba intervención.</>,
    result: <>Se redujo el tiempo dedicado a revisar correos y copiar información, disminuyeron los errores manuales y los clientes recibieron actualizaciones automáticas del estado de sus solicitudes.</>,
  },
  {
    title: 'Generador automático de informes profesionales para un estudio de arquitectura',
    problem: <>Un estudio de arquitectura realizaba revisiones técnicas y dedicaba horas a transformar notas, fotografías y datos internos en documentos finales bien presentados.</>,
    solution: <>Creé una herramienta donde el equipo añadía la información recogida durante la visita y el sistema organizaba los datos, generaba el informe siguiendo la estructura de la empresa y preparaba un documento listo para revisar y entregar.</>,
    result: <>Los informes se creaban en minutos, todos seguían el mismo formato profesional y la información histórica podía localizarse mucho más rápido.</>,
  },
  {
    title: 'Software para cálculo de corrosión de materiales',
    problem: <>Una empresa de ingeniería necesitaba evaluar el deterioro de materiales según humedad, temperatura, antigüedad y protocolos técnicos, sin depender de procesos manuales y poco claros.</>,
    solution: <>Desarrollé una aplicación con módulos de cálculo, curvas de evolución y visualización histórica de datos de más de 50 años. Además, incorporé un asistente virtual para explicar protocolos y resultados en lenguaje natural.</>,
    result: <>Se convirtió en una herramienta útil tanto para ingenieros como para usuarios no técnicos, con cálculos más comprensibles, trazabilidad y mejor toma de decisiones.</>,
  },
  {
    title: 'App de películas con listas compartidas y recomendaciones',
    problem: <>Una plataforma de contenido quería que varias personas pudieran crear playlists compartidas, descubrir títulos con facilidad y recibir recomendaciones más personalizadas.</>,
    solution: <>Diseñé una app conectada a APIs públicas de películas y series, con listas compartidas, votaciones, navegación tipo swipe y un asistente conversacional que recomendaba contenido según los gustos y hábitos de cada usuario.</>,
    result: <>La experiencia se volvió más social, más intuitiva y mucho más atractiva para el usuario final.</>,
  },
  {
    title: 'Software de recordatorios para clínica veterinaria',
    problem: <>Una veterinaria necesitaba automatizar recordatorios de vacunas, revisiones, desparasitaciones, seguros y limpiezas, evitando olvidos y llamadas manuales.</>,
    solution: <>Implementé un sistema que registraba cada intervención y calculaba automáticamente los próximos eventos. Además enviaba avisos por SMS y email a los clientes en el momento adecuado.</>,
    result: <>Se redujeron los olvidos, mejoró la fidelización de los clientes y el equipo gestionó la agenda con mucha menos carga manual.</>,
  },
  {
    title: 'Sistema de votación para concurso nacional de charangas',
    problem: <>La organización de un concurso nacional de charangas necesitaba digitalizar un proceso de votación con una gran participación. Buscaban evitar recuentos manuales, controlar que cada persona pudiera votar una sola vez y consultar la evolución del concurso en tiempo real.</>,
    solution: <>Desarrollé una herramienta a medida con votación online, panel privado de resultados en tiempo real y controles de seguridad para permitir un único voto por dispositivo y validar que la participación se realizara desde la ubicación del concurso.</>,
    result: <>La organización eliminó tareas repetitivas, redujo errores humanos y pudo gestionar el concurso de forma más sencilla, segura y profesional, garantizando una votación más controlada y una mejor experiencia para participantes y público.</>,
  }
]

function Cases() {
  return (
    <section className="section cases-section" id="casos">
      <div className="section__inner">
        <div className="section-heading section-heading--wide" data-reveal>
          <span className="eyebrow">Casos de Éxito</span>
          <h2>Ejemplos de problemas reales resueltos con tecnología a medida.</h2>
        </div>
        <div className="cases-grid" data-reveal>
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
