"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var books_component_1 = require('./books.component');
var book_detail_component_1 = require('./book-detail.component');
var add_book_component_1 = require('./add-book.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: book_detail_component_1.BookDetailComponent
    },
    {
        path: 'books',
        component: books_component_1.BooksComponent
    },
    {
        path: 'new',
        component: add_book_component_1.AddBookComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map