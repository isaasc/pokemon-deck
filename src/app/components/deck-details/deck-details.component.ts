import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckDetailsComponent {}
