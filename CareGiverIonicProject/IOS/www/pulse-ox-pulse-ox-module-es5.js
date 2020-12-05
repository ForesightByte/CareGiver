(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pulse-ox-pulse-ox-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/pulse-ox/pulse-ox.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/pulse-ox/pulse-ox.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"text-align: center;\">Pulse Ox</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n    <ion-row row-1>\r\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n    </ion-row>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-grid>\r\n            <ion-title style=\"color: black;\">Pulse OX:</ion-title>\r\n            <ion-list>\r\n                <!--<p>Date: {{calendarDate}}</p>-->\r\n                <p>Avg. SpO2 Value: {{averageSpLevel}}</p>\r\n                <p>Duration: {{durationInSeconds}}</p>\r\n            </ion-list>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>Average Pulse Rate Change</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <canvas #barChart></canvas>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/vital/pulse-ox/pulse-ox-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/vital/pulse-ox/pulse-ox-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PulseOxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseOxPageRoutingModule", function() { return PulseOxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pulse_ox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pulse-ox.page */ "./src/app/home/vital/pulse-ox/pulse-ox.page.ts");




var routes = [
    {
        path: '',
        component: _pulse_ox_page__WEBPACK_IMPORTED_MODULE_3__["PulseOxPage"]
    }
];
var PulseOxPageRoutingModule = /** @class */ (function () {
    function PulseOxPageRoutingModule() {
    }
    PulseOxPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PulseOxPageRoutingModule);
    return PulseOxPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/vital/pulse-ox/pulse-ox.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/vital/pulse-ox/pulse-ox.module.ts ***!
  \********************************************************/
/*! exports provided: PulseOxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseOxPageModule", function() { return PulseOxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pulse_ox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pulse-ox-routing.module */ "./src/app/home/vital/pulse-ox/pulse-ox-routing.module.ts");
/* harmony import */ var _pulse_ox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pulse-ox.page */ "./src/app/home/vital/pulse-ox/pulse-ox.page.ts");







var PulseOxPageModule = /** @class */ (function () {
    function PulseOxPageModule() {
    }
    PulseOxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pulse_ox_routing_module__WEBPACK_IMPORTED_MODULE_5__["PulseOxPageRoutingModule"]
            ],
            declarations: [_pulse_ox_page__WEBPACK_IMPORTED_MODULE_6__["PulseOxPage"]]
        })
    ], PulseOxPageModule);
    return PulseOxPageModule;
}());



/***/ }),

/***/ "./src/app/home/vital/pulse-ox/pulse-ox.page.scss":
/*!********************************************************!*\
  !*** ./src/app/home/vital/pulse-ox/pulse-ox.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9wdWxzZS1veC9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFx2aXRhbFxccHVsc2Utb3hcXHB1bHNlLW94LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9wdWxzZS1veC9wdWxzZS1veC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZpdGFsL3B1bHNlLW94L3B1bHNlLW94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJke1xyXG4gIG1heC13aWR0aDogNDBlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/vital/pulse-ox/pulse-ox.page.ts":
/*!******************************************************!*\
  !*** ./src/app/home/vital/pulse-ox/pulse-ox.page.ts ***!
  \******************************************************/
/*! exports provided: PulseOxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseOxPage", function() { return PulseOxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");






var PulseOxPage = /** @class */ (function () {
    function PulseOxPage(user, garmin, afAuth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.firebaseAuth = afAuth;
        this.garminId = this.user.garminId;
        console.log('garminId', this.garminId);
    }
    PulseOxPage.prototype.ngOnInit = function () {
        this.showData();
    };
    PulseOxPage.prototype.getAveragePulseox = function (pulseoxValues) {
        var sum = 0, counter = 0;
        // tslint:disable-next-line: forin
        for (var key in pulseoxValues) {
            sum += Number(pulseoxValues[key]);
            counter++;
        }
        return sum / counter;
    };
    PulseOxPage.prototype.showData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var garminData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.garminId) {
                    this.garmin.getGarminDataset(this.garminId).subscribe(function (data) {
                        garminData = data;
                        var pulseoxDataset = [];
                        if (garminData) {
                            var averagePulseoxData = [];
                            var dateData = [];
                            for (var _i = 0, garminData_1 = garminData; _i < garminData_1.length; _i++) {
                                var item = garminData_1[_i];
                                if (item) {
                                    var pulseOxItem = item.pulseox;
                                    if (pulseOxItem) {
                                        var average = _this.getAveragePulseox(pulseOxItem.timeOffsetSpo2Values);
                                        pulseOxItem.averageSpLevel = Number(average.toFixed(0));
                                        averagePulseoxData.push(Number(average.toFixed(0)));
                                        pulseoxDataset.push(pulseOxItem);
                                        dateData.push(item.pulseox.calendarDate);
                                    }
                                    else {
                                        console.log('pulseox not found');
                                    }
                                }
                            }
                            _this.createLineChart(averagePulseoxData, dateData);
                        }
                        if (pulseoxDataset.length > 0) {
                            var sortedDataSet = pulseoxDataset.sort(function (a, b) {
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
                            _this.durationInSeconds = _this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                            _this.averageSpLevel = sortedDataSet[0].averageSpLevel;
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
    PulseOxPage.prototype.secondsToHMS = function (seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var hms = h + ' hr ' + m + ' m';
        return hms;
    };
    PulseOxPage.prototype.createLineChart = function (dataset, date) {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Average Pulse Rate per Day',
                        data: dataset,
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'royalblue',
                        borderWidth: 1
                    }]
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
    PulseOxPage.ctorParameters = function () { return [
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PulseOxPage.prototype, "barChart", void 0);
    PulseOxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pulse-ox',
            template: __webpack_require__(/*! raw-loader!./pulse-ox.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/pulse-ox/pulse-ox.page.html"),
            styles: [__webpack_require__(/*! ./pulse-ox.page.scss */ "./src/app/home/vital/pulse-ox/pulse-ox.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], PulseOxPage);
    return PulseOxPage;
}());



/***/ })

}]);
//# sourceMappingURL=pulse-ox-pulse-ox-module-es5.js.map