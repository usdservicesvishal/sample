import { ReciptionformComponent } from './reciptionform/reciptionform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'sidebar',component:FooterComponent},
  {path:'login',component:LoginComponent},
   {path:'signupform',component:SignupformComponent},
   {path:'reciptionform',component:ReciptionformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
