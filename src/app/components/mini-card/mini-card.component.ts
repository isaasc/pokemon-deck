import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgIf } from '@angular/common';
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxCardHeaderSubtitleDirective,
  IgxCardHeaderTitleDirective,
  IgxCardMediaDirective,
} from 'igniteui-angular';
import { TcgCard } from 'src/app/models/tcg-card.interface';

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
  @Input() card!: TcgCard;
}
