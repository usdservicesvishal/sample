import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-fruit-storage',
  templateUrl: './view-fruit-storage.component.html',
  styleUrls: ['./view-fruit-storage.component.css']
})
export class ViewFruitStorageComponent implements OnInit {

  constructor(private Route:ActivatedRoute) { }

  ngOnInit(): void {


  }
  gotoViewallStorage(){

  }
}
