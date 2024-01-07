import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  private deckListSubject = new Subject<Deck[]>();

  constructor() {
    this.storage = window.localStorage;
  }

  getDeckListSubject(): Observable<Deck[]> {
    return this.deckListSubject.asObservable();
  }

  getDeckById(id: string): Deck {
    return this.getDecks().find(deck => deck.id === id)!;
  }

  getDecks(): Deck[] {
    const storedDecks = this.storage.getItem(this.key);
    return storedDecks ? (JSON.parse(storedDecks) as Deck[]) : [];
  }

  createDeck(card: Deck): void {
    const storedDecks: Deck[] = this.getDecks();
    let newDeckId: string;
    do {
      newDeckId = uuidv4();
    } while (!this.isDeckIdUnique(newDeckId, storedDecks));
    card.id = newDeckId;

    storedDecks.push(card);

    this.storage.setItem(this.key, JSON.stringify(storedDecks));
    this.emitDeckList(storedDecks);
  }

  updateDeckById(id: string, newDeck: Deck): void {
    const storedDecks: Deck[] = this.getDecks();

    const updateDecks = storedDecks.map(deck => (deck.id === id ? { ...deck, ...newDeck } : deck));

    this.storage.setItem(this.key, JSON.stringify(updateDecks));
    this.emitDeckList(storedDecks);
  }

  deleteDeck(idToRemove: string): void {
    const decks: Deck[] = this.getDecks().filter(decks => decks.id !== idToRemove);
    this.storage.setItem(this.key, JSON.stringify(decks));
    this.emitDeckList(decks);
  }

  cardNumberOfSupertype(cards: PokemonCard[], supertype: Supertypes) {
    return cards.filter(card => card.supertype === supertype).length;
  }

  countUniqueTypes(cards: PokemonCard[]): number {
    const uniqueTypes = new Set<string>();

    cards.forEach(card => {
      if (card.types && card.types.length > 0) {
        card.types.forEach(type => {
          uniqueTypes.add(type);
        });
      }
    });

    return uniqueTypes.size;
  }

  isDeckIdUnique(newDeckId: string, existingDecks: Deck[]): boolean {
    return !existingDecks.some(deck => deck.id === newDeckId);
  }

  private emitDeckList(decks: Deck[]): void {
    this.deckListSubject.next([...decks]);
  }
}
