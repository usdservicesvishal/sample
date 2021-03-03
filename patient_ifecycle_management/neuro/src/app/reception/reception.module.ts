import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { CreateReceptionComponent } from './create-reception/create-reception.component';
import { UpdateReceptionComponent } from './update-reception/update-reception.component';
import { DeleteReceptionComponent } from './delete-reception/delete-reception.component';
import { ViewAllReceptionComponent } from './view-all-reception/view-all-reception.component';
import { ViewReceptionComponent } from './view-reception/view-reception.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule  , NgForm  } from '@angular/forms';


@NgModule({
  declarations: [ReceptionComponent,
     CreateReceptionComponent, 
     UpdateReceptionComponent, 
     DeleteReceptionComponent,
      ViewAllReceptionComponent, 
      ViewReceptionComponent],
      exports: 
      [ReceptionComponent, 
        CreateReceptionComponent, 
        UpdateReceptionComponent,
         DeleteReceptionComponent,
          ViewAllReceptionComponent,
           ViewReceptionComponent],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    HttpClientModule,
    FormsModule
    

  ]
})
export class ReceptionModule { }
