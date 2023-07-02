import CartWidget from "../CartWidget/CartWidget";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="myHeader">
      <div className="myHeader__container">
        <h1 className="myHeader__logo">NBA4ALL</h1>

        <nav className="navbar">
          <a href="#" className="navbar__link">
            Promociones
          </a>
          <a href="#" className="navbar__link">
            Acerca de nosotros
          </a>
          <a href="#" className="navbar__link">
            Contacto
          </a>
        </nav>
      </div>

      <CartWidget cantidad={"2"} />
    </header>
  );
};
