(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sleep-sleep-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/sleep/sleep.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/sleep/sleep.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/vital']\" style=\"color: white;\">Back</ion-button>\n        </ion-buttons>\n        <ion-title style=\"text-align: center;\">Sleep</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding><br>\n    <ion-row row-1>\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\n    </ion-row>\n    <ion-card class=\"welcome-card\">\n        <ion-grid>\n            <h3 style=\"color: black;\">Sleep:</h3>\n            <ion-list>\n                <!--<p>Date: {{calendarDate}}</p>-->\n                <p>Total Duration: {{totalDuration}}</p>\n                <p>Light Sleep Duration: {{lightSleepDuration}}</p>\n                <p>Deep Sleep Duration: {{deepSleepDuration}}</p>\n                <p>Rem Sleep Duration: {{remSleepDuration}}</p>\n            </ion-list>\n        </ion-grid>\n    </ion-card>\n    <ion-row>\n        <ion-col>\n            <ion-card class=\"welcome-card\">\n                <ion-card-header>\n                    <h4>Sleep Duration Rate Change</h4>\n                </ion-card-header>\n                <ion-card-content>\n                    <canvas #barChart></canvas>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/vital/sleep/sleep-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/vital/sleep/sleep-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SleepPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepPageRoutingModule", function() { return SleepPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sleep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleep.page */ "./src/app/home/vital/sleep/sleep.page.ts");




var routes = [
    {
        path: '',
        component: _sleep_page__WEBPACK_IMPORTED_MODULE_3__["SleepPage"]
    }
];
var SleepPageRoutingModule = /** @class */ (function () {
    function SleepPageRoutingModule() {
    }
    SleepPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SleepPageRoutingModule);
    return SleepPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/vital/sleep/sleep.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/vital/sleep/sleep.module.ts ***!
  \**************************************************/
/*! exports provided: SleepPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepPageModule", function() { return SleepPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sleep_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sleep-routing.module */ "./src/app/home/vital/sleep/sleep-routing.module.ts");
/* harmony import */ var _sleep_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sleep.page */ "./src/app/home/vital/sleep/sleep.page.ts");







var SleepPageModule = /** @class */ (function () {
    function SleepPageModule() {
    }
    SleepPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sleep_routing_module__WEBPACK_IMPORTED_MODULE_5__["SleepPageRoutingModule"]
            ],
            declarations: [_sleep_page__WEBPACK_IMPORTED_MODULE_6__["SleepPage"]]
        })
    ], SleepPageModule);
    return SleepPageModule;
}());



/***/ }),

/***/ "./src/app/home/vital/sleep/sleep.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/vital/sleep/sleep.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS92aXRhbC9zbGVlcC9zbGVlcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvdml0YWwvc2xlZXAvc2xlZXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aXRhbC9zbGVlcC9zbGVlcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvYm90YW5pY2EuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDApO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnAge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi53ZWxjb21lLWNhcmR7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/vital/sleep/sleep.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/vital/sleep/sleep.page.ts ***!
  \************************************************/
/*! exports provided: SleepPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepPage", function() { return SleepPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);






var lineColors = ['rgb(38, 194, 129)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'];
var SleepPage = /** @class */ (function () {
    function SleepPage(user, garmin, afAuth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.firebaseAuth = afAuth;
        this.garminId = this.user.garminId;
        console.log('garminId', this.garminId);
    }
    SleepPage.prototype.ngOnInit = function () {
        this.showData();
    };
    SleepPage.prototype.showData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var garminData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.garminId) {
                    this.garmin.getGarminDataset(this.garminId).subscribe(function (data) {
                        garminData = data;
                        var sleepDataset = [];
                        if (garminData) {
                            var totalSleepDuration = [];
                            var lightSleepDuration = [];
                            var deepSleepDuration = [];
                            var remSleepDuration = [];
                            var dateData = [];
                            var allSleepData = [];
                            for (var _i = 0, garminData_1 = garminData; _i < garminData_1.length; _i++) {
                                var item = garminData_1[_i];
                                if (item) {
                                    var sleepItem = item.sleeps;
                                    if (sleepItem) {
                                        sleepDataset.push(sleepItem);
                                        totalSleepDuration.push(Number(_this.secondsToHMForGraph(sleepItem.durationInSeconds)));
                                        lightSleepDuration.push(Number(_this.secondsToHMForGraph(sleepItem.lightSleepDurationInSeconds)));
                                        deepSleepDuration.push(Number(_this.secondsToHMForGraph(sleepItem.deepSleepDurationInSeconds)));
                                        remSleepDuration.push(Number(_this.secondsToHMForGraph(sleepItem.remSleepInSeconds)));
                                        dateData.push(sleepItem.calendarDate);
                                    }
                                }
                            }
                            allSleepData.push({ title: 'Total sleep', datasets: totalSleepDuration }, { title: 'Light Sleep', datasets: lightSleepDuration }, { title: 'Deep Sleep', datasets: deepSleepDuration }, { title: 'Rem Sleep', datasets: remSleepDuration });
                            _this.createLineChart(allSleepData, dateData);
                        }
                        if (sleepDataset.length > 0) {
                            var sortedDataSet = sleepDataset.sort(function (a, b) {
                                if (a.calendarDate < b.calendarDate) {
                                    return 1;
                                }
                                else if (a.calendarDate > b.calendarDate) {
                                    return -1;
                                }
                                else {
                                    return 0;
                                }
                            });
                            _this.calendarDate = sortedDataSet[0].calendarDate;
                            _this.totalDuration = _this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                            _this.lightSleepDuration = _this.secondsToHMS(sortedDataSet[0].lightSleepDurationInSeconds);
                            _this.deepSleepDuration = _this.secondsToHMS(sortedDataSet[0].deepSleepDurationInSeconds);
                            _this.remSleepDuration = _this.secondsToHMS(sortedDataSet[0].remSleepInSeconds);
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
    SleepPage.prototype.secondsToHMS = function (seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var hms = h + ' hr ' + m + ' m';
        return hms;
    };
    SleepPage.prototype.secondsToHMForGraph = function (seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var hm = h + '.' + m;
        return hm;
    };
    SleepPage.prototype.createLineChart = function (dataset, date) {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: dataset.map(function (data, ndx) {
                    return ({
                        label: data.title,
                        data: data.datasets,
                        borderColor: lineColors[ndx],
                        backgroundColor: lineColors[ndx],
                        borderWidth: 1
                    });
                })
            },
            options: {
                plugins: {
                    filler: {
                        propagate: true
                    }
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    SleepPage.ctorParameters = function () { return [
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_4__["GarminService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SleepPage.prototype, "barChart", void 0);
    SleepPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sleep',
            template: __webpack_require__(/*! raw-loader!./sleep.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/sleep/sleep.page.html"),
            styles: [__webpack_require__(/*! ./sleep.page.scss */ "./src/app/home/vital/sleep/sleep.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_garmin_service__WEBPACK_IMPORTED_MODULE_4__["GarminService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], SleepPage);
    return SleepPage;
}());



/***/ })

}]);
//# sourceMappingURL=sleep-sleep-module-es5.js.map