import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckDetailsService {
  private deckCards: PokemonCard[] = [];
  private deckCardsSubject = new Subject<PokemonCard[]>();

  constructor() {}

  getDeckCardsObservable(): Observable<PokemonCard[]> {
    return this.deckCardsSubject.asObservable();
  }

  getDeckCards(): PokemonCard[] {
    return this.deckCards;
  }

  addCard(card: PokemonCard) {
    this.deckCards.push(card);
    this.emitDeckCards();
  }

  removeCard(id: string) {
    const index: number = this.deckCards.findIndex(card => card.id === id);

    if (index !== -1) {
      this.deckCards.splice(index, 1);
      this.emitDeckCards();
    }
  }

  private emitDeckCards() {
    this.deckCardsSubject.next([...this.deckCards]);
  }
}
