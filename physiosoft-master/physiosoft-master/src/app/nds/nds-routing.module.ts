import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NdsPage } from './nds.page';

const routes: Routes = [
  {
    path: '',
    component: NdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NdsPageRoutingModule {}
