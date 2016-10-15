"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var book_service_1 = require('./book.service');
var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            console.log(id);
            _this.bookService.getBook(id.toString())
                .then(function (book) { return _this.book = book; });
        });
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService.update(this.book)
            .then(function () { return _this.goBack(); });
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-detail',
            templateUrl: 'book-detail.component.html',
            styleUrls: ['book-detail.component.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_1.ActivatedRoute, common_1.Location])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=book-detail.component.js.map