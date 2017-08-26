import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from './task/task.model';
import { ADD_TASK } from './tasks.constants';
import { AppStore } from '../app-store.model';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
  tasks: Observable<Task[]>;
  newTask: Task = {id: 0, title: ''};

  constructor(private store: Store<AppStore>) {
    this.tasks = store.select('tasks');
  }

  addTask() {
    this.store.dispatch({type: ADD_TASK, payload: this.newTask});
  }
}