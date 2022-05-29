(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relax-relax-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/relax/relax.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/relax/relax.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/ema/extra']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>How relaxed do you feel right now? </p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"relaxChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling joyful right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"joyfulChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling positive right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"positiveChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am feeling contented right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"contentedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I was absorbed in what I was doing</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"absorbedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I felt excited and interested in the things around me</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"excitedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Right before I received this notification, I had lost track of time because of what I was doing?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"lostTrackChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\" \n                (click)=\"submit()\">Next</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n}\n\nion-row {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvcmVsYXgvcmVsYXgucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9yZWxheC9yZWxheC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9lbWEvcmVsYXgvcmVsYXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7IC8vICB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy93aGl0ZWxlYWYuanBnJykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoc3JjL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

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
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = auth.cUid;
    }
    relaxChange(event) {
        return this.relax = event.detail.value;
    }
    joyfulChange(event) {
        return this.joyful = event.detail.value;
    }
    positiveChange(event) {
        return this.positive = event.detail.value;
    }
    contentedChange(event) {
        return this.contented = event.detail.value;
    }
    absorbedChange(event) {
        return this.absorbed = event.detail.value;
    }
    excitedChange(event) {
        return this.excited = event.detail.value;
    }
    lostTrackChange(event) {
        return this.lostTrack = event.detail.value;
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