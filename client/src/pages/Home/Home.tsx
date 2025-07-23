import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1 className="page-title">
        Découvrez les œuvres de Cheikh Ahmadou Bamba
      </h1>

      <div className="home-content">
        <img
          src="/cab.svg"
          alt="Cheikh Ahmadou Bamba"
          className="cheikh-image"
        />

        <section className="presentation">
          <h2>Qui est Cheikh Ahmadou Bamba ?</h2>
          <p>
            Cheikh Ahmadou Bamba Mbacké était un érudit musulman et fondateur de la
            confrérie soufie des Mourides. Né en 1853, il a consacré sa vie à la
            spiritualité, à l’enseignement et à la non-violence face à la
            colonisation.
          </p>
          <p>
            Il est l’auteur de nombreux poèmes mystiques (les <strong>Khassidas</strong>)
            écrits en arabe classique, célébrant Dieu et le Prophète Muhammad. Sa ville
            sainte, <strong>Touba</strong>, est aujourd’hui un haut lieu du savoir et
            de la foi musulmane.
          </p>
        </section>
      </div>

     
    </main>
  );
}

export default Home;
