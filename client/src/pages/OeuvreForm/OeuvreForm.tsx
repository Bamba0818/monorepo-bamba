import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";
import "./OeuvreForm.css";

export default function OeuvreForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [ville, setVille] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    api.get(`/oeuvres/${id}`).then((res) => {
      const { titre, description, ville } = res.data;
      setTitre(titre);
      setDescription(description);
      setVille(ville);
    });
  }, [id, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { titre, description, ville };

    try {
      if (isEdit) {
        await api.put(`/oeuvres/${id}`, payload);
      } else {
        await api.post("/oeuvres", payload);
      }
      navigate("/oeuvres");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
    }
  };

  return (
    <main className="oeuvre-form">
      <h1>{isEdit ? "Modifier" : "Ajouter"} une œuvre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={5}
          />
        </label>

        <label>
          Ville
          <input
            type="text"
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
