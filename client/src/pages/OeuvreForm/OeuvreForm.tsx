import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "./OeuvreForm.css";

export default function OeuvreForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [ville, setVille] = useState("");

  // 🔁 Charger les données si on édite
  useEffect(() => {
    if (!isEdit) return;

    api.get(`/oeuvres/${id}`).then((res) => {
      const { titre, auteur, ville } = res.data;
      setTitre(titre);
      setAuteur(auteur);
      setVille(ville);
    });
  }, [id, isEdit]); // ✅ Ajout de isEdit dans les dépendances

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { titre, auteur, ville };

    try {
      if (isEdit) {
        await api.put(`/oeuvres/${id}`, payload);
      } else {
        await api.post("/oeuvres", payload);
      }
      navigate("/oeuvres");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde", error);
    }
  };

  return (
    <main className="oeuvre-form">
      <h1>{isEdit ? "Modifier" : "Ajouter"} une œuvre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre
          <input
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </label>
        <label>
          Auteur
          <input
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            required
          />
        </label>
        <label>
          Ville
          <input
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isEdit ? "Mettre à jour" : "Ajouter"}</button>
      </form>
    </main>
  );
}
