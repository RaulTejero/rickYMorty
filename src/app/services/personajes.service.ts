import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// interface Personaje {
//   name: string;
//   species: string;
//   location: { name: string }
// }

// export interface Api {
//   info: {
//     count: number;
//     pages: number;
//     next: string;
//     prev: string;
//   },
//   results: Personaje[]
// }

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
  }

  getAll(pPage: number = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`).toPromise();
  }

}