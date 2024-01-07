import { CommonModule } from '@angular/common';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxCardModule, IgxIconModule, IgxRippleModule } from 'igniteui-angular';
import { Deck } from 'src/app/models/deck.interface';
import { DeckStorageService } from 'src/app/services/deck-storage.service';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [CommonModule, IgxIconModule, IgxCardModule, IgxRippleModule, RouterLink],
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckCardComponent {
  @Input() deck!: Deck;

  constructor(private deckService: DeckStorageService) {}

  removeDeck(): void {
    this.deckService.deleteDeck(this.deck.id!);
  }
}
