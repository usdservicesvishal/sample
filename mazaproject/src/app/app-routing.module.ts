import { NewkycformComponent } from './newkycform/newkycform.component';
import { UserkycComponent } from './userkyc/userkyc.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path:'login',component:LoginComponent},
{path:'userkyc',component:UserkycComponent},
{path:'newkycform',component:NewkycformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
