export interface ResponsePokemonCard {
  data: PokemonCard[];
}

export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  types?: string[];
  images: ImageSizes;
}

interface ImageSizes {
  small: string;
  large: string;
}
