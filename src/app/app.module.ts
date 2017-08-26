import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  imports: [
    FormsModule,
    TasksModule,
    BrowserModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }