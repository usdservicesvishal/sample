import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NeuroreciptionService } from '../neuroreciption.service';

@Component({
  selector: 'app-deletereciption',
  templateUrl: './deletereciption.component.html',
  styleUrls: ['./deletereciption.component.css']
})
export class DeletereciptionComponent implements OnInit {
  productId = 0;
  constructor(private activatedRoute:ActivatedRoute,
    private reciptionservice:NeuroreciptionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.reciptionservice.deleteReciption(this.productId).subscribe(deleterecptiondata=>{
        console.log("Deleted receptions")
      })
    });
  }

}
