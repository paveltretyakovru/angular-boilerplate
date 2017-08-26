import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { TasksModule } from './tasks/tasks.module';
import { TasksRoutingModule } from './tasks/tasks-routing.module';

@NgModule({
  imports: [
    FormsModule,
    TasksModule,
    BrowserModule,
    TasksRoutingModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }