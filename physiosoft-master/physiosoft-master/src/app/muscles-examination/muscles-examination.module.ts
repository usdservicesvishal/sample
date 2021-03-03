import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusclesExaminationPageRoutingModule } from './muscles-examination-routing.module';

import { MusclesExaminationPage } from './muscles-examination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusclesExaminationPageRoutingModule
  ],
  declarations: [MusclesExaminationPage]
})
export class MusclesExaminationPageModule {}
