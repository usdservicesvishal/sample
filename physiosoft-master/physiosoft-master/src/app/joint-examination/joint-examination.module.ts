import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JointExaminationPageRoutingModule } from './joint-examination-routing.module';

import { JointExaminationPage } from './joint-examination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JointExaminationPageRoutingModule
  ],
  declarations: [JointExaminationPage]
})
export class JointExaminationPageModule {}
