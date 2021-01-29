(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/extra/extra.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/extra/extra.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <div>\n      <ion-radio-group [(ngModel)]=\"where\">\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Where are you right now?</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>At home</ion-label>\n          <ion-radio slot=\"start\" value=\"At home\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>At work</ion-label>\n          <ion-radio slot=\"start\" value=\"At work\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>At the hospital</ion-label>\n          <ion-radio slot=\"start\" value=\"At the hospital\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>At an appointment for patient</ion-label>\n          <ion-radio slot=\"start\" value=\"At an appointment for patient\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Other:</ion-label>\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\n          <ion-input [(ngModel)]=\"other1\"></ion-input>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <div>\n      <ion-radio-group [(ngModel)]=\"who\">\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Who are you with right now?</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Alone</ion-label>\n          <ion-radio slot=\"start\" value=\"Alone\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>With the patient</ion-label>\n          <ion-radio slot=\"start\" value=\"With the patient\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>With friends</ion-label>\n          <ion-radio slot=\"start\" value=\"With friends\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>With family</ion-label>\n          <ion-radio slot=\"start\" value=\"With family\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>With colleagues</ion-label>\n          <ion-radio slot=\"start\" value=\"With colleagues\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Other:</ion-label>\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\n          <ion-input [(ngModel)]=\"other2\"></ion-input>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <div>\n      <ion-radio-group [(ngModel)]=\"what\">\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Right before you started this survey, what were you doing?</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Sleeping</ion-label>\n          <ion-radio slot=\"start\" value=\"Sleeping\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Eating</ion-label>\n          <ion-radio slot=\"start\" value=\"Eating\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Tending to the patient</ion-label>\n          <ion-radio slot=\"start\" value=\"Tending to the patient\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Working</ion-label>\n          <ion-radio slot=\"start\" value=\"Working\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Reading</ion-label>\n          <ion-radio slot=\"start\" value=\"Reading\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Engaging in physical activity</ion-label>\n          <ion-radio slot=\"start\" value=\"Engaging in physical activity\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>In nature</ion-label>\n          <ion-radio slot=\"start\" value=\"In nature\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Cooking</ion-label>\n          <ion-radio slot=\"start\" value=\"Cooking\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Relaxing</ion-label>\n          <ion-radio slot=\"start\" value=\"Relaxing\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Other:</ion-label>\n          <ion-radio slot=\"start\" value=\"other\"></ion-radio>\n          <ion-input [(ngModel)]=\"other3\"></ion-input>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"sleepQuestions\" *ngIf=\"!isSleep\">\n    <div>\n      <p>How long did you sleep last night?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-input required=\"true\" placeholder=\"hours\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\n                   [(ngModel)]=\"hours\"></ion-input>&nbsp;&nbsp;\n        <ion-input required=\"true\" placeholder=\"minutes\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\n                   [(ngModel)]=\"minutes\"></ion-input>\n      </ion-row>\n    </div>\n    <div>\n      <p>How well did you sleep last night?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-text style=\"font-size: smaller; color:red; padding-top:10px;\">Low</ion-text>&nbsp;\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"wellSleep==20?'dark':'lightblue'\"\n                        (click)=\"wellSleepChange(20)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.five\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"wellSleep==40?'dark':'lightblue'\"\n                        (click)=\"wellSleepChange(40)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.four\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"wellSleep==60?'dark':'lightblue'\"\n                        (click)=\"wellSleepChange(60)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.three\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"wellSleep==80?'dark':'lightblue'\"\n                        (click)=\"wellSleepChange(80)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.two\"/>\n        </ion-fab-button>\n        <ion-fab-button size=\"small\" shape=\"round\"\n                        [color]=\"wellSleep==100?'dark':'lightblue'\"\n                        (click)=\"wellSleepChange(100)\" required=\"true\">\n          <img class=\"pic\" [src]=\"ema.one\"/>\n        </ion-fab-button>&nbsp;\n        <ion-text style=\"font-size: smaller; color:green; padding-top:10px;\">High</ion-text>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" \n                fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\"\n                (click)=\"submit()\">Next</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvZXh0cmEvZXh0cmEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9leHRyYS9leHRyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VtYS9leHRyYS9leHRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3doaXRlbGVhZi5qcGcnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybChzcmMvYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59Il19 */"

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