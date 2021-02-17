import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reception } from '../reception';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-view-reception',
  templateUrl: './view-reception.component.html',
  styleUrls: ['./view-reception.component.css']
})
export class ViewReceptionComponent implements OnInit {

  productId=0;
  receptionDetail: Reception;

  constructor(private activatedRoute:ActivatedRoute,
    private receptionServices:ReceptionService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    });

    this.receptionServices.viewReception(this.productId).subscribe(receptionData=>{
      this.receptionDetail = receptionData;
    });
  }

}
