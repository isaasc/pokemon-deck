import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TcgCard } from 'src/app/models/tcg-card.interface';

@Injectable({
  providedIn: 'root',
})
export class DeckBuilderDetailsService {
  private deckBuilderCards: TcgCard[] = [];
  private deckBuilderCardsObservable = new Subject<TcgCard[]>();
  private deckBuilderInvalidObservable = new BehaviorSubject<boolean>(true);

  constructor() {}

  getDeckBuilderCardsObservable(): Observable<TcgCard[]> {
    return this.deckBuilderCardsObservable.asObservable();
  }

  getDeckBuilderCards(): TcgCard[] {
    return this.deckBuilderCards;
  }

  addCardOnDeckBuilder(card: TcgCard): void {
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

  setDeckBuilderCards(cards: TcgCard[]): void {
    this.deckBuilderCards = cards;
    this.emitDeckBuilderCardsChange();
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

  private hasMoreThanFourCardsWithSameName(cards: TcgCard[], targetName: string): boolean {
    const cardsWithSameName = cards.filter(card => card.name === targetName);

    return cardsWithSameName.length >= 4;
  }
}
