import { Component } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss'],
})
export class DeckCreateComponent {
  allCards!: PokemonCard[];

  constructor(private cardService: CardService) {
    this.cardService.getAllCards(1).subscribe(cards => (this.allCards = cards));
  }

  getData() {}

  receiveData(value: string) {
    this.cardService.getAllCards(2).subscribe(cards => (this.allCards = cards));
  }
}
