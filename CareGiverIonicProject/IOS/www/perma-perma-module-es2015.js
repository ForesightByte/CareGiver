(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perma-perma-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/perma/perma.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/perma/perma.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/relax']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Wellbeing Survey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"questions\">\n    <div>\n      <p>I feel helped and supported by others right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"helpedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel loved right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"lovedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I feel satisfied with my personal relationships right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"satisfiedChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I lead a purposeful and meaningful life right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"purposefulChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>What I do in my life is valuable and worthwhile right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"valuableChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I have a sense of direction in my life right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"senseChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am making progress towards accomplishing my goals right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"prgressChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am achieving the important goals I have set for myself right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"achieveChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>I am handling my responsibilities right now</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"handleChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Please rate the level of difficulty you experience while assisting the care recipient with Activities of Daily Living (ADLs) such as bathing, dressing, eating, toileting, and transferring.</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"adlsChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Very Easy</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Very Difficult</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>How many hours per week do you spend providing care to your loved one?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"careHoursChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Very few times</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Very long times</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>To what extent has caregiving caused financial strain in your life?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"financialChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>How often are you able to take time off from caregiving to focus on your own needs or responsibilities?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"timeOffChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Never</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Very Often</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Does the care recipient have Alzheimer's disease or any other form of mental confusion?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"mentalConfusionChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Not at all</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Extremely</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n    <div>\n      <p>Do you receive sufficient help or support in performing medical or nursing tasks for the care recipient?</p>\n    </div>\n    <div class=\"btn\">\n      <ion-row row-1>\n        <ion-range min=\"0\" max=\"100\" color=\"secondary\" pin=\"true\" (ionChange)=\"helpChange($event)\" required=\"true\">\n          <ion-label slot=\"start\" style=\"font-size: large; color:red;\">Never</ion-label>\n          <ion-label slot=\"end\" style=\"font-size: large; color:green;\">Always</ion-label>\n        </ion-range>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-tab-bar>\n  <ion-buttons>\n    <ion-button expand=\"block\" fill=\"clear\" \n                style=\"color: rgb(7, 156, 161); font-size: larger; font: bold;\" \n                (click)=\"submit()\">Submit</ion-button>\n  </ion-buttons>\n</ion-tab-bar>\n"

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
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        const time = date.getHours();
        this.today = yyyy + '-' + mm + '-' + dd;
        this.today4EMA = yyyy + '-' + mm + '-' + dd + '_' + time;
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
        return this.helped = event.detail.value;
    }
    lovedChange(event) {
        return this.loved = event.detail.value;
    }
    satisfiedChange(event) {
        return this.satisfied = event.detail.value;
    }
    purposefulChange(event) {
        return this.purposeful = event.detail.value;
    }
    valuableChange(event) {
        return this.valuable = event.detail.value;
    }
    senseChange(event) {
        return this.sense = event.detail.value;
    }
    prgressChange(event) {
        return this.progress = event.detail.value;
    }
    achieveChange(event) {
        return this.achieve = event.detail.value;
    }
    handleChange(event) {
        return this.handle = event.detail.value;
    }
    adlsChange(event) {
        return this.adls = event.detail.value;
    }
    careHoursChange(event) {
        return this.careHours = event.detail.value;
    }
    financialChange(event) {
        return this.financial = event.detail.value;
    }
    timeOffChange(event) {
        return this.timeOff = event.detail.value;
    }
    mentalConfusionChange(event) {
        return this.confusion = event.detail.value;
    }
    helpChange(event) {
        return this.help = event.detail.value;
    }
    submit() {
        const res = this.afStore.doc(`users/${this.uid}`);
        const res2 = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
        const res3 = this.afStore.doc(`users/${this.uid}/EMA/${this.today4EMA}`);
        const helped = this.helped;
        const loved = this.loved;
        const satisfied = this.satisfied;
        const purposeful = this.purposeful;
        const valuable = this.valuable;
        const sense = this.sense;
        const progress = this.progress;
        const achieve = this.achieve;
        const handle = this.handle;
        const adls = this.adls;
        const careHours = this.careHours;
        const financial = this.financial;
        const timeOff = this.timeOff;
        const confusion = this.confusion;
        const help = this.help;
        const score = helped + loved + satisfied + purposeful + valuable
            + sense + progress + achieve + handle + adls + careHours + financial + timeOff + confusion + help;
        const wellbeingScore = Number(((Number(this.wellbeingScore) + Number(score)) / 23).toFixed(0));
        const data = { helped, loved, satisfied, purposeful, valuable, sense, progress, achieve, handle,
            adls, careHours, financial, timeOff, confusion, help, wellbeingScore };
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