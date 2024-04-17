import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pais } from '../interfaces/pais';
import { Cache } from '../interfaces/cache';
import { catchError, map, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  constructor(private http: HttpClient) {
    this.getLocalStorage() 
   }

   public cache: Cache = {
    porCapital: {
      termino: "",
      paises: []
    },
    porPais: {
      termino: "",
      paises: []
    },
    porRegion: {
      termino: "",
      paises: []
    }
  }

   private url = 'https://restcountries.com/v3.1';
   
   private saveToLocalStorage(): void {
    localStorage.setItem('lastSearched', JSON.stringify(this.cache))
  }

  private getLocalStorage(): void {
    if (localStorage.getItem('lastSearched')) {
      this.cache = JSON.parse(localStorage.getItem('lastSearched')!);
    }
  }

   PeticionPorCapital(capital: string): Observable<Pais[]> {

    return this.http.get<Pais[]>(this.url + '/capital/' + capital).pipe(
      tap((paises) => this.cache.porCapital = {
        termino: capital,
        paises
      }),
      tap(() => this.saveToLocalStorage())
    )
  }

  PeticionPorRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + '/region/' + region).pipe(
      tap((paises) => this.cache.porRegion = {
        termino: region,
        paises
      }),
      tap(() => this.saveToLocalStorage())
    )
  }

  PeticionPorPais(pais: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + '/name/' + pais).pipe(
      tap((paises) => this.cache.porPais = {
        termino: pais,
        paises
      }),
      tap(() => this.saveToLocalStorage())
    )
  }

  PeticionInfoPais(codigoPais: string): Observable<Pais | null> {
    return this.http.get<Pais []>(this.url + '/alpha/' + codigoPais)
      .pipe(
        map(paises => paises.length > 0 ? paises[0] : null),
        catchError(() => of(null))
      )
  }
   
}
