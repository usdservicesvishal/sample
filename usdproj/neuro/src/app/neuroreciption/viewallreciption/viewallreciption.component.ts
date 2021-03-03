
import { NeuroreciptionService } from './../neuroreciption.service';
import { Component, OnInit } from '@angular/core';

import { Reciption } from '../Reciption';

@Component({
  selector: 'app-viewallreciption',
  templateUrl: './viewallreciption.component.html',
  styleUrls: ['./viewallreciption.component.css']
})
export class ViewallreciptionComponent implements OnInit {
  reciptionList: Reciption;
  constructor(private recepetionservice:NeuroreciptionService) { }

  ngOnInit(): void {
    this.recepetionservice.getAllReciption().subscribe(data=>{
      this.reciptionList = data;
    });
  }

}
