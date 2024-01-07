import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  IGX_DIALOG_DIRECTIVES,
  ISelectionEventArgs,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxSelectComponent,
  IgxSelectItemComponent,
  IgxTooltipModule,
} from 'igniteui-angular';
import { Observable } from 'rxjs';
import { DeckBuilderComponent } from 'src/app/components/deck-builder/deck-builder.component';
import { DeckForm } from 'src/app/models/deck-form.type';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { ResponseSupertypes } from 'src/app/models/supertypes.interface';
import { CardService, CardsParams } from 'src/app/services/card.service';
import { DeckService } from 'src/app/services/deck.service';
import { SupertypesService } from 'src/app/services/supertypes.service';
import { CardListComponent } from '../../components/card-list/card-list.component';
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
    CardListComponent,
    IGX_DIALOG_DIRECTIVES,
    CommonModule,
    RouterModule,
    IgxTooltipModule,
    IgxSelectComponent,
    IgxSelectItemComponent,
    IgxIconModule,
  ],
})
export class DeckCreateComponent implements OnInit {
  allCards$!: Observable<PokemonCard[]>;
  isDeckInvalid$!: Observable<boolean>;
  cardSupertype$!: Observable<ResponseSupertypes>;
  isDeckInvalid!: boolean;
  deckForm!: FormGroup<DeckForm>;
  cardParams: CardsParams = {
    page: 1,
  };

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private deckDetailsService: DeckDetailsService,
    private router: Router,
    private fb: FormBuilder,
    private supertypesService: SupertypesService
  ) {
    this.cardSupertype$ = this.supertypesService.getAllSupertypes();
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
  }

  ngOnInit(): void {
    this.deckDetailsService.isDeckInvalid().subscribe(result => (this.isDeckInvalid = result));

    this.deckForm = this.fb.group({
      name: ['', { nonNullable: true, validators: [Validators.required] }],
    });
  }

  sendFilterSupertype(changeValue: ISelectionEventArgs): void {
    this.cardParams.supertype = changeValue.newSelection.value;
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
  }

  receiveDataType(value: string): void {
    this.cardParams.type = value;
  }

  createDeck(): void {
    const selectedCards: PokemonCard[] = this.deckDetailsService.getDeckCards();

    this.deckService.updateDeck({ name: this.deckForm.getRawValue().name!, cards: selectedCards });
    this.router.navigateByUrl('/list');
  }

  loadCardsNextPage(): void {
    this.cardParams.page = this.cardParams.page + 1;
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
  }

  loadCardsPreviousPage(): void {
    this.cardParams.page = this.cardParams.page - 1;
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
  }
}
