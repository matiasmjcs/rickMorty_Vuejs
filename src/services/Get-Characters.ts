import { ApiAdapter } from "../adapters/api-adapter";
import { ICharacter } from "../models/ICharacter";
import axios from "axios";
export const GetCharacters = async ():Promise <ICharacter[]> => {
    const response = await axios.get("https://rickandmortyapi.com/api/character/");
    const data = response.data.results;
    const apiAdapterInstance = new ApiAdapter();
    return apiAdapterInstance.getCharacter(data);
}