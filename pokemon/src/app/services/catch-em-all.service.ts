import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonResponse } from '../interfaces/bulk-data';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatchEmAllService {
baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

private selected: string = "";
private $nameBehave = new BehaviorSubject<string>(this.selected);
$name = this.$nameBehave.asObservable();

  constructor(private http: HttpClient) { }

  //get the 3 original starter pokemon
  getStarters(name: string){
    return this.http.get<PokemonResponse>(this.baseUrl + name).pipe(
      map((res: PokemonResponse)=>{
        
        const current: Pokemon = {
          pic: res.sprites.front_default,
          name: res.species.name,
          number: res.id,
          weight: res.weight,
          height: res.height,
          type: res.types[0].type.name,
      
      }
        return current;
      })
    )
  }


  getSelected(selectedPokemon: string){
    console.log(selectedPokemon, "input")
    this.selected = selectedPokemon;
    console.log(this.selected)
    this.$nameBehave.next(this.selected);
    
  }

}
