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
/**
 * Created by Паша on 13.10.2016.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var book_service_1 = require("./book.service");
var AddBookComponent = (function () {
    function AddBookComponent(bookService) {
        this.bookService = bookService;
        this.bookUpdated = new core_1.EventEmitter();
    }
    AddBookComponent.prototype.save = function (model) {
        var _this = this;
        console.log(model);
        this.bookService.create(model).then(function (book) { return _this.bookUpdated.emit(book); });
        this.addBookForm.reset();
    };
    AddBookComponent.prototype.ngOnInit = function () {
        this.addBookForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(''),
            year: new forms_1.FormControl(''),
            author: new forms_1.FormControl('')
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddBookComponent.prototype, "bookUpdated", void 0);
    AddBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-book',
            templateUrl: 'add-book.component.html',
            styleUrls: ['books.component.css'],
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], AddBookComponent);
    return AddBookComponent;
}());
exports.AddBookComponent = AddBookComponent;
//# sourceMappingURL=add-book.component.js.map