import { Component } from '@angular/core';

import { navRoutes } from './app-routing.module';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent {
  user: User = { id: 1, name: 'Pavel' };
  title: string = 'Angular boilerplate';
  navRoutes: any[] = navRoutes;
}