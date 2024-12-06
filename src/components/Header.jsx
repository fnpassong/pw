import logo from "../assets/logoOscuro.svg"

const Header = () => {
  return (
    <section className="header">
      <div className="header__wrapper grid-layout">
        <img src={logo} alt="logo de proyecto Web" className="header__logo" />
        <p className="header__title ff-accent">Proyecto Web</p>
      </div>
      <div className="hero">
        <div className="hero__wrapper grid-layout">
          <div className="hero__pic"></div>
          <div className="hero__text-group">
            <h1 className="hero__title ff-accent">
              Creamos páginas webs personalizadas
            </h1>
            <div className="hero__paragraphs flow">
              <p className="hero__note">
                Impresiones duraderas en un mundo digital
              </p>
              <p className="hero__paragraph">
                Construimos páginas web para dar a conocer a tu empresa,
                aumentando su visibilidad y mostrando los productos y/o servicio
                que ofreces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
