import { IApiAdapter } from "../models/IApiAdapter";
import { ICharacter } from "../models/ICharacter";

export class ApiAdapter implements IApiAdapter{

    getCharacter(characters:ICharacter[]): ICharacter[] {
        return characters.map((c: ICharacter) => ({
          created: c.created,
          episode: c.episode,
          gender: c.gender,
          id: c.id,
          image: c.image,
          location: c.location,
          name: c.name,
          origin: c.origin,
          species: c.species,
          status: c.status,
          type: c.type,
          url: c.url,
        }));
    }    
}