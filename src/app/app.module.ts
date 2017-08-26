import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material imports
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule, MdIconModule} from '@angular/material';

// Self imports
import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { TasksModule } from './tasks/tasks.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [

    // Angular modules
    FormsModule,
    BrowserModule,
    
    // Self modules
    TasksModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
    
    // Material modules
    MdTabsModule,
    MdIconModule,
    MdToolbarModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }