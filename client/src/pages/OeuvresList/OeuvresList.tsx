import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./OeuvresList.css";

type Oeuvre = {
  id: number;
  titre: string;
  auteur: string;
  ville: string;
};

export default function OeuvresList() {
  const [oeuvres, setOeuvres] = useState<Oeuvre[]>([]);

  useEffect(() => {
    api.get("/oeuvres").then((res) => {
      setOeuvres(res.data);
    });
  }, []);

  return (
    <main className="oeuvres-list">
      <h1>Liste des œuvres</h1>
      <Link to="/oeuvres/new">Ajouter une œuvre</Link>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {oeuvres.map((oeuvre) => (
            <tr key={oeuvre.id}>
              <td>{oeuvre.titre}</td>
              <td>{oeuvre.auteur}</td>
              <td>{oeuvre.ville}</td>
              <td>
                <Link to={`/oeuvres/${oeuvre.id}`}>
                  <button type="button">Modifier / Supprimer</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
