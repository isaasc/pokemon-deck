import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IgxButtonModule, IgxInputGroupModule } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { DeckBuilderComponent } from 'src/app/components/deck-builder/deck-builder.component';
import { DeckForm } from 'src/app/models/deck-form.type';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService, CardsParams } from 'src/app/services/card.service';
import { DeckService } from 'src/app/services/deck.service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { DeckSearchAndFiltersComponent } from '../../components/deck-search-and-filters/deck-search-and-filters.component';
import { DeckDetailsService } from '../deck-details/deck-details.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IgxInputGroupModule,
    IgxButtonModule,
    ReactiveFormsModule,
    DeckBuilderComponent,
    DeckSearchAndFiltersComponent,
    CardListComponent,
    IGX_DIALOG_DIRECTIVES,

    RouterModule,
  ],
})
export class DeckCreateComponent {
  allCards$!: Observable<PokemonCard[]>;
  deckForm!: FormGroup<DeckForm>;
  cardParams: CardsParams = {
    page: 1,
  };

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private deckDetailsService: DeckDetailsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
    this.deckForm = this.fb.group({
      name: ['', { nonNullable: true, validators: [Validators.required] }],
    });
  }

  receiveDataSupertype(value: string): void {
    this.cardParams.supertype = value;
  }

  receiveDataType(value: string): void {
    this.cardParams.type = value;
  }

  createDeck(): void {
    const selectedCards: PokemonCard[] = this.deckDetailsService.getDeckCards();

    this.deckService.updateDeck({ name: this.deckForm.getRawValue().name!, cards: selectedCards });
    this.router.navigateByUrl('/list');
  }
}
