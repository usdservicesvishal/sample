import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionmemberComponent } from './admissionmember/admissionmember.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MasterplanComponent } from './masterplan/masterplan.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SidrbarComponent } from './sidrbar/sidrbar.component';


const routes: Routes = [

  {path:'Loginform',component:LoginformComponent},
  {path:'home',component:HomeComponent},
  {path:'Registrationform',component:RegistrationformComponent},
  {path:'Sidrbar', component:SidrbarComponent},
  {path:'Admissionmember',component:AdmissionmemberComponent},
  {path:'masterplan',component:MasterplanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
