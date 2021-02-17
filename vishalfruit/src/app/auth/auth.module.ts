import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogOutComponent } from './log-out/log-out.component';



@NgModule({
  declarations: [LogInComponent, SignUpComponent, ForgotPasswordComponent, LogOutComponent],
  imports: [
    CommonModule
  ],
  exports: [
  LogInComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  LogOutComponent

  ]
})
export class AuthModule { }
