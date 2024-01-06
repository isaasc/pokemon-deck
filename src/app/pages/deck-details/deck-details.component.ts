import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckInformationComponent } from 'src/app/components/deck-information/deck-information.component';
import { Deck } from 'src/app/models/deck.interface';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  standalone: true,
  imports: [DeckInformationComponent, NgIf],
})
export class DeckDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) {}

  deckId!: string;
  deck!: Deck;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => (this.deckId = param.get('id') as string));
    this.deckService.getDecks().forEach(deck => console.log(this.deckId, 'this.deckId', deck, 'deck'));
    this.deck = this.deckService.getDecks().find(deck => {
      deck.id === this.deckId;
    })!;
    console.log(this.deck);
  }
}
