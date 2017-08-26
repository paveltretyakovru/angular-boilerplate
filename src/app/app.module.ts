import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { TasksModule } from './tasks/tasks.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    FormsModule,
    TasksModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }