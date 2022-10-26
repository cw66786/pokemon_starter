import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy{
selectedName: string = '';
selectedPic: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
   
   }

  ngOnInit(): void {
    this.selectedName = this.data.name;
    this.selectedPic = this.data.pic;
  }

  ngOnDestroy(){
   
  }

}