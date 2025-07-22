import express from "express";
const router = express.Router();

// 🧩 Import des routes œuvre
import oeuvreActions from "./modules/oeuvre/oeuvreActions";

router.get("/api/oeuvres", oeuvreActions.browse);
router.get("/api/oeuvres/:id", oeuvreActions.read);
router.post("/api/oeuvres", oeuvreActions.add);
router.put("/api/oeuvres/:id", oeuvreActions.edit);
router.delete("/api/oeuvres/:id", oeuvreActions.destroy);

export default router;
