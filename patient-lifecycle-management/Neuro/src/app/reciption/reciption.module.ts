import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReciptionRoutingModule } from './reciption-routing.module';
import { ReciptionComponent } from './reciption.component';
import { CreateReciptionComponent } from './create-reciption/create-reciption.component';
import { ViewReciptionComponent } from './view-reciption/view-reciption.component';
import { ViewAllReciptionComponent } from './view-all-reciption/view-all-reciption.component';
import { DeleteReciptionComponent } from './delete-reciption/delete-reciption.component';
import { UpdateReciptionComponent } from './update-reciption/update-reciption.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReciptionComponent, CreateReciptionComponent, ViewReciptionComponent, ViewAllReciptionComponent, DeleteReciptionComponent, UpdateReciptionComponent],
  imports: [
    CommonModule,
    ReciptionRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ReciptionModule { }
