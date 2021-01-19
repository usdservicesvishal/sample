import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';

import {HomeComponent} from './home/home.component';
import {LoginformComponent} from './loginform/loginform.component';

const routes: Routes = [
  {path:'',redirectTo :'login-component ',pathMatch:'full'},
  {path:'home-component' , component: HomeComponent},
  {path: 'loginform-Component' , component: LoginformComponent},
{path:'Admission',component:AdmissionComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
