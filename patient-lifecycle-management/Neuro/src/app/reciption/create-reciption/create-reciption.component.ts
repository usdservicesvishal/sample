


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reciption } from 'src/app/model/reciption.model';
import { ReciptionService } from '../reciption.service';

@Component({
  selector: 'app-create-reciption',
  templateUrl: './create-reciption.component.html',
  styleUrls: ['./create-reciption.component.scss']
})
export class CreateReciptionComponent implements OnInit {
  message:any;
  reciption=new Reciption("","","",0,0,"","",0,0,"","","","",0,0,"","");

  constructor(private service:ReciptionService) { }





  ngOnInit(): void {
  }

  

  addNewProduct(addproductForm:NgForm){



    this.service.createProduct(this.reciption).subscribe(data =>{
      console.log('successfuly send to server..', data),
     error => console.log("Error????????....>>>>",error)
     console.log(this.reciption)



      });


    }
    }
