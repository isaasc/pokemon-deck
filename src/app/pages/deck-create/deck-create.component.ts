import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/models/pokemon-card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckCreateComponent implements OnInit{
  pokemon$!: Observable<PokemonCard[]>;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
      this.pokemon$ = this.cardService.getAllCards();
  }
}
