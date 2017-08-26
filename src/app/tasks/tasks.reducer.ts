import { Action } from '@ngrx/store';

import { ADD_TASK } from './tasks.constants';
import { Task } from './task/task.model';

export const tasksReducer = (
  state: Task[] = [
    {id: 1, title: 'test 1'},
    {id: 2, title: 'test 2'},
  ],
  action: { type: string, payload: any }
) => {
  switch(action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
};