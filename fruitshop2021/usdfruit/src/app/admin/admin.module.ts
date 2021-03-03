import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateFruitStorageComponent } from './create-fruit-storage/create-fruit-storage.component';
import { ViewFruitStorageComponent } from './view-fruit-storage/view-fruit-storage.component';
import { ViewallFruitStorageComponent } from './viewall-fruit-storage/viewall-fruit-storage.component';
import { UpdateFruitStorageComponent } from './update-fruit-storage/update-fruit-storage.component';
import { DeleteFruitStorageComponent } from './delete-fruit-storage/delete-fruit-storage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent,
    CreateFruitStorageComponent,
    ViewFruitStorageComponent,
    ViewallFruitStorageComponent,
    UpdateFruitStorageComponent,
    DeleteFruitStorageComponent,],

    exports:[
      AdminComponent,
    CreateFruitStorageComponent,
    ViewFruitStorageComponent,
    ViewallFruitStorageComponent,
    UpdateFruitStorageComponent,
    DeleteFruitStorageComponent,
    ],


  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
