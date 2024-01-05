import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService, CardsParams } from 'src/app/services/card.service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { DeckSearchAndFiltersComponent } from '../../components/deck-search-and-filters/deck-search-and-filters.component';
import { DeckDetailsComponent } from '../../components/deck-details/deck-details.component';

@Component({
    selector: 'app-deck-create',
    templateUrl: './deck-create.component.html',
    styleUrls: ['./deck-create.component.scss'],
    standalone: true,
    imports: [
        DeckDetailsComponent,
        DeckSearchAndFiltersComponent,
        CardListComponent,
    ],
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
