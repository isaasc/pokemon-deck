import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckDetailsService } from '../../pages/deck-details/deck-details.service';
import { CardComponent } from '../card/card.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, MiniCardComponent, CardComponent, AsyncPipe],
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

  trackByItems(index: number, pokemonCard: PokemonCard): string {
    return pokemonCard.id;
  }
}
