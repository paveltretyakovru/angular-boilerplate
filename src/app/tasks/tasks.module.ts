import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ TasksComponent ],
  declarations: [ TasksComponent, TasksListComponent ],
})
export class TasksModule {}