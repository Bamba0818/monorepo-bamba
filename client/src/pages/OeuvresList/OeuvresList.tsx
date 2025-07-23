import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import "./OeuvresList.css";

type Oeuvre = {
  id: number;
  titre: string;
  description: string;
  ville: string;
};

export default function OeuvresList() {
  const [oeuvres, setOeuvres] = useState<Oeuvre[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/oeuvres").then((res) => {
      setOeuvres(res.data);
    });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/oeuvres/${id}`);
      setOeuvres((prev) => prev.filter((o) => o.id !== id));
    } catch (err) {
      console.error("Erreur lors de la suppression", err);
    }
  };

  return (
    <main className="oeuvres-list">
      <h1>Liste des œuvres</h1>
      <button type="button" onClick={() => navigate("/oeuvres/new")}>
        Ajouter une œuvre
      </button>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {oeuvres.map((oeuvre) => (
            <tr key={oeuvre.id}>
              <td>{oeuvre.titre}</td>
              <td>{oeuvre.description}</td>
              <td>{oeuvre.ville}</td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate(`/oeuvres/${oeuvre.id}`)}
                >
                  Modifier
                </button>
                <button type="button" onClick={() => handleDelete(oeuvre.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
