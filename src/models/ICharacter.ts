type location = {
    name: string;
    url: string;
};

type origin = {
  name: string;
  url: string;
};

export interface ICharacter {
  created: string;
  episode: string[];
  gender: "Male" | "Female" | "Genderless" | "unknown";
  id: number;
  image: string;
  location: location;
  name: string;
  origin: origin;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string | null;
  url: string;
}
