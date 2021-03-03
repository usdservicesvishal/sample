import { Reception } from './../Reception';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReceptionService } from '../reception.service';





@Component({
  selector: 'app-create-reception',
  templateUrl: './create-reception.component.html',
  styleUrls: ['./create-reception.component.css']
})
export class CreateReceptionComponent implements OnInit {
  message:any;
  userModel = new Reception("","","","", "",0,"","",0,0,"","","","","",0,"","");

  constructor( private receptionServices:ReceptionService) { }

  ngOnInit(): void {
  }

  addNewProduct(addproductForm:NgForm){



    this.receptionServices.createProduct(this.userModel).subscribe(data =>{
      console.log('successfuly send to server..', data),
        error => console.log("Error????????....>>>>",error)
     console.log(this.userModel)



      });


    }
    }
