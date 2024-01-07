import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { DeckCardsInformationComponent } from 'src/app/components/deck-cards-information/deck-cards-information.component';
import { Deck } from 'src/app/models/deck.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  standalone: true,
  imports: [DeckCardsInformationComponent, NgIf, CardListComponent],
})
export class DeckDetailsComponent implements OnInit, OnDestroy {
  subscription = new Subject();
  deckId!: string;
  deck!: Deck;

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.subscription))
      .subscribe(param => (this.deckId = param.get('id') as string));
    this.deck = this.deckService.getDeckById(this.deckId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
