import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Supertypes } from 'src/app/models/enums/supertype.enum';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { DeckDetailsService } from './deck-details.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
})
export class DeckDetailsComponent implements OnInit {
  @Input() isDetailsMode: boolean = false;
  deckCards$!: Observable<PokemonCard[]>;
  numberOfPokemons: number = 0;
  numberOfTrainers: number = 0;
  numberOfEnergies: number = 0;
  numberOfColors: number = 0;

  constructor(private deckDetailsService: DeckDetailsService) {
    this.deckCards$ = this.deckDetailsService.getDeckCards();
  }

  ngOnInit(): void {
    this.deckCards$.subscribe(cards => {
      if (cards.length === 0) {
        return;
      }
      this.numberOfPokemons = cards.filter(card => card.supertype === Supertypes.POKEMON).length;
      this.numberOfTrainers = cards.filter(card => card.supertype === Supertypes.TRAINER).length;
      this.numberOfEnergies = cards.filter(card => card.supertype === Supertypes.ENERGY).length;
    });
    this.deckDetailsService.getDeckCards() ? 'oi' : 'tchau';
  }
}
