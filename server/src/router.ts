import express from "express";
import * as oeuvreActions from "./modules/oeuvre/oeuvreActions";

const router = express.Router();

router.get("/api/oeuvres", oeuvreActions.browse);
router.get("/api/oeuvres/:id", oeuvreActions.read);
router.post("/api/oeuvres", oeuvreActions.add);
router.put("/api/oeuvres/:id", oeuvreActions.edit);
router.delete("/api/oeuvres/:id", oeuvreActions.destroy);

export default router;
