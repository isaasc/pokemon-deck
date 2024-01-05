import { PokemonCard } from './pokemon-card.interface';

export interface Deck {
  name: string;
  cards: PokemonCard[];
  id: number;
}
