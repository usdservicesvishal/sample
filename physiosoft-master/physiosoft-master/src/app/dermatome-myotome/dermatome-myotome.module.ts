import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatomeMyotomePageRoutingModule } from './dermatome-myotome-routing.module';

import { DermatomeMyotomePage } from './dermatome-myotome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermatomeMyotomePageRoutingModule
  ],
  declarations: [DermatomeMyotomePage]
})
export class DermatomeMyotomePageModule {}
