import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgIf } from '@angular/common';
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxCardHeaderSubtitleDirective,
  IgxCardHeaderTitleDirective,
  IgxCardMediaDirective,
} from 'igniteui-angular';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardHeaderSubtitleDirective,
    IgxCardMediaDirective,
  ],
})
export class MiniCardComponent {
  @Input() card!: PokemonCard;
}
