import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseTypes } from '../models/types.interface';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private http: HttpClient) {}

  getAllTypes(): Observable<ResponseTypes> {
    const url = 'https://api.pokemontcg.io/v2/types';
    return this.http.get<ResponseTypes>(url).pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; Please try again later.');
  }
}
