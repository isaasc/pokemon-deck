import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService, CardsParams } from 'src/app/services/card.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss'],
})
export class DeckCreateComponent {
  allCards!: Observable<PokemonCard[]>;
  cardParams: CardsParams = {
    page: 1,
  };

  constructor(private cardService: CardService) {
    this.allCards = this.cardService.getAllCards(this.cardParams);
  }

  receiveDataSupertype(value: string): void {
    this.cardParams.supertype = value;
    this.allCards = this.cardService.getAllCards(this.cardParams);
  }

  receiveDataType(value: string): void {
    this.cardParams.type = value;
    this.allCards = this.cardService.getAllCards(this.cardParams);
  }
}
