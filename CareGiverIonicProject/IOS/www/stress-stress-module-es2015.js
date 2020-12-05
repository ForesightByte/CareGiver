(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stress-stress-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/stress/stress.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/stress/stress.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"text-align: center;\">Stress</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n    <ion-row row-1>\r\n        <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n        <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n    </ion-row>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-grid>\r\n            <ion-title style=\"color: black;\">Stress:</ion-title>\r\n            <ion-list>\r\n                <!--<p>Date: {{calendarDate}}</p>-->\r\n                <p>Avg. Stress Level: {{averageStressLevel}}</p>\r\n                <p>Max. Stress Level: {{maxStressLevel}}</p>\r\n                <p>Stress Duration: {{stressDurationInSeconds}}</p>\r\n            </ion-list>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-card class=\"welcome-card\">\r\n                <ion-card-header>\r\n                    <ion-card-title>Average Stress Level Change</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <canvas #barChart></canvas>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/vital/stress/stress-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/vital/stress/stress-routing.module.ts ***!
  \************************************************************/
/*! exports provided: StressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressPageRoutingModule", function() { return StressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stress.page */ "./src/app/home/vital/stress/stress.page.ts");




const routes = [
    {
        path: '',
        component: _stress_page__WEBPACK_IMPORTED_MODULE_3__["StressPage"]
    }
];
let StressPageRoutingModule = class StressPageRoutingModule {
};
StressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StressPageRoutingModule);



/***/ }),

/***/ "./src/app/home/vital/stress/stress.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/vital/stress/stress.module.ts ***!
  \****************************************************/
/*! exports provided: StressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressPageModule", function() { return StressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stress-routing.module */ "./src/app/home/vital/stress/stress-routing.module.ts");
/* harmony import */ var _stress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stress.page */ "./src/app/home/vital/stress/stress.page.ts");







let StressPageModule = class StressPageModule {
};
StressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stress_routing_module__WEBPACK_IMPORTED_MODULE_5__["StressPageRoutingModule"]
        ],
        declarations: [_stress_page__WEBPACK_IMPORTED_MODULE_6__["StressPage"]]
    })
], StressPageModule);



/***/ }),

/***/ "./src/app/home/vital/stress/stress.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/vital/stress/stress.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9zdHJlc3MvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxcaG9tZVxcdml0YWxcXHN0cmVzc1xcc3RyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9zdHJlc3Mvc3RyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdml0YWwvc3RyZXNzL3N0cmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9ib3RhbmljYS5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZHtcclxuICBtYXgtd2lkdGg6IDQwZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDApO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnAge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi53ZWxjb21lLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/vital/stress/stress.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/vital/stress/stress.page.ts ***!
  \**************************************************/
/*! exports provided: StressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressPage", function() { return StressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");






let StressPage = class StressPage {
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
                    const dailiesDataset = [];
                    if (garminData) {
                        const averageStressData = [];
                        const dateData = [];
                        for (const item of garminData) {
                            if (item.dailies) {
                                dailiesDataset.push(item.dailies);
                                averageStressData.push(item.dailies.averageStressLevel);
                                dateData.push(item.dailies.calendarDate);
                            }
                        }
                        this.createLineChart(averageStressData, dateData);
                    }
                    if (dailiesDataset.length > 0) {
                        const sortedDataSet = dailiesDataset.sort((a, b) => {
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
                        this.averageStressLevel = sortedDataSet[0].averageStressLevel;
                        this.maxStressLevel = sortedDataSet[0].maxStressLevel;
                        this.stressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].stressDurationInSeconds);
                        this.highStressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].highStressDurationInSeconds);
                        this.mediumStressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].mediumStressDurationInSeconds);
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
        const labelData = [];
        // tslint:disable-next-line: forin
        for (const item in dataset) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Average Stress level per Day',
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
StressPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StressPage.prototype, "barChart", void 0);
StressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stress',
        template: __webpack_require__(/*! raw-loader!./stress.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/stress/stress.page.html"),
        styles: [__webpack_require__(/*! ./stress.page.scss */ "./src/app/home/vital/stress/stress.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_garmin_service__WEBPACK_IMPORTED_MODULE_5__["GarminService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], StressPage);



/***/ })

}]);
//# sourceMappingURL=stress-stress-module-es2015.js.map