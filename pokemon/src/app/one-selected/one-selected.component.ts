import { Component,  Inject,  OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

import { CatchEmAllService } from '../services/catch-em-all.service';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-one-selected',
  templateUrl: './one-selected.component.html',
  styleUrls: ['./one-selected.component.scss']
})
export class OneSelectedComponent implements OnInit {
 
currentName: string= "";
selectedPokemon!: Pokemon;

  constructor(private catchEmAll: CatchEmAllService,) { }

  ngOnInit(): void {
   this.catchEmAll.$name.subscribe(name => this.currentName = name);
    
    this.catchEmAll.getStarters(this.currentName).subscribe(current => this.selectedPokemon = current);

  
  }


  
}
