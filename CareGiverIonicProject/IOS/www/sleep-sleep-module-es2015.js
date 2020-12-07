(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sleep-sleep-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/sleep/sleep.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/sleep/sleep.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/vital']\" style=\"color: white;\">Back</ion-button>\n        </ion-buttons>\n        <ion-title style=\"text-align: center;\">Sleep</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding><br>\n    <ion-row row-1>\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\n    </ion-row>\n    <ion-card class=\"welcome-card\">\n        <ion-grid>\n            <h3 style=\"color: black;\">Sleeps:</h3>\n            <ion-list>\n                <!--<p>Date: {{calendarDate}}</p>-->\n                <p>Total Duration: {{totalDuration}}</p>\n                <p>light Sleep Duration: {{lightSleepDuration}}</p>\n                <p>Deep Sleep Duration: {{deepSleepDuration}}</p>\n                <p>Rem Sleep Duration: {{remSleepDuration}}</p>\n            </ion-list>\n        </ion-grid>\n    </ion-card>\n    <ion-row>\n        <ion-col>\n            <ion-card class=\"welcome-card\">\n                <ion-card-header>\n                    <h4>Sleep Duration Rate Change</h4>\n                </ion-card-header>\n                <ion-card-content>\n                    <canvas #barChart></canvas>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sleep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleep.page */ "./src/app/home/vital/sleep/sleep.page.ts");




const routes = [
    {
        path: '',
        component: _sleep_page__WEBPACK_IMPORTED_MODULE_3__["SleepPage"]
    }
];
let SleepPageRoutingModule = class SleepPageRoutingModule {
};
SleepPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SleepPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sleep_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sleep-routing.module */ "./src/app/home/vital/sleep/sleep-routing.module.ts");
/* harmony import */ var _sleep_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sleep.page */ "./src/app/home/vital/sleep/sleep.page.ts");







let SleepPageModule = class SleepPageModule {
};
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



/***/ }),

/***/ "./src/app/home/vital/sleep/sleep.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/vital/sleep/sleep.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvdml0YWwvc2xlZXAvc2xlZXAucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3ZpdGFsL3NsZWVwL3NsZWVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdml0YWwvc2xlZXAvc2xlZXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ud2VsY29tZS1jYXJke1xuICBtYXgtd2lkdGg6IDQwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);






const lineColors = ['rgb(38, 194, 129)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'];
let SleepPage = class SleepPage {
    constructor(user, garmin, afAuth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.firebaseAuth = afAuth;
        this.garminId = this.user.garminId;
        console.log('garminId', this.garminId);
    }
    ngOnInit() {
        this.showData();
    }
    showData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let garminData;
            if (this.garminId) {
                this.garmin.getGarminDataset(this.garminId).subscribe(data => {
                    garminData = data;
                    const sleepDataset = [];
                    if (garminData) {
                        const totalSleepDuration = [];
                        const lightSleepDuration = [];
                        const deepSleepDuration = [];
                        const remSleepDuration = [];
                        const dateData = [];
                        const allSleepData = [];
                        for (const item of garminData) {
                            if (item) {
                                const sleepItem = item.sleeps;
                                if (sleepItem) {
                                    sleepDataset.push(sleepItem);
                                    totalSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.durationInSeconds)));
                                    lightSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.lightSleepDurationInSeconds)));
                                    deepSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.deepSleepDurationInSeconds)));
                                    remSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.remSleepInSeconds)));
                                    dateData.push(sleepItem.calendarDate);
                                }
                            }
                        }
                        allSleepData.push({ title: 'Total sleep', datasets: totalSleepDuration }, { title: 'Light Sleep', datasets: lightSleepDuration }, { title: 'Deep Sleep', datasets: deepSleepDuration }, { title: 'Rem Sleep', datasets: remSleepDuration });
                        this.createLineChart(allSleepData, dateData);
                    }
                    if (sleepDataset.length > 0) {
                        const sortedDataSet = sleepDataset.sort((a, b) => {
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
                        this.calendarDate = sortedDataSet[0].calendarDate;
                        this.totalDuration = this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                        this.lightSleepDuration = this.secondsToHMS(sortedDataSet[0].lightSleepDurationInSeconds);
                        this.deepSleepDuration = this.secondsToHMS(sortedDataSet[0].deepSleepDurationInSeconds);
                        this.remSleepDuration = this.secondsToHMS(sortedDataSet[0].remSleepInSeconds);
                    }
                });
                // tslint:disable-next-line: only-arrow-functions
                setTimeout(function () {
                }, 1000, []);
            }
        });
    }
    secondsToHMS(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const hms = h + ' hr ' + m + ' m';
        return hms;
    }
    secondsToHMForGraph(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const hm = h + '.' + m;
        return hm;
    }
    createLineChart(dataset, date) {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: dataset.map((data, ndx) => ({
                    label: data.title,
                    data: data.datasets,
                    borderColor: lineColors[ndx],
                    backgroundColor: lineColors[ndx],
                    borderWidth: 1
                }))
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
    }
};
SleepPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_4__["GarminService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
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



/***/ })

}]);
//# sourceMappingURL=sleep-sleep-module-es2015.js.map