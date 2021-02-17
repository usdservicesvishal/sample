import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControlName,FormBuilder,ReactiveFormsModule, FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-reciptionform',
  templateUrl: './reciptionform.component.html',
  styleUrls: ['./reciptionform.component.scss']
})
export class ReciptionformComponent implements OnInit {
  reciptionForm =new FormGroup({
    firstname:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

}
