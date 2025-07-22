import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./OeuvreForm.css";

export default function OeuvreForm() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [ville, setVille] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/oeuvres", { titre, auteur, ville }).then(() => {
      navigate("/oeuvres");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre
        <input value={titre} onChange={(e) => setTitre(e.target.value)} />
      </label>
      <label>
        Auteur
        <textarea value={auteur} onChange={(e) => setAuteur(e.target.value)} />
      </label>
      <label>
        Ville
        <input value={ville} onChange={(e) => setVille(e.target.value)} />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
}
