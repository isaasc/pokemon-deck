import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() allCards$!: Observable<PokemonCard[]>;

  constructor() {}
}
