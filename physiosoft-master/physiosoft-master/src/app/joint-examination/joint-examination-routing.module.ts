import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JointExaminationPage } from './joint-examination.page';

const routes: Routes = [
  {
    path: '',
    component: JointExaminationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JointExaminationPageRoutingModule {}
