import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeuroreciptionModule } from './neuroreciption/neuroreciption.module';
import { NeuroreciptionService } from './neuroreciption/neuroreciption.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NeuroreciptionModule
  ],
  providers: [NeuroreciptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
