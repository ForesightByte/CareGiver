(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wellbeing-score-wellbeing-score-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wellbeing-score/wellbeing-score.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wellbeing-score/wellbeing-score.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Well-being Score</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin-top: 30px;\">\n      <ion-card class=\"welcome-card\">\n        <ion-card-header>\n          <ion-card-title>Well-being Score Rate Change</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barChart></canvas>\n        </ion-card-content>\n      </ion-card>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wellbeing-score/wellbeing-score-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/wellbeing-score/wellbeing-score-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: WellbeingScorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellbeingScorePageRoutingModule", function() { return WellbeingScorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wellbeing-score.page */ "./src/app/wellbeing-score/wellbeing-score.page.ts");




const routes = [
    {
        path: '',
        component: _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_3__["WellbeingScorePage"]
    }
];
let WellbeingScorePageRoutingModule = class WellbeingScorePageRoutingModule {
};
WellbeingScorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WellbeingScorePageRoutingModule);



/***/ }),

/***/ "./src/app/wellbeing-score/wellbeing-score.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/wellbeing-score/wellbeing-score.module.ts ***!
  \***********************************************************/
/*! exports provided: WellbeingScorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellbeingScorePageModule", function() { return WellbeingScorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wellbeing_score_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wellbeing-score-routing.module */ "./src/app/wellbeing-score/wellbeing-score-routing.module.ts");
/* harmony import */ var _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wellbeing-score.page */ "./src/app/wellbeing-score/wellbeing-score.page.ts");







let WellbeingScorePageModule = class WellbeingScorePageModule {
};
WellbeingScorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wellbeing_score_routing_module__WEBPACK_IMPORTED_MODULE_5__["WellbeingScorePageRoutingModule"]
        ],
        declarations: [_wellbeing_score_page__WEBPACK_IMPORTED_MODULE_6__["WellbeingScorePage"]]
    })
], WellbeingScorePageModule);



/***/ }),

/***/ "./src/app/wellbeing-score/wellbeing-score.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/wellbeing-score/wellbeing-score.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n  padding-top: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvd2VsbGJlaW5nLXNjb3JlL3dlbGxiZWluZy1zY29yZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGxiZWluZy1zY29yZS93ZWxsYmVpbmctc2NvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxsYmVpbmctc2NvcmUvd2VsbGJlaW5nLXNjb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uL2Fzc2V0cy93aGl0ZWxlYWYuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWxjb21lLWNhcmR7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWxjb21lLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/wellbeing-score/wellbeing-score.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/wellbeing-score/wellbeing-score.page.ts ***!
  \*********************************************************/
/*! exports provided: WellbeingScorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellbeingScorePage", function() { return WellbeingScorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







let WellbeingScorePage = class WellbeingScorePage {
    constructor(user, http, afAuth, auth) {
        this.user = user;
        this.http = http;
        this.afAuth = afAuth;
        this.auth = auth;
    }
    ngOnInit() {
        this.showScore();
    }
    showScore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uid = this.auth.cUid;
            const score = this.user.getEma(uid);
            let wellbeingData;
            if (score) {
                score.subscribe(data => {
                    wellbeingData = data;
                    const wellbeingDataset = [];
                    if (wellbeingData) {
                        const dateData = [];
                        for (const item of wellbeingData) {
                            if (item) {
                                wellbeingDataset.push(item.wellbeingScore);
                                dateData.push(item.date);
                            }
                        }
                        this.createWellbeingScoreChart(wellbeingDataset, dateData);
                    }
                });
                // tslint:disable-next-line: only-arrow-functions
                setTimeout(function () {
                }, 1000, []);
            }
        });
    }
    createWellbeingScoreChart(dataSet, date) {
        const labelData = [];
        // tslint:disable-next-line: forin
        for (const item in dataSet) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Well-being Score per Day',
                        data: dataSet,
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'royalblue',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    xAxes: [{
                            display: false,
                            barPercentage: 1.3,
                            ticks: {
                                max: 3,
                            }
                        }, {
                            display: true,
                            ticks: {
                                autoSkip: false,
                                max: 4,
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
};
WellbeingScorePage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WellbeingScorePage.prototype, "barChart", void 0);
WellbeingScorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wellbeing-score',
        template: __webpack_require__(/*! raw-loader!./wellbeing-score.page.html */ "./node_modules/raw-loader/index.js!./src/app/wellbeing-score/wellbeing-score.page.html"),
        styles: [__webpack_require__(/*! ./wellbeing-score.page.scss */ "./src/app/wellbeing-score/wellbeing-score.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], WellbeingScorePage);



/***/ })

}]);
//# sourceMappingURL=wellbeing-score-wellbeing-score-module-es2015.js.map