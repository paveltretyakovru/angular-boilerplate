import { Task } from './tasks/task/task.model';

export interface AppStore {
  tasks: Task[],
}