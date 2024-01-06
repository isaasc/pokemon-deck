import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckDetailsService {
  private deckCards: PokemonCard[] = [];
  private deckCardsSubject = new Subject<PokemonCard[]>();
  private deckInvalidSubject = new BehaviorSubject<boolean>(true);

  constructor() {}

  getDeckCardsObservable(): Observable<PokemonCard[]> {
    return this.deckCardsSubject.asObservable();
  }

  getDeckCards(): PokemonCard[] {
    return this.deckCards;
  }

  isDeckInvalid(): Observable<boolean> {
    return this.deckInvalidSubject.asObservable();
  }

  private emitDeckContainsNumberOfValidCards(): void {
    const minCards: number = 24;
    const maxCards: number = 60;
    console.log(this.getDeckCards().length > maxCards || this.getDeckCards().length < minCards);
    this.deckInvalidSubject.next(this.getDeckCards().length > maxCards || this.getDeckCards().length < minCards);
  }

  addCard(card: PokemonCard): void {
    this.deckCards.push(card);
    this.emitDeckCards();
    this.emitDeckContainsNumberOfValidCards();
  }

  removeCard(id: string): void {
    const index: number = this.deckCards.findIndex(card => card.id === id);

    if (index !== -1) {
      this.deckCards.splice(index, 1);
      this.emitDeckCards();
      this.emitDeckContainsNumberOfValidCards();
    }
  }

  private emitDeckCards(): void {
    this.deckCardsSubject.next([...this.deckCards]);
  }
}
