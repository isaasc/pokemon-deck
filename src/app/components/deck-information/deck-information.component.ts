import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardListComponent } from '../card-list/card-list.component';
import { DeckCardsInformationComponent } from '../deck-cards-information/deck-cards-information.component';

@Component({
  selector: 'app-deck-information',
  standalone: true,
  imports: [
    IGX_EXPANSION_PANEL_DIRECTIVES,
    ReactiveFormsModule,
    NgIf,
    CardListComponent,
    DeckCardsInformationComponent,
  ],
  templateUrl: './deck-information.component.html',
  styleUrls: ['./deck-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckInformationComponent {
  @Input() deckCards!: PokemonCard[];
}
