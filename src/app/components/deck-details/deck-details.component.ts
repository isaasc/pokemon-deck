import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxInputGroupModule } from 'igniteui-angular';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardListComponent } from '../card-list/card-list.component';
import { DeckDetailsService } from './deck-details.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  standalone: true,
  imports: [
    IGX_EXPANSION_PANEL_DIRECTIVES,
    ReactiveFormsModule,
    NgIf,
    CardListComponent,
    IGX_DIALOG_DIRECTIVES,
    IgxInputGroupModule,
  ],
})
export class DeckDetailsComponent implements OnInit, OnDestroy {
  @Input() isDetailsMode: boolean = false;
  deckCards$!: Observable<PokemonCard[]>;
  subscription = new Subject();
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfColors: number = 0;

  constructor(private deckDetailsService: DeckDetailsService) {
    this.deckCards$ = this.deckDetailsService.getDeckCards();
  }

  ngOnInit(): void {
    this.deckCards$.pipe(takeUntil(this.subscription)).subscribe(cards => {
      if (cards.length === 0) {
        return;
      }
      this.numberOfPokemons = cards.filter(card => card.supertype === Supertypes.POKEMON).length;
      this.numberOfTrainers = cards.filter(card => card.supertype === Supertypes.TRAINER).length;
      this.numberOfEnergies = cards.filter(card => card.supertype === Supertypes.ENERGY).length;
    });
    this.deckDetailsService.getDeckCards() ? 'oi' : 'tchau';
  }

  ngOnDestroy(): void {
    this.subscription.complete();
  }
}
