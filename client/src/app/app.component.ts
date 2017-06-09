import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <a routerLink="/insert">insert</a>
            <a routerLink="/delete">delete</a>
           <router-outlet></router-outlet>

  
  `
})
export class AppComponent { name = 'Angular'; }
