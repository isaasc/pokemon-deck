import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Deck } from 'src/app/models/deck.interface';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckBuilderDetailsService } from '../../services/deck-builder-details.service';
import { CardComponent } from '../card/card.component';
import { DeckCardComponent } from '../deck-card/deck-card.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, AsyncPipe, MiniCardComponent, CardComponent, DeckCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() allCards$?: Observable<PokemonCard[]>;
  @Input() isMiniCard: boolean = false;
  @Input() deckCards?: PokemonCard[];
  @Input() decks?: Deck[];

  constructor(private deckDetailsService: DeckBuilderDetailsService) {}

  addCardOnDeck(card: PokemonCard) {
    this.deckDetailsService.addCardOnDeckBuilder(card);
  }

  removeCardOnDeck(card: PokemonCard) {
    this.deckDetailsService.removeCardOfDeckBuilder(card.id);
  }

  trackByItems(index: number, pokemonCard: PokemonCard): string {
    return pokemonCard.id;
  }
}
