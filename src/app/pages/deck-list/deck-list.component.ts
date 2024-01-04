import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckListComponent {

}
