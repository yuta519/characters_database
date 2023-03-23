interface PokemonInfo {
  id: string;
  name: string;
  url: string;
}

export interface FetchPokemonListResponse {
  page: number;
  count: number;
  pokemons: PokemonInfo[];
}

export interface PokemonStat {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefens: number;
  speed: number;
}

export interface Pokemon {
  id: string;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  pokemonStat: PokemonStat;
  types: string[];
  moves: string[];
}
