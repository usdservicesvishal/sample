import { Component, OnInit } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm: NgForm): void{

    console.log(signInForm);
    console.log(signInForm.value);
    console.log(signInForm.value.emailadressField);
    console.log(signInForm.value.passwordField);

  }

}


