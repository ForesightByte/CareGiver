(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["steps-steps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/steps/steps.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/steps/steps.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Steps</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n  <ion-row row-1>\r\n    <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n    <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n  </ion-row>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-grid>\r\n      <ion-title style=\"color: black;\">Steps:</ion-title>\r\n      <ion-list>\r\n        <!--<p>Date: {{calendarDate}}</p>-->\r\n        <p>Activity Type: {{this.activityType}}</p>\r\n        <p>Steps: {{this.totalSteps}}</p>\r\n        <p>Distance: {{this.distanceInMeters}} meter</p>\r\n        <p>Steps Goal: {{this.stepsGoal}}</p>\r\n      </ion-list>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-title>Steps Rate Change</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #barChart></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/vital/steps/steps-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/vital/steps/steps-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: StepsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsPageRoutingModule", function() { return StepsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _steps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps.page */ "./src/app/home/vital/steps/steps.page.ts");




const routes = [
    {
        path: '',
        component: _steps_page__WEBPACK_IMPORTED_MODULE_3__["StepsPage"]
    }
];
let StepsPageRoutingModule = class StepsPageRoutingModule {
};
StepsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StepsPageRoutingModule);



/***/ }),

/***/ "./src/app/home/vital/steps/steps.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/vital/steps/steps.module.ts ***!
  \**************************************************/
/*! exports provided: StepsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsPageModule", function() { return StepsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _steps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps-routing.module */ "./src/app/home/vital/steps/steps-routing.module.ts");
/* harmony import */ var _steps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps.page */ "./src/app/home/vital/steps/steps.page.ts");







let StepsPageModule = class StepsPageModule {
};
StepsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _steps_routing_module__WEBPACK_IMPORTED_MODULE_5__["StepsPageRoutingModule"]
        ],
        declarations: [_steps_page__WEBPACK_IMPORTED_MODULE_6__["StepsPage"]]
    })
], StepsPageModule);



/***/ }),

/***/ "./src/app/home/vital/steps/steps.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/vital/steps/steps.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9zdGVwcy9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFx2aXRhbFxcc3RlcHNcXHN0ZXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9zdGVwcy9zdGVwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZpdGFsL3N0ZXBzL3N0ZXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJke1xyXG4gIG1heC13aWR0aDogNDBlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/vital/steps/steps.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/vital/steps/steps.page.ts ***!
  \************************************************/
/*! exports provided: StepsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsPage", function() { return StepsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_garmin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/garmin.service */ "./src/app/garmin.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let StepsPage = class StepsPage {
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
                        const stepsData = [];
                        const dateData = [];
                        for (const item of garminData) {
                            if (item.dailies) {
                                dailiesDataset.push(item.dailies);
                                stepsData.push(item.dailies.steps);
                                dateData.push(item.dailies.calendarDate);
                            }
                        }
                        this.createLineChart(stepsData, dateData);
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
                        console.log('sort 2', sortedDataSet);
                        this.totalSteps = sortedDataSet[0].steps;
                        this.activityType = sortedDataSet[0].activityType;
                        this.calendarDate = sortedDataSet[0].calendarDate;
                        this.distanceInMeters = sortedDataSet[0].distanceInMeters;
                        this.stepsGoal = sortedDataSet[0].stepsGoal;
                    }
                });
                // tslint:disable-next-line: only-arrow-functions
                setTimeout(function () {
                }, 1000, []);
            }
        });
    }
    createLineChart(dataset, date) {
        const labelData = [];
        // tslint:disable-next-line: forin
        for (const item in dataset) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Steps per day',
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
StepsPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StepsPage.prototype, "barChart", void 0);
StepsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-steps',
        template: __webpack_require__(/*! raw-loader!./steps.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/steps/steps.page.html"),
        styles: [__webpack_require__(/*! ./steps.page.scss */ "./src/app/home/vital/steps/steps.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        src_app_garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
], StepsPage);



/***/ })

}]);
//# sourceMappingURL=steps-steps-module-es2015.js.map