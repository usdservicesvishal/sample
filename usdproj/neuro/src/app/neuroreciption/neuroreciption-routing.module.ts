import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatereciptionComponent } from './createreciption/createreciption.component';
import { DeletereciptionComponent } from './deletereciption/deletereciption.component';
import { NeuroreciptionComponent } from './neuroreciption.component';
import { UpdatereciptionComponent } from './updatereciption/updatereciption.component';
import { ViewallreciptionComponent } from './viewallreciption/viewallreciption.component';
import { ViewreciptionComponent } from './viewreciption/viewreciption.component';

const routes: Routes = [{ path: '', component: NeuroreciptionComponent },
{ path: '', component: ViewallreciptionComponent },
{ path: 'create-reciption', component: CreatereciptionComponent },
{ path: 'list-reciption', component: ViewallreciptionComponent },

{ path: 'serach-date', component: ViewallreciptionComponent},
{ path: 'delete-reciption/:id', component:DeletereciptionComponent},
{ path: 'view-reciption/:id', component:ViewreciptionComponent},
{ path: 'update-reciption/:id', component:UpdatereciptionComponent },
{ path: '**', component:NeuroreciptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeuroreciptionRoutingModule { }
