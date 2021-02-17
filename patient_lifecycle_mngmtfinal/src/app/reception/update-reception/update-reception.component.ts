import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reception } from '../reception';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-update-reception',
  templateUrl: './update-reception.component.html',
  styleUrls: ['./update-reception.component.css']
})
export class UpdateReceptionComponent implements OnInit {
  message:any;
productId = 0;
receptionDetail : Reception;

  constructor(private activatedRoute:ActivatedRoute,
    private receptionServices: ReceptionService
    ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    });

    this.receptionServices.viewReception(this.productId).subscribe(receptionData=>{
      this.receptionDetail = receptionData;
    })
  }
  updatedProduct(updatedProductForm:NgForm){
    console.log(updatedProductForm.value)
   this.receptionServices.updateReception(this.productId,updatedProductForm.value);
   console.log("data send to the server...")
}

}
