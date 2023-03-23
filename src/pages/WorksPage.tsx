import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";

import { FetchPokemons } from "../api/PokemonApi";

const Works = () => {
  const [state, update] = useState({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      update(await FetchPokemons());
    })();
  }, []);

  return (
    <>
      <h1>Quizes</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=8</Grid>
          <Grid xs={3}>xs=8</Grid>
          <Grid xs={3}>xs=8</Grid>
        </Grid>
      </Box>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

const StyledBox = styled(Box)`
  margin: 100px;
`;

export default Works;
