import type { RequestHandler } from "express";
import oeuvreRepository from "./oeuvreRepository";

// GET /api/oeuvres
export const browse: RequestHandler = async (req, res, next) => {
  try {
    const oeuvres = await oeuvreRepository.findAll();
    res.json(oeuvres);
  } catch (err) {
    next(err);
  }
};

// GET /api/oeuvres/:id
export const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const oeuvre = await oeuvreRepository.findById(id);
    if (!oeuvre) {
      res.sendStatus(404);
      return;
    }
    res.json(oeuvre);
  } catch (err) {
    next(err);
  }
};

// POST /api/oeuvres
export const add: RequestHandler = async (req, res, next) => {
  try {
    const { titre, auteur, ville } = req.body;
    const insertId = await oeuvreRepository.create(titre, auteur, ville);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// PUT /api/oeuvres/:id
export const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { titre, auteur, ville } = req.body;
    const affectedRows = await oeuvreRepository.update(
      id,
      titre,
      auteur,
      ville,
    );
    if (affectedRows === 0) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204); // Pas de contenu mais succès
  } catch (err) {
    next(err);
  }
};

// DELETE /api/oeuvres/:id (suppression logique)
export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const affectedRows = await oeuvreRepository.delete(id);
    if (affectedRows === 0) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
