import logo from "../assets/logoOscuro.svg"

const Header = () => {
  return (
    <section className="header">
      <div className="header__wrapper grid-layout">
        <img src={logo} alt="logo de proyecto Web" className="header__logo" />
        <p className="header__title ff-accent">Proyecto Web</p>
      </div>
    </section>
  )
}

export default Header
