import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxCardModule, IgxIconModule, IgxRippleModule } from 'igniteui-angular';
import { Deck } from 'src/app/models/deck.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [CommonModule, IgxIconModule, IgxCardModule, IgxRippleModule, RouterLink],
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.scss'],
})
export class DeckCardComponent {
  @Input() deck!: Deck;

  constructor(private deckService: DeckService) {}

  removeDeck(): void {
    this.deckService.deleteDeck(this.deck.id!);
  }

  showDetails(): void {}
}
