import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { DeckCardComponent } from 'src/app/components/deck-card/deck-card.component';
import { Deck } from 'src/app/models/deck.interface';
import { DeckStorageService } from '../../services/deck-storage.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DeckCardComponent, RouterLink, CommonModule, CardListComponent],
})
export class DeckListComponent implements OnInit, OnDestroy {
  decks!: Deck[];
  subscription = new Subject();

  constructor(private deckService: DeckStorageService) {
    this.decks = this.deckService.getDecks();
  }

  ngOnInit(): void {
    this.deckService
      .getDeckListSubject()
      .pipe(takeUntil(this.subscription))
      .subscribe(() => (this.decks = this.deckService.getDecks()));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
