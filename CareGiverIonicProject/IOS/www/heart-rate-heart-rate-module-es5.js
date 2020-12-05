(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["heart-rate-heart-rate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/heart-rate/heart-rate.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/heart-rate/heart-rate.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"text-align: center;\">Heart Rate</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n    <ion-row row-1>\r\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n    </ion-row>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-grid>\r\n            <ion-title style=\"color: black;\">Heart Rate:</ion-title>\r\n            <ion-list>\r\n                <!--<p>Date: {{calendarDate}}</p>-->\r\n                <p>Avg. Heart Rate: {{averageHeartRateInBeatsPerMinute}} bpm</p>\r\n                <p>Min. Heart Rate: {{minHeartRateInBeatsPerMinute}} bpm</p>\r\n                <p>Max. Heart Rate: {{maxHeartRateInBeatsPerMinute}} bpm</p>\r\n                <p>Rest. Heart Rate: {{restingHeartRateInBeatsPerMinute}} bpm</p>\r\n            </ion-list>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>Average Heart-Beat Change</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <canvas #barChart></canvas>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/vital/heart-rate/heart-rate-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/vital/heart-rate/heart-rate-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: HeartRatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRatePageRoutingModule", function() { return HeartRatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _heart_rate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heart-rate.page */ "./src/app/home/vital/heart-rate/heart-rate.page.ts");




var routes = [
    {
        path: '',
        component: _heart_rate_page__WEBPACK_IMPORTED_MODULE_3__["HeartRatePage"]
    }
];
var HeartRatePageRoutingModule = /** @class */ (function () {
    function HeartRatePageRoutingModule() {
    }
    HeartRatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HeartRatePageRoutingModule);
    return HeartRatePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/vital/heart-rate/heart-rate.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/vital/heart-rate/heart-rate.module.ts ***!
  \************************************************************/
/*! exports provided: HeartRatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRatePageModule", function() { return HeartRatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _heart_rate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart-rate-routing.module */ "./src/app/home/vital/heart-rate/heart-rate-routing.module.ts");
/* harmony import */ var _heart_rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heart-rate.page */ "./src/app/home/vital/heart-rate/heart-rate.page.ts");







var HeartRatePageModule = /** @class */ (function () {
    function HeartRatePageModule() {
    }
    HeartRatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _heart_rate_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeartRatePageRoutingModule"]
            ],
            declarations: [_heart_rate_page__WEBPACK_IMPORTED_MODULE_6__["HeartRatePage"]]
        })
    ], HeartRatePageModule);
    return HeartRatePageModule;
}());



/***/ }),

/***/ "./src/app/home/vital/heart-rate/heart-rate.page.scss":
/*!************************************************************!*\
  !*** ./src/app/home/vital/heart-rate/heart-rate.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9oZWFydC1yYXRlL0Y6XFxJb25pY1Byb2plY3RcXEdpdFxcQ2FyZUdpdmVyXFxDYXJlR2l2ZXJJb25pY1Byb2plY3Qvc3JjXFxhcHBcXGhvbWVcXHZpdGFsXFxoZWFydC1yYXRlXFxoZWFydC1yYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aXRhbC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvYm90YW5pY2EuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDApO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmR7XHJcbiAgbWF4LXdpZHRoOiA0MGVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/vital/heart-rate/heart-rate.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/vital/heart-rate/heart-rate.page.ts ***!
  \**********************************************************/
/*! exports provided: HeartRatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRatePage", function() { return HeartRatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");






var HeartRatePage = /** @class */ (function () {
    function HeartRatePage(user, garmin, afAuth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.firebaseAuth = afAuth;
        this.garminId = this.user.garminId;
        console.log('garminId', this.garminId);
    }
    HeartRatePage.prototype.ngOnInit = function () {
        this.showData();
    };
    HeartRatePage.prototype.showData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var garminData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.garminId) {
                    this.garmin.getGarminDataset(this.garminId).subscribe(function (data) {
                        garminData = data;
                        var dailiesDataset = [];
                        if (garminData) {
                            var heartRateData = [];
                            var dateData = [];
                            for (var _i = 0, garminData_1 = garminData; _i < garminData_1.length; _i++) {
                                var item = garminData_1[_i];
                                if (item.dailies) {
                                    dailiesDataset.push(item.dailies);
                                    heartRateData.push(item.dailies.averageHeartRateInBeatsPerMinute);
                                    dateData.push(item.dailies.calendarDate);
                                }
                            }
                            _this.createLineChart(heartRateData, dateData);
                        }
                        if (dailiesDataset.length > 0) {
                            var sortedDataSet = dailiesDataset.sort(function (a, b) {
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
                            _this.averageHeartRateInBeatsPerMinute = sortedDataSet[0].averageHeartRateInBeatsPerMinute;
                            _this.maxHeartRateInBeatsPerMinute = sortedDataSet[0].maxHeartRateInBeatsPerMinute;
                            _this.minHeartRateInBeatsPerMinute = sortedDataSet[0].minHeartRateInBeatsPerMinute;
                            _this.restingHeartRateInBeatsPerMinute = sortedDataSet[0].restingHeartRateInBeatsPerMinute;
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
    HeartRatePage.prototype.createLineChart = function (dataset, date) {
        var labelData = [];
        // tslint:disable-next-line: forin
        for (var item in dataset) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Average Heart-Beats/Minute per Day',
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
    HeartRatePage.ctorParameters = function () { return [
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeartRatePage.prototype, "barChart", void 0);
    HeartRatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heart-rate',
            template: __webpack_require__(/*! raw-loader!./heart-rate.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/heart-rate/heart-rate.page.html"),
            styles: [__webpack_require__(/*! ./heart-rate.page.scss */ "./src/app/home/vital/heart-rate/heart-rate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], HeartRatePage);
    return HeartRatePage;
}());



/***/ })

}]);
//# sourceMappingURL=heart-rate-heart-rate-module-es5.js.map