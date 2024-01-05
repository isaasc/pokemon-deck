import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IgxCardComponent, IgxCardMediaDirective } from 'igniteui-angular';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [IgxCardComponent, IgxCardMediaDirective],
})
export class CardComponent {
  @Input() cardImage!: string;
}
