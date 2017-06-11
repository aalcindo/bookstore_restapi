import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { RouterModule }   from '@angular/router';
import {InsertComponent} from './insert.component';
import {DeleteComponent} from './delete.component';

import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule,
                HttpModule,
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
