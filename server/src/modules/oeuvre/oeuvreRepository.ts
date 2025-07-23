import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class OeuvreRepository {
  async findAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM oeuvre WHERE is_deleted = FALSE",
    );
    return rows;
  }

  async findById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM oeuvre WHERE id = ? AND is_deleted = FALSE",
      [id],
    );
    return rows[0];
  }

  async create(titre: string, description: string, ville: string) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO oeuvre (titre, description, ville) VALUES (?, ?, ?)",
      [titre, description, ville],
    );
    return result.insertId;
  }

  async update(id: number, titre: string, description: string, ville: string) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE oeuvre SET titre = ?, description = ?, ville = ? WHERE id = ? AND is_deleted = FALSE",
      [titre, description, ville, id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE oeuvre SET is_deleted = TRUE WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new OeuvreRepository();
