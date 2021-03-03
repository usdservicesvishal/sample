import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialTestPageRoutingModule } from './special-test-routing.module';

import { SpecialTestPage } from './special-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialTestPageRoutingModule
  ],
  declarations: [SpecialTestPage]
})
export class SpecialTestPageModule {}
