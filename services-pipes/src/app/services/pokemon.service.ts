import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = ``
  private pokeData:any

  constructor(
    private http:HttpClient
  ) {
      this.baseUrl = environment.pokeApi
    }
      getPokemon(pokemonName:string) {
        this.pokeData = this.http.get(`${this.baseUrl}${pokemonName}`)
        console.log(this.pokeData)
      }
}
