import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NeuroreciptionService } from '../neuroreciption.service';
import { Reciption } from '../Reciption';

@Component({
  selector: 'app-viewreciption',
  templateUrl: './viewreciption.component.html',
  styleUrls: ['./viewreciption.component.css']
})
export class ViewreciptionComponent implements OnInit {
  productId=0;
  reciptionDetail:Reciption;

  constructor(private activatedRoute:ActivatedRoute,
    private receptionservice:NeuroreciptionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    });

    this.receptionservice.viewReciption(this.productId).subscribe(reciptionData=>{
      this.reciptionDetail = reciptionData;
    });
  }

}
