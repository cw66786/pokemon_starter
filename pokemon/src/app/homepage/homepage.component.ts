import { Component, OnInit } from '@angular/core';

import { CatchEmAllService } from '../services/catch-em-all.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private starters: string[] = ['bulbasaur','squirtle','charmander'];
  public pokemonList: any[] = [];

  
  constructor(private catchEmAll: CatchEmAllService) { }

  ngOnInit(): void {
    this.starters.forEach((pokemon: string)=>{
      this.catchEmAll.getStarters(pokemon).subscribe(pokemon => this.pokemonList.push(pokemon));

    })
   
  }
  
  

  

}
