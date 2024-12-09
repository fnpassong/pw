const Feature = () => {
  return (
    <section className="feature padding-block-36">
      <div className="feature__wrapper">
        <detail className="card grid-layout flow margin-block-36">
          <summary className="card__title">
            <h3>nuestro objetivo</h3>
          </summary>
          <div className="card__img"></div>
          <p className="card__paragraph">
            Nos especializamos en crear páginas web personalizadas para pequeñas
            y medianas empresas, ayudándolas a destacar en el mundo digital
            Listo para llevar tu negocio al siguiente nivel?
          </p>
        </detail>
        <detail className="card grid-layout flow" data-card="inverted">
          <summary className="card__title">
            <h3>porque pequeñas & medianas empresas</h3>
          </summary>
          <div className="card__img"></div>
          <p className="card__paragraph">
            Nos especializamos en crear páginas web personalizadas para pequeñas
            y medianas empresas, ayudándolas a destacar en el mundo digital
            Listo para llevar tu negocio al siguiente nivel?
          </p>
        </detail>
      </div>
    </section>
  )
}

export default Feature
