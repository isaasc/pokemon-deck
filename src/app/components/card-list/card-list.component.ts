import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckDetailsService } from '../deck-details/deck-details.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() allCards$!: Observable<PokemonCard[]>;
  @Input() isMiniCard: boolean = false;

  constructor(private deckDetailsService: DeckDetailsService) {}

  addCardOnDeck(card: PokemonCard) {
    this.deckDetailsService.addCard(card);
  }

  removeCardOnDeck(card: PokemonCard) {
    this.deckDetailsService.removeCard(card.id);
  }
}
