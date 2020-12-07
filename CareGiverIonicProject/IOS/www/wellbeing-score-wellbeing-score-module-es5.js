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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wellbeing-score.page */ "./src/app/wellbeing-score/wellbeing-score.page.ts");




var routes = [
    {
        path: '',
        component: _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_3__["WellbeingScorePage"]
    }
];
var WellbeingScorePageRoutingModule = /** @class */ (function () {
    function WellbeingScorePageRoutingModule() {
    }
    WellbeingScorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WellbeingScorePageRoutingModule);
    return WellbeingScorePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wellbeing_score_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wellbeing-score-routing.module */ "./src/app/wellbeing-score/wellbeing-score-routing.module.ts");
/* harmony import */ var _wellbeing_score_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wellbeing-score.page */ "./src/app/wellbeing-score/wellbeing-score.page.ts");







var WellbeingScorePageModule = /** @class */ (function () {
    function WellbeingScorePageModule() {
    }
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
    return WellbeingScorePageModule;
}());



/***/ }),

/***/ "./src/app/wellbeing-score/wellbeing-score.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/wellbeing-score/wellbeing-score.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n  padding-top: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL3dlbGxiZWluZy1zY29yZS93ZWxsYmVpbmctc2NvcmUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxsYmVpbmctc2NvcmUvd2VsbGJlaW5nLXNjb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2VsbGJlaW5nLXNjb3JlL3dlbGxiZWluZy1zY29yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VsY29tZS1jYXJke1xuICBtYXgtd2lkdGg6IDQwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTA7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDEwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var WellbeingScorePage = /** @class */ (function () {
    function WellbeingScorePage(user, http, afAuth, auth) {
        this.user = user;
        this.http = http;
        this.afAuth = afAuth;
        this.auth = auth;
    }
    WellbeingScorePage.prototype.ngOnInit = function () {
        this.showScore();
    };
    WellbeingScorePage.prototype.showScore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid, score, wellbeingData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uid = this.auth.cUid;
                score = this.user.getEma(uid);
                if (score) {
                    score.subscribe(function (data) {
                        wellbeingData = data;
                        var wellbeingDataset = [];
                        if (wellbeingData) {
                            var dateData = [];
                            for (var _i = 0, wellbeingData_1 = wellbeingData; _i < wellbeingData_1.length; _i++) {
                                var item = wellbeingData_1[_i];
                                if (item) {
                                    wellbeingDataset.push(item.wellbeingScore);
                                    dateData.push(item.date);
                                }
                            }
                            _this.createWellbeingScoreChart(wellbeingDataset, dateData);
                        }
                    });
                    // tslint:disable-next-line: only-arrow-functions
                    setTimeout(function () {
                    }, 1000, []);
                }
                return [2 /*return*/];
            });
        });
    };
    WellbeingScorePage.prototype.createWellbeingScoreChart = function (dataSet, date) {
        var labelData = [];
        // tslint:disable-next-line: forin
        for (var item in dataSet) {
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
    };
    WellbeingScorePage.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
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
    return WellbeingScorePage;
}());



/***/ })

}]);
//# sourceMappingURL=wellbeing-score-wellbeing-score-module-es5.js.map