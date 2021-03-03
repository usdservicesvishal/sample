import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermatomeMyotomePage } from './dermatome-myotome.page';

const routes: Routes = [
  {
    path: '',
    component: DermatomeMyotomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermatomeMyotomePageRoutingModule {}
