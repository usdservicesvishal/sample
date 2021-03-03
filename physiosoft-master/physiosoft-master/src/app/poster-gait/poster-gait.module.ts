import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosterGaitPageRoutingModule } from './poster-gait-routing.module';

import { PosterGaitPage } from './poster-gait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosterGaitPageRoutingModule
  ],
  declarations: [PosterGaitPage]
})
export class PosterGaitPageModule {}
