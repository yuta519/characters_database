import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

const Works = () => {
  return (
    <>
      <h1>Quizes</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardActionArea>
                <Link href="/works/pokemon/" color="inherit" underline="none">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      pokemon
                    </Typography>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                    />
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
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
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </>
  );
};

export default Works;
