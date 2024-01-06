import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '../models/deck.interface';
import { Supertypes } from '../models/enums/supertype.enum';
import { PokemonCard } from '../models/pokemon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private storage!: Storage;
  private key = 'card';

  constructor() {
    this.storage = window.localStorage;
  }

  getDecks(): Deck[] {
    const storedDecks = this.storage.getItem(this.key);
    console.log(storedDecks ? (JSON.parse(storedDecks) as Deck[]) : [], 'teste');
    return storedDecks ? (JSON.parse(storedDecks) as Deck[]) : [];
  }

  updateDeck(card: Deck): void {
    const storedDecks: Deck[] = this.getDecks();
    let newDeckId: string;
    do {
      newDeckId = uuidv4();
    } while (!this.isDeckIdUnique(newDeckId, storedDecks));
    card.id = newDeckId;

    storedDecks.push(card);

    this.storage.setItem(this.key, JSON.stringify(storedDecks));
  }

  deleteDeck(id: number): void {
    this.storage.removeItem(id.toString());
  }

  cardNumberOfSupertype(cards: PokemonCard[], supertype: Supertypes) {
    return cards.filter(card => card.supertype === supertype).length;
  }

  isDeckIdUnique(newDeckId: string, existingDecks: Deck[]): boolean {
    return !existingDecks.some(deck => deck.id === newDeckId);
  }
}
