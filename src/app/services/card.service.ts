import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PokemonCard, ResponsePokemonCard } from '../models/pokemon-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<PokemonCard[]> {
    const url = "https://api.pokemontcg.io/v2/cards";
    return this.http.get<ResponsePokemonCard>(url).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; Please try again later.');
  }
}
