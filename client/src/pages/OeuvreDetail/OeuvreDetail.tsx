import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./OeuvreDetail.css";

type Oeuvre = {
  id: number;
  titre: string;
  auteur: string;
  ville: string;
};

export default function OeuvreDetail() {
  const { id } = useParams();
  const [oeuvre, setOeuvre] = useState<Oeuvre | null>(null);

  useEffect(() => {
    api.get(`/oeuvres/${id}`).then((res) => {
      setOeuvre(res.data);
    });
  }, [id]);

  if (!oeuvre) return <p>Chargement...</p>;

  return (
    <main className="oeuvre-detail">
      <h1>{oeuvre.titre}</h1>
      <p>{oeuvre.auteur}</p>
      <p>{oeuvre.ville}</p>
      <p>Description de l’œuvre</p>
      <button type="button">Modifier</button>
      <button type="button">Supprimer</button>
      <footer>© 2025 Cheikh Ahmadou Bamba</footer>
    </main>
  );
}
