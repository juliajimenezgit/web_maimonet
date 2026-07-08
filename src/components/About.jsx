import juliaProfile from '../assets/imagen_perfil_julia.PNG'

function About() {
  return (
    <section className="section section-about" id="sobre">
      <div className="section__inner about-grid">
        <div className="about-portrait" data-reveal>
          <img src={juliaProfile} alt="Julia Jiménez Ayuso, fundadora de Maimonet" />
          <div className="about-portrait__caption">
            <strong>Julia Jiménez Ayuso</strong>
            <span>Fundadora de Maimonet</span>
          </div>
        </div>

        <div className="about-story">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Sobre mí</span>
            <h2>Un proyecto propio para aplicar tecnología con <strong>criterio</strong>, cercanía y sentido práctico.</h2>
          </div>

          <div className="about-copy" data-reveal>
            <p>
              Soy Julia Jiménez Ayuso, una profesional joven que ha pasado casi 10 años
              viviendo y formándose en Madrid. Después de esa etapa, Maimonet nace como
              el paso natural hacia un <strong>proyecto propio</strong>: una forma de aplicar lo aprendido,
              seguir creciendo y construir una marca basada en la calidad del trabajo, la
              <em> cercanía</em>, la empatía y la mejora continua.
            </p>
            <p>
              Antes de iniciar este camino, he trabajado durante casi 5 años en el sector
              tecnológico en empresas de referencia como Técnicas Reunidas, una de las
              ingenierías más importantes de España, y Quid Qualitas, consultora
              especializada en experiencia de cliente en Madrid.
            </p>
            <p>
              El nombre Maimonet viene de un apellido familiar ligado al emprendimiento y
              a la iniciativa propia. Vengo de una familia que siempre ha apostado por
              crear empresas en distintos sectores, con una mentalidad de <strong>trabajo</strong>,
              constancia y crecimiento.
            </p>
            <p>
              Elegir este nombre es una forma de continuar ese camino, ahora desde el
              mundo del software, la automatización y la inteligencia artificial. Maimonet
              representa construir algo propio, con <strong>esfuerzo</strong>, visión y ganas reales de
              aportar valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
