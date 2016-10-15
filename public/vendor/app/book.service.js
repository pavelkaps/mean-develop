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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'store/books';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBooksSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getBooks(); });
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks()
            .then(function (books) { return books.find(function (book) { return book._id === id; }); });
    };
    BookService.prototype.update = function (book) {
        var url = this.booksUrl + "/" + book._id;
        return this.http
            .put(url, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.create = function (book) {
        return this.http
            .post(this.booksUrl, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.delete = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map