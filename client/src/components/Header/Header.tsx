import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo Khassida" />
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
