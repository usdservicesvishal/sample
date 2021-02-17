import { TodoModule } from './todo/todo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserkycComponent } from './userkyc/userkyc.component';
import { NewkycformComponent } from './newkycform/newkycform.component';
import { CustomvalidationComponent } from './services/customvalidation/customvalidation.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    UserkycComponent,
    NewkycformComponent,
    CustomvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
