import { PokemonCard } from './pokemon-card.interface';

export interface Deck {
  id?: string;
  cards: PokemonCard[];
  name: string;
}
