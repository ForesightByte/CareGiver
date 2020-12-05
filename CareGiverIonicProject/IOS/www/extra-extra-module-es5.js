(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/extra/extra.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/extra/extra.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <div>\r\n      <ion-radio-group [(ngModel)]=\"where\">\r\n        <ion-list-header style=\"font-size: large;\">\r\n          <ion-label>Where are you right now?</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>At home</ion-label>\r\n          <ion-radio slot=\"start\" value=\"At home\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>At work</ion-label>\r\n          <ion-radio slot=\"start\" value=\"At work\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>At hospital</ion-label>\r\n          <ion-radio slot=\"start\" value=\"At hospital\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Other:</ion-label>\r\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\r\n          <ion-input [(ngModel)]=\"other1\"></ion-input>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n    <div>\r\n      <ion-radio-group [(ngModel)]=\"who\">\r\n        <ion-list-header style=\"font-size: large;\">\r\n          <ion-label>Who are you with right now?</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Alone</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Alone\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>With the patient</ion-label>\r\n          <ion-radio slot=\"start\" value=\"With the patient\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>With friends</ion-label>\r\n          <ion-radio slot=\"start\" value=\"With friends\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>With family</ion-label>\r\n          <ion-radio slot=\"start\" value=\"With family\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Other:</ion-label>\r\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\r\n          <ion-input [(ngModel)]=\"other2\"></ion-input>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n    <div>\r\n      <ion-radio-group [(ngModel)]=\"what\">\r\n        <ion-list-header style=\"font-size: large;\">\r\n          <ion-label>Right before you started this survey, what were you doing?</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Sleeping</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Sleeping\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Eating</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Eating\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Rending to the patient</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Rending to the patient\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Working</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Working\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Reading</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Reading\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Engaging in physical activity</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Engaging in physical activity\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>In nature</ion-label>\r\n          <ion-radio slot=\"start\" value=\"In nature\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Cooking</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Cooking\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Relaxing</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Relaxing\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Other:</ion-label>\r\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\r\n          <ion-input [(ngModel)]=\"other3\"></ion-input>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"sleepQuestions\" *ngIf=\"!isSleep\">\r\n    <div>\r\n      <p>How long did you sleep last night?</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-input required=\"true\" placeholder=\"hours\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\r\n                   [(ngModel)]=\"hours\"></ion-input>&nbsp;&nbsp;\r\n        <ion-input required=\"true\" placeholder=\"minutes\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\r\n                   [(ngModel)]=\"minutes\"></ion-input>\r\n      </ion-row>\r\n    </div>\r\n    <div>\r\n      <p>How well did you sleep last night?</p>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <ion-row row-1>\r\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"wellSleep==20?'dark':'lightblue'\"\r\n                        (click)=\"wellSleepChange(20)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.five\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"wellSleep==40?'dark':'lightblue'\"\r\n                        (click)=\"wellSleepChange(40)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.four\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"wellSleep==60?'dark':'lightblue'\"\r\n                        (click)=\"wellSleepChange(60)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.three\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"wellSleep==80?'dark':'lightblue'\"\r\n                        (click)=\"wellSleepChange(80)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.two\"/>\r\n        </ion-fab-button>\r\n        <ion-fab-button size=\"small\" shape=\"round\"\r\n                        [color]=\"wellSleep==100?'dark':'lightblue'\"\r\n                        (click)=\"wellSleepChange(100)\" required=\"true\">\r\n          <img class=\"pic\" [src]=\"ema.one\"/>\r\n        </ion-fab-button>&nbsp;\r\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-tab-bar>\r\n  <ion-buttons>\r\n    <ion-button expand=\"block\" fill=\"clear\" style=\"color: rgb(7, 156, 161);\" (click)=\"submit()\">Next</ion-button>\r\n  </ion-buttons>\r\n</ion-tab-bar>\r\n"

/***/ }),

/***/ "./src/app/home/ema/extra/extra-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/ema/extra/extra-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ExtraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPageRoutingModule", function() { return ExtraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra.page */ "./src/app/home/ema/extra/extra.page.ts");




var routes = [
    {
        path: '',
        component: _extra_page__WEBPACK_IMPORTED_MODULE_3__["ExtraPage"]
    }
];
var ExtraPageRoutingModule = /** @class */ (function () {
    function ExtraPageRoutingModule() {
    }
    ExtraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExtraPageRoutingModule);
    return ExtraPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/ema/extra/extra.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/ema/extra/extra.module.ts ***!
  \************************************************/
/*! exports provided: ExtraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPageModule", function() { return ExtraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _extra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extra-routing.module */ "./src/app/home/ema/extra/extra-routing.module.ts");
/* harmony import */ var _extra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra.page */ "./src/app/home/ema/extra/extra.page.ts");







var ExtraPageModule = /** @class */ (function () {
    function ExtraPageModule() {
    }
    ExtraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _extra_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExtraPageRoutingModule"]
            ],
            declarations: [_extra_page__WEBPACK_IMPORTED_MODULE_6__["ExtraPage"]]
        })
    ], ExtraPageModule);
    return ExtraPageModule;
}());



/***/ }),

/***/ "./src/app/home/ema/extra/extra.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/ema/extra/extra.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lbWEvZXh0cmEvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxcaG9tZVxcZW1hXFxleHRyYVxcZXh0cmEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9leHRyYS9leHRyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VtYS9leHRyYS9leHRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZycpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoc3JjL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGljIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/ema/extra/extra.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/ema/extra/extra.page.ts ***!
  \**********************************************/
/*! exports provided: ExtraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPage", function() { return ExtraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ema.page */ "./src/app/home/ema/ema.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");








var ExtraPage = /** @class */ (function () {
    function ExtraPage(afStore, auth, user, router, alert, ema) {
        this.afStore = afStore;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.alert = alert;
        this.ema = ema;
        this.sleep = '';
        this.other1 = '';
        this.other2 = '';
        this.other3 = '';
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        var yyyy = date.getUTCFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = this.auth.cUid;
        console.log('today', this.today);
        this.sleepData(this.uid, this.today);
    }
    ExtraPage.prototype.wellSleepChange = function (event) {
        this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
        this.afStore.doc("users/" + this.uid + "/EMA/" + this.today)
            .set({
            wellSleep: event,
            sleep: this.sleep
        }, { merge: true });
        this.wellSleep = event;
    };
    ExtraPage.prototype.ngOnInit = function () {
    };
    ExtraPage.prototype.sleepData = function (uid, date) {
        var _this = this;
        this.user.getWellScore(uid, date).subscribe(function (user) {
            if (user) {
                if (user.wellSleep) {
                    _this.isSleep = user.wellSleep;
                    console.log('isSleep', _this.isSleep);
                }
                else {
                    _this.isSleep = null;
                }
            }
            else {
                _this.isSleep = null;
            }
        });
    };
    ExtraPage.prototype.submit = function () {
        try {
            var tempWhere = void 0;
            var tempWhat = void 0;
            var tempWho = void 0;
            if (this.where === 'other') {
                tempWhere = this.other1;
            }
            else {
                tempWhere = this.where;
            }
            if (this.who === 'other') {
                tempWho = this.other2;
            }
            else {
                tempWho = this.who;
            }
            if (this.what === 'other') {
                tempWhat = this.other3;
            }
            else {
                tempWhat = this.what;
            }
            this.afStore.doc("users/" + this.uid + "/EMA/" + this.today)
                .set({
                where: tempWhere,
                what: tempWhat,
                who: tempWho
            }, { merge: true });
            this.router.navigate(['/ema/relax']);
        }
        catch (_a) {
            this.showAlert('Please answer all the questions');
        }
    };
    // pop up alert message
    ExtraPage.prototype.showAlert = function (message) {
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
    ExtraPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ema_page__WEBPACK_IMPORTED_MODULE_5__["EmaPage"] }
    ]; };
    ExtraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extra',
            template: __webpack_require__(/*! raw-loader!./extra.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/ema/extra/extra.page.html"),
            styles: [__webpack_require__(/*! ./extra.page.scss */ "./src/app/home/ema/extra/extra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ema_page__WEBPACK_IMPORTED_MODULE_5__["EmaPage"]])
    ], ExtraPage);
    return ExtraPage;
}());



/***/ })

}]);
//# sourceMappingURL=extra-extra-module-es5.js.map