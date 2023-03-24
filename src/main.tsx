import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "@emotion/styled";

import App from "./App";
import Header from "./components/Header";
import Pokemons from "./pages/PokemonsPage";
import Quiz from "./pages/QuizPage";
import Works from "./pages/WorksPage";
import PokemonDetail from "./pages/PokemonPage";

const router = createBrowserRouter([
  { path: "/", element: <Works /> },
  { path: "/latest", element: <App /> },
  { path: "/works", element: <Works /> },
  { path: "/works/pokemon", element: <Pokemons /> },
  { path: "/works/pokemon/:id", element: <PokemonDetail /> },
]);

const StyledContainer = styled.div`
  margin-top: 100px;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Header />
    <StyledContainer>
      <CssBaseline />
      <RouterProvider router={router} />
    </StyledContainer>
  </>
);
