import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VishalComponent } from './vishal.component';

const routes: Routes = [{ path: '', component: VishalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VishalRoutingModule { }
