import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SidrbarComponent } from './sidrbar/sidrbar.component';
import { AdmissionmemberComponent } from './admissionmember/admissionmember.component';
import { MasterplanComponent } from './masterplan/masterplan.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    RegistrationformComponent,
    SidrbarComponent,
    AdmissionmemberComponent,
    MasterplanComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
