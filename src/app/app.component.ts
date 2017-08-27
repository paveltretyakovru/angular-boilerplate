import { Component } from '@angular/core';

import { navRoutes } from './app-routing.module';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent {
  title: string = 'Angular boilerplate';
  navRoutes: any[] = navRoutes;
}