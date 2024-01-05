import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PokemonCard, ResponsePokemonCard } from '../models/pokemon-card.interface';

export type CardsParams = {
  page: number;
  supertype?: string;
  type?: string;
};

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private baseURL: string = 'https://api.pokemontcg.io/v2';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'X-Api-Key': '',
  //     'Content-Type': 'application/json',
  //   }),
  // };
  constructor(private http: HttpClient) {}

  getAllCards(cardsParams: CardsParams): Observable<PokemonCard[]> {
    let params = new HttpParams().set('orderBy', 'name').set('pageSize', '24').set('page', cardsParams.page.toString());

    let queryParam = '';

    if (cardsParams.supertype) {
      queryParam += `supertype:${cardsParams.supertype}`;
    }

    if (cardsParams.type) {
      if (queryParam !== '') {
        queryParam += ' ';
      }
      queryParam += `types:${cardsParams.type}`;
    }

    if (queryParam !== '') {
      params = params.set('q', queryParam);
    }

    const url = `${this.baseURL}/cards`;
    // return this.http.get<ResponsePokemonCard>(url, { headers: this.httpOptions.headers, params }).pipe(
    return this.http.get<ResponsePokemonCard>(url, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; Please try again later.');
  }
}
