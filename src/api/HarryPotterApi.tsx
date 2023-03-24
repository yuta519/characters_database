import axios, { AxiosInstance } from "axios";
import { CharcterResoponse } from "../types/HarryPotterTyps";

import { GetApi } from "./ApiBase";

const client: AxiosInstance = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const FetchPokemons = async (): Promise<object> => {
  try {
    const response = await GetApi(client, "/characters");
    return response.map((charcter: CharcterResoponse) => {
      {
        id: charcter.id;
        name: charcter.name;
        alternateNames: charcter.alternate_names;
        species: charcter.species;
        gender: charcter.gender;
        house: charcter;
        dateOfBirth: charcter;
        yearOfBirth: charcter;
        isWizard: charcter;
        ancestry: charcter;
        eyeColour: charcter;
        hairColour: charcter;
        wand: charcter;
        patronus: charcter;
        isHogwartsStudent: charcter;
        isHogwartsStaff: charcter;
        actor: charcter;
        alternateActors: charcter;
        isAlive: charcter;
        image: charcter;
      }
    });
  } catch (error) {
    throw error;
  }
};
