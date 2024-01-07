import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-cards-information',
  standalone: true,
  imports: [],
  templateUrl: './deck-cards-information.component.html',
  styleUrls: ['./deck-cards-information.component.scss'],
})
export class DeckCardsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() cards?: PokemonCard[];
  @Input() deckCards$?: Observable<PokemonCard[]>;
  subscription = new Subject();
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfColors: number = 0;

  constructor(private deckService: DeckService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes deck card', changes);
  }

  ngOnInit(): void {
    if (this.deckCards$) {
      this.deckCards$.pipe(takeUntil(this.subscription)).subscribe(cards => {
        if (cards.length === 0) {
          return;
        }
        this.numberOfPokemons = this.deckService.cardNumberOfSupertype(cards, Supertypes.POKEMON);
        this.numberOfTrainers = this.deckService.cardNumberOfSupertype(cards, Supertypes.TRAINER);
        this.numberOfEnergies = this.deckService.cardNumberOfSupertype(cards, Supertypes.ENERGY);
      });
    }

    if (this.cards) {
      this.numberOfPokemons = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.POKEMON);
      this.numberOfTrainers = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.TRAINER);
      this.numberOfEnergies = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.ENERGY);
      this.numberOfColors = this.deckService.countUniqueTypes(this.cards);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
