import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

import { FruitStock } from '../FruitStock';


@Component({
  selector: 'app-viewall-fruit-storage',
  templateUrl: './viewall-fruit-storage.component.html',
  styleUrls: ['./viewall-fruit-storage.component.css']
})
export class ViewallFruitStorageComponent implements OnInit {
fruitlist:any=FruitStock;
productId:any;
fruitStockId:any;
  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {

    this.service.getAllReception().subscribe(data=>{
      this.fruitlist= data
    });
  }
  }


