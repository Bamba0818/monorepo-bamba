import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
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
  const navigate = useNavigate();
  const [oeuvre, setOeuvre] = useState<Oeuvre | null>(null);

  useEffect(() => {
    if (id) {
      api
        .get(`/oeuvres/${id}`)
        .then((res) => setOeuvre(res.data))
        .catch((err) => {
          console.error("Erreur lors du chargement de l'œuvre :", err);
        });
    }
  }, [id]);

  const handleEdit = () => {
    navigate(`/oeuvres/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/oeuvres/${id}`);
      navigate("/oeuvres");
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  if (!oeuvre) return <p>Chargement...</p>;

  return (
    <main className="oeuvre-detail">
      <h1>{oeuvre.titre}</h1>
      <p>Auteur : {oeuvre.auteur}</p>
      <p>Ville : {oeuvre.ville}</p>
      <p>Description de l’œuvre (exemple)</p>

      <button type="button" onClick={handleEdit}>
        Modifier
      </button>
      <button type="button" onClick={handleDelete}>
        Supprimer
      </button>

      <footer>© 2025 Cheikh Ahmadou Bamba</footer>
    </main>
  );
}
