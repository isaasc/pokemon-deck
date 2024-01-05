import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() allCards!: PokemonCard[];

  constructor(private cardService: CardService) {}
}
