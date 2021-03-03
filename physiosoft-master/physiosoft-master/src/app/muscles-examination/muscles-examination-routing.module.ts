import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusclesExaminationPage } from './muscles-examination.page';

const routes: Routes = [
  {
    path: '',
    component: MusclesExaminationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusclesExaminationPageRoutingModule {}
