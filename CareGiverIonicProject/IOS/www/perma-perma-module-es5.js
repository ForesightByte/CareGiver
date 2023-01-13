(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perma-perma-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/perma/perma.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/perma/perma.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/relax']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Wellbeing Survey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>I feel helped and supported by others right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"helpedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel loved right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"lovedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel satisfied with my personal relationships right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"satisfiedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I lead a purposeful and meaningful life right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"purposefulChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>What I do in my life is valuable and worthwhile right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"valuableChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I have a sense of direction in my life right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"senseChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am making progress towards accomplishing my goals right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"prgressChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am achieving the important goals I have set for myself right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"achieveChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am handling my responsibilities right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"handleChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\" \n                (click)=\"submit()\">Submit</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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

module.exports = "ion-content {\n  --background:white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n}\n\nion-row {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvcGVybWEvcGVybWEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9wZXJtYS9wZXJtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9lbWEvcGVybWEvcGVybWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7IC8vICB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy93aGl0ZWxlYWYuanBnJykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoc3JjL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

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
        var time = date.getHours();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.today4EMA = yyyy + '-' + mm + '-' + dd + '_' + time;
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
        return this.helped = event.detail.value;
    };
    PermaPage.prototype.lovedChange = function (event) {
        return this.loved = event.detail.value;
    };
    PermaPage.prototype.satisfiedChange = function (event) {
        return this.satisfied = event.detail.value;
    };
    PermaPage.prototype.purposefulChange = function (event) {
        return this.purposeful = event.detail.value;
    };
    PermaPage.prototype.valuableChange = function (event) {
        return this.valuable = event.detail.value;
    };
    PermaPage.prototype.senseChange = function (event) {
        return this.sense = event.detail.value;
    };
    PermaPage.prototype.prgressChange = function (event) {
        return this.progress = event.detail.value;
    };
    PermaPage.prototype.achieveChange = function (event) {
        return this.achieve = event.detail.value;
    };
    PermaPage.prototype.handleChange = function (event) {
        return this.handle = event.detail.value;
    };
    PermaPage.prototype.submit = function () {
        var res = this.afStore.doc("users/" + this.uid);
        var res2 = this.afStore.doc("users/" + this.uid + "/EMA/" + this.today);
        var res3 = this.afStore.doc("users/" + this.uid + "/EMA/" + this.today4EMA);
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
            res3.set(data, { merge: true });
            // tslint:disable-next-line: object-literal-shorthand
            res2.set(data, { merge: true });
            res.set({ wellbeingScore: wellbeingScore }, { merge: true });
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