import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import Pokemons from "./pages/PokemonsPage";
import Quiz from "./pages/QuizPage";
import Works from "./pages/WorksPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/latest", element: <App /> },
  { path: "/works", element: <Works /> },
  { path: "/works/pokemon", element: <Pokemons /> },
  { path: "/quiz", element: <Quiz /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);
