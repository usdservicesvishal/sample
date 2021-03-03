import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialTestPage } from './special-test.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialTestPageRoutingModule {}
