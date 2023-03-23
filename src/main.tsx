import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import Pokemons from "./pages/PokemonsPage";
import Quiz from "./pages/QuizPage";
import Works from "./pages/WorksPage";
import PokemonDetail from "./pages/PokemonPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/latest", element: <App /> },
  { path: "/works", element: <Works /> },
  { path: "/works/pokemon", element: <Pokemons /> },
  { path: "/works/pokemon/:id", element: <PokemonDetail /> },
  { path: "/quiz", element: <Quiz /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);
