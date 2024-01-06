import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';
import { IgxCardModule, IgxIconModule, IgxRippleModule } from 'igniteui-angular';
import { Deck } from 'src/app/models/deck.interface';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [CommonModule, IgxIconModule, IgxCardModule, IgxRippleModule],
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.scss'],
})
export class DeckCardComponent {
  @Input() deck!: Deck;
}
