import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { Observable, Subject, takeUntil } from 'rxjs';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { DeckInformationComponent } from 'src/app/components/deck-information/deck-information.component';
import { DeckForm } from 'src/app/models/deck-form.type';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { ResponseSupertypes } from 'src/app/models/supertypes.interface';
import { CardService, CardsParams } from 'src/app/services/card.service';
import { DeckService } from 'src/app/services/deck.service';
import { SupertypesService } from 'src/app/services/supertypes.service';
import { DeckBuilderDetailsService } from '../../services/deck-builder-details.service';

@Component({
  selector: 'app-deck-edit',
  standalone: true,
  imports: [
    FormsModule,
    IgxInputGroupModule,
    IgxButtonModule,
    ReactiveFormsModule,
    DeckInformationComponent,
    CardListComponent,
    IGX_DIALOG_DIRECTIVES,
    CommonModule,
    RouterModule,
    IgxTooltipModule,
    IgxSelectComponent,
    IgxSelectItemComponent,
    IgxIconModule,
  ],
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.scss'],
})
export class DeckEditComponent implements OnDestroy {
  subscription = new Subject();
  allCards$!: Observable<PokemonCard[]>;
  isDeckInvalid$!: Observable<boolean>;
  cardSupertype$!: Observable<ResponseSupertypes>;
  isDeckInvalid!: boolean;
  deckForm!: FormGroup<DeckForm>;
  cardParams: CardsParams = {
    page: 1,
  };

  deckId!: string;
  deckCards$!: Observable<PokemonCard[]>;
  deckCards!: PokemonCard[];

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private deckDetailsService: DeckBuilderDetailsService,
    private router: Router,
    private fb: FormBuilder,
    private supertypesService: SupertypesService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => (this.deckId = param.get('id') as string));
    this.deckDetailsService.setDeckBuilderCards(this.deckService.getDeckById(this.deckId).cards);
    this.cardSupertype$ = this.supertypesService.getAllSupertypes();
    this.allCards$ = this.cardService.getAllCards(this.cardParams);
    this.deckCards = this.deckDetailsService.getDeckBuilderCards();
  }

  ngOnInit(): void {
    this.deckDetailsService.getDeckBuilderCardsObservable().subscribe(cards => (this.deckCards = cards));

    this.deckDetailsService
      .isDeckBuilderInvalid()
      .pipe(takeUntil(this.subscription))
      .subscribe(result => (this.isDeckInvalid = result));

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
    const selectedCards: PokemonCard[] = this.deckDetailsService.getDeckBuilderCards();

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

  ngOnDestroy(): void {
    this.deckDetailsService.clearCardOfDeckBuilder();
    this.subscription.unsubscribe();
  }
}
