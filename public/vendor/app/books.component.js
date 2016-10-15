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
var book_1 = require('./book');
var book_service_1 = require('./book.service');
var BooksComponent = (function () {
    function BooksComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
    }
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        console.log(this.selectedBook.title);
        console.log(this.selectedBook._id);
    };
    BooksComponent.prototype.bookUpdated = function (book) {
        this.books.push(book);
    };
    BooksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedBook._id]);
    };
    //title: string, year: string, author: string
    BooksComponent.prototype.add = function (title) {
        var _this = this;
        var newBook = new book_1.Book;
        console.log(title);
        newBook.title = title;
        newBook.year = 1899;
        newBook.author = "N/A";
        if (!title) {
            return;
        }
        this.bookService.create(newBook)
            .then(function (book) {
            _this.books.push(book);
            _this.selectedBook = null;
        });
    };
    BooksComponent.prototype.delete = function (title) {
        var _this = this;
        this.bookService.delete(title._id)
            .then(function () {
            _this.books = _this.books.filter(function (h) { return h !== title; });
            if (_this.selectedBook === title) {
                _this.selectedBook = null;
            }
            ;
        });
    };
    BooksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'books.component.html',
            styleUrls: ['books.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_service_1.BookService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=books.component.js.map