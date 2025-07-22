import express from "express";
const app = express();

/* ************************************************************************* */
/* ------------------------------- CORS ----------------------------------- */
import cors from "cors";

if (process.env.CLIENT_URL != null) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

/* ************************************************************************* */
/* ------------------------- Body Parsing JSON ---------------------------- */
// ✅ Ce middleware est indispensable pour accéder à req.body :
app.use(express.json());

/* ************************************************************************* */
/* ------------------------ Importation des routes ------------------------ */
import router from "./router";
app.use(router);

/* ************************************************************************* */
/* ----------------------- Production (client + static) ------------------- */
import fs from "node:fs";
import path from "node:path";

// Ressources côté serveur
const publicFolderPath = path.join(__dirname, "../../server/public");
if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

// Ressources côté client
const clientBuildPath = path.join(__dirname, "../../client/dist");
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  // Redirection vers index.html pour le routing côté client
  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

/* ************************************************************************* */
/* ---------------------- Middleware de gestion d'erreurs ----------------- */
import type { ErrorRequestHandler } from "express";

const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);
  next(err);
};

app.use(logErrors);

/* ************************************************************************* */

export default app;
