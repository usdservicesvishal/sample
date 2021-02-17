import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VishalRoutingModule } from './vishal-routing.module';
import { VishalComponent } from './vishal.component';


@NgModule({
  declarations: [VishalComponent],
  imports: [
    CommonModule,
    VishalRoutingModule
  ]
})
export class VishalModule { }
