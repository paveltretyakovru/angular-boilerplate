import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    Hello, {{user.name}}!
  `
})

export class AppComponent {
  title = 'Angular boilerplate';
  user: User = {
    id: 1,
    name: 'Pavel',
  };
}