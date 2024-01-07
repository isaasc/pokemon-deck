import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseSupertypes } from '../models/supertypes.interface';

@Injectable({
  providedIn: 'root',
})
export class SupertypesService {
  constructor(private http: HttpClient) {}

  getAllSupertypes(): Observable<ResponseSupertypes> {
    const url = 'https://api.pokemontcg.io/v2/supertypes';
    return this.http.get<ResponseSupertypes>(url).pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred on get all supertypes:', error);
    return throwError(() => 'Something went wrong on get all supertypes; Please try again later.');
  }
}
