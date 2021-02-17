import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm :FormGroup;
  constructor(private formBuilder:FormBuilder) {
    /*this.signupForm=formBuilder.group({
      ufname :new FormControl(),
      ulname :new FormControl(),
      uemail:new FormControl(),
      upwd:new FormControl(),
      uconfirmpwd:new FormControl(),
      agreeterm:new FormControl()
    });
   }*/
   this.signupForm=formBuilder.group({
    ufname :['',Validators.required],
    ulname :['',Validators.required],
    uemail:['',[Validators.required,Validators.email]],
    upwd:['',Validators.required],
    uconfirmpwd:['',Validators.required],
    agreeterm:['',Validators.required]
  });
 }

  ngOnInit(): void {
  }
  postData(){
console.log(this.signupForm);
    console.log('enter the name:' + this.signupForm.value.ufname);
    console.log('enter the last name:'+this.signupForm.value.ulname);
    console.log('enter the Password:'+this.signupForm.value.uemail);
    console.log('Confirm Password:'+this.signupForm.value.upwd);
    console.log('I Agree this term And Condition:'+this.signupForm.value.agreeterm)

    }

    resetForm(){
      this.signupForm.reset();
   }
}

