import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeuroreciptionRoutingModule } from './neuroreciption-routing.module';
import { NeuroreciptionComponent } from './neuroreciption.component';
import { CreatereciptionComponent } from './createreciption/createreciption.component';
import { ViewreciptionComponent } from './viewreciption/viewreciption.component';
import { ViewallreciptionComponent } from './viewallreciption/viewallreciption.component';
import { DeletereciptionComponent } from './deletereciption/deletereciption.component';
import { UpdatereciptionComponent } from './updatereciption/updatereciption.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NeuroreciptionComponent,
    CreatereciptionComponent,
     ViewreciptionComponent,
     ViewallreciptionComponent,
      DeletereciptionComponent,
       UpdatereciptionComponent],

       exports:[
        NeuroreciptionComponent,
        CreatereciptionComponent,
         ViewreciptionComponent,
         ViewallreciptionComponent,
          DeletereciptionComponent,
           UpdatereciptionComponent

       ],

  imports: [
    CommonModule,
    NeuroreciptionRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class NeuroreciptionModule { }
