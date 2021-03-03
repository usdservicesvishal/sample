import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-delete-reception',
  templateUrl: './delete-reception.component.html',
  styleUrls: ['./delete-reception.component.css']
})
export class DeleteReceptionComponent implements OnInit {
  productId = 0;

  constructor(private activatedRoute:ActivatedRoute,
    private receptionServices:ReceptionService
    ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.receptionServices.deleteReception(this.productId).subscribe(deleterecptiondata=>{
        console.log("Deleted receptions")
      })
    });
  }
}
