(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relax-relax-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/relax/relax.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/relax/relax.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/ema/extra']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>How relaxed do you feel right now? </p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==20?'dark':'lightblue'\"\n                        (click)=\"relaxChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==40?'dark':'lightblue'\"\n                        (click)=\"relaxChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==60?'dark':'lightblue'\"\n                        (click)=\"relaxChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==80?'dark':'lightblue'\"\n                        (click)=\"relaxChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==100?'dark':'lightblue'\"\n                        (click)=\"relaxChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling joyful</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not much</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==20?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==40?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==60?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==80?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==100?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Very much</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling positive</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==20?'dark':'lightblue'\"\n                        (click)=\"positiveChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==40?'dark':'lightblue'\"\n                        (click)=\"positiveChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==60?'dark':'lightblue'\"\n                        (click)=\"positiveChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==80?'dark':'lightblue'\"\n                        (click)=\"positiveChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==100?'dark':'lightblue'\"\n                        (click)=\"positiveChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling contented</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not much</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==20?'dark':'lightblue'\"\n                        (click)=\"contentedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==40?'dark':'lightblue'\"\n                        (click)=\"contentedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==60?'dark':'lightblue'\"\n                        (click)=\"contentedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==80?'dark':'lightblue'\"\n                        (click)=\"contentedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==100?'dark':'lightblue'\"\n                        (click)=\"contentedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Very much</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I was absorbed in what I was doing</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==20?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==40?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==60?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==80?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==100?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I felt excited and interested in the things around me</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==20?'dark':'lightblue'\"\n                        (click)=\"excitedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==40?'dark':'lightblue'\"\n                        (click)=\"excitedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==60?'dark':'lightblue'\"\n                        (click)=\"excitedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==80?'dark':'lightblue'\"\n                        (click)=\"excitedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==100?'dark':'lightblue'\"\n                        (click)=\"excitedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I had lost track of time because of what I was doing?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Not well</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==20?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==40?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==60?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==80?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==100?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">Really well</ion-text>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\" \n                (click)=\"submit()\">Next</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/home/ema/relax/relax-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/ema/relax/relax-routing.module.ts ***!
  \********************************************************/
/*! exports provided: RelaxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelaxPageRoutingModule", function() { return RelaxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _relax_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relax.page */ "./src/app/home/ema/relax/relax.page.ts");




var routes = [
    {
        path: '',
        component: _relax_page__WEBPACK_IMPORTED_MODULE_3__["RelaxPage"]
    }
];
var RelaxPageRoutingModule = /** @class */ (function () {
    function RelaxPageRoutingModule() {
    }
    RelaxPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RelaxPageRoutingModule);
    return RelaxPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/ema/relax/relax.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/ema/relax/relax.module.ts ***!
  \************************************************/
/*! exports provided: RelaxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelaxPageModule", function() { return RelaxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relax_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relax-routing.module */ "./src/app/home/ema/relax/relax-routing.module.ts");
/* harmony import */ var _relax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relax.page */ "./src/app/home/ema/relax/relax.page.ts");







var RelaxPageModule = /** @class */ (function () {
    function RelaxPageModule() {
    }
    RelaxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _relax_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelaxPageRoutingModule"]
            ],
            declarations: [_relax_page__WEBPACK_IMPORTED_MODULE_6__["RelaxPage"]]
        })
    ], RelaxPageModule);
    return RelaxPageModule;
}());



/***/ }),

/***/ "./src/app/home/ema/relax/relax.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/ema/relax/relax.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvcmVsYXgvcmVsYXgucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9yZWxheC9yZWxheC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1hL3JlbGF4L3JlbGF4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlOyAvLyAgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZycpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKHNyYy9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5waWMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/ema/relax/relax.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/ema/relax/relax.page.ts ***!
  \**********************************************/
/*! exports provided: RelaxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelaxPage", function() { return RelaxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ema.page */ "./src/app/home/ema/ema.page.ts");







var RelaxPage = /** @class */ (function () {
    function RelaxPage(afStore, auth, router, alert, ema) {
        this.afStore = afStore;
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.ema = ema;
        var date = new Date();
        var dd = String(date.getUTCDate()).padStart(2, '0');
        var mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        var yyyy = date.getUTCFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = auth.cUid;
    }
    RelaxPage.prototype.relaxChange = function (event) {
        console.log(event);
        return this.relax = event;
    };
    RelaxPage.prototype.joyfulChange = function (event) {
        console.log(event);
        return this.joyful = event;
    };
    RelaxPage.prototype.positiveChange = function (event) {
        console.log(event);
        return this.positive = event;
    };
    RelaxPage.prototype.contentedChange = function (event) {
        console.log(event);
        return this.contented = event;
    };
    RelaxPage.prototype.absorbedChange = function (event) {
        console.log(event);
        return this.absorbed = event;
    };
    RelaxPage.prototype.excitedChange = function (event) {
        console.log(event);
        return this.excited = event;
    };
    RelaxPage.prototype.lostTrackChange = function (event) {
        console.log(event);
        return this.lostTrack = event;
    };
    RelaxPage.prototype.ngOnInit = function () {
    };
    RelaxPage.prototype.submit = function () {
        var res = this.afStore.doc("users/" + this.uid + "/EMA/" + this.today);
        var date = this.today;
        var relax = this.relax;
        var joyful = this.joyful;
        var positive = this.positive;
        var contented = this.contented;
        var absorbed = this.absorbed;
        var excited = this.excited;
        var lostTrack = this.lostTrack;
        var data = { relax: relax, joyful: joyful, positive: positive, contented: contented, absorbed: absorbed, excited: excited, lostTrack: lostTrack, date: date };
        var score = relax + joyful + positive + contented + absorbed + excited + lostTrack;
        var navExtras = {
            queryParams: { score: JSON.stringify(score) }
        };
        try {
            res.set(data, { merge: true });
            this.router.navigate(['/ema/perma'], navExtras);
        }
        catch (err) {
            console.log('Please answer all questions');
            this.showAlert('Please answer all questions');
        }
    };
    RelaxPage.prototype.showAlert = function (message) {
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
    RelaxPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"] }
    ]; };
    RelaxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relax',
            template: __webpack_require__(/*! raw-loader!./relax.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/ema/relax/relax.page.html"),
            styles: [__webpack_require__(/*! ./relax.page.scss */ "./src/app/home/ema/relax/relax.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"]])
    ], RelaxPage);
    return RelaxPage;
}());



/***/ })

}]);
//# sourceMappingURL=relax-relax-module-es5.js.map