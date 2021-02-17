import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistratitonComponent } from './registratiton/registratiton.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
 {path:"register",component:RegistratitonComponent},
  { path: 'vishal', loadChildren: () => import('./vishal/vishal.module').then(m => m.VishalModule) } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
