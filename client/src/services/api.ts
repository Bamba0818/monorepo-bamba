// client/src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3310/api", // Assure-toi que ton backend écoute bien sur ce port
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Mets à true si tu utilises des cookies pour l'authentification
});

export default api;
