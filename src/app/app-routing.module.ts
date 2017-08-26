import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksRouting } from './tasks/tasks.routing';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tasks',
    children: TasksRouting,
  },
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);