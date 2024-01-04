import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from './models/pokemon-card.interface';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-deck';


}
