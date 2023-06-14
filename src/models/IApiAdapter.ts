import { ICharacter } from "./ICharacter";

export interface IApiAdapter {
  getCharacter(characters: ICharacter[]): ICharacter[];
}