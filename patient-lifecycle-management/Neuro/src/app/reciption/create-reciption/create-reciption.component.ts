


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
  // public registerNow(addNewForm:NgForm){
  //   let resp=this.service.doRegistration(this.reciption);

  //  resp.subscribe((data)=>this.message=data);
  //   console.log("added ...",addNewForm)
  //   console.log("modelclass...",this.reciption)
    // let obj =addNewForm.value;
  //  obj.id=null;
  //  this.service.doRegistration(obj).subscribe(response=>{
  //    console.log("User Added Sucessfully");
  //    addNewForm.form.reset();
  //    this.service.informChild();
  //  });


  addNewProduct(addproductForm:NgForm){



    this.reciption.createProduct(this.reciption).subscribe(data =>{
      console.log('successfuly send to server..', data),
     error => console.log("Error????????....>>>>",error)



      });


  }
}
