(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pulse-ox-pulse-ox-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/pulse-ox/pulse-ox.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/pulse-ox/pulse-ox.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/vital']\" style=\"color: white;\">Back</ion-button>\n        </ion-buttons>\n        <ion-title style=\"text-align: center;\">Pulse Ox</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding><br>\n    <ion-row row-1>\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\n    </ion-row>\n    <ion-card class=\"welcome-card\">\n        <ion-grid>\n            <h3 style=\"color: black;\">Pulse OX:</h3>\n            <ion-list>\n                <!--<p>Date: {{calendarDate}}</p>-->\n                <p>Avg. SpO2 Value: {{averageSpLevel}}</p>\n                <p>Duration: {{durationInSeconds}}</p>\n            </ion-list>\n        </ion-grid>\n    </ion-card>\n    <ion-row>\n        <ion-col>\n            <ion-card class=\"welcome-card\">\n                <ion-card-header>\n                    <h4>Average Pulse Rate Change</h4>\n                </ion-card-header>\n                <ion-card-content>\n                    <canvas #barChart></canvas>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pulse_ox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pulse-ox.page */ "./src/app/home/vital/pulse-ox/pulse-ox.page.ts");




const routes = [
    {
        path: '',
        component: _pulse_ox_page__WEBPACK_IMPORTED_MODULE_3__["PulseOxPage"]
    }
];
let PulseOxPageRoutingModule = class PulseOxPageRoutingModule {
};
PulseOxPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PulseOxPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pulse_ox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pulse-ox-routing.module */ "./src/app/home/vital/pulse-ox/pulse-ox-routing.module.ts");
/* harmony import */ var _pulse_ox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pulse-ox.page */ "./src/app/home/vital/pulse-ox/pulse-ox.page.ts");







let PulseOxPageModule = class PulseOxPageModule {
};
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



/***/ }),

/***/ "./src/app/home/vital/pulse-ox/pulse-ox.page.scss":
/*!********************************************************!*\
  !*** ./src/app/home/vital/pulse-ox/pulse-ox.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvdml0YWwvcHVsc2Utb3gvcHVsc2Utb3gucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3ZpdGFsL3B1bHNlLW94L3B1bHNlLW94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdml0YWwvcHVsc2Utb3gvcHVsc2Utb3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ud2VsY29tZS1jYXJke1xuICBtYXgtd2lkdGg6IDQwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");






let PulseOxPage = class PulseOxPage {
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
    getAveragePulseox(pulseoxValues) {
        let sum = 0, counter = 0;
        // tslint:disable-next-line: forin
        for (const key in pulseoxValues) {
            sum += Number(pulseoxValues[key]);
            counter++;
        }
        return sum / counter;
    }
    showData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let garminData;
            if (this.garminId) {
                this.garmin.getGarminDataset(this.garminId).subscribe(data => {
                    garminData = data;
                    const pulseoxDataset = [];
                    if (garminData) {
                        const averagePulseoxData = [];
                        const dateData = [];
                        for (const item of garminData) {
                            if (item) {
                                const pulseOxItem = item.pulseox;
                                if (pulseOxItem) {
                                    const average = this.getAveragePulseox(pulseOxItem.timeOffsetSpo2Values);
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
                        this.createLineChart(averagePulseoxData, dateData);
                    }
                    if (pulseoxDataset.length > 0) {
                        const sortedDataSet = pulseoxDataset.sort((a, b) => {
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
                        this.durationInSeconds = this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                        this.averageSpLevel = sortedDataSet[0].averageSpLevel;
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
    createLineChart(dataset, date) {
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
    }
};
PulseOxPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pulse-ox-pulse-ox-module-es2015.js.map