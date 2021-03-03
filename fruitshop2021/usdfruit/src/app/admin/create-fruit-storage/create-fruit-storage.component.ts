import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { FruitStock } from '../FruitStock';

@Component({
  selector: 'app-create-fruit-storage',
  templateUrl: './create-fruit-storage.component.html',
  styleUrls: ['./create-fruit-storage.component.css']
})
export class CreateFruitStorageComponent implements OnInit {

  fruitstock=new FruitStock("","",0,"",0);
  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
  }

  addNewProduct(addproductForm:NgForm)

  {



    this.service.createProduct(this.fruitstock).subscribe(data =>{
      console.log('successfuly send to server..', data),
        (     error: any) => console.log("Error????????....>>>>",error)
     console.log(this.fruitstock)



      });

  }}



