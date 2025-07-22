import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1 className="page-title">
        Découvrez les œuvres de Cheikh Ahmadou Bamba
      </h1>
      <img src="/cab.svg" alt="Cheikh Ahmadou Bamba" className="cheikh-image" />
      <p className="dates">1853 - 1927</p>
      <footer className="footer-home">© 2025 Cheikh Ahmadou Bamba</footer>
    </main>
  );
}

export default Home;
