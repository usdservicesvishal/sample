

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reciption } from 'src/app/model/reciption.model';
import { ReciptionService } from '../reciption.service';

@Component({
  selector: 'app-view-reciption',
  templateUrl: './view-reciption.component.html',
  styleUrls: ['./view-reciption.component.scss']
})
export class ViewReciptionComponent implements OnInit {


  ngOnInit(): void {
  //  this.reciption =this.reciption.getUser();
  }
  // public getUser(addNewForm:NgForm){
  //   console.log("added ...",addNewForm)
  //   console.log("modelclass...",this.reciption)
  //  let resp=this.service.getUser(this.reciption);
  //  resp.subscribe((data)=>this.message=data);

}
// }


