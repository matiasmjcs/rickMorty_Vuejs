import { ICharacter } from "../models/ICharacter";
import axios from "axios";
export const GetCharacters = async ():Promise <ICharacter[]> => {
    const response = await axios.get("https://rickandmortyapi.com/api/character/");
    return response.data.results;
}