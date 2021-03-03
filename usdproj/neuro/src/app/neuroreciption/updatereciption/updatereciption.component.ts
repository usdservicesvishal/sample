
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Reciption } from '../Reciption';
import { NeuroreciptionService } from '../neuroreciption.service';


@Component({
  selector: 'app-updatereciption',
  templateUrl: './updatereciption.component.html',
  styleUrls: ['./updatereciption.component.css']
})

export class UpdatereciptionComponent implements OnInit {

  message:any;
productId = 0;
  reciptionDetail:Reciption;
  constructor( private activatedRoute:ActivatedRoute,private reciptionservice:NeuroreciptionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    });

    this.reciptionservice.viewReciption(this.productId).subscribe(reciptionData=>{
      this.reciptionDetail = reciptionData;
    })
  }
  updatedProduct(updatedProductForm:NgForm){
    console.log(updatedProductForm.value)
   this.reciptionservice.updateReciption(this.productId,updatedProductForm.value);
   console.log("data send to the server...")
}
}



