import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder}from '@angular/forms';
import{FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
this.signupForm=formBuilder.group({
    uname:new FormControl(),
    uemail:new FormControl(),
    upwd:new FormControl(),
    uconfirmpwd:new FormControl()


  });
  }

  ngOnInit(): void {
  }
postData(){
  console.log( `FormGroup object`+this.signupForm);
console.log(`entire form value`+ this.signupForm.value);
console.log(`UserName`+this.signupForm.value);
console.log(`uemail`+this.signupForm.value);
console.log(`Password`+this.signupForm.value);
console.log(`ConfirmPassword`+this.signupForm.value)
}
}
