import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class OeuvreRepository {
  async findAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM oeuvre");
    return rows;
  }

  async findById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM oeuvre WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async create(titre: string, auteur: string, ville: string) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO oeuvre (titre, auteur, ville) VALUES (?, ?, ?)",
      [titre, auteur, ville],
    );
    return result.insertId;
  }

  async update(id: number, titre: string, auteur: string, ville: string) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE oeuvre SET titre = ?, auteur = ?, ville = ? WHERE id = ?",
      [titre, auteur, ville, id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM oeuvre WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new OeuvreRepository();
