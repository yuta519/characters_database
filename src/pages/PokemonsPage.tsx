import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { FetchPokemons } from "../api/PokemonApi";
import { FetchPokemonListResponse } from "../types/PokemonTypes";

const Pokemons = () => {
  const [state, update] = useState<FetchPokemonListResponse>({
    count: 0,
    pokemons: [],
  });

  console.log(state);

  useEffect(() => {
    (async () => {
      update(await FetchPokemons());
    })();
  }, []);

  return (
    <>
      <h1>POKéMON</h1>
      <h2>{state.count}</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {state.pokemons.map((pokemonInfo) => {
            return (
              <Grid key={pokemonInfo.id} xs={3}>
                <Card sx={{ minWidth: 275 }}>
                  <CardActionArea>
                    <Link
                      href={pokemonInfo.id}
                      color="inherit"
                      underline="none"
                    >
                      <CardContent>
                        <CardMedia
                          sx={{ height: 200 }}
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
    </>
  );
};

export default Pokemons;
