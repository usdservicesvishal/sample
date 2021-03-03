import { ReciptionService } from './../reciption.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-reciption',
  templateUrl: './delete-reciption.component.html',
  styleUrls: ['./delete-reciption.component.scss']
})
export class DeleteReciptionComponent implements OnInit {
  productId = 0;
  constructor(private activatedRoute:ActivatedRoute,
    private service:ReciptionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.service.deleteReception(this.productId).subscribe(deleterecptiondata=>{
        console.log("Deleted receptions")
      })
    });
  }
  }

