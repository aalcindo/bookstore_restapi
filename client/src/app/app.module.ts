import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { RouterModule }   from '@angular/router';
import {InsertComponent} from './insert.component';
import {DeleteComponent} from './delete.component';

@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot([{
    path:"insert",
    component: InsertComponent
  },{
    path:"delete",
    component: DeleteComponent
  }
  ])
  
   ],
  declarations: [ AppComponent, InsertComponent, DeleteComponent],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
