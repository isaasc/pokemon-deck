import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxInputGroupModule } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckDetailsService } from 'src/app/pages/deck-details/deck-details.service';
import { CardListComponent } from '../card-list/card-list.component';
import { DeckInformationComponent } from '../deck-information/deck-information.component';

@Component({
  selector: 'app-deck-builder',
  standalone: true,
  imports: [
    IGX_EXPANSION_PANEL_DIRECTIVES,
    ReactiveFormsModule,
    NgIf,
    CardListComponent,
    IGX_DIALOG_DIRECTIVES,
    IgxInputGroupModule,
    DeckInformationComponent,
  ],
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
})
export class DeckBuilderComponent {
  deckCards$!: Observable<PokemonCard[]>;

  constructor(private deckDetailsService: DeckDetailsService) {
    this.deckCards$ = this.deckDetailsService.getDeckCardsObservable();
  }
}
