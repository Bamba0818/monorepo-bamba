// src/pages/Home/Home.tsx
import "./Home.css";
import image from "../../assets/cheikh.jpg"; // à remplacer par ton image réelle

function Home() {
  return (
    <main className="home">
      <h1 className="page-title">
        Découvrez les œuvres de Cheikh Ahmadou Bamba
      </h1>
      <img src={image} alt="Cheikh Ahmadou Bamba" className="cheikh-image" />
      <p className="dates">1853 - 1927</p>
      <footer className="footer-home">© 2025 Cheikh Ahmadou Bamba</footer>
    </main>
  );
}

export default Home;
