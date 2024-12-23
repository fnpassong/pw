const Feature = () => {
  return (
    <section className="feature padding-block-36">
      <div className="feature__wrapper">
        <div className="card grid-layout margin-block-36">
          <div className="card__title clr-primary-500 margin-block-36">
            <h3 className="fs-500">nuestro objetivo</h3>
            <p className="card__paragraph">
              Empoderar a las medianas y pequeñas empresas para que prosperen en
              el entorno digital, ofreciendo soluciones que sean tanto
              atractivas como funcionales. 🚀✨
            </p>
          </div>
          <div className="card__img"></div>
        </div>
        <div className="card grid-layout flow" data-card="inverted">
          <div className="card__title clr-primary-500 margin-block-36">
            <h3 className="fs-500">pequeñas & medianas empresas</h3>
            <p className="card__paragraph">
              Un sitio web profesional construye confianza y credibilidad,
              haciendo que los clientes se sientan más cómodos al elegir tus
              productos o servicios.
            </p>
          </div>
          <div className="card__img"></div>
        </div>
      </div>
    </section>
  )
}

export default Feature
