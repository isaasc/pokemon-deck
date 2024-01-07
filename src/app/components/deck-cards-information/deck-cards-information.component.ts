import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-cards-information',
  standalone: true,
  imports: [],
  templateUrl: './deck-cards-information.component.html',
  styleUrls: ['./deck-cards-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckCardsInformationComponent implements OnChanges {
  @Input() cards?: PokemonCard[];
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfColors: number = 0;

  constructor(private deckService: DeckService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateDetailsDeckCard();
  }

  calculateDetailsDeckCard(): void {
    if (!this.cards) {
      return;
    }
    this.numberOfPokemons = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.POKEMON);
    this.numberOfTrainers = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.TRAINER);
    this.numberOfEnergies = this.deckService.cardNumberOfSupertype(this.cards, Supertypes.ENERGY);
    this.numberOfColors = this.deckService.countUniqueTypes(this.cards);
  }
}
