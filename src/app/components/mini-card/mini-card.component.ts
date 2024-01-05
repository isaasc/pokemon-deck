import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniCardComponent {
  @Input() card!: PokemonCard;
}
