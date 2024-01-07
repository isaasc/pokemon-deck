import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckBuilderDetailsService {
  private deckBuilderCards: PokemonCard[] = [];
  private deckBuilderCardsObservable = new Subject<PokemonCard[]>();
  private deckBuilderInvalidObservable = new BehaviorSubject<boolean>(true);

  constructor() {}

  getDeckBuilderCardsObservable(): Observable<PokemonCard[]> {
    return this.deckBuilderCardsObservable.asObservable();
  }

  setDeckBuilderCards(cards: PokemonCard[]): void {
    this.deckBuilderCards = cards;
    this.emitDeckBuilderCardsChange();
  }

  getDeckBuilderCards(): PokemonCard[] {
    return this.deckBuilderCards;
  }

  addCardOnDeckBuilder(card: PokemonCard): void {
    if (this.hasMoreThanFourCardsWithSameName(this.getDeckBuilderCards(), card.name)) {
      alert('Seu Deck já possui outras 4 cartas com esse mesmo nome');
      return;
    }

    this.deckBuilderCards.push(card);
    this.emitDeckBuilderCardsChange();
    this.emitDeckBuilderContainsNumberOfValidCards();
  }

  removeCardOfDeckBuilder(id: string): void {
    const index: number = this.deckBuilderCards.findIndex(card => card.id === id);

    if (index !== -1) {
      this.deckBuilderCards.splice(index, 1);
      this.emitDeckBuilderCardsChange();
      this.emitDeckBuilderContainsNumberOfValidCards();
    }
  }

  clearCardOfDeckBuilder(): void {
    this.deckBuilderCards = [];
  }

  isDeckBuilderInvalid(): Observable<boolean> {
    return this.deckBuilderInvalidObservable.asObservable();
  }

  private emitDeckBuilderCardsChange(): void {
    this.deckBuilderCardsObservable.next([...this.deckBuilderCards]);
  }

  private emitDeckBuilderContainsNumberOfValidCards(): void {
    const minCards: number = 24;
    const maxCards: number = 60;
    this.deckBuilderInvalidObservable.next(
      this.getDeckBuilderCards().length > maxCards || this.getDeckBuilderCards().length < minCards
    );
  }

  private hasMoreThanFourCardsWithSameName(cards: PokemonCard[], targetName: string): boolean {
    const cardsWithSameName = cards.filter(card => card.name === targetName);

    return cardsWithSameName.length >= 4;
  }
}
