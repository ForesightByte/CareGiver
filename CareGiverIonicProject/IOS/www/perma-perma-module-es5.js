(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perma-perma-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/perma/perma.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/perma/perma.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/relax']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Wellbeing Survey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>I feel helped and supported by others</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"helped==20?'dark':'lightblue'\"\n                        (click)=\"helpedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"helped==40?'dark':'lightblue'\"\n                        (click)=\"helpedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"helped==60?'dark':'lightblue'\"\n                        (click)=\"helpedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"helped==80?'dark':'lightblue'\"\n                        (click)=\"helpedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"helped==100?'dark':'lightblue'\"\n                        (click)=\"helpedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel loved</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"loved==20?'dark':'lightblue'\"\n                        (click)=\"lovedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"loved==40?'dark':'lightblue'\"\n                        (click)=\"lovedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"loved==60?'dark':'lightblue'\"\n                        (click)=\"lovedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"loved==80?'dark':'lightblue'\"\n                        (click)=\"lovedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"loved==100?'dark':'lightblue'\"\n                        (click)=\"lovedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel satisfied with my personal relationships</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"satisfied==20?'dark':'lightblue'\"\n                        (click)=\"satisfiedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"satisfied==40?'dark':'lightblue'\"\n                        (click)=\"satisfiedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"satisfied==60?'dark':'lightblue'\"\n                        (click)=\"satisfiedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"satisfied==80?'dark':'lightblue'\"\n                        (click)=\"satisfiedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"satisfied==100?'dark':'lightblue'\"\n                        (click)=\"satisfiedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I lead a purposeful and meaningful life</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"purposeful==20?'dark':'lightblue'\"\n                        (click)=\"purposefulChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"purposeful==40?'dark':'lightblue'\"\n                        (click)=\"purposefulChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"purposeful==60?'dark':'lightblue'\"\n                        (click)=\"purposefulChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"purposeful==80?'dark':'lightblue'\"\n                        (click)=\"purposefulChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"purposeful==100?'dark':'lightblue'\"\n                        (click)=\"purposefulChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>What I do in my life is valuable and worthwhile</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"valuable==20?'dark':'lightblue'\"\n                        (click)=\"valuableChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"valuable==40?'dark':'lightblue'\"\n                        (click)=\"valuableChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"valuable==60?'dark':'lightblue'\"\n                        (click)=\"valuableChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"valuable==80?'dark':'lightblue'\"\n                        (click)=\"valuableChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"valuable==100?'dark':'lightblue'\"\n                        (click)=\"valuableChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I have a sense of direction in my life</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"sense==20?'dark':'lightblue'\"\n                        (click)=\"senseChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"sense==40?'dark':'lightblue'\"\n                        (click)=\"senseChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"sense==60?'dark':'lightblue'\"\n                        (click)=\"senseChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"sense==80?'dark':'lightblue'\"\n                        (click)=\"senseChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"sense==100?'dark':'lightblue'\"\n                        (click)=\"senseChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am making progress towards accomplishing my goals</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"progress==20?'dark':'lightblue'\"\n                        (click)=\"prgressChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"progress==40?'dark':'lightblue'\"\n                        (click)=\"prgressChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"progress==60?'dark':'lightblue'\"\n                        (click)=\"prgressChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"progress==80?'dark':'lightblue'\"\n                        (click)=\"prgressChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"progress==100?'dark':'lightblue'\"\n                        (click)=\"prgressChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am achieving the important goals I have set for myself</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"achieve==20?'dark':'lightblue'\"\n                        (click)=\"achieveChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"achieve==40?'dark':'lightblue'\"\n                        (click)=\"achieveChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"achieve==60?'dark':'lightblue'\"\n                        (click)=\"achieveChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"achieve==80?'dark':'lightblue'\"\n                        (click)=\"achieveChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"achieve==100?'dark':'lightblue'\"\n                        (click)=\"achieveChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am handling my responsibilities</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"handle==20?'dark':'lightblue'\"\n                        (click)=\"handleChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"handle==40?'dark':'lightblue'\"\n                        (click)=\"handleChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"handle==60?'dark':'lightblue'\"\n                        (click)=\"handleChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"handle==80?'dark':'lightblue'\"\n                        (click)=\"handleChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"handle==100?'dark':'lightblue'\"\n                        (click)=\"handleChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\" \n                (click)=\"submit()\">Submit</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perma.page */ "./src/app/home/ema/perma/perma.page.ts");




var routes = [
    {
        path: '',
        component: _perma_page__WEBPACK_IMPORTED_MODULE_3__["PermaPage"]
    }
];
var PermaPageRoutingModule = /** @class */ (function () {
    function PermaPageRoutingModule() {
    }
    PermaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PermaPageRoutingModule);
    return PermaPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perma-routing.module */ "./src/app/home/ema/perma/perma-routing.module.ts");
/* harmony import */ var _perma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perma.page */ "./src/app/home/ema/perma/perma.page.ts");







var PermaPageModule = /** @class */ (function () {
    function PermaPageModule() {
    }
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
    return PermaPageModule;
}());



/***/ }),

/***/ "./src/app/home/ema/perma/perma.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/ema/perma/perma.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvcGVybWEvcGVybWEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9wZXJtYS9wZXJtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1hL3Blcm1hL3Blcm1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlOyAvLyAgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZycpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKHNyYy9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5waWMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ema.page */ "./src/app/home/ema/ema.page.ts");







var PermaPage = /** @class */ (function () {
    function PermaPage(afStore, auth, router, aRoute, alert, ema) {
        var _this = this;
        this.afStore = afStore;
        this.auth = auth;
        this.router = router;
        this.aRoute = aRoute;
        this.alert = alert;
        this.ema = ema;
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = this.auth.cUid;
        this.aRoute.queryParams.subscribe(function (params) {
            if (params.score) {
                _this.wellbeingScore = params.score;
            }
            else {
                console.log('Parameter error');
            }
        });
    }
    PermaPage.prototype.ngOnInit = function () {
    };
    PermaPage.prototype.helpedChange = function (event) {
        console.log(event);
        return this.helped = event;
    };
    PermaPage.prototype.lovedChange = function (event) {
        console.log(event);
        return this.loved = event;
    };
    PermaPage.prototype.satisfiedChange = function (event) {
        console.log(event);
        return this.satisfied = event;
    };
    PermaPage.prototype.purposefulChange = function (event) {
        console.log(event);
        return this.purposeful = event;
    };
    PermaPage.prototype.valuableChange = function (event) {
        console.log(event);
        return this.valuable = event;
    };
    PermaPage.prototype.senseChange = function (event) {
        console.log(event);
        return this.sense = event;
    };
    PermaPage.prototype.prgressChange = function (event) {
        console.log(event);
        return this.progress = event;
    };
    PermaPage.prototype.achieveChange = function (event) {
        console.log(event);
        return this.achieve = event;
    };
    PermaPage.prototype.handleChange = function (event) {
        console.log(event);
        return this.handle = event;
    };
    PermaPage.prototype.submit = function () {
        var res = this.afStore.doc("users/" + this.uid + "/EMA/" + this.today);
        var res2 = this.afStore.doc("users/" + this.uid);
        var helped = this.helped;
        var loved = this.loved;
        var satisfied = this.satisfied;
        var purposeful = this.purposeful;
        var valuable = this.valuable;
        var sense = this.sense;
        var progress = this.progress;
        var achieve = this.achieve;
        var handle = this.handle;
        var score = helped + loved + satisfied + purposeful + valuable
            + sense + progress + achieve + handle;
        var wellbeingScore = Number(((Number(this.wellbeingScore) + Number(score)) / 17).toFixed(0));
        var data = { helped: helped, loved: loved, satisfied: satisfied, purposeful: purposeful, valuable: valuable, sense: sense, progress: progress, achieve: achieve, handle: handle, wellbeingScore: wellbeingScore };
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
    };
    PermaPage.prototype.showAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alert.create({
                            message: message,
                            buttons: ['OK']
                        });
                        return [4 /*yield*/, alert];
                    case 1: return [4 /*yield*/, (_a.sent()).present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PermaPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"] }
    ]; };
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
    return PermaPage;
}());



/***/ })

}]);
//# sourceMappingURL=perma-perma-module-es5.js.map