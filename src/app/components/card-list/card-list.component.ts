import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Deck } from 'src/app/models/deck.interface';
import { TcgCard } from 'src/app/models/tcg-card.interface';
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
  @Input() cards?: TcgCard[];
  @Input() decks?: Deck[];
  @Input() isMiniCard: boolean = false;

  constructor(private deckDetailsService: DeckBuilderDetailsService) {}

  addCardOnDeck(card: TcgCard): void {
    this.deckDetailsService.addCardOnDeckBuilder(card);
  }

  removeCardOnDeck(card: TcgCard): void {
    this.deckDetailsService.removeCardOfDeckBuilder(card.id);
  }

  trackByItems(index: number, tcgCard: TcgCard): string {
    return tcgCard.id;
  }
}
