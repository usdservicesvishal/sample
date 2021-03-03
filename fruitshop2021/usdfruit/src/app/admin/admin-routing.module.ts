import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CreateFruitStorageComponent } from './create-fruit-storage/create-fruit-storage.component';
import { DeleteFruitStorageComponent } from './delete-fruit-storage/delete-fruit-storage.component';
import { UpdateFruitStorageComponent } from './update-fruit-storage/update-fruit-storage.component';
import { ViewFruitStorageComponent } from './view-fruit-storage/view-fruit-storage.component';
import { ViewallFruitStorageComponent } from './viewall-fruit-storage/viewall-fruit-storage.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: 'CreateFruitStock', component: CreateFruitStorageComponent },
{ path: 'ViewFruitStock', component: ViewFruitStorageComponent },
{ path: 'UpdateFruitStock', component: UpdateFruitStorageComponent },
{ path: 'ViewallFruitStock', component: ViewallFruitStorageComponent },
{ path: 'DeleteFruitStock', component: DeleteFruitStorageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
