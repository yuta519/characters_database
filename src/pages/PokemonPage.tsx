import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { FetchPokemonById } from "../api/PokemonApi";
import { Pokemon } from "../types/PokemonTypes";

const PokemonDetail = () => {
  const params = useParams();
  const [pokemon, update] = useState<Pokemon>({
    id: "",
    name: "",
    baseExperience: 0,
    height: 0,
    weight: 0,
    pokemonStat: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefens: 0,
      speed: 0,
    },
  });

  useEffect(() => {
    (async () => {
      if (params.id) update(await FetchPokemonById(params.id));
    })();
  }, []);
  return (
    <>
      <h1>{pokemon.name}</h1>
      <Grid container spacing={2}>
        <Grid key={pokemon.id} xs={6}>
          {pokemon.id ? (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="300"
              height="300"
              alt={pokemon.name}
            />
          ) : null}
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 150 }}
              size="medium"
              aria-label="a dense table"
            ></Table>
          </TableContainer>
        </Grid>
        <Grid xs={6}>
          <RadarChart
            outerRadius={90}
            width={730}
            height={250}
            data={[
              {
                subject: "HP",
                pokemon: pokemon.pokemonStat.hp,
                fullMark: 200,
              },
              {
                subject: "Attack",
                pokemon: pokemon.pokemonStat.attack,
                fullMark: 200,
              },
              {
                subject: "Defense",
                pokemon: pokemon.pokemonStat.defense,
                fullMark: 200,
              },
              {
                subject: "Special Attack",
                pokemon: pokemon.pokemonStat.specialAttack,
                fullMark: 200,
              },
              {
                subject: "Special Defense",
                pokemon: pokemon.pokemonStat.specialDefens,
                fullMark: 200,
              },
              {
                subject: "Speed",
                pokemon: pokemon.pokemonStat.speed,
                fullMark: 200,
              },
            ]}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 200]} />
            <Radar
              name={pokemon.name}
              dataKey="pokemon"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          </RadarChart>
        </Grid>
        <Grid xs={6}>
          <TableBody>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell>{pokemon.height * 10} cm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight</TableCell>
              <TableCell>{pokemon.weight * 0.1} kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base Experience</TableCell>
              <TableCell>{pokemon.baseExperience}</TableCell>
            </TableRow>
          </TableBody>
        </Grid>
      </Grid>
    </>
  );
};

export default PokemonDetail;
