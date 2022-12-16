(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/extra/extra.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/extra/extra.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-Being CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <div>\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Where are you right now?</ion-label>\n        </ion-list-header>\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Select All</strong></ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whereParent\" [indeterminate]=\"indeterminateState\" \n            (click)=\"whereCheckbox($event)\"></ion-checkbox>\n          </ion-item>\n\n          <ion-item *ngFor=\"let whereboxes of whereBoxes\">\n            <ion-label>{{whereboxes.value}}</ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whereboxes.isItemChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n    </div>\n\n    <div>\n      <ion-list-header style=\"font-size: large;\">\n        <ion-label>Where were you at the time that you receive the survey notification?</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-item>\n          <ion-label><strong>Select All</strong></ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whereParent\" [indeterminate]=\"indeterminateState\" \n          ></ion-checkbox>\n        </ion-item>\n        <!-- (click)=\"whereCheckbox($event)\" -->\n\n        <ion-item *ngFor=\"let whereboxes of whereBoxes\">\n          <ion-label>{{whereboxes2.value}}</ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whereboxes.isItemChecked\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n  </div>\n\n    <div>\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Who are you with right now?</ion-label>\n        </ion-list-header>\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Select All</strong></ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whoParent\" [indeterminate]=\"indeterminateState\" \n            (click)=\"whoCheckbox($event)\"></ion-checkbox>\n          </ion-item>\n\n          <ion-item *ngFor=\"let whoboxes of whoBoxes\">\n            <ion-label>{{whoboxes.value}}</ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whoboxes.isItemChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n    </div>\n\n    <div>\n      <ion-list-header style=\"font-size: large;\">\n        <ion-label>Who were you with at the time that you received the survey notification (select all that apply)?</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-item>\n          <ion-label><strong>Select All</strong></ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whoParent\" [indeterminate]=\"indeterminateState\" \n          ></ion-checkbox>\n        </ion-item>\n        <!-- (click)=\"whoCheckbox($event)\" -->\n\n        <ion-item *ngFor=\"let whoboxes of whoBoxes\">\n          <ion-label>{{whoboxes2.value}}</ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whoboxes.isItemChecked\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n  </div>\n\n    <div>\n        <ion-list-header style=\"font-size: large;\">\n          <ion-label>Right before you started this survey, what were you doing?</ion-label>\n        </ion-list-header>\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Select All</strong></ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whatParent\" [indeterminate]=\"indeterminateState\" \n            (click)=\"whatCheckbox($event)\"></ion-checkbox>\n          </ion-item>\n\n          <ion-item *ngFor=\"let whatboxes of whatBoxes\">\n            <ion-label>{{whatboxes.value}}</ion-label>\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"whatboxes.isItemChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n    </div>\n\n    <div>\n      <ion-list-header style=\"font-size: large;\">\n        <ion-label>What were you doing at the time that you received the survey notification?</ion-label>\n      </ion-list-header>\n      <ion-list>\n        <ion-item>\n          <ion-label><strong>Select All</strong></ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whatParent\" [indeterminate]=\"indeterminateState\" \n          ></ion-checkbox>\n        </ion-item>\n        <!-- (click)=\"whatCheckbox($event)\" -->\n\n        <ion-item *ngFor=\"let whatboxes of whatBoxes\">\n          <ion-label>{{whatboxes2.value}}</ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"whatboxes.isItemChecked\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n  </div>\n  </ion-grid>\n\n  <ion-grid class=\"sleepQuestions\" *ngIf=\"!isSleep\">\n    <div>\n      <p>How long did you sleep last night?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-input required=\"true\" placeholder=\"hours\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\n                   [(ngModel)]=\"hours\"></ion-input>&nbsp;&nbsp;\n        <ion-input required=\"true\" placeholder=\"minutes\" type=\"tel\" minlength=\"1\" maxlength=\"2\"\n                   [(ngModel)]=\"minutes\"></ion-input>\n      </ion-row>\n    </div>\n    <div>\n      <p>How well did you sleep last night?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"wellSleepChange($event)\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" \n                fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\"\n                (click)=\"submit()\">Next</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.pic {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9lbWEvZXh0cmEvZXh0cmEucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2VtYS9leHRyYS9leHRyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1hL2V4dHJhL2V4dHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZycpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKHNyYy9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5waWMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn0iXX0= */"

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
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        var time = date.getHours();
        this.today = yyyy + '-' + mm + '-' + dd + '_' + time;
        this.uid = this.auth.cUid;
        console.log('today', this.today);
        this.sleepData(this.uid, this.today);
        this.whereBoxes = [
            {
                value: "At home",
                isItemChecked: false
            }, {
                value: "At work",
                isItemChecked: false
            }, {
                value: "At the hospital",
                isItemChecked: false
            }, {
                value: "At an appointment for patient",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
        this.whereBoxes2 = [
            {
                value: "At home",
                isItemChecked: false
            }, {
                value: "At work",
                isItemChecked: false
            }, {
                value: "Running errands",
                isItemChecked: false
            }, {
                value: "At the gym",
                isItemChecked: false
            }, {
                value: "Outdoors in nature",
                isItemChecked: false
            }, {
                value: "At the hospital/doctor’s office for the patient’s appointment",
                isItemChecked: false
            }, {
                value: "At the hospital/doctor’s office for my own appointment",
                isItemChecked: false
            }, {
                value: "Out to eat",
                isItemChecked: false
            }, {
                value: "At school",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
        this.whoBoxes = [
            {
                value: "Alone",
                isItemChecked: false
            }, {
                value: "With the patient",
                isItemChecked: false
            }, {
                value: "With friends",
                isItemChecked: false
            }, {
                value: "With family",
                isItemChecked: false
            }, {
                value: "With colleagues",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
        this.whoBoxes2 = [
            {
                value: "With the patient",
                isItemChecked: false
            }, {
                value: "With a romantic partner",
                isItemChecked: false
            }, {
                value: "With friends",
                isItemChecked: false
            }, {
                value: "On my own",
                isItemChecked: false
            }, {
                value: "Around people I do not know",
                isItemChecked: false
            }, {
                value: "With work colleagues",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
        this.whatBoxes = [
            {
                value: "Sleeping",
                isItemChecked: false
            }, {
                value: "Eating",
                isItemChecked: false
            }, {
                value: "Tending to the patient",
                isItemChecked: false
            }, {
                value: "Working",
                isItemChecked: false
            }, {
                value: "Reading",
                isItemChecked: false
            }, {
                value: "Engaging in physical activity",
                isItemChecked: false
            }, {
                value: "In nature",
                isItemChecked: false
            }, {
                value: "Cooking",
                isItemChecked: false
            }, {
                value: "Relaxing",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
        this.whatBoxes2 = [
            {
                value: "Exercising",
                isItemChecked: false
            }, {
                value: "Eating",
                isItemChecked: false
            }, {
                value: "Caring for the patient",
                isItemChecked: false
            }, {
                value: "Working (job)",
                isItemChecked: false
            }, {
                value: "Doing work around the house (e.g., cleaning)",
                isItemChecked: false
            }, {
                value: "Quality time with family",
                isItemChecked: false
            }, {
                value: "Watching TV",
                isItemChecked: false
            }, {
                value: "On my phone (e.g., social media, text, call)",
                isItemChecked: false
            }, {
                value: "Quality time with friends",
                isItemChecked: false
            }, {
                value: "Other",
                isItemChecked: false
            }
        ];
    }
    ExtraPage.prototype.wellSleepChange = function (event) {
        this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
        this.afStore.doc("users/" + this.uid + "/EMA/" + this.today)
            .set({
            wellSleep: event.detail.value,
            sleep: this.sleep
        }, { merge: true });
        this.wellSleep = event.detail.value;
    };
    ExtraPage.prototype.ngOnInit = function () {
    };
    ExtraPage.prototype.sleepData = function (uid, date) {
        var _this = this;
        this.user.getSleepEMA(uid, date).subscribe(function (user) {
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
    //*************Where Question**********
    ExtraPage.prototype.whereCheckbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.whereBoxes.forEach(function (item) {
                item.isItemChecked = _this.whereParent;
            });
        });
    };
    ExtraPage.prototype.verifyWhereEvent = function () {
        var allItems = this.whereBoxes.length;
        var selected = 0;
        this.whereBoxes.map(function (item) {
            if (item.isItemChecked)
                selected++;
        });
        if (selected > 0 && selected < allItems) {
            // One item is selected among all checkbox elements
            this.indeterminateState = true;
            this.whereParent = false;
        }
        else if (selected == allItems) {
            // All item selected
            this.whereParent = true;
            this.indeterminateState = false;
        }
        else {
            // No item is selected
            this.indeterminateState = false;
            this.whereParent = false;
        }
    };
    //*************Who Question**********
    ExtraPage.prototype.whoCheckbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.whoBoxes.forEach(function (item) {
                item.isItemChecked = _this.whoParent;
            });
        });
    };
    ExtraPage.prototype.verifyWhoEvent = function () {
        var allItems = this.whoBoxes.length;
        var selected = 0;
        this.whoBoxes.map(function (item) {
            if (item.isItemChecked)
                selected++;
        });
        if (selected > 0 && selected < allItems) {
            // One item is selected among all checkbox elements
            this.indeterminateState = true;
            this.whoParent = false;
        }
        else if (selected == allItems) {
            // All item selected
            this.whoParent = true;
            this.indeterminateState = false;
        }
        else {
            // No item is selected
            this.indeterminateState = false;
            this.whoParent = false;
        }
    };
    //*************What Question**********
    ExtraPage.prototype.whatCheckbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.whatBoxes.forEach(function (item) {
                item.isItemChecked = _this.whatParent;
            });
        });
    };
    ExtraPage.prototype.verifyWhatEvent = function () {
        var allItems = this.whatBoxes.length;
        var selected = 0;
        this.whatBoxes.map(function (item) {
            if (item.isItemChecked)
                selected++;
        });
        if (selected > 0 && selected < allItems) {
            // One item is selected among all checkbox elements
            this.indeterminateState = true;
            this.whatParent = false;
        }
        else if (selected == allItems) {
            // All item selected
            this.whatParent = true;
            this.indeterminateState = false;
        }
        else {
            // No item is selected
            this.indeterminateState = false;
            this.whatParent = false;
        }
    };
    ExtraPage.prototype.submit = function () {
        try {
            var tempWhere = [];
            var tempWhat = [];
            var tempWho = [];
            for (var i = 0; i < this.whereBoxes.length; i++) {
                if (this.whereBoxes[i].isItemChecked == true) {
                    tempWhere.push(this.whereBoxes[i].value);
                    console.log('where', tempWhere);
                }
            }
            for (var i = 0; i < this.whoBoxes.length; i++) {
                if (this.whoBoxes[i].isItemChecked == true) {
                    tempWho.push(this.whoBoxes[i].value);
                    console.log('who', tempWho);
                }
            }
            for (var i = 0; i < this.whatBoxes.length; i++) {
                if (this.whatBoxes[i].isItemChecked == true) {
                    tempWhat.push(this.whatBoxes[i].value);
                    console.log('what', tempWhat);
                }
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