import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReceptionComponent } from './create-reception/create-reception.component';
import { DeleteReceptionComponent } from './delete-reception/delete-reception.component';
import { ReceptionComponent } from './reception.component';
import { UpdateReceptionComponent } from './update-reception/update-reception.component';
import { ViewAllReceptionComponent } from './view-all-reception/view-all-reception.component';
import { ViewReceptionComponent } from './view-reception/view-reception.component';


const routes: Routes = [{ path: '', component: ReceptionComponent },
{ path: '', component: ViewAllReceptionComponent },
{ path: 'create-reception', component: CreateReceptionComponent },
{ path: 'list-reception', component:  ViewAllReceptionComponent },

{ path: 'serach-date', component: ViewAllReceptionComponent },
{ path: 'delete-reception/:id', component:DeleteReceptionComponent},
{ path: 'view-reception/:id', component:ViewReceptionComponent },
{ path: 'update-reception/:id', component:UpdateReceptionComponent },
{ path: '**', component:ReceptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
