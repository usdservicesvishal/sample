import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';



@NgModule({
  declarations: [TaskComponent, CompletedTaskComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
