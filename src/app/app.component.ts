import { Component } from '@angular/core';

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
  title = 'Angular boilerplate';
  user: User = {
    id: 1,
    name: 'Pavel',
  };
}