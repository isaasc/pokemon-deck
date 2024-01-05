import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeckDetailsComponent } from '../../components/deck-details/deck-details.component';

@Component({
    selector: 'app-deck-list',
    templateUrl: './deck-list.component.html',
    styleUrls: ['./deck-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DeckDetailsComponent],
})
export class DeckListComponent {}
