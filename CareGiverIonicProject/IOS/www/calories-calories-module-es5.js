(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calories-calories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/calories/calories.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/calories/calories.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/vital']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Calories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding><br>\n  <ion-row row-1>\n    <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\n    <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\n  </ion-row>\n  <ion-grid class=\"alignAll\">\n  <ion-card class=\"welcome-card\">\n      <h3 style=\"color: black;\">Calories Burned:</h3>\n      <ion-list>\n        <!--<p>Date: {{calendarDate}}</p>-->\n        <p>Active Calories: {{activeKilocalories}} calories</p>\n        <p>Rest Calories: {{bmrKilocalories}} calories</p>\n        <p>Total Calories: {{totalKilocalories}} calories</p>\n      </ion-list>\n  </ion-card>\n  <ion-row>\n    <ion-col>\n      <ion-card class=\"welcome-card\">\n        <ion-card-header>\n          <h4>Calories Rate Change</h4>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barChart></canvas>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/vital/calories/calories-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/vital/calories/calories-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CaloriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPageRoutingModule", function() { return CaloriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calories.page */ "./src/app/home/vital/calories/calories.page.ts");




var routes = [
    {
        path: '',
        component: _calories_page__WEBPACK_IMPORTED_MODULE_3__["CaloriesPage"]
    }
];
var CaloriesPageRoutingModule = /** @class */ (function () {
    function CaloriesPageRoutingModule() {
    }
    CaloriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CaloriesPageRoutingModule);
    return CaloriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/vital/calories/calories.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/vital/calories/calories.module.ts ***!
  \********************************************************/
/*! exports provided: CaloriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPageModule", function() { return CaloriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calories-routing.module */ "./src/app/home/vital/calories/calories-routing.module.ts");
/* harmony import */ var _calories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calories.page */ "./src/app/home/vital/calories/calories.page.ts");







var CaloriesPageModule = /** @class */ (function () {
    function CaloriesPageModule() {
    }
    CaloriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _calories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaloriesPageRoutingModule"]
            ],
            declarations: [_calories_page__WEBPACK_IMPORTED_MODULE_6__["CaloriesPage"]]
        })
    ], CaloriesPageModule);
    return CaloriesPageModule;
}());



/***/ }),

/***/ "./src/app/home/vital/calories/calories.page.scss":
/*!********************************************************!*\
  !*** ./src/app/home/vital/calories/calories.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n\nion-grid.alignAll {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS92aXRhbC9jYWxvcmllcy9jYWxvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvdml0YWwvY2Fsb3JpZXMvY2Fsb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aXRhbC9jYWxvcmllcy9jYWxvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvYm90YW5pY2EuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDApO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnAge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi53ZWxjb21lLWNhcmR7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tZ3JpZC5hbGlnbkFsbHtcbiAgbWFyZ2luOiAwIGF1dG87XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWdyaWQuYWxpZ25BbGwge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/vital/calories/calories.page.ts":
/*!******************************************************!*\
  !*** ./src/app/home/vital/calories/calories.page.ts ***!
  \******************************************************/
/*! exports provided: CaloriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPage", function() { return CaloriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _garmin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../garmin.service */ "./src/app/garmin.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");







var CaloriesPage = /** @class */ (function () {
    function CaloriesPage(user, garmin, afAuth, auth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.auth = auth;
        this.activeKilocalories = 0;
        this.bmrKilocalories = 0;
        this.totalKilocalories = 0;
        this.firebaseAuth = afAuth;
        var gId;
        gId = this.user.garminId;
        this.showData(gId);
        console.log('garminId', gId);
    }
    CaloriesPage.prototype.ngOnInit = function () {
    };
    CaloriesPage.prototype.showData = function (garminId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var garminData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (garminId) {
                    this.garmin.getGarminDataset(garminId).subscribe(function (data) {
                        garminData = data;
                        var dailiesDataset = [];
                        if (garminData) {
                            var caloriesData = [];
                            var dateData = [];
                            for (var _i = 0, garminData_1 = garminData; _i < garminData_1.length; _i++) {
                                var item = garminData_1[_i];
                                if (item) {
                                    var caloriesItem = item.dailies;
                                    if (caloriesItem) {
                                        dailiesDataset.push(item.dailies);
                                        caloriesData.push(item.dailies.activeKilocalories + item.dailies.bmrKilocalories);
                                        dateData.push(item.dailies.calendarDate);
                                    }
                                }
                            }
                            _this.createLineChart(caloriesData, dateData);
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
                            _this.activeKilocalories = sortedDataSet[0].activeKilocalories;
                            _this.bmrKilocalories = sortedDataSet[0].bmrKilocalories;
                            _this.totalKilocalories = Number(_this.activeKilocalories) + Number(_this.bmrKilocalories);
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
    CaloriesPage.prototype.createLineChart = function (dataset, date) {
        var labelData = [];
        // tslint:disable-next-line: forin
        for (var item in dataset) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Total Calories per Day',
                        data: dataset,
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'royalblue',
                        borderWidth: 1,
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
    CaloriesPage.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CaloriesPage.prototype, "barChart", void 0);
    CaloriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calories',
            template: __webpack_require__(/*! raw-loader!./calories.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/calories/calories.page.html"),
            styles: [__webpack_require__(/*! ./calories.page.scss */ "./src/app/home/vital/calories/calories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CaloriesPage);
    return CaloriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=calories-calories-module-es5.js.map