import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeckCardComponent } from 'src/app/components/deck-card/deck-card.component';
import { Deck } from 'src/app/models/deck.interface';
import { DeckService } from './../../services/deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DeckCardComponent, RouterLink, CommonModule],
})
export class DeckListComponent implements OnInit {
  decks!: Deck[];

  constructor(private deckService: DeckService) {
    this.decks = this.deckService.getDecks();
  }

  ngOnInit(): void {
    this.deckService.getDeckListSubject().subscribe(() => (this.decks = this.deckService.getDecks()));
  }
}
