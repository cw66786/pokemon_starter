
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';


import { CatchEmAllService } from '../services/catch-em-all.service';
import { Pokemon } from '../interfaces/pokemon';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  

  private starters: string[] = ['bulbasaur','squirtle','charmander'];
  public pokemonList: any[] = [];

  clickedName: string = '';
  clickedPic: string = '';
  

  
  constructor(private catchEmAll: CatchEmAllService, private popUp: MatDialog ) { }

 
  ngOnInit(): void {
    this.starters.forEach((pokemon: string)=>{
      this.catchEmAll.getStarters(pokemon).subscribe(pokemon => this.pokemonList.push(pokemon));



    })
   
  }
  
  openPopUp(name: string,img: string){ 
     this.clickedName = name;
     this.clickedPic = img;
    console.log(this.clickedPic)
    this.popUp.open(PopupComponent,{

      data: {
      name: this.clickedName,
      pic: this.clickedPic,
    }
  })

};

}
