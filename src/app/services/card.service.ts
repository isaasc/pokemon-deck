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

  constructor(private http: HttpClient) {}

  getAllCards(cardsParams: CardsParams): Observable<PokemonCard[]> {
    const params = this.buildParams(cardsParams);

    const url = `${this.baseURL}/cards`;

    return this.http.get<ResponsePokemonCard>(url, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; Please try again later.');
  }

  private buildParams(cardsParams: CardsParams): HttpParams {
    return new HttpParams()
      .set('orderBy', 'name')
      .set('pageSize', '24')
      .set('page', cardsParams.page.toString())
      .set('select', 'id,name,supertype,types,images')
      .set('q', this.buildQueryParam(cardsParams));
  }

  private buildQueryParam(cardsParams: CardsParams): string {
    let queryParam = '';

    queryParam += cardsParams.supertype ? `supertype:${cardsParams.supertype}` : '';
    queryParam += cardsParams.supertype && cardsParams.type ? ' ' : '';
    queryParam += cardsParams.type ? `types:${cardsParams.type}` : '';

    return queryParam.trim();
  }
}
