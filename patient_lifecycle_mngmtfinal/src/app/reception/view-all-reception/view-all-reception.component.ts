import { Component, OnInit } from '@angular/core';
import { Reception } from '../reception';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-view-all-reception',
  templateUrl: './view-all-reception.component.html',
  styleUrls: ['./view-all-reception.component.css']
})
export class ViewAllReceptionComponent implements OnInit {
  recipetionList : Reception;

  constructor(private recepetionServices:ReceptionService) { }

  ngOnInit(): void {
    this.recepetionServices.getAllReception().subscribe(data=>{
      this.recipetionList = data;
    });
  }

}
