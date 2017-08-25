import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  template: `
    <main>
      Hello, {{user.name}}!
      <div>
        <label>Or other name? </label>
        <input [(ngModel)]="user.name" placeholder="name">
      </div>
      <h1>{{title}}</h1>
    </main>
  `
})

export class AppComponent {
  title = 'Angular boilerplate';
  user: User = {
    id: 1,
    name: 'Pavel',
  };
}