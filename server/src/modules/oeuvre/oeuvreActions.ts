import type { RequestHandler } from "express";
import oeuvreRepository from "./oeuvreRepository";

export const browse: RequestHandler = async (req, res, next) => {
  try {
    const oeuvres = await oeuvreRepository.findAll();
    res.json(oeuvres);
  } catch (err) {
    next(err);
  }
};

export const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const oeuvre = await oeuvreRepository.findById(id);
    if (!oeuvre) return res.sendStatus(404);
    res.json(oeuvre);
  } catch (err) {
    next(err);
  }
};

export const add: RequestHandler = async (req, res, next) => {
  try {
    const { titre, description, ville } = req.body;
    const insertId = await oeuvreRepository.create(titre, description, ville);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { titre, description, ville } = req.body;
    const affectedRows = await oeuvreRepository.update(
      id,
      titre,
      description,
      ville,
    );
    if (affectedRows === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const affectedRows = await oeuvreRepository.delete(id);
    if (affectedRows === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
