import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Deck } from 'src/app/models/deck.interface';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-information',
  standalone: true,
  imports: [],
  templateUrl: './deck-information.component.html',
  styleUrls: ['./deck-information.component.scss'],
})
export class DeckInformationComponent implements OnInit, OnDestroy {
  @Input() deck!: Deck;
  @Input() deckCards$!: Observable<PokemonCard[]>;
  subscription = new Subject();
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfColors: number = 0;

  constructor(private deckService: DeckService) {}

  ngOnInit(): void {
    this.deckCards$.pipe(takeUntil(this.subscription)).subscribe(cards => {
      if (cards.length === 0) {
        return;
      }
      this.numberOfPokemons = this.deckService.cardNumberOfSupertype(cards, Supertypes.POKEMON);
      this.numberOfTrainers = this.deckService.cardNumberOfSupertype(cards, Supertypes.TRAINER);
      this.numberOfEnergies = this.deckService.cardNumberOfSupertype(cards, Supertypes.ENERGY);
    });

    if (this.deck) {
      this.numberOfPokemons = this.deckService.cardNumberOfSupertype(this.deck.cards, Supertypes.POKEMON);
      this.numberOfTrainers = this.deckService.cardNumberOfSupertype(this.deck.cards, Supertypes.TRAINER);
      this.numberOfEnergies = this.deckService.cardNumberOfSupertype(this.deck.cards, Supertypes.ENERGY);
    }
  }

  ngOnDestroy(): void {
    this.subscription.complete();
  }
}
