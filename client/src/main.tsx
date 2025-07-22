import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/styles/global.css";

import App from "./App";
import Home from "./pages/Home/Home";
import OeuvreDetail from "./pages/OeuvreDetail/OeuvreDetail";
import OeuvreForm from "./pages/OeuvreForm/OeuvreForm";
import OeuvresList from "./pages/OeuvresList/OeuvresList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "oeuvres", element: <OeuvresList /> },
      { path: "oeuvres/new", element: <OeuvreForm /> },
      { path: "oeuvres/:id", element: <OeuvreDetail /> },
      { path: "oeuvres/:id/edit", element: <OeuvreForm /> },
      { path: "*", element: <div>Page non trouvée</div> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Votre HTML doit contenir <div id='root'></div>");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
