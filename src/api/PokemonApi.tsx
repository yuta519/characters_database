import axios, { AxiosInstance } from "axios";
import { FetchPokemonListResponse } from "../types/PokemonTypes";

import { GetApi } from "./ApiBase";

const client: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const FetchPokemons = async (
  path: string = "pokemon?limit=100"
): Promise<FetchPokemonListResponse> => {
  try {
    const response = await GetApi(client, path);
    console.log(response);
    return {
      count: response.count,
      pokemons: response.results.map((pokemon: any) => {
        return {
          id: Number(pokemon.url.split("/")[6]),
          name: pokemon.name,
          url: pokemon.url,
        };
      }),
    };
  } catch (error) {
    throw error;
  }
};
