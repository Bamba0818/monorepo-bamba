import { Link } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo Khassida" />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/oeuvres" className="header__link">
          œuvres
        </Link>
        <Link to="/connexion" className="header__link">
          Connexion
        </Link>
      </nav>
    </header>
  );
}
