import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { LogOutComponent } from './auth/log-out/log-out.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'order',component:OrderComponent},


  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'forget-pass',component:ForgotPasswordComponent},
  {path:'logout',component:LogOutComponent},
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**',component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
