import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissionmember',
  templateUrl: './admissionmember.component.html',
  styleUrls: ['./admissionmember.component.scss']
})
export class AdmissionmemberComponent implements OnInit {
  showColor:boolean=false;

  constructor() { }
public changeColor():void{
  this.showColor=!this.showColor;
}

  ngOnInit(): void {
  }

}
