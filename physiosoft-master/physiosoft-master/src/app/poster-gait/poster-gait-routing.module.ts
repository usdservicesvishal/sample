import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosterGaitPage } from './poster-gait.page';

const routes: Routes = [
  {
    path: '',
    component: PosterGaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosterGaitPageRoutingModule {}
