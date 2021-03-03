import { NeuroreciptionService } from './../neuroreciption.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Reciption } from '../Reciption';
import { error } from 'selenium-webdriver';







@Component({
  selector: 'app-createreciption',
  templateUrl: './createreciption.component.html',
  styleUrls: ['./createreciption.component.css']
})
export class CreatereciptionComponent implements OnInit {

  message:any;
  userModel = new Reciption("","","","", "",0,"","",0,0,"","","","","",0,"","");

  constructor(private reciptionservice:NeuroreciptionService) { }

  ngOnInit(): void {}

  addNewProduct(addproductForm:NgForm){



    this.reciptionservice.createProduct(this.userModel).subscribe(data =>{
      console.log('successfuly send to server..', data),

     console.log(this.userModel)



      });



  }}


