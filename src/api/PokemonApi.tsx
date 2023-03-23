import axios, { AxiosInstance } from "axios";
import { FetchPokemonListResponse, Pokemon } from "../types/PokemonTypes";

import { GetApi } from "./ApiBase";

const client: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const FetchPokemons = async (
  page: number = 1,
  limit: number = 100
): Promise<FetchPokemonListResponse> => {
  try {
    const offset = (page - 1) * 100;
    const path = offset
      ? `pokemon?offset=${offset}&limit=${limit}`
      : `pokemon?limit=${limit}`;
    const response = await GetApi(client, path);
    return {
      page,
      count: response.count,
      pokemons: response.results.map((pokemon: any) => {
        return {
          id: pokemon.url.split("/")[6],
          name: pokemon.name,
          url: pokemon.url,
        };
      }),
    };
  } catch (error) {
    throw error;
  }
};

export const FetchPokemonById = async (id: string): Promise<Pokemon> => {
  if (!id) throw "Arg `id` is not setted.";

  try {
    const response: any = await GetApi(client, `pokemon/${id}`);
    const pokemon = {
      id: response.id,
      name: response.name,
      baseExperience: response.base_experience,
      height: response.height,
      weight: response.weight,
      pokemonStat: {
        hp: response.stats.find((item: any) => item.stat.name === "hp")
          .base_stat,
        attack: response.stats.find((item: any) => item.stat.name === "attack")
          .base_stat,
        defense: response.stats.find(
          (item: any) => item.stat.name === "defense"
        ).base_stat,
        specialAttack: response.stats.find(
          (item: any) => item.stat.name === "special-attack"
        ).base_stat,
        specialDefens: response.stats.find(
          (item: any) => item.stat.name === "special-defense"
        ).base_stat,
        speed: response.stats.find((item: any) => item.stat.name === "speed")
          .base_stat,
      },
      types: response.types.map((item: any) => item.type.name),
      moves: response.moves.map((item: any) => item.move.name),
    };
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    throw error;
  }
};
