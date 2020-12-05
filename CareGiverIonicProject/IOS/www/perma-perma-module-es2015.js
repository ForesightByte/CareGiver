(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perma-perma-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/perma/perma.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/perma/perma.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;\">Perma Profiler</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"questions\">\r\n    <div>\r\n      <p>I feel helped and supported by others</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"helped==20?'dark':'lightblue'\"\r\n                        (click)=\"helpedChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"helped==40?'dark':'lightblue'\"\r\n                        (click)=\"helpedChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"helped==60?'dark':'lightblue'\"\r\n                        (click)=\"helpedChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"helped==80?'dark':'lightblue'\"\r\n                        (click)=\"helpedChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"helped==100?'dark':'lightblue'\"\r\n                        (click)=\"helpedChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I feel loved</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"loved==20?'dark':'lightblue'\"\r\n                        (click)=\"lovedChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"loved==40?'dark':'lightblue'\"\r\n                        (click)=\"lovedChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"loved==60?'dark':'lightblue'\"\r\n                        (click)=\"lovedChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"loved==80?'dark':'lightblue'\"\r\n                        (click)=\"lovedChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"loved==100?'dark':'lightblue'\"\r\n                        (click)=\"lovedChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I feel satisfied with my personal relationships</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"satisfied==20?'dark':'lightblue'\"\r\n                        (click)=\"satisfiedChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"satisfied==40?'dark':'lightblue'\"\r\n                        (click)=\"satisfiedChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"satisfied==60?'dark':'lightblue'\"\r\n                        (click)=\"satisfiedChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"satisfied==80?'dark':'lightblue'\"\r\n                        (click)=\"satisfiedChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"satisfied==100?'dark':'lightblue'\"\r\n                        (click)=\"satisfiedChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I lead a purposeful and meaningful life</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"purposeful==20?'dark':'lightblue'\"\r\n                        (click)=\"purposefulChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"purposeful==40?'dark':'lightblue'\"\r\n                        (click)=\"purposefulChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"purposeful==60?'dark':'lightblue'\"\r\n                        (click)=\"purposefulChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"purposeful==80?'dark':'lightblue'\"\r\n                        (click)=\"purposefulChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"purposeful==100?'dark':'lightblue'\"\r\n                        (click)=\"purposefulChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>What I do in my life is valuable and worthwhile</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"valuable==20?'dark':'lightblue'\"\r\n                        (click)=\"valuableChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"valuable==40?'dark':'lightblue'\"\r\n                        (click)=\"valuableChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"valuable==60?'dark':'lightblue'\"\r\n                        (click)=\"valuableChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"valuable==80?'dark':'lightblue'\"\r\n                        (click)=\"valuableChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"valuable==100?'dark':'lightblue'\"\r\n                        (click)=\"valuableChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I have a sense of direction in my life</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"sense==20?'dark':'lightblue'\"\r\n                        (click)=\"senseChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"sense==40?'dark':'lightblue'\"\r\n                        (click)=\"senseChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"sense==60?'dark':'lightblue'\"\r\n                        (click)=\"senseChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"sense==80?'dark':'lightblue'\"\r\n                        (click)=\"senseChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"sense==100?'dark':'lightblue'\"\r\n                        (click)=\"senseChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I am making progress towards accomplishing my goals</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"progress==20?'dark':'lightblue'\"\r\n                        (click)=\"prgressChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"progress==40?'dark':'lightblue'\"\r\n                        (click)=\"prgressChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"progress==60?'dark':'lightblue'\"\r\n                        (click)=\"prgressChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"progress==80?'dark':'lightblue'\"\r\n                        (click)=\"prgressChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"progress==100?'dark':'lightblue'\"\r\n                        (click)=\"prgressChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I am achieving the important goals I have set for myself</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"achieve==20?'dark':'lightblue'\"\r\n                        (click)=\"achieveChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"achieve==40?'dark':'lightblue'\"\r\n                        (click)=\"achieveChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"achieve==60?'dark':'lightblue'\"\r\n                        (click)=\"achieveChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"achieve==80?'dark':'lightblue'\"\r\n                        (click)=\"achieveChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"achieve==100?'dark':'lightblue'\"\r\n                        (click)=\"achieveChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>I am handling my responsibilities</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"handle==20?'dark':'lightblue'\"\r\n                        (click)=\"handleChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"handle==40?'dark':'lightblue'\"\r\n                        (click)=\"handleChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"handle==60?'dark':'lightblue'\"\r\n                        (click)=\"handleChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"handle==80?'dark':'lightblue'\"\r\n                        (click)=\"handleChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"handle==100?'dark':'lightblue'\"\r\n                        (click)=\"handleChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-tab-bar>\r\n  <ion-buttons>\r\n    <ion-button expand=\"block\" fill=\"clear\" style=\"color: rgb(7, 156, 161);\" (click)=\"submit()\">Submit</ion-button>\r\n  </ion-buttons>\r\n</ion-tab-bar>\r\n"

/***/ }),

/***/ "./src/app/home/ema/perma/perma-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/ema/perma/perma-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PermaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermaPageRoutingModule", function() { return PermaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perma.page */ "./src/app/home/ema/perma/perma.page.ts");




const routes = [
    {
        path: '',
        component: _perma_page__WEBPACK_IMPORTED_MODULE_3__["PermaPage"]
    }
];
let PermaPageRoutingModule = class PermaPageRoutingModule {
};
PermaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PermaPageRoutingModule);



/***/ }),

/***/ "./src/app/home/ema/perma/perma.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/ema/perma/perma.module.ts ***!
  \************************************************/
/*! exports provided: PermaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermaPageModule", function() { return PermaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perma-routing.module */ "./src/app/home/ema/perma/perma-routing.module.ts");
/* harmony import */ var _perma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perma.page */ "./src/app/home/ema/perma/perma.page.ts");







let PermaPageModule = class PermaPageModule {
};
PermaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perma_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermaPageRoutingModule"]
        ],
        declarations: [_perma_page__WEBPACK_IMPORTED_MODULE_6__["PermaPage"]]
    })
], PermaPageModule);



/***/ }),

/***/ "./src/app/home/ema/perma/perma.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/ema/perma/perma.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lbWEvcGVybWEvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxcaG9tZVxcZW1hXFxwZXJtYVxccGVybWEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9wZXJtYS9wZXJtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1hL3Blcm1hL3Blcm1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6d2hpdGU7IC8vICB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy93aGl0ZWxlYWYuanBnJykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybChzcmMvYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5waWMge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/ema/perma/perma.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/ema/perma/perma.page.ts ***!
  \**********************************************/
/*! exports provided: PermaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermaPage", function() { return PermaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ema.page */ "./src/app/home/ema/ema.page.ts");







let PermaPage = class PermaPage {
    constructor(afStore, auth, router, aRoute, alert, ema) {
        this.afStore = afStore;
        this.auth = auth;
        this.router = router;
        this.aRoute = aRoute;
        this.alert = alert;
        this.ema = ema;
        const date = new Date();
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const yyyy = date.getUTCFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = this.auth.cUid;
        this.aRoute.queryParams.subscribe(params => {
            if (params.score) {
                this.wellbeingScore = params.score;
            }
            else {
                console.log('Parameter error');
            }
        });
    }
    ngOnInit() {
    }
    helpedChange(event) {
        console.log(event);
        return this.helped = event;
    }
    lovedChange(event) {
        console.log(event);
        return this.loved = event;
    }
    satisfiedChange(event) {
        console.log(event);
        return this.satisfied = event;
    }
    purposefulChange(event) {
        console.log(event);
        return this.purposeful = event;
    }
    valuableChange(event) {
        console.log(event);
        return this.valuable = event;
    }
    senseChange(event) {
        console.log(event);
        return this.sense = event;
    }
    prgressChange(event) {
        console.log(event);
        return this.progress = event;
    }
    achieveChange(event) {
        console.log(event);
        return this.achieve = event;
    }
    handleChange(event) {
        console.log(event);
        return this.handle = event;
    }
    submit() {
        const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
        const res2 = this.afStore.doc(`users/${this.uid}`);
        const helped = this.helped;
        const loved = this.loved;
        const satisfied = this.satisfied;
        const purposeful = this.purposeful;
        const valuable = this.valuable;
        const sense = this.sense;
        const progress = this.progress;
        const achieve = this.achieve;
        const handle = this.handle;
        const score = helped + loved + satisfied + purposeful + valuable
            + sense + progress + achieve + handle;
        const wellbeingScore = Number(((Number(this.wellbeingScore) + Number(score)) / 17).toFixed(0));
        const data = { helped, loved, satisfied, purposeful, valuable, sense, progress, achieve, handle, wellbeingScore };
        try {
            res.set(data, { merge: true });
            // tslint:disable-next-line: object-literal-shorthand
            res2.set({ wellbeingScore: wellbeingScore }, { merge: true });
            this.showAlert('Thank you for your participation! Your contribution matters');
            this.router.navigate(['/tabs']);
        }
        catch (err) {
            console.log('Please answer all questions');
            this.showAlert('Please answer all questions');
        }
    }
    showAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = this.alert.create({
                message,
                buttons: ['OK']
            });
            yield (yield alert).present();
        });
    }
};
PermaPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"] }
];
PermaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perma',
        template: __webpack_require__(/*! raw-loader!./perma.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/ema/perma/perma.page.html"),
        styles: [__webpack_require__(/*! ./perma.page.scss */ "./src/app/home/ema/perma/perma.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"]])
], PermaPage);



/***/ })

}]);
//# sourceMappingURL=perma-perma-module-es2015.js.map