import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { DeckInformationComponent } from 'src/app/components/deck-information/deck-information.component';
import { DeckForm } from 'src/app/models/deck-form.type';
import { ResponseSupertypes } from 'src/app/models/supertypes.interface';
import { TcgCardsParams } from 'src/app/models/tcg-card-params.type';
import { TcgCard } from 'src/app/models/tcg-card.interface';
import { DeckStorageService } from 'src/app/services/deck-storage.service';
import { SupertypesService } from 'src/app/services/supertypes.service';
import { TcgCardService } from 'src/app/services/tcg-card.service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { DeckBuilderDetailsService } from '../../services/deck-builder-details.service';
import { Deck } from './../../models/deck.interface';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
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
})
export class DeckBuilderComponent implements OnInit, OnDestroy {
  subscription = new Subject();
  tcgCards: TcgCard[] = [];
  isDeckInvalid$!: Observable<boolean>;
  cardSupertype$!: Observable<ResponseSupertypes>;
  isDeckInvalid!: boolean;
  deckForm!: FormGroup<DeckForm>;
  cardParams: TcgCardsParams = {
    page: 1,
  };

  deckId?: string;
  deckCards: TcgCard[] = [];
  deck?: Deck;

  constructor(
    private cardService: TcgCardService,
    private deckService: DeckStorageService,
    private deckDetailsService: DeckBuilderDetailsService,
    private router: Router,
    private fb: FormBuilder,
    private supertypesService: SupertypesService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(takeUntil(this.subscription))
      .subscribe(param => (this.deckId = param.get('id') as string));
    if (this.deckId) {
      this.deck = this.deckService.getDeckById(this.deckId);
      this.deckCards = this.deck.cards;
    }
    this.cardSupertype$ = this.supertypesService.getAllSupertypes();
    this.cardService
      .getAllTcgCards(this.cardParams)
      .pipe(takeUntil(this.subscription))
      .subscribe(tcgCards => (this.tcgCards = tcgCards));
  }

  ngOnInit(): void {
    this.deckDetailsService
      .getDeckBuilderCardsObservable()
      .pipe(takeUntil(this.subscription))
      .subscribe(cards => (this.deckCards = cards));

    this.deckDetailsService
      .isDeckBuilderInvalid()
      .pipe(takeUntil(this.subscription))
      .subscribe(result => (this.isDeckInvalid = result));

    this.deckForm = this.fb.group({
      name: [this.deck?.name ?? '', { nonNullable: true, validators: [Validators.required] }],
    });
  }

  handleSaveDeckBuilder(): void {
    const selectedCards: TcgCard[] = this.deckDetailsService.getDeckBuilderCards();
    if (this.deck && this.deckId) {
      this.deckService.updateDeckById(this.deckId, { name: this.deckForm.getRawValue().name!, cards: selectedCards });
    } else {
      this.deckService.createDeck({ name: this.deckForm.getRawValue().name!, cards: selectedCards });
    }

    this.router.navigateByUrl('/list');
  }

  loadCardBySupertypeFilter(changeValue: ISelectionEventArgs): void {
    this.cardParams.supertype = changeValue.newSelection.value;
    this.cardService
      .getAllTcgCards(this.cardParams)
      .pipe(takeUntil(this.subscription))
      .subscribe(tcgCards => (this.tcgCards = tcgCards));
  }

  loadCardsNextPage(): void {
    this.loadCards(this.cardParams.page + 1);
  }

  loadCardsPreviousPage(): void {
    this.loadCards(this.cardParams.page - 1);
  }

  loadCards(page: number): void {
    this.cardParams.page = page;
    this.cardService
      .getAllTcgCards(this.cardParams)
      .pipe(takeUntil(this.subscription))
      .subscribe(tcgCards => (this.tcgCards = tcgCards));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.deckDetailsService.clearCardOfDeckBuilder();
  }
}
