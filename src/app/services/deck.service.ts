import { Injectable } from '@angular/core';
import { PokemonCard } from '../models/pokemon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private storage!: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  getDecks(id: number): string {
    return JSON.parse(this.storage.getItem(id.toString()) as string);
  }

  updateDeck(id: number, card: PokemonCard): void {
    this.storage.setItem(id.toString(), JSON.stringify(card));
  }

  deleteDeck(id: number): void {
    this.storage.removeItem(id.toString());
  }
}
