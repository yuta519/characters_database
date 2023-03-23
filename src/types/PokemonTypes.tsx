interface PokemonInfo {
  id: number;
  name: string;
  url: string;
}

export interface FetchPokemonListResponse {
  count: number;
  pokemons: PokemonInfo[];
}
