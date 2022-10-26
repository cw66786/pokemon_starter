import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatchEmAllService } from '../services/catch-em-all.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  
})

@Injectable()
export class PopupComponent implements OnInit{
selectedName: string = '';
selectedPic: string = '';



  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private router: Router,private catchEmAll: CatchEmAllService) {
   
   }

  ngOnInit(): void {
    this.selectedName = this.data.name;
    this.selectedPic = this.data.pic;
    
  }

  

 

  selectPokemon(){
   
    this.catchEmAll.getSelected(this.selectedName);
    
    
    
  }
  
 
 
}

