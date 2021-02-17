import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule  , NgForm  } from '@angular/forms';
import { ReceptionModule } from './reception/reception.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReceptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
