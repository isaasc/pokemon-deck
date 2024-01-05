import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardMediaDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-mini-card',
    templateUrl: './mini-card.component.html',
    styleUrls: ['./mini-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        IgxCardComponent,
        IgxLayoutDirective,
        IgxFlexDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardMediaDirective,
    ],
})
export class MiniCardComponent {
  @Input() card!: PokemonCard;
}
