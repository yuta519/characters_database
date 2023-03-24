import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

import { FetchPokemons } from "../api/PokemonApi";
import { FetchPokemonListResponse } from "../types/PokemonTypes";

const Pokemons = () => {
  const [state, update] = useState<FetchPokemonListResponse>({
    page: 1,
    limit: 90,
    count: 0,
    pokemons: [],
  });

  const handleChangePage = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    update(await FetchPokemons(Number(target.innerText)));
  };

  useEffect(() => {
    (async () => {
      update(await FetchPokemons());
    })();
  }, []);

  return (
    <>
      <StyledContainer>
        <h1>POKéMON</h1>
        <h2>{state.count}</h2>
      </StyledContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 12 }}>
          {state.pokemons.map((pokemonInfo) => {
            return (
              <Grid key={pokemonInfo.id} xs={1} sm={1} md={2}>
                <Card sx={{ minWidth: 275 }}>
                  <CardActionArea>
                    <Link
                      href={`/works/pokemon/${pokemonInfo.id}`}
                      color="inherit"
                      underline="none"
                    >
                      <CardContent>
                        <CardMedia
                          sx={{ height: 300 }}
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`}
                          title={pokemonInfo.name}
                        />
                        <Typography variant="h5" component="div">
                          {pokemonInfo.name}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small">SHARE</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <StyledPagination
        count={Math.ceil(state.count / state.limit)}
        defaultPage={state.page}
        onClick={(event) => handleChangePage(event)}
      />
    </>
  );
};

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledPagination = styled(Pagination)`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

export default Pokemons;
