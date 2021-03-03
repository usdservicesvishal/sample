import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NdsPageRoutingModule } from './nds-routing.module';

import { NdsPage } from './nds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NdsPageRoutingModule
  ],
  declarations: [NdsPage]
})
export class NdsPageModule {}
