import type { RequestHandler } from "express";
import oeuvreRepository from "./oeuvreRepository";

// GET /api/oeuvres
const browse: RequestHandler = async (req, res, next) => {
  try {
    const oeuvres = await oeuvreRepository.findAll();
    res.json(oeuvres);
  } catch (err) {
    next(err);
  }
};

// GET /api/oeuvres/:id
const read: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oeuvre = await oeuvreRepository.findById(Number(id));
    if (!oeuvre) {
      res.sendStatus(404);
    } else {
      res.json(oeuvre);
    }
  } catch (err) {
    next(err);
  }
};

// POST /api/oeuvres
const add: RequestHandler = async (req, res, next) => {
  try {
    const { titre, auteur, ville } = req.body;
    const insertId = await oeuvreRepository.create(titre, auteur, ville);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// PUT /api/oeuvres/:id
const edit: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titre, auteur, ville } = req.body;
    const affectedRows = await oeuvreRepository.update(
      Number(id),
      titre,
      auteur,
      ville,
    );
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.json({ message: "Oeuvre mise à jour" });
    }
  } catch (err) {
    next(err);
  }
};

// DELETE /api/oeuvres/:id
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const affectedRows = await oeuvreRepository.delete(Number(id));
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "Oeuvre supprimée" });
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
