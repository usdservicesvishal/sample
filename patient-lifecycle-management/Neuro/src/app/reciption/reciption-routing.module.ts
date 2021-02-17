import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReciptionComponent } from './create-reciption/create-reciption.component';
import { ReciptionComponent } from './reciption.component';
import { ViewAllReciptionComponent } from './view-all-reciption/view-all-reciption.component';

const routes: Routes = [{ path: '', component: ReciptionComponent },
{path:'createreciption',component:CreateReciptionComponent},
{path:'viewallreciption',component:ViewAllReciptionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReciptionRoutingModule { }
