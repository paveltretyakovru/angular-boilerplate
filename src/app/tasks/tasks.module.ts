import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ TasksComponent ],
  declarations: [ TasksComponent, TasksListComponent ],
})
export class TasksModule {}