(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relax-relax-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/relax/relax.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/relax/relax.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/ema/extra']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>How relaxed do you feel right now? </p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==20?'dark':'lightblue'\"\n                        (click)=\"relaxChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==40?'dark':'lightblue'\"\n                        (click)=\"relaxChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==60?'dark':'lightblue'\"\n                        (click)=\"relaxChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==80?'dark':'lightblue'\"\n                        (click)=\"relaxChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"relax==100?'dark':'lightblue'\"\n                        (click)=\"relaxChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling joyful</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==20?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==40?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==60?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==80?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"joyful==100?'dark':'lightblue'\"\n                        (click)=\"joyfulChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling positive</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==20?'dark':'lightblue'\"\n                        (click)=\"positiveChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==40?'dark':'lightblue'\"\n                        (click)=\"positiveChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==60?'dark':'lightblue'\"\n                        (click)=\"positiveChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==80?'dark':'lightblue'\"\n                        (click)=\"positiveChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"positive==100?'dark':'lightblue'\"\n                        (click)=\"positiveChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling contented</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==20?'dark':'lightblue'\"\n                        (click)=\"contentedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==40?'dark':'lightblue'\"\n                        (click)=\"contentedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==60?'dark':'lightblue'\"\n                        (click)=\"contentedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==80?'dark':'lightblue'\"\n                        (click)=\"contentedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"contented==100?'dark':'lightblue'\"\n                        (click)=\"contentedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>When I noticed the text message, I was absorbed in what I was doing</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==20?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==40?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==60?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==80?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"absorbed==100?'dark':'lightblue'\"\n                        (click)=\"absorbedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>When I noticed the text message, I felt excited and interested in the things around me</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==20?'dark':'lightblue'\"\n                        (click)=\"excitedChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==40?'dark':'lightblue'\"\n                        (click)=\"excitedChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==60?'dark':'lightblue'\"\n                        (click)=\"excitedChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==80?'dark':'lightblue'\"\n                        (click)=\"excitedChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"excited==100?'dark':'lightblue'\"\n                        (click)=\"excitedChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n    <div>\n      <p>When I noticed the text message, I had lost track of time because of what I was doing?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==20?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==40?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==60?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==80?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"lostTrack==100?'dark':'lightblue'\"\n                        (click)=\"lostTrackChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" style=\"color: rgb(7, 156, 161);\" (click)=\"submit()\">Next</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _relax_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relax.page */ "./src/app/home/ema/relax/relax.page.ts");




const routes = [
    {
        path: '',
        component: _relax_page__WEBPACK_IMPORTED_MODULE_3__["RelaxPage"]
    }
];
let RelaxPageRoutingModule = class RelaxPageRoutingModule {
};
RelaxPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelaxPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relax_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relax-routing.module */ "./src/app/home/ema/relax/relax-routing.module.ts");
/* harmony import */ var _relax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relax.page */ "./src/app/home/ema/relax/relax.page.ts");







let RelaxPageModule = class RelaxPageModule {
};
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



/***/ }),

/***/ "./src/app/home/ema/relax/relax.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/ema/relax/relax.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvZW1hL3JlbGF4L3JlbGF4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9lbWEvcmVsYXgvcmVsYXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VtYS9yZWxheC9yZWxheC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTsgLy8gIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3doaXRlbGVhZi5qcGcnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybChzcmMvYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5waWMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ema.page */ "./src/app/home/ema/ema.page.ts");







let RelaxPage = class RelaxPage {
    constructor(afStore, auth, router, alert, ema) {
        this.afStore = afStore;
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.ema = ema;
        const date = new Date();
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const yyyy = date.getUTCFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = auth.cUid;
    }
    relaxChange(event) {
        console.log(event);
        return this.relax = event;
    }
    joyfulChange(event) {
        console.log(event);
        return this.joyful = event;
    }
    positiveChange(event) {
        console.log(event);
        return this.positive = event;
    }
    contentedChange(event) {
        console.log(event);
        return this.contented = event;
    }
    absorbedChange(event) {
        console.log(event);
        return this.absorbed = event;
    }
    excitedChange(event) {
        console.log(event);
        return this.excited = event;
    }
    lostTrackChange(event) {
        console.log(event);
        return this.lostTrack = event;
    }
    ngOnInit() {
    }
    submit() {
        const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
        const date = this.today;
        const relax = this.relax;
        const joyful = this.joyful;
        const positive = this.positive;
        const contented = this.contented;
        const absorbed = this.absorbed;
        const excited = this.excited;
        const lostTrack = this.lostTrack;
        const data = { relax, joyful, positive, contented, absorbed, excited, lostTrack, date };
        const score = relax + joyful + positive + contented + absorbed + excited + lostTrack;
        const navExtras = {
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
RelaxPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"] }
];
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



/***/ })

}]);
//# sourceMappingURL=relax-relax-module-es2015.js.map