(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wellbeing-score-wellbeing-score-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wellbeing-score/wellbeing-score.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wellbeing-score/wellbeing-score.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Well-being Score</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid style=\"margin-top: 30px;\">\r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-title>Well-being Score Rate Change</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #barChart></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n  padding-top: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsbGJlaW5nLXNjb3JlL0Y6XFxJb25pY1Byb2plY3RcXEdpdFxcQ2FyZUdpdmVyXFxDYXJlR2l2ZXJJb25pY1Byb2plY3Qvc3JjXFxhcHBcXHdlbGxiZWluZy1zY29yZVxcd2VsbGJlaW5nLXNjb3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsbGJlaW5nLXNjb3JlL3dlbGxiZWluZy1zY29yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGxiZWluZy1zY29yZS93ZWxsYmVpbmctc2NvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZHtcclxuICBtYXgtd2lkdGg6IDQwZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDEwO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDEwO1xufSJdfQ== */"

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