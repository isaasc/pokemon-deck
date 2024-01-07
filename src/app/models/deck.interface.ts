import { TcgCard } from './tcg-card.interface';

export interface Deck {
  id?: string;
  cards: TcgCard[];
  name: string;
}
