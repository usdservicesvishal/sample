import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationformComponent } from './registrationform/registrationform.component';

import { LoginformComponent } from './loginform/loginform.component';
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
LoginformComponent,
    RegistrationformComponent,
AdmissionComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
