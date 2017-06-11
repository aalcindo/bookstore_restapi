import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `<h1 (click)="run()" >Hello {{name}}</h1>
            <a routerLink="/insert">insert</a>
            <a routerLink="/delete">delete</a>
           <router-outlet></router-outlet>
  `,
  providers:[HeroService]
})
export class AppComponent implements OnInit{ 
  
  name = 'Angular';
  heroes:Hero[]; 

  constructor(private _heroService:HeroService){}

  ngOnInit():any{
      this._heroService.getHeroes().then(
        (responce)=>console.log(responce)
        //(responce)=>this.heroes =  responce
      );
  }

  run = function(){
    console.log("here");
    console.log(this.hero);
  }

}
