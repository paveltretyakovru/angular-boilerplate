import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from './task/task.model';
import { AppStore } from '../app-store.model';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
  tasks: Observable<Task[]>;

  constructor(private store: Store<AppStore>) {
    this.tasks = store.select('tasks');
  }
}