(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sleep-sleep-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/sleep/sleep.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/sleep/sleep.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"text-align: center;\">Sleep</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n    <ion-row row-1>\r\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n    </ion-row>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-grid>\r\n            <ion-title style=\"color: black;\">Sleeps:</ion-title>\r\n            <ion-list>\r\n                <!--<p>Date: {{calendarDate}}</p>-->\r\n                <p>Total Duration: {{totalDuration}}</p>\r\n                <p>light Sleep Duration: {{lightSleepDuration}}</p>\r\n                <p>Deep Sleep Duration: {{deepSleepDuration}}</p>\r\n                <p>Rem Sleep Duration: {{remSleepDuration}}</p>\r\n            </ion-list>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>Sleep Duration Rate Change</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <canvas #barChart></canvas>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9zbGVlcC9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFx2aXRhbFxcc2xlZXBcXHNsZWVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9zbGVlcC9zbGVlcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZpdGFsL3NsZWVwL3NsZWVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJke1xyXG4gIG1heC13aWR0aDogNDBlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

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