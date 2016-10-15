import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { BookDetailComponent }  from './book-detail.component';
import { BooksComponent }      from './books.component';
import { BookService }          from './book.service';
import { routing } from './app.routing';
import './rxjs-extensions';
import {BookSearchComponent} from "./book-search.component";
import {AddBookComponent} from "./add-book.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    BooksComponent,
    BookSearchComponent,
    AddBookComponent,
  ],
  providers: [
    BookService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/