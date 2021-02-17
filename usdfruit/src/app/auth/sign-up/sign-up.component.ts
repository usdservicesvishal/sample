import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  checkoutForm:FormGroup;//give same FormGroup name as in the the template

  constructor(private formBuilder:FormBuilder) {


    this.checkoutForm=formBuilder.group(
    {
      emailaddr :new FormControl(),
    user_password:new FormControl(),
    agreeterm:new FormControl()
    });
   }

  ngOnInit(): void {
  }
  postData(){
console.log(`FromGroup object`+ this.checkoutForm);

}
}
