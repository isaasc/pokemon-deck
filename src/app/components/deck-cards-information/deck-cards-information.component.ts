import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { TcgCard } from 'src/app/models/tcg-card.interface';

@Component({
  selector: 'app-deck-cards-information',
  standalone: true,
  imports: [],
  templateUrl: './deck-cards-information.component.html',
  styleUrls: ['./deck-cards-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckCardsInformationComponent implements OnChanges {
  @Input() cards?: TcgCard[];
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfPokemonColors: number = 0;

  constructor() {}

  ngOnChanges(): void {
    this.calculateDetailsDeckCard();
  }

  calculateDetailsDeckCard(): void {
    if (!this.cards) {
      return;
    }
    this.numberOfPokemons = this.cardNumberOfSupertype(this.cards, Supertypes.POKEMON);
    this.numberOfTrainers = this.cardNumberOfSupertype(this.cards, Supertypes.TRAINER);
    this.numberOfEnergies = this.cardNumberOfSupertype(this.cards, Supertypes.ENERGY);
    this.numberOfPokemonColors = this.countUniqueTypes(this.cards);
  }

  cardNumberOfSupertype(cards: TcgCard[], supertype: Supertypes): number {
    return cards.filter(card => card.supertype === supertype).length;
  }

  countUniqueTypes(cards: TcgCard[]): number {
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
}
