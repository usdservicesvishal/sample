import { ReciptionService } from './../reciption.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-newkycform',
  templateUrl: './newkycform.component.html',
  styleUrls: ['./newkycform.component.scss']
})
export class NewkycformComponent implements OnInit {

  reciptionForm:FormGroup;
  constructor(private FormBuilder:FormBuilder,private reciptionService:ReciptionService) {
    this.reciptionForm=FormBuilder.group(
      {
        firstname:['',Validators.required]
  })
}

  ngOnInit(): void {
  }
  postData(){

    console.log(this.reciptionForm);
    console.log('enter the name:' + this.reciptionForm.value.firstname);
}
}
